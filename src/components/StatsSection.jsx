import React, { useState, useEffect, useRef } from "react";

const stats = [
  { number: "20", label: "Années d'expérience", suffix: "+" },
  { number: "150", label: "Projets complets", suffix: "+" },
  { number: "100", label: "hommes d'expertise", suffix: "+" },
  { number: "98", label: "Satisfaction clients", suffix: "%" },
];

const AnimatedCounter = ({ targetNumber, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(targetNumber);
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-black">
              <AnimatedCounter 
                targetNumber={stat.number} 
                suffix={stat.suffix}
                duration={2000 + index * 100} // Stagger animation
              />
            </h3>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;