import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Navbar() {
  var navigate = useNavigate();
  var location = useLocation();

  function scrollToSection(id) {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(function() {
        var el = document.getElementById(id);
        if (el) { el.scrollIntoView({ behavior: "smooth" }); }
      }, 100);
    } else {
      var el = document.getElementById(id);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); }
    }
  }

  return (
    <nav className="absolute top-0 w-full z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6 text-white">

        <div className="flex items-center gap-2">
          <img
            src="/img/logo.jpeg"
            alt="Logo"
            className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
          />
          <h1 className="text-lg font-bold">Sabar Islamic Dawa Group Uganda</h1>
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={function() { scrollToSection("home"); }}
            className="nav-link bg-transparent border-none text-white cursor-pointer"
          >
            Home
          </button>
  
          <button
            onClick={function() { scrollToSection("programs"); }}
            className="nav-link bg-transparent border-none text-white cursor-pointer"
          >
            Our Programs
          </button>
          <button
            onClick={function() { scrollToSection("contact"); }}
            className="nav-link bg-transparent border-none text-white cursor-pointer"
          >
            Contact
          </button>
          <Link
            to="/donate"
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition text-white font-semibold"
          >
            Donate Now
          </Link>
        </div>

      </div>
    </nav>
  );
}