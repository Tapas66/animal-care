import React from 'react';
import { Heart, Target, Eye, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About AnimalCare</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            We are a dedicated organization working tirelessly to end animal cruelty
            and promote compassionate treatment of all living beings.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To prevent animal cruelty through education, advocacy, and direct action,
                ensuring every animal receives the care and respect they deserve.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A world where humans and animals coexist harmoniously, free from cruelty,
                exploitation, and suffering of any kind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                Compassion, integrity, and transparency guide everything we do. We believe
                in the inherent worth of every living being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg mx-auto text-slate-700">
            <p className="text-xl leading-relaxed mb-6">
              AnimalCare was founded in 2025 by a group of passionate animal advocates who
              witnessed firsthand the widespread suffering of animals in various industries
              and situations. What started as a small volunteer effort has grown into a
              comprehensive organization dedicated to animal welfare.
            </p>

            <p className="leading-relaxed mb-6">
              Our founders recognized that lasting change requires both immediate action and
              long-term education. We work on multiple fronts: rescuing animals from abusive
              situations, advocating for stronger legal protections, and educating the public
              about animal welfare issues.
            </p>

            <p className="leading-relaxed">
              Today, AnimalCare operates rescue programs, educational initiatives, and advocacy
              campaigns that have helped thousands of animals and changed countless minds.
              We believe that through collective action and unwavering commitment, we can
              create a more compassionate world for all living beings.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Impact</h2>
            <p className="text-xl text-slate-600">
              Together with our supporters, we've made a real difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-emerald-50 p-8 rounded-xl">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-slate-800 mb-2">50+</h3>
              <p className="text-slate-600">People Educated</p>
            </div>

            <div className="text-center bg-blue-50 p-8 rounded-xl">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-slate-800 mb-2">5+</h3>
              <p className="text-slate-600">Animals Rescued</p>
            </div>

            <div className="text-center bg-purple-50 p-8 rounded-xl">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-slate-800 mb-2">2</h3>
              <p className="text-slate-600">Campaigns Launched</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;