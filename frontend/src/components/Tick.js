import React from "react";

const Tick = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <i
        class="bi bi-check-circle-fill"
        style={{ color: "green", fontSize: "100px" }}
      ></i>
    </div>
  );
};

export default Tick;
