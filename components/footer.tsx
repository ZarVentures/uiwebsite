export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 gold-text">Urban Innovation</h3>
            <p className="text-white leading-relaxed font-light">Making your home unique and stylish with award-winning interior design solutions.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#portfolio" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-wider uppercase text-white">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                Instagram
              </a>
              <a href="#" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                Facebook
              </a>
              <a href="#" className="text-white hover:opacity-80 hover:text-primary transition-all duration-300 font-light">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-white text-sm font-light">
          <p>&copy; 2026 <span className="gold-text">Urban Innovation</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
