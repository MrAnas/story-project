import React from "react";
import Container from "./container";
import userOneImg from "./img/user1.jpg";
import userTwoImg from "./img/user2.jpg";
import userThreeImg from "./img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              <Mark>Guaranteed Uniqueness</Mark>
              We use advanced artificial intelligence technologies and our expertise to create texts that meets your specific needs!.
                          </p>
            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
            <Mark>Saves you time and money</Mark>
            Typically it takes 1-2 days to craft a press release with the help of a copy writer and editor. However, our service streamlines the process and produces a press release for you in mere minutes, eliminating the need for professional personnel.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              <Mark>Adds to your progressive image</Mark>
            Using AI to generate the press release can be leveraged as an advantage when presenting it to your boss. Also it can be as stand alone story.
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;