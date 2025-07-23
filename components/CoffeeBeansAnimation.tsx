
'use client';

import { useEffect, useState } from 'react';

interface CoffeeBean {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: 'bean' | 'leaf' | 'steam';
}

export default function CoffeeBeansAnimation() {
  const [beans, setBeans] = useState<CoffeeBean[]>([]);

  useEffect(() => {
    const createBeans = () => {
      const newBeans: CoffeeBean[] = [];
      for (let i = 0; i < 25; i++) {
        const types: ('bean' | 'leaf' | 'steam')[] = ['bean', 'leaf', 'steam'];
        newBeans.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 4 + Math.random() * 6,
          size: 0.4 + Math.random() * 0.8,
          rotation: Math.random() * 360,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
      setBeans(newBeans);
    };

    createBeans();
    const interval = setInterval(createBeans, 6000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: 'bean' | 'leaf' | 'steam') => {
    switch (type) {
      case 'bean':
        return 'ri-seedling-fill';
      case 'leaf':
        return 'ri-leaf-fill';
      case 'steam':
        return 'ri-drop-fill';
      default:
        return 'ri-seedling-fill';
    }
  };

  const getColor = (type: 'bean' | 'leaf' | 'steam') => {
    switch (type) {
      case 'bean':
        return 'text-amber-700';
      case 'leaf':
        return 'text-green-600';
      case 'steam':
        return 'text-blue-300';
      default:
        return 'text-amber-700';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {beans.map((bean) => (
        <div
          key={bean.id}
          className={`absolute ${getColor(bean.type)} opacity-15`}
          style={{
            left: `${bean.left}%`,
            animationDelay: `${bean.delay}s`,
            animationDuration: `${bean.duration}s`,
            transform: `scale(${bean.size}) rotate(${bean.rotation}deg)`,
            animation: `fallAndSpin ${bean.duration}s linear infinite`,
          }}
        >
          <div className="w-4 h-4 flex items-center justify-center">
            <i className={`${getIcon(bean.type)} text-lg`}></i>
          </div>
        </div>
      ))}
      
      {/* Enhanced falling animation with spin and sway */}
      <style jsx>{`
        @keyframes fallAndSpin {
          0% {
            transform: translateY(-100vh) rotate(0deg) translateX(0px);
            opacity: 0.2;
          }
          10% {
            opacity: 0.3;
          }
          25% {
            transform: translateY(-75vh) rotate(90deg) translateX(20px);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-50vh) rotate(180deg) translateX(-10px);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-25vh) rotate(270deg) translateX(15px);
            opacity: 0.15;
          }
          100% {
            transform: translateY(100vh) rotate(360deg) translateX(0px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
