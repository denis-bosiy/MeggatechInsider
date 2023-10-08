import React from "react";
import "./ExampleButton.scss";

interface IExampleButtonProps {
  mode?: "positive" | "negative";
}

const ExampleButton = (props: IExampleButtonProps) => {
  return <button className={"example-button " + ("-" + props.mode)}>Получить отчёт</button>;
};

export default ExampleButton;
