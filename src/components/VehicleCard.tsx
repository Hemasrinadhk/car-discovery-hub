import { Link } from "react-router-dom";
import { Heart, MapPin, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Vehicle } from "@/data/mockVehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(vehicle.price);

  const formattedMileage = new Intl.NumberFormat("en-US").format(vehicle.mileage);

  return (
    <Link
      to={`/vehicle/${vehicle.id}`}
      className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.imageUrl}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/60 backdrop-blur hover:bg-background/80"
          onClick={(e) => {
            e.preventDefault();
            // TODO: toggle favorite
          }}
        >
          <Heart className="h-4 w-4" />
        </Button>
        <span className="absolute bottom-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
          {vehicle.bodyType}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-semibold text-lg leading-tight">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <span className="text-lg font-bold text-primary shrink-0">{formattedPrice}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Gauge className="h-3.5 w-3.5" />
            {formattedMileage} mi
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {vehicle.city}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
