import Image from "next/image";
import homedata from "@/data/homedata.json"
import HeroSection from "@/Components/Hero";
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
import GlobalOffices from "@/Components/GlobalOffices";
import Footer from "@/Components/Footer";
import DontSettle from "@/Components/dashboard/DontSettle";
import AppDevelopmentServices from "@/Components/AppDevelopmentServices";
import BusinessInterfaces from "@/Components/BusinessInterfaces";
import AppOperations from "@/Components/AppOperations";
import LatestBlogs from "@/Components/LatestBlogs";
import MistakesToAvoid from "@/Components/MistakesToAvoid";
import CompanyTestimonials from "@/Components/CompanyTestimonials";
import AppPortfolio from "@/Components/AppPortfolio";
import RestaurantAppSolutions from "@/Components/RestaurantAppSolutions";
import AppDevelopmentProcess from "@/Components/AppDevelopmentProcess";


export default function Home() {
  return (
    <>
      <HeroSection data={homedata.heroSection} />
      <OfficialPartners data={homedata.officialPartners} />
      <Section3 data={homedata.section3} />
      <OverviewSection data={homedata.overviewSection} />
      <RestaurantAppFeatures data={homedata.restaurantAppFeaturesSection} />
      <IncludedWithSection data={homedata.includedSection} />
      <AppDevelopmentServices data={homedata.developmentServicesSection} />
      <CallToAction data={homedata.callToAction} />
      <HowItWorks data={homedata.howItWorks} />
      <MobileMockUp data={homedata.mobileMockupSection} />
      <FeatureSection data={homedata.featureSection} />
      <DemoSection data={homedata.demoSection} />
      <DontSettle data={homedata.dontSettle} />
      <Dashboard data={homedata.dashboardSection} />
      <DemoSection data={homedata.demoSection} />
      {/* <BusinessInterfaces data={homedata.businessInterfaces} /> */}
      <AppOperations data={homedata.appOperations} />
      <MistakesToAvoid data={homedata.mistakesToAvoidSection} />
      <AppDevelopmentProcess data={homedata.appDevelopmentProcessSteps} />
      <RestaurantAppSolutions data={homedata.restaurantAppSolutions} />
      <AppDevelopment data={homedata.appDevelopment} />
      <AppLanding data={homedata.appLandingSection} />
      <FAQ data={homedata.faqSection} />
      <VideoTestimonialsSection data={homedata.videoTestimonials} />
      <CompanyTestimonials data={homedata.companyTestimonials} />
      <DiscussProject data={homedata.discussProject} />
      <AppPortfolio data={homedata.restaurantData} />
      <LatestBlogs data={homedata.latestBlogs} />
      <GlobalOffices data={homedata.offices} />
      <Footer />
    </>
  );
}
