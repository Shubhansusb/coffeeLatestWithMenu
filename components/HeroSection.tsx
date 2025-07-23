
'use client';

import { useState, useEffect } from 'react';
import CoffeeBeansAnimation from './CoffeeBeansAnimation';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Awaken Your Senses",
      subtitle: "Premium Coffee Experience",
      description: "Discover the perfect blend of artisanal coffee beans, carefully roasted to perfection for an unforgettable coffee experience.",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
      imageUrl: "https://readdy.ai/api/search-image?query=cozy%20indian%20coffee%20shop%20interior%20with%20warm%20lighting%2C%20comfortable%20seating%2C%20steam%20rising%20from%20traditional%20coffee%20cups%2C%20coffee%20beans%20and%20plants%20as%20decor%2C%20inviting%20atmosphere%2C%20customers%20enjoying%20coffee%20in%20background%2C%20left%20side%20has%20warm%20brown%20tones%20for%20text%20overlay&width=1200&height=600&seq=hero1&orientation=landscape",
      cta: "Explore Menu"
    },
    {
      title: "Crafted with Passion",
      subtitle: "Every Cup Tells a Story",
      description: "Our skilled baristas craft each cup with precision and love, using only the finest ethically sourced beans from Indian coffee plantations.",
      videoUrl: "https://player.vimeo.com/external/434045414.sd.mp4?s=7c1160a7d3c6492b6b28f3e8c6e8b4b0a5f9c5c5&profile_id=164&oauth2_token_id=57447761",
      imageUrl: "https://readdy.ai/api/search-image?query=skilled%20indian%20barista%20hands%20preparing%20coffee%20with%20professional%20equipment%2C%20latte%20art%20creation%2C%20coffee%20beans%20in%20background%2C%20warm%20golden%20lighting%2C%20artisanal%20coffee%20preparation%2C%20traditional%20indian%20coffee%20culture%2C%20left%20side%20darker%20for%20text%20readability&width=1200&height=600&seq=hero2&orientation=landscape",
      cta: "Meet Our Baristas"
    },
    {
      title: "Community & Connection",
      subtitle: "More Than Just Coffee",
      description: "Join our vibrant coffee community where friends gather, ideas flow, and memories are made over exceptional coffee in authentic Indian style.",
      videoUrl: "https://player.vimeo.com/external/434045323.sd.mp4?s=b1d6f4e0a3c2d1e9f8g7h6i5j4k3l2m1n0o9p8q7&profile_id=164&oauth2_token_id=57447761",
      imageUrl: "https://readdy.ai/api/search-image?query=diverse%20group%20of%20indian%20people%20enjoying%20coffee%20together%20in%20modern%20cafe%20setting%2C%20laptops%20and%20books%20on%20tables%2C%20warm%20social%20atmosphere%2C%20natural%20lighting%2C%20community%20gathering%20space%2C%20traditional%20and%20modern%20blend%2C%20left%20side%20suitable%20for%20text%20overlay&width=1200&height=600&seq=hero3&orientation=landscape",
      cta: "Join Community"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <CoffeeBeansAnimation />
      
      {/* Hero Slides */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Video */}
            {index === currentSlide && (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={slide.imageUrl}
              >
                <source src={slide.videoUrl} type="video/mp4" />
                {/* Fallback to image if video fails */}
              </video>
            )}
            
            {/* Fallback Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />
            
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div className="space-y-6 text-white">
                    <div className="space-y-2">
                      <p className="text-amber-300 text-lg font-medium tracking-wide">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                    </div>
                    <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
                        {slide.cta}
                      </button>
                      <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-800 rounded-full font-semibold transition-all whitespace-nowrap">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Floating Coffee Cup with Steam Animation */}
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="relative">
          <div className="w-20 h-20 flex items-center justify-center text-6xl text-amber-300 animate-bounce">
            <i className="ri-cup-fill"></i>
          </div>
          {/* Enhanced Steam Effect */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-8 bg-gradient-to-t from-white/60 to-transparent rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 translate-x-3">
            <div className="w-1 h-6 bg-gradient-to-t from-white/50 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          </div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 translate-x-1">
            <div className="w-1 h-4 bg-gradient-to-t from-white/40 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
          {/* Coffee beans around cup */}
          <div className="absolute -bottom-2 -left-2 text-amber-600 animate-spin" style={{ animationDuration: '8s' }}>
            <i className="ri-seedling-fill text-lg"></i>
          </div>
          <div className="absolute -bottom-1 -right-2 text-amber-700 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
            <i className="ri-seedling-fill text-sm"></i>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll</span>
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-arrow-down-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
