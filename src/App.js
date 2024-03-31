import logo from './logo.svg';
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SectionTitle from "./components/sectionTitle";

import { benefitOne, benefitTwo } from "./components/data";
import Video from "./components/video";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";
import Faq from "./components/faq";
import PopupWidget from "./components/popupWidget";
import './tailwind.css'
import './App.css';
import CampaignForm from './CampaignForm';

function App() {
  return (
    <div className="App">


      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />

      {/* HERE IS FORM */}
      <CampaignForm/>
      <Cta />
      <Footer />
      <PopupWidget />


    </div>
  );
}

export default App;
