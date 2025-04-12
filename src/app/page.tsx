import NavBar from "../../components/NavBar";
import Definition from "../../components/Definition";
import Stats from "../../components/Stats";
import Features from "../../components/Features";
import Process from "../../components/Process";
import Testimonials from "../../components/Testimonials";
export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <NavBar />
      <Definition />
      <Stats />
      <Features />
      <Process />
      <Testimonials />
    </div>
  );
}
