export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  bodyType: string;
  fuelType: string;
  transmission: string;
  color: string;
  city: string;
  imageUrl: string;
  description: string;
  features: string[];
  sellerId: string;
  sellerName: string;
  createdAt: string;
}

export const mockVehicles: Vehicle[] = [
  {
    id: "1",
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 35990,
    mileage: 12400,
    bodyType: "Sedan",
    fuelType: "Electric",
    transmission: "Automatic",
    color: "Pearl White",
    city: "Austin",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
    description: "Like-new Tesla Model 3 with autopilot and premium interior package.",
    features: ["Autopilot", "Premium Audio", "Glass Roof", "Heated Seats"],
    sellerId: "s1",
    sellerName: "John D.",
    createdAt: "2025-12-15",
  },
  {
    id: "2",
    make: "Ford",
    model: "F-150",
    year: 2022,
    price: 42500,
    mileage: 28000,
    bodyType: "Truck",
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Oxford White",
    city: "Dallas",
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
    description: "Well-maintained F-150 XLT with towing package and bed liner.",
    features: ["Towing Package", "Bed Liner", "Backup Camera", "Apple CarPlay"],
    sellerId: "s2",
    sellerName: "Sarah M.",
    createdAt: "2025-11-20",
  },
  {
    id: "3",
    make: "BMW",
    model: "X5",
    year: 2023,
    price: 58900,
    mileage: 8500,
    bodyType: "SUV",
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Carbon Black",
    city: "Houston",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    description: "Premium BMW X5 xDrive40i with M Sport package and panoramic sunroof.",
    features: ["M Sport Package", "Panoramic Sunroof", "Harman Kardon", "Wireless Charging"],
    sellerId: "s3",
    sellerName: "Mike R.",
    createdAt: "2026-01-05",
  },
  {
    id: "4",
    make: "Toyota",
    model: "Camry",
    year: 2024,
    price: 28750,
    mileage: 3200,
    bodyType: "Sedan",
    fuelType: "Hybrid",
    transmission: "Automatic",
    color: "Celestial Silver",
    city: "San Antonio",
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    description: "Nearly new Camry Hybrid XLE with leather interior and safety sense.",
    features: ["Toyota Safety Sense", "Leather Interior", "JBL Audio", "Wireless CarPlay"],
    sellerId: "s4",
    sellerName: "Lisa K.",
    createdAt: "2026-01-28",
  },
  {
    id: "5",
    make: "Honda",
    model: "CR-V",
    year: 2023,
    price: 31200,
    mileage: 15600,
    bodyType: "SUV",
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Radiant Red",
    city: "Austin",
    imageUrl: "https://images.unsplash.com/photo-1568844293986-8d0400f4745b?w=600&h=400&fit=crop",
    description: "Popular CR-V EX-L with Honda Sensing and all-wheel drive.",
    features: ["Honda Sensing", "AWD", "Sunroof", "Heated Seats"],
    sellerId: "s5",
    sellerName: "David P.",
    createdAt: "2026-02-01",
  },
  {
    id: "6",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    price: 44800,
    mileage: 22000,
    bodyType: "Sedan",
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Obsidian Black",
    city: "Irving",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    description: "Elegant C300 4MATIC with AMG Line and premium tech package.",
    features: ["AMG Line", "4MATIC AWD", "Burmester Audio", "360 Camera"],
    sellerId: "s6",
    sellerName: "Emma W.",
    createdAt: "2025-10-12",
  },
];

export const popularBrands = [
  "Ford", "Toyota", "Honda", "Tesla", "BMW", "Mercedes-Benz",
  "Chevrolet", "Hyundai", "Kia", "Nissan", "Audi", "Lexus",
];

export const cities = ["Austin", "Dallas", "San Antonio", "Houston", "Irving"];

export const bodyTypes = ["Sedan", "SUV", "Truck", "Coupe", "Hatchback", "Van", "Convertible"];
