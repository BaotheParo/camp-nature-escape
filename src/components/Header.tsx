import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import campLogo from '@/assets/camp-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={campLogo} 
            alt="CAMP Travel Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Trang chủ
          </button>
          <button
            onClick={() => scrollToSection('tours')}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Tour
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Về chúng tôi
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:text-primary transition-smooth"
          >
            Liên hệ
          </button>
          <Button
            onClick={() => scrollToSection('booking')}
            className="gradient-nature hover:opacity-90 transition-smooth"
          >
            Đặt tour ngay
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background shadow-card md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left py-2 font-medium hover:text-primary transition-smooth"
              >
                Trang chủ
              </button>
              <button
                onClick={() => scrollToSection('tours')}
                className="text-left py-2 font-medium hover:text-primary transition-smooth"
              >
                Tour
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 font-medium hover:text-primary transition-smooth"
              >
                Về chúng tôi
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 font-medium hover:text-primary transition-smooth"
              >
                Liên hệ
              </button>
              <Button
                onClick={() => scrollToSection('booking')}
                className="gradient-nature w-full"
              >
                Đặt tour ngay
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
