import * as dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

export default function NewNotesDialog({ onCreate }) {
  const [form, setForm] = useState({ title: "", content: "" });
  const [open, setOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting note:", form);
    await onCreate(form);
    setForm({ title: "", content: "" });
    setOpen(false);
  }

  return (
    <dialog.Root open={open} onOpenChange={setOpen}>
      <dialog.Trigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">New Note</Button>
      </dialog.Trigger>
      <dialog.Content className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <Textarea
            rows={4}
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
          <div className="flex justify-end gap-2">
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Create
            </Button>
            <Button
              type="button"
              className="bg-gray-400 hover:bg-gray-500"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </dialog.Content>
    </dialog.Root>
  );
}

