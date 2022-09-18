import { useState } from "react";



const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocused = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="formInput">
        <input
          {...inputProps}
          onChange={onChange}
          className="input"
          required
          onBlur={handleFocused}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default FormInput;
