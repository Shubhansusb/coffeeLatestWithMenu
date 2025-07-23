
'use client';

import { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: 'ri-apps-line' },
    { id: 'coffee', name: 'Coffee', icon: 'ri-cup-fill' },
    { id: 'tea', name: 'Tea', icon: 'ri-leaf-fill' },
    { id: 'pastries', name: 'Pastries', icon: 'ri-cake-3-fill' },
    { id: 'cold', name: 'Cold Drinks', icon: 'ri-drop-fill' },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Signature Espresso",
      description: "Rich, bold espresso with notes of dark chocolate and caramel",
      price: "₹180",
      category: "coffee",
      image: "https://readdy.ai/api/search-image?query=premium%20espresso%20coffee%20in%20elegant%20white%20ceramic%20cup%20with%20rich%20crema%2C%20steam%20rising%2C%20dark%20roasted%20coffee%20beans%20scattered%20around%2C%20warm%20lighting%2C%20wooden%20table%20background%2C%20professional%20coffee%20shop%20aesthetic&width=300&height=300&seq=menu1&orientation=squarish",
      isPopular: true,
    },
    {
      id: 2,
      name: "Caramel Macchiato",
      description: "Creamy steamed milk with vanilla syrup and caramel drizzle",
      price: "₹220",
      category: "coffee",
      image: "https://readdy.ai/api/search-image?query=caramel%20macchiato%20coffee%20in%20tall%20glass%20mug%20with%20layered%20milk%20foam%2C%20caramel%20drizzle%20on%20top%2C%20coffee%20beans%20around%2C%20warm%20golden%20lighting%2C%20coffee%20shop%20counter%20background&width=300&height=300&seq=menu2&orientation=squarish",
    },
    {
      id: 3,
      name: "Masala Chai Latte",
      description: "Traditional Indian spiced tea with steamed milk and aromatic spices",
      price: "₹160",
      category: "tea",
      image: "https://readdy.ai/api/search-image?query=masala%20chai%20latte%20in%20traditional%20clay%20cup%20with%20steam%20rising%2C%20cinnamon%20sticks%2C%20cardamom%20pods%2C%20ginger%2C%20warm%20spices%20scattered%20around%2C%20warm%20golden%20lighting%2C%20Indian%20tea%20culture%20aesthetic&width=300&height=300&seq=menu3&orientation=squarish",
    },
    {
      id: 4,
      name: "Chocolate Croissant",
      description: "Buttery, flaky pastry filled with rich dark chocolate",
      price: "₹120",
      category: "pastries",
      image: "https://readdy.ai/api/search-image?query=golden%20chocolate%20croissant%20on%20white%20ceramic%20plate%2C%20flaky%20pastry%20texture%2C%20dark%20chocolate%20filling%20visible%2C%20coffee%20beans%20scattered%20around%2C%20warm%20bakery%20lighting%2C%20rustic%20wooden%20table%20background&width=300&height=300&seq=menu4&orientation=squarish",
    },
    {
      id: 5,
      name: "Cold Brew",
      description: "Smooth, refreshing cold brew coffee served over ice",
      price: "₹200",
      category: "cold",
      image: "https://readdy.ai/api/search-image?query=cold%20brew%20coffee%20in%20tall%20glass%20with%20ice%20cubes%2C%20dark%20rich%20coffee%20color%2C%20condensation%20on%20glass%2C%20coffee%20beans%20around%2C%20fresh%20mint%20garnish%2C%20bright%20natural%20lighting&width=300&height=300&seq=menu5&orientation=squarish",
    },
    {
      id: 6,
      name: "Filter Coffee",
      description: "South Indian style filter coffee with rich decoction and frothy milk",
      price: "₹140",
      category: "coffee",
      image: "https://readdy.ai/api/search-image?query=south%20indian%20filter%20coffee%20in%20traditional%20steel%20tumbler%20and%20davara%2C%20frothy%20milk%2C%20coffee%20filter%20equipment%2C%20banana%20leaf%20background%2C%20authentic%20indian%20coffee%20presentation&width=300&height=300&seq=menu6&orientation=squarish",
    },
    {
      id: 7,
      name: "Kulhad Chai",
      description: "Traditional tea served in earthen clay cup with authentic flavors",
      price: "₹80",
      category: "tea",
      image: "https://readdy.ai/api/search-image?query=kulhad%20chai%20in%20traditional%20clay%20cup%2C%20steam%20rising%2C%20tea%20leaves%2C%20ginger%2C%20cardamom%2C%20rustic%20indian%20tea%20stall%20setting%2C%20warm%20earthy%20tones%2C%20authentic%20presentation&width=300&height=300&seq=menu7&orientation=squarish",
    },
    {
      id: 8,
      name: "Samosa",
      description: "Crispy triangular pastry filled with spiced potatoes and peas",
      price: "₹60",
      category: "pastries",
      image: "https://readdy.ai/api/search-image?query=golden%20crispy%20samosa%20on%20banana%20leaf%2C%20mint%20chutney%2C%20tamarind%20sauce%2C%20indian%20street%20food%20presentation%2C%20warm%20lighting%2C%20appetizing%20food%20photography&width=300&height=300&seq=menu8&orientation=squarish",
    },
    {
      id: 9,
      name: "Mango Lassi",
      description: "Refreshing yogurt-based drink with ripe mango and cardamom",
      price: "₹150",
      category: "cold",
      image: "https://readdy.ai/api/search-image?query=mango%20lassi%20in%20tall%20glass%20with%20mango%20chunks%2C%20yogurt%2C%20cardamom%20garnish%2C%20tropical%20indian%20drink%20presentation%2C%20bright%20natural%20lighting%2C%20refreshing%20summer%20drink&width=300&height=300&seq=menu9&orientation=squarish",
      isNew: true,
    },
    {
      id: 10,
      name: "Cappuccino",
      description: "Perfect balance of espresso, steamed milk, and foam",
      price: "₹190",
      category: "coffee",
      image: "https://readdy.ai/api/search-image?query=cappuccino%20in%20white%20ceramic%20cup%20with%20perfect%20milk%20foam%2C%20heart%20latte%20art%2C%20coffee%20beans%20scattered%2C%20warm%20coffee%20shop%20ambiance%2C%20professional%20barista%20presentation&width=300&height=300&seq=menu10&orientation=squarish",
      isPopular: true,
    },
    {
      id: 11,
      name: "Ginger Lemon Tea",
      description: "Soothing herbal tea with fresh ginger and lemon",
      price: "₹100",
      category: "tea",
      image: "https://readdy.ai/api/search-image?query=ginger%20lemon%20tea%20in%20glass%20cup%20with%20fresh%20ginger%20slices%2C%20lemon%20wedges%2C%20honey%2C%20steam%20rising%2C%20healthy%20herbal%20tea%20presentation%2C%20natural%20lighting&width=300&height=300&seq=menu11&orientation=squarish",
    },
    {
      id: 12,
      name: "Khari Biscuit",
      description: "Crispy, flaky Indian puff pastry perfect with tea or coffee",
      price: "₹40",
      category: "pastries",
      image: "https://readdy.ai/api/search-image?query=khari%20biscuit%20golden%20flaky%20pastry%20on%20white%20plate%2C%20traditional%20indian%20bakery%20item%2C%20tea%20pairing%2C%20warm%20bakery%20lighting%2C%20authentic%20presentation&width=300&height=300&seq=menu12&orientation=squarish",
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Explore our carefully curated selection of premium coffees, teas, and freshly baked pastries
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={category.icon}></i>
                  </div>
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {item.isPopular && (
                    <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      New
                    </span>
                  )}
                </div>
                <button className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-heart-line text-amber-600 hover:ri-heart-fill"></i>
                  </div>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-xl font-bold text-amber-600">{item.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap">
                    Add to Cart
                  </button>
                  <button className="p-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-information-line"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
