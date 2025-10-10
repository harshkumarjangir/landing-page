import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const TechBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Build an AI Trip Planner App in React",
      description: "Key Takeaways AI trip planner apps are transforming how travelers discover, plan, and experience their journeys. By leveraging machine learning algorithms...",
      image: "/api/placeholder/360/240",
      category: "AI Development",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Create a Metaverse Dating App",
      description: "Key Takeaways: The metaverse dating sector is a multi-billion-dollar opportunity, combining virtual reality with social connections...",
      image: "/api/placeholder/360/240",
      category: "Metaverse",
      gradient: "from-pink-600 to-purple-600",
      hasVideo: true
    },
    {
      id: 3,
      title: "How to Develop an App like Dave",
      description: "Key Takeaways The development process of a loan lending app like Dave focuses on user-centric design, secure financial transactions...",
      image: "/api/placeholder/360/240",
      category: "FinTech",
      gradient: "from-green-600 to-blue-600"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Latest Tech Blogs
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Get the latest updates on development insights, technologies and trends.
            </p>
          </div>
          
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 group">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              View All Blogs
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer border border-gray-700 hover:border-gray-600"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-80`}></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                    {blog.category}
                  </span>
                </div>

                {/* Video Play Button */}
                {blog.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors group-hover:scale-110">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Geometric Pattern Overlay */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                  <div className="absolute inset-0 transform rotate-45">
                    <div className="grid grid-cols-4 gap-1 h-full">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {blog.description}
                </p>
                
                {/* Read More Link */}
                <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 max-md:w-full w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TechBlogs;