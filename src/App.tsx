import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import { usePage } from '@/lib/router';

export default function App() {
  const page = usePage();

  const renderPage = () => {
    switch (page) {
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/contact':
        return <Contact />;
      case '/faq':
        return <FAQ />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
