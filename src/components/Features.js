import React from "react";

const AboutItems = [
  {
    id: 1,
    img: '/unique.png',
    title: 'Guaranteed Uniqueness',
    text: 'We use advanced artificial intelligence technologies and our expertise to create texts that meets your specific needs!.'
  },
  {
    id: 2,
    img: '/saves.png',
    title: 'Saves you time and money',
    text: 'Typically it takes 1-2 days to craft a press release with the help of a copy writer and editor. However, our service streamlines the process and produces a press release for you in mere minutes, eliminating the need for professional personnel.'
  },
  {
    id: 3,
    img: '/adds.png',
    title: 'Adds to your progressive image',
    text: 'Using AI to generate the press release can be leveraged as an advantage when presenting it to your boss. Also it can be as stand alone story.'
  },
]

const Features  = () => {
  return (
    <div className='bg-[#4B5FFF]'>
      <div className="container flex flex-col gap-12 mx-auto py-12 lg:py-24  px-2 sm:px-4 md:px-8">
        <h2 className="font-bold text-white   text-3xl lg:text-5xl py-4">
          About the generator
        </h2>
      <ul className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {AboutItems.map((about) => (
          <li className="bg-[#ffffff] flex flex-col gap-8 rounded-2xl border border-[#D0D5DD]  p-3 lg:p-6">
            <img src={about.img} alt="img"/>
            <div className="flex flex-col gap-4">
            <h4 className="text-start text-[#0E1125] font-semibold text-lg">{about.title}</h4>
            <p className="text-start text-base text-[#525356] font-normal">{about.text}</p>

            </div>
          </li>
        ))

        }
      </ul>

      </div>
    </div>
  );
}


// function Mark(props) {
//   return (
//     <>
//       {" "}
//       <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4">
//         {props.children}
//       </mark>{" "}
//     </>
//   );
// }

export default Features;