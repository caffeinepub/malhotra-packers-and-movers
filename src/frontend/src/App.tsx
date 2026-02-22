import { Phone, Mail, MapPin, Clock, Package, Truck, Shield, Globe } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { SpecialtyItems } from './components/SpecialtyItems';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'malhotra-packers-movers'
  );

  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-coffee-dark/95 text-cardboard-lightest py-6 px-6 shadow-warm-lg sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/assets/generated/cardboard-box.dim_200x200.png" 
              alt="Malhotra Packers and Movers" 
              className="w-14 h-14 transition-transform hover:scale-110 duration-300"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Malhotra Packers and Movers</h1>
              <p className="text-sm text-cardboard-light font-medium">Professional Moving Services</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Clock className="w-5 h-5" />
            <span>24/7 Available</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          ref={heroAnimation.ref as React.RefObject<HTMLElement>}
          className={`bg-gradient-to-br from-cardboard-lightest via-cardboard-light to-coffee-light py-20 px-6 relative overflow-hidden transition-all duration-1000 ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative background image */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 -z-0">
            <img 
              src="/assets/generated/bubble-wrap-closeup.dim_800x600.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex flex-wrap gap-3">
                  <div className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
                    <Clock className="w-5 h-5 inline mr-2" />
                    24 Hours Service Available
                  </div>
                  <div className="inline-block bg-coffee-dark text-cardboard-lightest px-6 py-3 rounded-full font-bold shadow-lg border-2 border-coffee-medium">
                    <Globe className="w-5 h-5 inline mr-2" />
                    All India Services
                  </div>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-coffee-darkest leading-tight">
                  We help you to organise your new आशियाना
                </h2>
                <p className="text-xl text-coffee-dark leading-relaxed font-medium">
                  Professional packing and moving services you can trust. We handle your belongings with care and deliver them safely to your new home across India.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:9060925829" 
                    className="bg-coffee-dark text-cardboard-lightest px-8 py-4 rounded-xl font-bold hover:bg-coffee-darkest transition-all duration-300 shadow-warm hover:shadow-warm-lg hover:scale-105 text-lg"
                  >
                    Call Now
                  </a>
                  <a 
                    href="mailto:satishkumar002299@gmail.com" 
                    className="bg-cardboard-medium text-coffee-darkest px-8 py-4 rounded-xl font-bold hover:bg-cardboard-dark transition-all duration-300 shadow-warm hover:shadow-warm-lg hover:scale-105 text-lg"
                  >
                    Email Us
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="/assets/generated/hero-packing.dim_1200x600.png" 
                    alt="Professional Packing Services" 
                    className="w-full max-w-2xl rounded-3xl shadow-warm-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl font-bold text-lg hidden lg:block">
                    <Package className="w-6 h-6 inline mr-2" />
                    Expert Packing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section 
          ref={servicesAnimation.ref as React.RefObject<HTMLElement>}
          className={`py-20 px-6 bg-background transition-all duration-1000 delay-200 ${
            servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto max-w-7xl">
            <h3 className="text-4xl lg:text-5xl font-bold text-center text-coffee-darkest mb-6">
              Why Choose Us?
            </h3>
            <p className="text-xl text-center text-coffee-dark mb-16 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive moving solutions with professional care and attention to detail
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-warm border-2 border-cardboard-medium hover:shadow-warm-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                <div className="relative mb-6">
                  <img 
                    src="/assets/generated/bubble-wrap-hands.dim_600x400.png" 
                    alt="24/7 Availability" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-coffee-darkest mb-3">24/7 Availability</h4>
                <p className="text-coffee-dark leading-relaxed text-lg">
                  We're available round the clock to serve you. Call us anytime, day or night for immediate assistance.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-warm border-2 border-cardboard-medium hover:shadow-warm-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                <div className="relative mb-6">
                  <img 
                    src="/assets/generated/packing-supplies.dim_600x400.png" 
                    alt="Professional Packing" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4 w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-8 h-8 text-cardboard-lightest" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-coffee-darkest mb-3">Professional Packing</h4>
                <p className="text-coffee-dark leading-relaxed text-lg">
                  Expert packing services with quality materials including bubble wrap to ensure your belongings are safe during transit.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-warm border-2 border-cardboard-medium hover:shadow-warm-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                <div className="relative mb-6">
                  <img 
                    src="/assets/generated/moving-boxes-organized.dim_800x500.png" 
                    alt="All India Services" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4 w-16 h-16 bg-cardboard-dark rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-cardboard-lightest" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-coffee-darkest mb-3">All India Services</h4>
                <p className="text-coffee-dark leading-relaxed text-lg">
                  Headquartered in Faridabad, we provide reliable moving services across all states of India with the same quality and care.
                </p>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 bg-gradient-to-br from-coffee-light to-cardboard-light p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h5 className="font-bold text-coffee-darkest text-lg">Safe & Secure</h5>
                  <p className="text-coffee-dark text-sm">Insured moving services</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-gradient-to-br from-coffee-light to-cardboard-light p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-coffee-medium rounded-full flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6 text-cardboard-lightest" />
                </div>
                <div>
                  <h5 className="font-bold text-coffee-darkest text-lg">Modern Fleet</h5>
                  <p className="text-coffee-dark text-sm">Well-maintained vehicles</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-gradient-to-br from-coffee-light to-cardboard-light p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-cardboard-dark rounded-full flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-cardboard-lightest" />
                </div>
                <div>
                  <h5 className="font-bold text-coffee-darkest text-lg">Quality Materials</h5>
                  <p className="text-coffee-dark text-sm">Premium packing supplies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Items Section */}
        <SpecialtyItems />

        {/* Contact Section */}
        <section 
          ref={contactAnimation.ref as React.RefObject<HTMLElement>}
          className={`py-20 px-6 bg-gradient-to-br from-coffee-light to-cardboard-light relative overflow-hidden transition-all duration-1000 delay-300 ${
            contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative background */}
          <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-5">
            <img 
              src="/assets/generated/bubble-wrap-closeup.dim_800x600.png" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <h3 className="text-4xl lg:text-5xl font-bold text-center text-coffee-darkest mb-6">
              Get In Touch
            </h3>
            <p className="text-xl text-center text-coffee-dark mb-16 max-w-2xl mx-auto leading-relaxed">
              Ready to move? Contact us today for a free quote
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-10 rounded-2xl shadow-warm-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-coffee-darkest mb-8 flex items-center gap-3">
                  <Phone className="w-7 h-7 text-accent" />
                  Call Us
                </h4>
                <div className="space-y-6">
                  <a 
                    href="tel:9060925829" 
                    className="block text-xl text-coffee-dark hover:text-coffee-darkest font-bold hover:translate-x-2 transition-all duration-300"
                  >
                    📞 +91 9060925829
                  </a>
                  <a 
                    href="tel:8076795118" 
                    className="block text-xl text-coffee-dark hover:text-coffee-darkest font-bold hover:translate-x-2 transition-all duration-300"
                  >
                    📞 +91 8076795118
                  </a>
                </div>
              </div>

              <div className="bg-card p-10 rounded-2xl shadow-warm-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h4 className="text-2xl font-bold text-coffee-darkest mb-8 flex items-center gap-3">
                  <Mail className="w-7 h-7 text-accent" />
                  Email Us
                </h4>
                <a 
                  href="mailto:satishkumar002299@gmail.com" 
                  className="text-xl text-coffee-dark hover:text-coffee-darkest break-all font-bold hover:translate-x-2 inline-block transition-all duration-300"
                >
                  satishkumar002299@gmail.com
                </a>
              </div>

              <div className="bg-card p-10 rounded-2xl shadow-warm-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 md:col-span-2">
                <h4 className="text-2xl font-bold text-coffee-darkest mb-8 flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-accent" />
                  Visit Us
                </h4>
                <p className="text-xl text-coffee-dark leading-loose font-medium">
                  Street no 4, Pravartiya Colony<br />
                  Gazipur, Sector 51<br />
                  Faridabad, Haryana 121005
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-coffee-darkest text-cardboard-lightest py-12 px-6 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <img 
            src="/assets/generated/moving-boxes-organized.dim_800x500.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h5 className="font-bold text-2xl mb-6">Malhotra Packers and Movers</h5>
              <p className="text-cardboard-light text-base leading-relaxed">
                Your trusted partner for all packing and moving needs. Available 24/7 to serve you with professional care across India.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-2xl mb-6">Quick Contact</h5>
              <div className="space-y-3 text-base">
                <p className="text-cardboard-light font-medium">📞 +91 9060925829</p>
                <p className="text-cardboard-light font-medium">📞 +91 8076795118</p>
                <p className="text-cardboard-light font-medium">✉️ satishkumar002299@gmail.com</p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-2xl mb-6">Follow Us</h5>
              <div className="flex gap-6">
                <a href="#" className="text-cardboard-light hover:text-cardboard-lightest transition-all duration-300 hover:scale-125">
                  <SiFacebook className="w-8 h-8" />
                </a>
                <a href="#" className="text-cardboard-light hover:text-cardboard-lightest transition-all duration-300 hover:scale-125">
                  <SiInstagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-cardboard-light hover:text-cardboard-lightest transition-all duration-300 hover:scale-125">
                  <SiX className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-cardboard-dark pt-8 text-center text-base text-cardboard-light">
            <p>
              © {currentYear} Malhotra Packers and Movers. All rights reserved. | Built with ❤️ using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cardboard-lightest hover:underline font-semibold transition-colors duration-300"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
