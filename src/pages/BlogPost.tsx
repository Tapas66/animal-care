import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-8 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-emerald-600 hover:text-emerald-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
            {post.excerpt}
          </p>
          
          <div className="text-slate-700 leading-relaxed space-y-6">
            <p>
              {post.content}
            </p>
            
            <p>
              This comprehensive approach to animal welfare requires understanding the various 
              forms of cruelty that exist in our society. From factory farming to entertainment 
              industries, animals face numerous challenges that require our immediate attention 
              and action.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
              Understanding the Impact
            </h3>
            
            <p>
              The effects of animal cruelty extend far beyond the individual animals affected. 
              These practices have implications for public health, environmental sustainability, 
              and our collective moral progress as a society. By addressing these issues head-on, 
              we can create positive change that benefits all living beings.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
              Taking Action
            </h3>
            
            <p>
              Every individual has the power to make a difference. Whether through dietary choices, 
              supporting ethical businesses, volunteering with animal welfare organizations, or 
              advocating for stronger legal protections, there are countless ways to contribute 
              to this important cause.
            </p>
            
            <p>
              The journey toward a more compassionate world begins with education and awareness. 
              By staying informed about these issues and sharing this knowledge with others, 
              we can build a movement that creates lasting change for animals everywhere.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-emerald-50 rounded-xl">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Make a Difference?</h3>
          <p className="text-slate-700 mb-6">
            Learn more about how you can help protect animals and join our community of compassionate advocates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/resources" 
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 text-center"
            >
              Get Involved
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;