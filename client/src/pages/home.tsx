import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertInquirySchema } from "@shared/schema";
import type { InsertInquiry } from "@shared/schema";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Cog,
  Rocket,
  Factory,
  Plane
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      inquiryType: "General Inquiry",
      message: "",
    },
  });

  const createInquiryMutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully",
        description: "Thank you for your inquiry. Our team will contact you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit inquiry",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiryMutation.mutate(data);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-lg"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[hsl(217,91%,60%)]">Cingularity Aerospace™</h1>
                <p className="text-xs text-slate-600">Elevating Aviation Standards</p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-700 hover:text-[hsl(217,91%,60%)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-slate-700 hover:text-[hsl(217,91%,60%)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="text-slate-700 hover:text-[hsl(217,91%,60%)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  Capabilities
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-700 hover:text-[hsl(217,91%,60%)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </button>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  variant="aerospace"
                  className="px-6 py-2 text-sm font-medium"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-[hsl(217,91%,60%)]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-[hsl(217,91%,60%)] w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-[hsl(217,91%,60%)] w-full text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("capabilities")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-[hsl(217,91%,60%)] w-full text-left"
              >
                Capabilities
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-[hsl(217,91%,60%)] w-full text-left"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="aerospace"
                className="ml-3 mt-2"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(30, 64, 175, 0.7)), url('https://images.unsplash.com/photo-1569163139394-de44aa4cd6c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Forging India's <span className="text-[hsl(43,96%,56%)]">Aerospace Dominance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            AS 9100 D & ISO 9001/2015 certified leader in UAV manufacturing, aerospace components, and precision engineering solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="amber"
              size="lg"
              onClick={() => scrollToSection("products")}
              className="text-lg font-semibold"
            >
              Explore Our Solutions
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[hsl(217,91%,60%)]"
            >
              Download Catalog
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(217,91%,60%)] mb-2">16,000</div>
              <div className="text-slate-600 font-medium">sq.ft Facility</div>
              <div className="text-sm text-slate-500">State-of-the-art Infrastructure</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(217,91%,60%)] mb-2">2</div>
              <div className="text-slate-600 font-medium">Certifications</div>
              <div className="text-sm text-slate-500">AS 9100 D & ISO 9001/2015</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(217,91%,60%)] mb-2">180+</div>
              <div className="text-slate-600 font-medium">Projects</div>
              <div className="text-sm text-slate-500">Across Tri-forces & DRDO</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(217,91%,60%)] mb-2">35+</div>
              <div className="text-slate-600 font-medium">Years Legacy</div>
              <div className="text-sm text-slate-500">Defense Industry Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Leading Innovation in <span className="text-[hsl(217,91%,60%)]">Aerospace & Defense</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Cingularity Aerospace™ stands at the forefront of India's aerospace revolution, specializing in precision engineering, UAV development, and aerospace component manufacturing. Our commitment to excellence drives us to deliver world-class solutions for both civilian and military applications.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Core Expertise</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Precision Engineering</li>
                    <li>• Aerospace Technology</li>
                    <li>• Heavy Engineering</li>
                    <li>• UAV Design & Development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Capabilities</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Composite Fabrication</li>
                    <li>• Assembly Units</li>
                    <li>• Quality Assurance</li>
                    <li>• R&D Innovation</li>
                  </ul>
                </div>
              </div>
              <Button 
                variant="aerospace"
                size="lg"
                onClick={() => scrollToSection("about")}
              >
                Learn More About Us
              </Button>
            </div>
            
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern aerospace manufacturing facility" 
                className="rounded-xl shadow-lg w-full" 
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Precision aerospace component inspection" 
                  className="rounded-lg shadow-md w-full h-32 object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1565796719207-bc51bb419b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Composite materials manufacturing process" 
                  className="rounded-lg shadow-md w-full h-32 object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From agricultural drones to defense UAVs, we deliver cutting-edge solutions across multiple domains
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Agricultural Drones */}
            <Card className="hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Agricultural drone spraying crops in field" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Agricultural Drones</h3>
                <p className="text-slate-600 mb-4">Hexacopter configuration with 10L/16L tank capacity for precision spraying</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Max take-off weight: 30kg</li>
                  <li>• Flight time: 25-30 minutes</li>
                  <li>• Range: 1.5 KM</li>
                  <li>• GPS accuracy: ±1 meter</li>
                </ul>
                <Button variant="link" className="text-[hsl(217,91%,60%)] p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            {/* Survey Drones */}
            <Card className="hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Professional survey drone with mapping sensors" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Survey & Mapping Drones</h3>
                <p className="text-slate-600 mb-4">High-precision mapping and surveying solutions for various industries</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Advanced sensor integration</li>
                  <li>• Real-time data processing</li>
                  <li>• Centimeter-level accuracy</li>
                  <li>• Extended flight capabilities</li>
                </ul>
                <Button variant="link" className="text-[hsl(217,91%,60%)] p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            {/* VTOL Fixed Wing */}
            <Card className="hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1544724107-6d5c4caaff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="VTOL fixed-wing UAV in flight operations" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">VTOL Fixed Wing</h3>
                <p className="text-slate-600 mb-4">3M wingspan E-VTOL for long-range surveillance and reconnaissance</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Max flying height: 2000m</li>
                  <li>• Endurance: 2.8 hours</li>
                  <li>• Payload capacity: 5kg</li>
                  <li>• Cruising speed: 28m/s</li>
                </ul>
                <Button variant="link" className="text-[hsl(217,91%,60%)] p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            {/* Tactical UAV */}
            <Card className="hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Tactical military UAV for reconnaissance missions" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tactical UAV Systems</h3>
                <p className="text-slate-600 mb-4">Sierra Tango series for ISR and low altitude operations</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Max flying height: 3000m</li>
                  <li>• Endurance: 3 hours</li>
                  <li>• Payload capacity: 7kg</li>
                  <li>• Gas-powered engine</li>
                </ul>
                <Button variant="link" className="text-[hsl(217,91%,60%)] p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            {/* Target Drones */}
            <Card className="hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="High-speed target drone for military training" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Aerial Target Drones</h3>
                <p className="text-slate-600 mb-4">High-speed jet-powered target systems for military training</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Max speed: 166 m/s</li>
                  <li>• Range: 100 km</li>
                  <li>• Service ceiling: 5000m</li>
                  <li>• Detachable nose configuration</li>
                </ul>
                <Button variant="link" className="text-[hsl(217,91%,60%)] p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            {/* Hybrid Systems */}
            <Card className="hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1570630041071-d2d14ffdc0d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Hybrid power drone with advanced propulsion system" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hybrid Power Systems</h3>
                <p className="text-slate-600 mb-4">7000W petrol-electric hybrid with extended endurance capabilities</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>• Continuous power: 6000W</li>
                  <li>• Extended flight time</li>
                  <li>• Liquid cooling system</li>
                  <li>• One-click self-start</li>
                </ul>
                <Button variant="link" className="text-[hsl(217,91%,60%)] p-0">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive aerospace solutions from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[hsl(217,91%,60%)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Engineering</h3>
              <p className="text-slate-300">Advanced machining and fabrication capabilities for aerospace components</p>
            </div>

            <div className="text-center">
              <div className="bg-[hsl(217,91%,60%)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aerospace Technology</h3>
              <p className="text-slate-300">Cutting-edge aerospace systems and component development</p>
            </div>

            <div className="text-center">
              <div className="bg-[hsl(217,91%,60%)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Heavy Engineering</h3>
              <p className="text-slate-300">Large-scale manufacturing and assembly operations</p>
            </div>

            <div className="text-center">
              <div className="bg-[hsl(217,91%,60%)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UAV Development</h3>
              <p className="text-slate-300">Complete UAV design, development, and manufacturing solutions</p>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">State-of-the-Art Infrastructure</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[hsl(43,96%,56%)] w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Composite Panel Fabrication</h4>
                    <p className="text-slate-300">Advanced composite manufacturing with precision layup capabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[hsl(43,96%,56%)] w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Assembly Units</h4>
                    <p className="text-slate-300">Dedicated assembly lines for UAV and component integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[hsl(43,96%,56%)] w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-slate-300">AS 9100 D and ISO 9001/2015 certified quality processes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[hsl(43,96%,56%)] w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">R&D Innovation</h4>
                    <p className="text-slate-300">Continuous innovation in aerospace and UAV technologies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern aerospace manufacturing facility floor" 
                className="rounded-xl w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the visionaries driving India's aerospace innovation
            </p>
          </div>

          {/* Board Members */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Board of Directors</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full aerospace-gradient flex items-center justify-center text-white text-2xl font-bold">
                    S
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900">Sanjay Kumar</h4>
                <p className="text-sm text-slate-600">Chairman & CEO</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full aerospace-gradient flex items-center justify-center text-white text-2xl font-bold">
                    V
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900">Vishal Sharma</h4>
                <p className="text-sm text-slate-600">CTO & Co-founder</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full aerospace-gradient flex items-center justify-center text-white text-2xl font-bold">
                    A
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900">Ajith Menon</h4>
                <p className="text-sm text-slate-600">Head of Engineering</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full aerospace-gradient flex items-center justify-center text-white text-2xl font-bold">
                    S
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900">Sam Joseph</h4>
                <p className="text-sm text-slate-600">Head of Operations</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full aerospace-gradient flex items-center justify-center text-white text-2xl font-bold">
                    G
                  </div>
                </div>
                <h4 className="font-semibold text-slate-900">Girish Patel</h4>
                <p className="text-sm text-slate-600">Head of Manufacturing</p>
              </div>
            </div>
          </div>

          {/* Key Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Key Team Members</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white text-xl font-bold">
                      HR
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Priya Nair</h4>
                  <p className="text-sm text-slate-600 mb-2">Head of Human Resources</p>
                  <p className="text-xs text-slate-500">15+ years in aerospace HR</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white text-xl font-bold">
                      QA
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Rajesh Kumar</h4>
                  <p className="text-sm text-slate-600 mb-2">Quality Assurance Director</p>
                  <p className="text-xs text-slate-500">AS 9100 D certified specialist</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white text-xl font-bold">
                      RD
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Dr. Anita Reddy</h4>
                  <p className="text-sm text-slate-600 mb-2">R&D Director</p>
                  <p className="text-xs text-slate-500">UAV innovation specialist</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to elevate your aerospace capabilities? Contact our team for consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[hsl(217,91%,60%)] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Corporate Office</h4>
                    <p className="text-slate-300">SB-164, 3rd Cross, 1st Stage<br />Peenya Industrial Estate<br />Bengaluru, Karnataka 560058</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[hsl(217,91%,60%)] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-slate-300">Business Inquiries: <a href="tel:+919886171088" className="text-[hsl(43,96%,56%)] hover:text-yellow-400">+91 9886171088</a></p>
                    <p className="text-slate-300">Customer Service: <a href="tel:+919035364937" className="text-[hsl(43,96%,56%)] hover:text-yellow-400">+91 9035364937</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[hsl(217,91%,60%)] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-slate-300">
                      <a href="mailto:contact@cingularity.in" className="text-[hsl(43,96%,56%)] hover:text-yellow-400">contact@cingularity.in</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[hsl(217,91%,60%)] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-slate-300">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/cingularity-aerospace/" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[hsl(217,91%,60%)] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/CingularityIndia/" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[hsl(217,91%,60%)] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[hsl(217,91%,60%)] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[hsl(217,91%,60%)] transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[hsl(217,91%,60%)] transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                {/* Professional meeting room image */}
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                    alt="Professional corporate meeting room for aerospace consultations" 
                    className="w-full h-32 object-cover rounded-lg" 
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-[hsl(217,91%,60%)]" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-[hsl(217,91%,60%)]" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              {...field} 
                              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-[hsl(217,91%,60%)]" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Company</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-[hsl(217,91%,60%)]" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Inquiry Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[hsl(217,91%,60%)]">
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                              <SelectItem value="Product Information">Product Information</SelectItem>
                              <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                              <SelectItem value="Technical Support">Technical Support</SelectItem>
                              <SelectItem value="Quote Request">Quote Request</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              {...field} 
                              placeholder="Tell us about your requirements..."
                              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-[hsl(217,91%,60%)] resize-none" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      variant="aerospace"
                      size="lg"
                      className="w-full"
                      disabled={createInquiryMutation.isPending}
                    >
                      {createInquiryMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cingularity Aerospace™</h3>
              <p className="text-slate-300 mb-4">Elevating Aviation Standards</p>
              <p className="text-sm text-slate-400">AS 9100 D & ISO 9001/2015 Certified</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Agricultural Drones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Survey Drones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VTOL Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tactical UAVs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Target Drones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Assurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-700 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Cingularity Aerospace™. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
