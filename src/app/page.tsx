import AboutUs from "@/components/Home/AboutUs/AboutUs";
import Banner from "@/components/Home/Banner/Banner";
import OurExpertise from "@/components/Home/OurExpertise/OurExpertise";
import Projects from "@/components/Home/Projects/Projects";
import TransformingSpaces from "@/components/Home/TransformingSpaces/TransformingSpaces";


export default function Home() {
  return (
    <main className="">
      <Banner />
      <AboutUs/>
      <TransformingSpaces/>
      <Projects/>
      <OurExpertise/>
    </main>
  );
}
