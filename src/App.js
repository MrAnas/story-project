import Hero from "./components/hero";
import Navbar from "./components/navbar";
// import Footer from "./components/footer";
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
      {/* <About /> */}
      {/* <SectionTitle
        pretitle="About the generator"
        title="Benefits of using Story Inc Generator">
      </SectionTitle> */}
      <Features />
      {/* HERE IS FORM */}
      <div id="campaignForm">
        <CampaignForm />
      </div>
      <Cta />
      {/* <Footer /> */}
      <FooterNew />
    </div>
  );
}

export default App;
