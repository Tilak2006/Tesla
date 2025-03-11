import React from "react";

const TrueFocus = ({ sentence, manualMode, blurAmount, borderColor, animationDuration, pauseBetweenAnimations }) => {
  return (
    <div
      style={{
        filter: `blur(${blurAmount}px)`,
        border: `2px solid ${borderColor}`,
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        animation: `focusAnimation ${animationDuration}s infinite alternate`
      }}
    >
      {sentence}
    </div>
  );
};

export default TrueFocus;
