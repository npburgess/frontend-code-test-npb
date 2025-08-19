import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Users } from './pages/Users';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-2 flex gap-2">
        <Sidebar className="hidden md:block" />
        <main className="flex-1 px-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
