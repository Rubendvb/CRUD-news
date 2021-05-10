import React from "react";
import { Notice } from "./News";

interface Props {
  n: Notice;
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
