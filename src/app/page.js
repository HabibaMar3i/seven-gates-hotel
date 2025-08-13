'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/pyramids.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/60" />
        
        {/* Animated content */}
        <div className={`relative z-20 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-6">
              7 Gates Boutique Hotel Egypt
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          </div>
          
          <p className="text-white/90 text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Experience luxury and ancient wonder at the heart of Egypt's most iconic destination
          </p>
          
          <div className="mt-16 text-white/70 text-sm">
            <p>Scroll to discover more</p>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mt-2 relative">
              <div className="w-1 h-3 bg-white/50 rounded-full mx-auto mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Why Choose 7 Gates?</h2>
            <p className="text-amber-100 text-xl max-w-2xl mx-auto">Where luxury meets ancient Egyptian hospitality</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏛️",
                title: "Historic Location",
                description: "Nestled near the iconic pyramids, offering breathtaking views of ancient wonders"
              },
              {
                icon: "✨",
                title: "Luxury Amenities",
                description: "World-class facilities with authentic Egyptian charm and modern comfort"
              },
              {
                icon: "🌟",
                title: "Personalized Service",
                description: "Dedicated staff ensuring your every need is met with warm hospitality"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-white text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-800 to-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-8">Opening Soon</h2>
            <p className="text-amber-100 text-xl md:text-2xl mb-12 leading-relaxed">
              We're putting the finishing touches on your perfect Egyptian getaway. 
              Be among the first to experience luxury redefined.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-white text-2xl font-semibold mb-4">Stay Tuned</h3>
              <p className="text-white/80">
                Follow us for updates on our grand opening and exclusive offers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-white/60 mb-6">
            <p className="text-lg">7 Gates Boutique Hotel Egypt</p>
            <p className="text-sm">Where luxury meets legend</p>
          </div>
          <div className="text-white/40 text-sm">
            <p>© 2025 7 Gates Boutique Hotel Egypt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
