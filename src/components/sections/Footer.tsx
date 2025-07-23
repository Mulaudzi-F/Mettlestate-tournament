import { FaTwitter, FaTwitch, FaDiscord, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mettlestate</h3>
            <p className="text-gray-400">
              South Africa's premier esports tournament organizer
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitch size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Mettlestate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
