import React from 'react';
import { Heart, Handshake, BookOpen, Shield, Phone, ExternalLink } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'Report Animal Cruelty',
      description: 'Know how to report suspected animal abuse in your area.',
      icon: Phone,
      color: 'bg-red-100 text-red-600',
      items: [
        'Local Animal Control Services',
        'ASPCA Animal Cruelty Hotline: (800) 628-0028',
        'Humane Society Report Form',
        'Local Police Department (for emergencies)'
      ]
    },
    {
      title: 'Educational Resources',
      description: 'Learn more about animal welfare and rights.',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
      items: [
        'Animal Welfare Science Journal',
        'Compassion Over Killing Educational Materials',
        'Farm Animal Welfare Council Guidelines',
        'Wildlife Conservation Research Papers'
      ]
    },
    {
      title: 'Volunteer Opportunities',
      description: 'Get involved and make a direct impact.',
      icon: Handshake,
      color: 'bg-emerald-100 text-emerald-600',
      items: [
        'Local Animal Shelters',
        'Wildlife Rehabilitation Centers',
        'Farm Animal Sanctuaries',
        'Community Education Programs'
      ]
    },
    {
      title: 'Legal Protections',
      description: 'Understanding animal protection laws.',
      icon: Shield,
      color: 'bg-purple-100 text-purple-600',
      items: [
        'Animal Welfare Act Overview',
        'State Animal Cruelty Laws',
        'Reporting Legal Violations',
        'Supporting Stronger Legislation'
      ]
    }
  ];

  const organizations = [
    {
      name: 'ASPCA',
      description: 'American Society for the Prevention of Cruelty to Animals',
      website: 'https://aspca.org',
      focus: 'General Animal Welfare'
    },
    {
      name: 'Humane Society',
      description: 'The Humane Society of the United States',
      website: 'https://humanesociety.org',
      focus: 'Animal Protection & Advocacy'
    },
    {
      name: 'World Wildlife Fund',
      description: 'Global wildlife conservation organization',
      website: 'https://worldwildlife.org',
      focus: 'Wildlife Conservation'
    },
    {
      name: 'Farm Sanctuary',
      description: 'Protection for farm animals',
      website: 'https://farmsanctuary.org',
      focus: 'Farm Animal Welfare'
    },
    {
      name: 'Sea Shepherd',
      description: 'Marine wildlife conservation',
      website: 'https://seashepherd.org',
      focus: 'Marine Life Protection'
    },
    {
      name: 'Jane Goodall Institute',
      description: 'Primate conservation and research',
      website: 'https://janegoodall.org',
      focus: 'Primate & Environmental Protection'
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Resources & Action</h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Find everything you need to become an effective advocate for animal welfare
          </p>
        </div>
      </section>

      {/* Main Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">How You Can Help</h2>
            <p className="text-xl text-slate-600">
              Multiple ways to make a meaningful impact for animals in need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center mr-4`}>
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{resource.title}</h3>
                    <p className="text-slate-600">{resource.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {resource.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Partner Organizations</h2>
            <p className="text-xl text-slate-600">
              Connect with established organizations making a difference worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map((org) => (
              <div key={org.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{org.name}</h3>
                <p className="text-slate-600 mb-4">{org.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    {org.focus}
                  </span>
                  <a
                    href={org.website}
                    className="flex items-center space-x-1 text-slate-500 hover:text-emerald-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm">Visit</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Action */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Witnessed Animal Cruelty?</h2>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            If you witness animal abuse or neglect, immediate action is crucial.
            Contact local authorities or animal control services right away.
          </p>
          <div className="bg-red-600 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-2">Emergency Hotline</h3>
            <p className="text-3xl font-bold">+91 89xxxxxx99</p>
            <p className="text-red-100 mt-2">Available 24/7 for animal emergencies</p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Remember: Document what you see safely, provide detailed information to authorities,
            and never put yourself in danger when reporting suspected abuse.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resources;