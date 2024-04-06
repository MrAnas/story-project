import { Link as ScrollLink } from "react-scroll";
import Container from "./container";
import { HeroBgOne, HeroBgTwo } from "./img";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const {t} = useTranslation()
  return (
    <div className="bg-[#E9E9E9] relative">
      <HeroBgOne />
      <HeroBgTwo />

      <Container className="flex flex-col w-full justify-center items-center ">
        <div className="flex items-center justify-center w-full ">
          <div className="max-w-3xl ">
            <h1 className="text-3xl l md:text-5xl lg:text-7xl font-bold leading-snug tracking-tight text-gray-800  lg:leading-tight xl:leading-tight">
              {t("heading")}
            </h1>
            <p className="py-5 max-w-md md:max-w-lg lg:max-w-xl mx-auto text-lg md:text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
             {t("subheading")}
            </p>

            <ScrollLink
              to="campaignForm" // ID of the target section
              smooth={true}
              duration={500}
              className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row"
            >
              <button className="px-8 whitespace-nowrap py-4 text-lg font-semibold text-center text-white w-[185px] bg-[#4B5FFF] hover:bg-[#4a5ce4] rounded-xl shadow-md mx-auto">
                {t("herobutton")}
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src="/storyHero.png"
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;


 // const handleChange = (event) => {
  //   setFormValues({
  //     ...formValues,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  // console.log({ form });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(process.env.REACT_APP_BACKEND_PRODUCTION);
  //   const response = await fetch(
  //     process.env.REACT_APP_BACKEND_PRODUCTION + "/submit-campaign",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formValues),
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data); // Handle the response as needed

  //   if (response.ok) {
  //     open(); // Open the modal
  //   }
  // };