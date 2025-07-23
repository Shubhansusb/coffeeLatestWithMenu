
'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isPopular?: boolean;
}

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products: Product[] = [
    {
      id: 1,
      name: "Signature Espresso",
      description: "Rich, bold espresso with notes of dark chocolate and caramel",
      price: "₹180",
      category: "Coffee",
      image: "https://readdy.ai/api/search-image?query=premium%20espresso%20coffee%20in%20elegant%20white%20ceramic%20cup%20with%20rich%20crema%2C%20steam%20rising%2C%20dark%20roasted%20coffee%20beans%20scattered%20around%2C%20warm%20lighting%2C%20wooden%20table%20background%2C%20professional%20coffee%20shop%20aesthetic%2C%20minimalist%20composition&width=400&height=300&seq=espresso1&orientation=landscape",
      isPopular: true,
    },
    {
      id: 2,
      name: "Caramel Macchiato",
      description: "Creamy steamed milk with vanilla syrup and caramel drizzle",
      price: "₹220",
      category: "Coffee",
      image: "https://readdy.ai/api/search-image?query=caramel%20macchiato%20coffee%20in%20tall%20glass%20mug%20with%20layered%20milk%20foam%2C%20caramel%20drizzle%20on%20top%2C%20coffee%20beans%20around%2C%20warm%20golden%20lighting%2C%20coffee%20shop%20counter%20background%2C%20appetizing%20presentation&width=400&height=300&seq=macchiato1&orientation=landscape",
    },
    {
      id: 3,
      name: "Masala Chai Latte",
      description: "Traditional Indian spiced tea with steamed milk and aromatic spices",
      price: "₹160",
      category: "Tea",
      image: "https://readdy.ai/api/search-image?query=masala%20chai%20latte%20in%20traditional%20clay%20cup%20with%20steam%20rising%2C%20cinnamon%20sticks%2C%20cardamom%20pods%2C%20ginger%2C%20warm%20spices%20scattered%20around%2C%20warm%20golden%20lighting%2C%20Indian%20tea%20culture%20aesthetic&width=400&height=300&seq=matcha1&orientation=landscape",
    },
    {
      id: 4,
      name: "Filter Coffee",
      description: "South Indian style filter coffee with rich decoction and frothy milk",
      price: "₹140",
      category: "Coffee",
      image: "https://readdy.ai/api/search-image?query=south%20indian%20filter%20coffee%20in%20traditional%20steel%20tumbler%20and%20davara%2C%20frothy%20milk%2C%20coffee%20filter%20equipment%2C%20banana%20leaf%20background%2C%20authentic%20indian%20coffee%20presentation&width=400&height=300&seq=croissant1&orientation=landscape",
    },
    {
      id: 5,
      name: "Cold Brew",
      description: "Smooth, refreshing cold brew coffee served over ice",
      price: "₹200",
      category: "Coffee",
      image: "https://readdy.ai/api/search-image?query=cold%20brew%20coffee%20in%20tall%20glass%20with%20ice%20cubes%2C%20dark%20rich%20coffee%20color%2C%20condensation%20on%20glass%2C%20coffee%20beans%20around%2C%20fresh%20mint%20garnish%2C%20bright%20natural%20lighting%2C%20modern%20coffee%20shop%20setting&width=400&height=300&seq=coldbrew1&orientation=landscape",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 h-96">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    {product.isPopular && (
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-heart-line text-amber-600 hover:ri-heart-fill cursor-pointer transition-all"></i>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-amber-600 text-sm font-medium bg-amber-50 px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-2xl font-bold text-amber-600">
                          {product.price}
                        </span>
                        <div className="flex space-x-3">
                          <button className="p-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors">
                            <div className="w-5 h-5 flex items-center justify-center">
                              <i className="ri-shopping-cart-line"></i>
                            </div>
                          </button>
                          <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-left-line text-amber-600"></i>
        </div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-right-line text-amber-600"></i>
        </div>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-amber-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
