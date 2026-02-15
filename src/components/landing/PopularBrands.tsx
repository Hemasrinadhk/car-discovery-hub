import { Link } from "react-router-dom";
import { popularBrands } from "@/data/mockVehicles";

const PopularBrands = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Popular <span className="text-primary">Brands</span>
          </h2>
          <p className="text-muted-foreground text-lg">Browse cars from your favorite manufacturers</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {popularBrands.map((brand) => (
            <Link
              key={brand}
              to={`/buy?brand=${encodeURIComponent(brand)}`}
              className="flex items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-center group"
            >
              <span className="font-display font-semibold text-sm group-hover:text-primary transition-colors">
                {brand}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrands;
