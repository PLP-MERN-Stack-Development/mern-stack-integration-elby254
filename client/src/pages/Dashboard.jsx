import { useEffect, useState } from 'react';
import NewNotesDialog from '@/components/ui/NewNotesDialog';
import NoteCard from '@/components/ui/NoteCard';
import { NotesAPI } from "../lib/api";
import { useUser } from '@clerk/clerk-react';

export default function Dashboard({ frontEndUserId }) {
    const [notes, setNotes] = useState([]);
    const [status, setStatus] = useState('idle');
    const { user } = useUser();
    const [error, setError] = useState("");


    useEffect(() => {
        (async () => {
          try{
            setStatus("loading");
            const data = await NotesAPI.getAll(frontEndUserId);
            setNotes(data);
            setStatus("success");
          } catch (e) {setError(e.message); setStatus("error");}
        })();
    }, [frontEndUserId]);

async function createNote(payload) {
    //const created = await NotesAPI.create({ ...payload, userId: frontEndUserId });
    const created = await NotesAPI.create({ ...payload, userId: frontEndUserId, userEmail: user?.primaryEmailAddress?.emailAddress });
    setNotes((prev) => [created, ...prev]);
}

async function saveNote(id, payload) {
    const updated =  await NotesAPI.update(id, payload);
    setNotes((prev) => prev.map((note) => (note._id === id ? updated : note)));
}

async function deleteNote(id) {
    await NotesAPI.remove(id);
    setNotes((prev) => prev.filter((note) => note._id !== id));
}

return (
  <div className="max-w-5xl mx-auto p-4 space-y-4">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold">
        {user? `${user.firstName}'s Notes` : 'Your Notes'} 
      </h2>
      <NewNotesDialog onCreate={createNote} />
    </div>

    {status === 'loading' && <p>Loading notes...</p>}
    {status === 'error' && <p className="text-red-600">Error: {error}</p>}
    {status === 'success' && notes.length === 0 && <p>No notes found. Create your first note!</p>}

    <div className= "grid gap-3">
        {notes.map((note) => (
            <NoteCard key={note._id} note={note} onSave={saveNote} onDelete={deleteNote} />
        ))}
    </div>
  </div>
);
}



