import React from "react";
import './CheckBox.css';

const CheckBox = (props) => {
  const {
    id,
    name,
    label,
    onChange,
    checked,
    variant
  } = props;

  let className = "custom-control-label ";
  if (variant !== null ) {
    className += variant;
  }

  return (
      <div
        className="custom-control custom-checkbox"
      >
        <input
          type="checkbox"
          className="custom-control-input"
          id={id}
          name={name}
          onChange={onChange}
          checked={checked}
        />
        <label
          className={className}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
  );
}


export default CheckBox;