
# CarSkipper – Full Rebuild Plan

## Overview
Rebuild the CarSkipper car marketplace as a modern React web app with Supabase backend. The platform connects car buyers and sellers, with "Skippers" (hosts) who deliver test drives to buyers' doors.

---

## 1. Landing Page / Homepage
- **Hero section** with bold headline ("Test Drives Delivered to Your Door"), background car image, and "See All Cars" CTA button
- **Sell Your Car form** with two tabs: VIN/License Plate lookup and Year/Make/Model entry, plus state selector and "Get Estimate" button
- **How It Works** – 3-step visual section (Buy & Sell, Hosts, Schedule Test Drive)
- **Benefits section** – 4 icon cards (At Home Test Drives, Safest Way, Full Price, Instant Pricing)
- **Popular Brands** – Logo grid (Ford, Toyota, Honda, Tesla, BMW, etc.) linking to filtered listings
- **FAQ accordion** section
- **Footer** with navigation links, city hubs, and contact info

## 2. User Authentication & Profiles
- Sign up / Sign in pages (email + password)
- User profile management (name, contact info, avatar)
- Role-based access: Buyers, Sellers, and Hosts (admin-managed)
- Favorites system – save cars with heart icon and counter in navbar

## 3. Vehicle Listings & Search (Buy a Car)
- **Browse Cars page** with grid/list view of vehicle cards showing photo, price, make/model/year, mileage, and location
- **Search bar** in navbar – search by make, model, type, year
- **Filters sidebar** – price range, year, mileage, body type, brand, city/location
- **Vehicle detail page** – photo gallery, full specs, pricing, seller info, and "Book Test Drive" / "Contact Seller" buttons

## 4. Sell Your Car Flow
- Multi-step form: enter VIN or license plate (with state) OR manually select year/make/model
- Vehicle details form: mileage, condition, photos upload, description, asking price
- Listing preview before publishing
- Seller dashboard to manage active listings, edit, mark as sold

## 5. Test Drive Scheduling
- Date & time picker for scheduling a test drive
- Location input (address where the car should be brought)
- Confirmation screen with booking summary
- Booking management – view upcoming test drives, cancel/reschedule

## 6. City Hub Pages
- Location-based landing pages (Austin, Dallas, San Antonio, Houston, Irving)
- Filter listings by city/hub

## 7. Database (Supabase)
- **Users & profiles** – authentication and profile data
- **User roles** – buyer/seller/host roles in a separate table
- **Vehicles** – listings with all car details
- **Favorites** – user-vehicle relationship for saved cars
- **Test drive bookings** – scheduling data with status tracking
- **Vehicle images** – stored in Supabase Storage, URLs in database
- **Cities/Hubs** – supported service areas

## 8. Design & UX
- Dark navy and gold/yellow color scheme matching CarSkipper's branding
- Responsive design for mobile and desktop
- Clean, modern card-based layouts
- Smooth navigation with persistent search bar and favorites counter
