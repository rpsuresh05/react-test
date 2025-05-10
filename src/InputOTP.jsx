import { useState } from "react";

const size = 4;

function InputOTP() {
  const [value, setValue] = useState(Array(size).fill(""));

  const handleInputChange = (i, val) => {
    const tempArray = value.slice();
    tempArray[i] = val;
    setValue(tempArray);
  };

  return (
    <>
      {value.map((each, idx) => (
        <input
          className="otp-input"
          id={`${idx}-id`}
          pattern="[0-9]"
          inputMode="numeric"
          onFocus={(e) => {
            // Use setTimeout to ensure the caret is moved after the focus event
            setTimeout(() => {
              const lengthSoFar = e.target.value.length;
              e.target.setSelectionRange(lengthSoFar, lengthSoFar);
            }, 0);
          }}
          onKeyUp={(e) => {
            const pressedKey = e.key;
            if (/[0-9]{1}/.test(pressedKey)) {
              handleInputChange(idx, e.key);
              const newId = `${idx + 1}-id`;
              document.getElementById(newId)?.focus();
            } else if (pressedKey === "Backspace") {
              handleInputChange(idx, "");
              const newId = `${idx - 1}-id`;
              document.getElementById(newId)?.focus();
            }
          }}
          value={each}
          key={idx}
        />
      ))}
    </>
  );
}

export default InputOTP;
