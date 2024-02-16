import React, { createContext } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";

const Details = createContext();

export default function UseContextP() {
  const details = {
    user: "HTS",
    pass: "1234",
    email: "hts@example.com",

  };

  return (
    <div>
      <Details.Provider value={details}>
        <CompA />
        <CompB />
        <CompC />
      </Details.Provider>
    </div>
  );
}

export { Details };
