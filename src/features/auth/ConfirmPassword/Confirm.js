import * as React from "react";
import * as ReactDOM from "react-dom";
import VerificationInput from "react-verification-input";
import "./confirm.scss";

const Confirm = () => {
  return (
    <>
      <div className="Confirm">
        <div className="Confirm_child">
          <div>
          <h1>SMS kodni kiriting</h1>
          <p>Sizning raqamingizga kelgan tasqidlash ko'dini kiriting</p>
          </div>
          <VerificationInput
            onChange={console.log}
            inputField={{
              onChange: (e) => {
                console.log(e.nativeEvent.target.value);
              },
            }}
            length={6}
            validChars="0-9"
            removeDefaultStyles
            container={{
              className: "container",
            }}
            characters={{
              className: "characters",
            }}
            character={{
              className: "character",
              classNameInactive: "character--inactive",
              classNameSelected: "character--selected",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Confirm;
