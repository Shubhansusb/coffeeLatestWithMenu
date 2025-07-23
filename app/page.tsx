'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductSlider from '@/components/ProductSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        
        {/* Featured Products Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Favorites
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most beloved coffee creations, crafted with passion and served with love
              </p>
            </div>
            <ProductSlider />
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    How We Started
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    In 2020, our founder Rajesh Kumar had a simple dream - to bring the authentic taste of Indian coffee culture to modern coffee lovers. Starting with a small cart in Bangalore, we began serving traditional South Indian filter coffee alongside international favorites.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    What began as a passion project has grown into a beloved coffee community. We source our beans directly from the lush plantations of Coorg and Chikmagalur, ensuring every cup carries the essence of Indian coffee heritage while embracing global coffee innovations.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we continue to honor our roots while exploring new flavors, bringing people together over exceptional coffee experiences that celebrate both tradition and innovation.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full">
                    <i className="ri-award-fill text-2xl text-amber-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Award Winning</h4>
                    <p className="text-sm text-gray-600">Best Coffee Experience 2023</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=cozy%20indian%20coffee%20shop%20interior%20with%20traditional%20coffee%20equipment%2C%20wooden%20furniture%2C%20warm%20lighting%2C%20coffee%20beans%20displays%2C%20indian%20coffee%20culture%20elements%2C%20customers%20enjoying%20coffee%2C%20authentic%20atmosphere%2C%20vintage%20coffee%20grinder%2C%20traditional%20filter%20coffee%20setup&width=600&height=400&seq=story1&orientation=landscape"
                    alt="Our Coffee Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-full">
                      <i className="ri-cup-fill text-xl text-amber-600"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">50,000+</p>
                      <p className="text-sm text-gray-600">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coffee Beans Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Coffee Beans
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover the exceptional quality and unique characteristics of our carefully selected coffee beans from the finest plantations
              </p>
            </div>

            {/* Bean Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-amber-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=arabica%20coffee%20beans%20close%20up%2C%20high%20quality%20premium%20beans%2C%20rich%20brown%20color%2C%20coffee%20plantation%20background%2C%20natural%20lighting%2C%20detailed%20texture%2C%20coffee%20bean%20characteristics%2C%20professional%20product%20photography&width=300&height=200&seq=arabica1&orientation=landscape"
                    alt="Arabica Beans"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">Arabica</h3>
                  <p className="text-amber-600 font-medium">Premium Quality</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Grown in the high-altitude regions of Coorg, our Arabica beans offer a smooth, complex flavor with subtle acidity and sweet undertones. Perfect for our signature espresso blends.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=robusta%20coffee%20beans%20close%20up%2C%20strong%20bold%20beans%2C%20darker%20roast%2C%20coffee%20plantation%2C%20traditional%20indian%20coffee%2C%20rich%20texture%2C%20professional%20bean%20photography%2C%20robust%20characteristics&width=300&height=200&seq=robusta1&orientation=landscape"
                    alt="Robusta Beans"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">Robusta</h3>
                  <p className="text-amber-600 font-medium">Bold & Strong</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sourced from Chikmagalur's finest plantations, our Robusta beans deliver a bold, full-bodied experience with rich crema. Essential for our traditional South Indian filter coffee.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=specialty%20coffee%20beans%20blend%2C%20mixed%20arabica%20robusta%2C%20artisan%20roasted%2C%20coffee%20roastery%2C%20premium%20blend%2C%20professional%20coffee%20bean%20photography%2C%20roasted%20to%20perfection%2C%20specialty%20grade&width=300&height=200&seq=blend1&orientation=landscape"
                    alt="Specialty Blend"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">Specialty Blend</h3>
                  <p className="text-amber-600 font-medium">Artisan Crafted</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our master roasters carefully blend the finest Arabica and Robusta beans to create unique flavor profiles that capture the essence of Indian coffee heritage.
                </p>
              </div>
            </div>

            {/* Coffee Processing */}
            <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">From Bean to Cup</h3>
                <p className="text-amber-100 max-w-2xl mx-auto">
                  Discover how our coffee beans are transformed into the perfect cup through our meticulous process
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                    <i className="ri-plant-fill text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Sourcing</h4>
                  <p className="text-sm text-amber-100">Direct from Coorg & Chikmagalur plantations</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                    <i className="ri-fire-fill text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Roasting</h4>
                  <p className="text-sm text-amber-100">Small batch roasting for optimal flavor</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                    <i className="ri-settings-fill text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Grinding</h4>
                  <p className="text-sm text-amber-100">Precision grinding for each brew method</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-600 rounded-full mx-auto mb-4">
                    <i className="ri-cup-fill text-2xl"></i>
                  </div>
                  <h4 className="font-semibold mb-2">Brewing</h4>
                  <p className="text-sm text-amber-100">Expert extraction for perfect taste</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our coffee community about their favorite experiences at Readdy Coffee
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The filter coffee here reminds me of my grandmother's kitchen. Authentic taste with modern presentation. My daily dose of happiness!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=happy%20indian%20woman%20customer%20smiling%2C%20professional%20headshot%2C%20casual%20attire%2C%20warm%20expression%2C%20coffee%20shop%20customer%2C%20satisfied%20customer%20portrait%2C%20natural%20lighting&width=60&height=60&seq=customer1&orientation=squarish"
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Regular Customer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Best cappuccino in the city! The baristas are true artists. Love the cozy atmosphere and the quality is consistently excellent."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=young%20indian%20man%20customer%20smiling%2C%20professional%20headshot%2C%20business%20casual%2C%20happy%20expression%2C%20coffee%20enthusiast%2C%20satisfied%20customer%20portrait%2C%20natural%20lighting&width=60&height=60&seq=customer2&orientation=squarish"
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Arjun Patel</h4>
                    <p className="text-sm text-gray-600">Coffee Enthusiast</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-amber-400"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Perfect place for meetings and work. Great WiFi, comfortable seating, and their masala chai is absolutely divine. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=indian%20professional%20woman%20customer%20smiling%2C%20modern%20attire%2C%20confident%20expression%2C%20business%20professional%2C%20coffee%20shop%20customer%2C%20satisfied%20customer%20portrait%2C%20natural%20lighting&width=60&height=60&seq=customer3&orientation=squarish"
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Kavya Reddy</h4>
                    <p className="text-sm text-gray-600">Business Professional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Stats */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">4.8</div>
                  <p className="text-gray-600">Average Rating</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">2,500+</div>
                  <p className="text-gray-600">Happy Reviews</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">50K+</div>
                  <p className="text-gray-600">Cups Served</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">5</div>
                  <p className="text-gray-600">Store Locations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coffee Experience Section */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full mb-6">
                  <i className="ri-leaf-fill text-2xl text-amber-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ethically Sourced</h3>
                <p className="text-gray-600">
                  We partner directly with coffee farmers to ensure fair trade and sustainable practices
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full mb-6">
                  <i className="ri-fire-fill text-2xl text-amber-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Freshly Roasted</h3>
                <p className="text-gray-600">
                  Every batch is roasted to perfection in small quantities to preserve flavor and aroma
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full mb-6">
                  <i className="ri-heart-fill text-2xl text-amber-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Crafted with Love</h3>
                <p className="text-gray-600">
                  Our skilled baristas create each cup with precision and passion for the perfect experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-amber-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Coffee Journey?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Join our coffee community and discover exclusive blends, earn rewards, and connect with fellow coffee lovers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-amber-800 rounded-full font-semibold hover:bg-amber-50 transition-colors whitespace-nowrap">
                Join Rewards Program
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-800 rounded-full font-semibold transition-colors whitespace-nowrap">
                Find a Store
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}