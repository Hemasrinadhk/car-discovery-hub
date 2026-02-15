import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Car } from "lucide-react";

const states = ["TX", "CA", "FL", "NY", "IL", "PA", "OH", "GA", "NC", "MI"];

const SellCar = () => {
  const [vin, setVin] = useState("");
  const [plate, setPlate] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Sell Your Car for <span className="text-primary">Full Price</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Get an instant estimate, list your car, and let our Skippers handle the test drives. No haggling, no hassle.
            </p>

            <Card className="max-w-lg mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Get Your Estimate
                </CardTitle>
                <CardDescription>Enter your vehicle info to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="vin" className="w-full">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="vin" className="flex-1">VIN / License Plate</TabsTrigger>
                    <TabsTrigger value="manual" className="flex-1">Year / Make / Model</TabsTrigger>
                  </TabsList>

                  <TabsContent value="vin" className="space-y-4">
                    <div>
                      <Label>VIN or License Plate</Label>
                      <Input
                        placeholder="Enter VIN or plate number"
                        value={vin || plate}
                        onChange={(e) => {
                          setVin(e.target.value);
                          setPlate(e.target.value);
                        }}
                        className="bg-secondary mt-1.5"
                      />
                    </div>
                    <div>
                      <Label>State</Label>
                      <Select value={state} onValueChange={setState}>
                        <SelectTrigger className="bg-secondary mt-1.5">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full gap-2">
                      Get Estimate <ArrowRight className="h-4 w-4" />
                    </Button>
                  </TabsContent>

                  <TabsContent value="manual" className="space-y-4">
                    <div>
                      <Label>Year</Label>
                      <Select>
                        <SelectTrigger className="bg-secondary mt-1.5"><SelectValue placeholder="Select year" /></SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 30 }, (_, i) => 2026 - i).map((y) => (
                            <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Make</Label>
                      <Input placeholder="e.g. Toyota" className="bg-secondary mt-1.5" />
                    </div>
                    <div>
                      <Label>Model</Label>
                      <Input placeholder="e.g. Camry" className="bg-secondary mt-1.5" />
                    </div>
                    <Button className="w-full gap-2">
                      Get Estimate <ArrowRight className="h-4 w-4" />
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How selling works */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              How Selling <span className="text-primary">Works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Get Your Estimate", desc: "Enter your VIN or plate number and receive an instant fair market price." },
                { step: "2", title: "List Your Car", desc: "Add photos, details, and set your price. Your listing goes live instantly." },
                { step: "3", title: "We Handle the Rest", desc: "A Skipper manages test drives. You get offers and close the deal on your terms." },
              ].map((s) => (
                <div key={s.step} className="text-center p-6 rounded-2xl bg-card border border-border">
                  <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {s.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellCar;
