import ChatbotChat from "@/components/home-6/ChatbotChat";
import ChatControl from "@/components/home-6/ChatControl";
import Feature from "@/components/home-6/Feature";
import Hero from "@/components/home-6/Hero";
import React from "react";
import Integration from "@/components/home-6/Integration";
import Footer from "@/components/footer/Footer";
import PricingV2 from "@/components/shared/PricingV2";
import TestimonialV2 from "@/components/shared/TestimonialV2";
import Approach from "@/components/home-6/Approach";
import CallToActionV2 from "@/components/shared/CallToActionV2";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
export const metadata = {
  title: "Chatbot",
  description: "Discover Daiki Media's AI-powered chatbot solutions designed to enhance customer interaction and automate support.",
  keywords: "Daiki Media, chatbot solutions, AI chatbots, customer support, business automation, conversational AI",
};
const HomePage6 = () => {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <Feature />
        <ChatbotChat />
        <ChatControl />
        <Integration />
        <PricingV2 pricingDescription />
        <TestimonialV2 />
        <Approach />
        <CallToActionV2 />
      </main>
      <Footer />
    </>
  );
};

export default HomePage6;
