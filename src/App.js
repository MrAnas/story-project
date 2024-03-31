import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SectionTitle from "./components/sectionTitle";

import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";
import './tailwind.css'
import './App.css';
import CampaignForm from './CampaignForm';

function App() {
  return (
    <div className="App">


      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="About the generator"
        title="Benefits of using Story Inc Generator">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />

      {/* HERE IS FORM */}
      <p className='text-4xl'>Press Release Form</p>
      <CampaignForm/>
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
