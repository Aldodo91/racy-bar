import React from "react";

const Footer = ({ show }) => {
  return (
    <>
      {show && (
        <div
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#3b7589",
          }}
        ></div>
      )}
    </>
  );
};

export default Footer;
