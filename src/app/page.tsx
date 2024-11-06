import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "framer-motion/client";

export default function Home (){
  return(
    <main >
    <HeroSection />
    <FeaturedCourses/>
    <WhyChooseUs/>
    <MusicSchoolTestimonials/>
   </main>
  )
}