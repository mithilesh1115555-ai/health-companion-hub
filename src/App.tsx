import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Chatbot from "./pages/Chatbot";
import SkinDetection from "./pages/SkinDetection";
import ReportScanning from "./pages/ReportScanning";
import Appointments from "./pages/Appointments";
import HealthPrediction from "./pages/HealthPrediction";
import VoiceConsultation from "./pages/VoiceConsultation";
import HealthRecords from "./pages/HealthRecords";
import Alerts from "./pages/Alerts";
import MentalHealth from "./pages/MentalHealth";
import Games from "./pages/Games";
import SignalAnalysis from "./pages/SignalAnalysis";
import CancerDetection from "./pages/CancerDetection";
import Lifestyle from "./pages/Lifestyle";
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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/skin-detection" element={<SkinDetection />} />
          <Route path="/report-scanning" element={<ReportScanning />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/health-prediction" element={<HealthPrediction />} />
          <Route path="/voice-consultation" element={<VoiceConsultation />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/games" element={<Games />} />
          <Route path="/signal-analysis" element={<SignalAnalysis />} />
          <Route path="/cancer-detection" element={<CancerDetection />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
