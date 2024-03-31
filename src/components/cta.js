import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-cyan-900 px-7 py-7 lg:px-12 lg:py-20 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
          Subscribe to our Blog
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Hungry for knowledge on cutting-edge AI technology in communications?, Subscribe to our blog and stay ahead of the game with expert tips and exclusive content.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-cyan-700 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Subscribe
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;