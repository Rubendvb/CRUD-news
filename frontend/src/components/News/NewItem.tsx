import React from "react";
import { Report } from "./News";

interface Props {
  n: Report;
}

const NewItem = ({ n }: Props) => {
  return (
    <div>
      <h1>{n.title}</h1>
      <p>{n.description}</p>
    </div>
  );
};

export default NewItem;
