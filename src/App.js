import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Features from "./components/Features";
import Cta from "./components/cta";
import "./tailwind.css";
import "./App.css";
import CampaignForm from "./CampaignForm";
import FooterNew from "./components/footerNew";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <div id="campaignForm">
        <CampaignForm />
      </div>
      <Cta />
      <FooterNew />
    </div>
  );
}

export default App;
