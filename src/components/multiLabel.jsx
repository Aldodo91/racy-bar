import React from "react";

const MultiLabel = ({ msg, langIT }) => {
  const computeMessageTitle = (msg, langIT) => {
    return langIT ? msg.title.it : msg.title.en;
  };

  const computeMessageMain = (msg, langIT) => {
    return langIT ? msg.main.it : msg.main.en;
  };

  return (
    <>
      <div className="label">
        {computeMessageTitle(msg, langIT)}
        <div className="label main">{computeMessageMain(msg, langIT)}</div>
      </div>
    </>
  );
};

export default MultiLabel;
