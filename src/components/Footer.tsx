import { Link } from "react-router-dom";
import { cities } from "@/data/mockVehicles";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-primary">Car</span>
              <span className="text-2xl font-display font-bold text-foreground">Skipper</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The modern way to buy and sell cars. Test drives delivered to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/buy" className="hover:text-primary transition-colors">Buy a Car</Link></li>
              <li><Link to="/sell" className="hover:text-primary transition-colors">Sell Your Car</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-display font-semibold mb-4">Cities</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {cities.map((city) => (
                <li key={city}>
                  <Link to={`/buy?city=${encodeURIComponent(city)}`} className="hover:text-primary transition-colors">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@carskipper.com</li>
              <li>(512) 555-SKIP</li>
              <li>Austin, TX</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CarSkipper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
