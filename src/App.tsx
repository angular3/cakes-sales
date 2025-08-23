
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import WeddingCakes from "./pages/WeddingCakes";
import BirthdayCakes from "./pages/BirthdayCakes";
import HolidayCakes from "./pages/HolidayCakes";
import CorporateCakes from "./pages/CorporateCakes";
import CustomOrder from "./pages/CustomOrder";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import MasterClasses from "./pages/MasterClasses";
import Catering from "./pages/Catering";
import CakeDetail from "./pages/CakeDetail";
import Profile from "./pages/Profile";
import OrderTracking from "./pages/OrderTracking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/wedding-cakes" element={<WeddingCakes />} />
          <Route path="/birthday-cakes" element={<BirthdayCakes />} />
          <Route path="/holiday-cakes" element={<HolidayCakes />} />
          <Route path="/corporate-cakes" element={<CorporateCakes />} />
          <Route path="/custom-order" element={<CustomOrder />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/master-classes" element={<MasterClasses />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/cake/:id" element={<CakeDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
