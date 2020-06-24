import React from "react";

const PrimaryButton = props => {
  const { label, style, className } = props;
  return <button className={className} style={style}>{label}</button>;
};
export default PrimaryButton;
