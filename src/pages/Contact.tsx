import React from 'react';
import { Mail, Phone, MapPin, Clock, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Have questions or need assistance? Reach out to us — we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">

            {/* Contact Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">info@xxxxx.com</p>
                    <p className="text-slate-600">support@xxxxx.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600">General: +91 98xxxxxx12</p>
                    <p className="text-slate-600">Helpline: +91 79xxxxxx45</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                    <p className="text-slate-600">Amity University Jaipur</p>
                    <p className="text-slate-600">Kant Kalwar, NH-11C, Jaipur, Rajasthan 303002</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Office Hours</h3>
                    <p className="text-slate-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sat-Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Section */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 flex items-start space-x-6">
              <div className="bg-red-100 p-4 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-2">Emergency Contact</h3>
                <p className="text-red-700 mb-4">
                  For urgent help or emergencies, please use our 24/7 helpline immediately.
                </p>
                <div className="bg-red-600 text-white text-center py-4 rounded-lg">
                  <p className="font-semibold">Emergency Hotline</p>
                  <p className="text-2xl font-bold">+91 89xxxxxx99</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
