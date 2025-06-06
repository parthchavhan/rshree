import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-gold">Rshree</h3>
            <p className="text-gray-300 mb-6">
              Crafting exquisite jewelry since 1952. Each piece tells a story of artistry, 
              heritage and uncompromising quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {['Collections', 'New Arrivals', 'Bridal Sets', 'Sale', 'Gift Cards'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-gold">Information</h4>
            <ul className="space-y-3">
              {['About Us', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-1 shrink-0" />
                <span className="text-gray-300">
                  123 kanji ka hata 
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 shrink-0" />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 shrink-0" />
                <span className="text-gray-300">contact@rshree.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rshree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};