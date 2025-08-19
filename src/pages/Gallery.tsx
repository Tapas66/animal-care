import React, { useState } from 'react';
import { Calendar, MapPin, Filter } from 'lucide-react';
import { galleryImages } from '../data/galleryImages';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(galleryImages.map(image => image.category)))];
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Impact Gallery</h1>
          <p className="text-xl text-indigo-100 leading-relaxed">
            Witness the transformative power of compassion through our rescue stories, 
            educational programs, and community initiatives
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4 mb-4">
              <Filter className="h-5 w-5 text-slate-600" />
              <span className="text-slate-700 font-medium">Filter by category:</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-indigo-100 hover:text-indigo-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-1">
                    {image.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {image.description}
                  </p>
                  
                  <div className="space-y-2">
                    {image.location && (
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>{image.location}</span>
                      </div>
                    )}
                    {image.date && (
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(image.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No images found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;