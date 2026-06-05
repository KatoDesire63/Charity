import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const images = [
  "/img/slide1.jpeg",
  "/img/slide2.jpeg",
  "/img/slide3.jpeg",
  "/img/slide4.jpeg",
  "/img/slide5.jpeg"
];

export default function Hero({ active, setActive }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(index);
      setIndex(i => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <header id="home" className="relative h-[550px] overflow-hidden">

      {/* Background layers */}
      {prev !== null && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-1000"
          style={{ backgroundImage: `url('${images[prev]}')` }}
        />
      )}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url('${images[index]}')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <Navbar active={active} setActive={setActive} />

      {/* Hero content */}
      <div className="relative z-20 flex items-center h-full max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Helping Orphaned<br />Children in Need
          </h2>
          <p className="mb-6 text-gray-200">
            Together, we can make a difference in their lives.
          </p>
          
          <Link
          to="/scholarship"
          className="bg-red-500 px-6 py-3 rounded shadow hover:bg-red-600 transition inline-block"
          >
            Apply for a Scholarship
            
          </Link>
        </div>
      </div>

    </header>
  );
}