import React from "react";
import axios from "axios";

export default function HttpRequest() {
  const url =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
  axios
    .get(url)
    .then((result) => console.log(result.data))
    .catch((error) => console.log(error));
  return <div></div>;
}
