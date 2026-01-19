import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-6 gold-text">Urban Innovation</h3>
            <p className="text-white leading-relaxed font-light">Making your home unique and stylish with award-winning interior design solutions.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase text-white">Contact Us</h4>
            <div className="space-y-4 text-white font-light">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin size={18} className="text-[#FACC6B] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Head office</p>
                    <p>129-Port Saeed Tower</p>
                    <p>Deira</p>
                    <p>Dubai, UAE</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#FACC6B] flex-shrink-0" />
                  <a
                    href="tel:+971501470024"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    +971 50 1470024
                  </a>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#FACC6B] flex-shrink-0" />
                  <div>
                    <a href="mailto:urbaninnovationllc@gmail.com" className="hover:text-primary transition-colors duration-300">
                      urbaninnovationllc@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-all duration-300" aria-label="Instagram">
                <Instagram size={24} className="text-[#FF7AAE]" />
              </a>
              <a href="#" className="hover:opacity-80 transition-all duration-300" aria-label="Facebook">
                <Facebook size={24} className="text-[#4C8DFF]" />
              </a>
              <a href="#" className="hover:opacity-80 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={24} className="text-[#3FA9F5]" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-3 text-center text-white text-sm font-light">
          <p>&copy; 2026 <span className="gold-text">Urban Innovation</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
