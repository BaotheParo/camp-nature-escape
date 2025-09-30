import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import campLogo from '@/assets/camp-logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={campLogo} 
              alt="CAMP Travel Logo" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm opacity-80 leading-relaxed">
              Kết nối con người với thiên nhiên qua những trải nghiệm camping độc đáo và 
              khó quên tại Việt Nam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="opacity-80 hover:opacity-100 transition-smooth">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#tours" className="opacity-80 hover:opacity-100 transition-smooth">
                  Tour
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 transition-smooth">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#booking" className="opacity-80 hover:opacity-100 transition-smooth">
                  Đặt tour
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 opacity-80">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+84 901 234 567</span>
              </li>
              <li className="flex items-start gap-2 opacity-80">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>contact@camp.vn</span>
              </li>
              <li className="flex items-start gap-2 opacity-80">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Camping Street, Hanoi, Vietnam</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kết nối với chúng tôi</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Theo dõi chúng tôi để cập nhật những tour camping mới nhất và ưu đãi đặc biệt!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>&copy; 2025 CAMP Travel. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-smooth">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:opacity-100 transition-smooth">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
