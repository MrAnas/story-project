import { useTranslation } from "react-i18next";

const Cta = () => {
  const {t} = useTranslation()
  return (
<div className="px-2 pb-12 md:pb-16 lg:pb-24">
    <div className="container relative bg-[#00263A]  rounded-3xl py-10 lg;py-20 flex flex-col gap-12 mx-auto   px-2 sm:px-4 md:px-8">
      <img
        className="absolute hidden sm:flex top-0 left-16 "
        src="/bgBig.png"
        alt="/bgBig.png"
      />
      <img
        className="absolute  hidden sm:flex top-0 right-32 "
        src="/bgSmall.png"
        alt="/bgSmall.png"
      />
      <div className="flex flex-col justify-center items-center z-10 gap-4">
        <h2 className="font-bold text-white   text-3xl lg:text-5xl py-4">{t("subscribeHead")}</h2>
        <p className="py-5 max-w-md md:max-w-lg lg:max-w-xl mx-auto text-lg md:text-xl leading-normal text-white lg:text-xl xl:text-2xl ">
        {t("subscribeSubHead")}
            </p>
            <div className="flex gap-6 flex-wrap justify-center items-center">
              <h4 className="font-semibold text-white text-xl">Story.inc</h4>
              <button
              
               
              className="px-8 py-4 text-lg font-semibold text-center text-white w-[185px] bg-[#4B5FFF] hover:bg-[#4a5ce4] rounded-xl shadow-md mx-auto">
            {t("subscribe")}
            </button>
            </div>
      </div>
    </div>

</div>
  );
};

export default Cta;
