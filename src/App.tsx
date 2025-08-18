import { Button } from 'flowbite-react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mt-2 flex gap-2">
        <Sidebar className="hidden md:block" />
        <div className="px-2">
          <Button>Click me</Button>
        </div>
      </div>
    </>
  );
}
