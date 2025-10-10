import Image from "next/image";
import homedata from "@/data/homedata.json"
import HeroSection from "@/Components/Hero";
import IndustriesSection from "@/Components/IndustriesSection";
import OfficialPartners from "@/Components/OfficialPartners";
import RestaurantAppFeatures from "@/Components/RestaurantAppFeatures";
import Section3 from "@/Components/Section3";
import CallToAction from "@/Components/CallToAction";
import HowItWorks from "@/Components/HowItWorks";
import MobileMockUp from "@/Components/MobileMockUp";
import IncludedWithSection from "@/Components/IncludedWithSection";
import OverviewSection from "@/Components/OverviewSection";
import FeatureSection from "@/Components/FeatureSection";
import DemoSection from "@/Components/DemoSection";
import Dashboard from "@/Components/Dashboard";
import AppDevelopment from "@/Components/AppDevelopment";
import AppLanding from "@/Components/AppLanding";
import FAQ from "@/Components/FAQ";
import VideoTestimonialsSection from "@/Components/VideoTestimonialsSection";
import DiscussProject from "@/Components/DiscussProject";
import TechBlogs from "@/Components/TechBlogs";
import GlobalOffices from "@/Components/GlobalOffices";
import Footer from "@/Components/Footer";
// import Overview from "../Components/OverView";

export default function Home() {
  return (
    <>
      <HeroSection data={homedata.heroSection} />
      <OfficialPartners data={homedata.officialPartners} />
      <Section3 data={homedata.section3} />
      {/* <Overview/> */}
      <OverviewSection />
      <RestaurantAppFeatures />
      <IncludedWithSection />
      {/* <IndustriesSection data={homedata.industriesSection} /> */}
      <CallToAction data={homedata.callToAction} />
      <HowItWorks data={homedata.howItWorks} />
      <MobileMockUp data={homedata.mobileMockupSection} />
      <FeatureSection data={homedata.featureSection} />
      <DemoSection />
      <Dashboard data={homedata.dashboardSection} />
      <AppDevelopment />
      <AppLanding />
      <FAQ />
      <VideoTestimonialsSection data={homedata.videoTestimonials} />
      <DiscussProject data={homedata} />
      <TechBlogs />
      <GlobalOffices data={homedata.offices} />
      <Footer />
    </>
  );
}
