import React from "react";
import axios from "axios";

export default function HttpRequest() {
  const url =
    "http://localhost:4000/data";
  axios
    .get(url)
    .then((result) => console.log(result.data))
    .catch((error) => console.log(error));
  return <div></div>;
}
