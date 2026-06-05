export default function Footer() {
  return (
    <footer id="contact" className="bg-green-900 text-white py-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">


        <div>
          <h4 className="font-bold mb-2">Contact Us</h4>
          <p>Email: info@sabarislamicdawagroup.org</p>
          <p>Phone: 0700354409 / 0752537795</p>
          <p>Location: Plot 41 Gadafi Road</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>

      </div>
      <p className="text-center mt-6 text-gray-400">
        © 2026 Sabar Islamic Dawa Group Uganda. All Rights Reserved.
      </p>
    </footer>
  );
}