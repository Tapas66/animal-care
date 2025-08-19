import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">Animal Care</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Inspiring young minds to achieve excellence through innovation,
              knowledge, and collaboration. Together, we create a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/team" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">Our Team</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">Gallery</Link></li>
              <li><Link to="/events" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">Events</Link></li>
              <li><Link to="/resources" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">Resources</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">contactxxxxx@amity.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">+91-98xxxxxx45</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">
                  Amity University Jaipur, Kant Kalwar, NH-11C, Jaipur, Rajasthan 303007
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Amity University Jaipur. All rights reserved. Built with ❤️ by students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
