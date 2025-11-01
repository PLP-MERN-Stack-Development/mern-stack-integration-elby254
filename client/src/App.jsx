import { SignInButton, UserButton, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";


export default function App() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">MERN Notes App</h1>
            <p className="text-slate-600 text-sm">Express + MongoDB backend + React + Tailwind + Radix frontend</p>
          </div>
        <div className = "flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal"/>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
        </div>
      </header>

      <main className="py-6">
        <div className="mx-auto max-w-5xl">
          <SignedOut>
            <div className ="border rounded-xl bg-white p-6 text-center">
              <h2 className="text-xl font-semibold mb-4">Welcome to the MERN Notes App</h2>
              <p className="text-slate-600">Please sign in to manage your notes.</p>
            </div>
          </SignedOut>

          <SignedIn>
            <Dashboard frontEndUserId={user?.id} />
          </SignedIn>
        </div>
      </main>
    </div>
  );
}
