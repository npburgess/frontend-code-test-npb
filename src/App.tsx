import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import {
  Footer,
  FooterCopyright,
  FooterLinkGroup,
  FooterLink,
} from 'flowbite-react';

export default function App() {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <Router>
        <Navbar />
        <div className="mt-4 flex gap-2 flex-1">
          <Sidebar className="hidden md:block" />
          <main className="flex-1 flex flex-col px-2 pb-4 max-w-7xl">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </div>

            <Footer container className="mt-6">
              <FooterCopyright
                href="#"
                by="ACME Inc"
                year={new Date().getFullYear()}
              />
              <FooterLinkGroup>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </FooterLinkGroup>
            </Footer>
          </main>
        </div>
      </Router>
    </div>
  );
}
