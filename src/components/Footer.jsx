import { FaFacebookF, FaInstagram,  FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-white p-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Gentlify</h2>
          <p className="text-sm">Your ultimate menswear destination. Quality, comfort, and style delivered to your door.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center gap-2"><FaPhone /> +880 1234 567890</p>
          <p className="flex items-center gap-2"><FaEnvelope /> support@gentlify.com</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> Shariatpur Sadar, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube></FaYoutube></a>
            
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t pt-4 border-gray-700">
        &copy; {new Date().getFullYear()} Gentlify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
