import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#FFF5F5] min-h-[80vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:flex lg:items-center">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-4xl font-bold tracking-wide text-slate-900 lg:text-6xl">
              Homemade Gifts, <br /> 
              <span className="text-pink-600">Delivered with Love</span>
            </h1>
            
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Discover the perfect handcrafted presents for birthdays, parties, and every special occasion. Each gift is made with care and delivered right to your doorstep.
            </p>

            <div className="flex flex-col mt-8 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center px-8 py-3 text-white transition-colors duration-300 transform bg-pink-600 rounded-full hover:bg-pink-700 focus:outline-none">
                <ShoppingBag className="w-5 h-5 mr-2" />
                <span>Browse Gifts</span>
              </button>

              <button className="flex items-center justify-center px-8 py-3 text-slate-900 transition-colors duration-300 transform border border-slate-900 rounded-full hover:bg-slate-100 focus:outline-none">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="flex items-center justify-center w-full mt-12 lg:mt-0 lg:w-1/2">
          <div className="w-full h-96 lg:h-[500px] bg-pink-200 rounded-2xl flex items-center justify-center text-pink-400 font-medium overflow-hidden border-4 border-white shadow-xl">
             {/* Replace this div with an <img> tag once you have her photo! */}
             <span className="p-10 text-center">Your Sister's Beautiful Gift Basket Photo Goes Here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;