import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockVehicles, cities, bodyTypes, popularBrands } from "@/data/mockVehicles";

const BuyCar = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const initialBrand = searchParams.get("brand") || "";
  const initialCity = searchParams.get("city") || "";
  const initialSearch = searchParams.get("search") || "";

  const [filters, setFilters] = useState({
    search: initialSearch,
    brand: initialBrand,
    city: initialCity,
    bodyType: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredVehicles = useMemo(() => {
    return mockVehicles.filter((v) => {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        !filters.search ||
        v.make.toLowerCase().includes(searchLower) ||
        v.model.toLowerCase().includes(searchLower) ||
        v.bodyType.toLowerCase().includes(searchLower);
      const matchesBrand = !filters.brand || v.make === filters.brand;
      const matchesCity = !filters.city || v.city === filters.city;
      const matchesBody = !filters.bodyType || v.bodyType === filters.bodyType;
      const matchesMinPrice = !filters.minPrice || v.price >= Number(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || v.price <= Number(filters.maxPrice);
      return matchesSearch && matchesBrand && matchesCity && matchesBody && matchesMinPrice && matchesMaxPrice;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({ search: "", brand: "", city: "", bodyType: "", minPrice: "", maxPrice: "" });
  };

  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                Browse <span className="text-primary">Cars</span>
              </h1>
              <p className="text-muted-foreground mt-1">
                {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? "s" : ""} available
              </p>
            </div>
            <Button
              variant="outline"
              className="md:hidden gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 shrink-0 space-y-6`}>
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg">Filters</h3>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs gap-1">
                    <X className="h-3 w-3" /> Clear
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Search</label>
                  <Input
                    placeholder="Make, model..."
                    value={filters.search}
                    onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
                    className="bg-secondary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Brand</label>
                  <Select value={filters.brand} onValueChange={(v) => setFilters((f) => ({ ...f, brand: v === "all" ? "" : v }))}>
                    <SelectTrigger className="bg-secondary"><SelectValue placeholder="All brands" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All brands</SelectItem>
                      {popularBrands.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">City</label>
                  <Select value={filters.city} onValueChange={(v) => setFilters((f) => ({ ...f, city: v === "all" ? "" : v }))}>
                    <SelectTrigger className="bg-secondary"><SelectValue placeholder="All cities" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All cities</SelectItem>
                      {cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Body Type</label>
                  <Select value={filters.bodyType} onValueChange={(v) => setFilters((f) => ({ ...f, bodyType: v === "all" ? "" : v }))}>
                    <SelectTrigger className="bg-secondary"><SelectValue placeholder="All types" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      {bodyTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Min Price</label>
                    <Input
                      type="number"
                      placeholder="$0"
                      value={filters.minPrice}
                      onChange={(e) => setFilters((f) => ({ ...f, minPrice: e.target.value }))}
                      className="bg-secondary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Max Price</label>
                    <Input
                      type="number"
                      placeholder="No max"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters((f) => ({ ...f, maxPrice: e.target.value }))}
                      className="bg-secondary"
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Vehicle Grid */}
            <div className="flex-1">
              {filteredVehicles.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVehicles.map((v) => (
                    <VehicleCard key={v.id} vehicle={v} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl font-display font-semibold mb-2">No cars found</p>
                  <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
                  <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyCar;
