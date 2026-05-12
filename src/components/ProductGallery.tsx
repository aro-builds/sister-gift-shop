import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Birthday Surprise Box',
    price: '999',
    image: 'https://images.unsplash.com/photo-1549465220-1d8c9d9c6703?q=80&w=500' // Better placeholder
  },
  {
    id: 2,
    name: 'Anniversary Hamper',
    price: '1499',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=500'
  },
  {
    id: 3,
    name: 'Custom Celebration Kit',
    price: '2999',
    image: 'https://images.unsplash.com/photo-1521478711164-7d2a04a11cd5?q=80&w=500'
  }
];

const ProductGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Our Best Sellers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Area */}
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-pink-600">
                    ₹{product.price}
                  </span>
                </div>
                
                <button 
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl hover:bg-pink-600 transition-colors duration-300"
                  onClick={() => window.open(`https://wa.me/YOUR_SISTER_NUMBER?text=Hi, I want to order the ${product.name}`)}
                >
                  <MessageCircle size={18} />
                  <span>Message to Order</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;