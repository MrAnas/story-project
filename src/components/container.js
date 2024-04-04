import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container px-2 sm:px-4 md:px-8 pb-4 mx-auto   ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;