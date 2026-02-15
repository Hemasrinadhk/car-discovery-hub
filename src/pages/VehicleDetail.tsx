import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, MapPin, Gauge, Fuel, Calendar, Palette, Settings, CalendarCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockVehicles } from "@/data/mockVehicles";

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = mockVehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold mb-2">Vehicle Not Found</h1>
            <p className="text-muted-foreground mb-4">This listing may have been removed.</p>
            <Button asChild><Link to="/buy">Browse Cars</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: 0,
  }).format(vehicle.price);

  const formattedMileage = new Intl.NumberFormat("en-US").format(vehicle.mileage);

  const specs = [
    { icon: Calendar, label: "Year", value: vehicle.year },
    { icon: Gauge, label: "Mileage", value: `${formattedMileage} mi` },
    { icon: Fuel, label: "Fuel", value: vehicle.fuelType },
    { icon: Settings, label: "Transmission", value: vehicle.transmission },
    { icon: Palette, label: "Color", value: vehicle.color },
    { icon: MapPin, label: "Location", value: vehicle.city },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <Link to="/buy" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to listings
          </Link>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Image */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                <img
                  src={vehicle.imageUrl}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="h-full w-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/60 backdrop-blur hover:bg-background/80"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Badge className="mb-3">{vehicle.bodyType}</Badge>
                <h1 className="text-3xl font-display font-bold">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h1>
                <p className="text-3xl font-bold text-primary mt-2">{formattedPrice}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-center gap-3 p-3 rounded-xl bg-secondary border border-border">
                    <s.icon className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-medium">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div>
                <h3 className="font-display font-semibold mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((f) => (
                    <Badge key={f} variant="secondary">{f}</Badge>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <Button size="lg" className="w-full gap-2 h-12 text-base font-semibold">
                  <CalendarCheck className="h-5 w-5" />
                  Book Test Drive
                </Button>
                <Button variant="outline" size="lg" className="w-full h-12 text-base">
                  Contact Seller
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Listed by {vehicle.sellerName} · {vehicle.createdAt}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VehicleDetail;
