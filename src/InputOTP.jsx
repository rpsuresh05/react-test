import { useEffect, useRef, useState } from "react";

const size = 4;

function InputOTP() {
  const [value, setValue] = useState(Array(size).fill(""));
  const inputRefs = useRef(Array(size).fill(null));

  const handleInputChange = (i, val) => {
    if (!val) return;

    console.log("input change", { i, val }, val.length);
    const tempArray = value.slice();
    tempArray[i] = val.substring(val.length - 1);
    setValue(tempArray);

    if (i < value.length - 1 && tempArray[i]) {
      inputRefs.current[i + 1]?.focus();
    }

    if (tempArray.join("").length == 4) {
      console.log("OTP SUCCESS!!!");
    }
  };

  useEffect(() => {
    console.log(inputRefs.current, "REFARR");
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <>
      {value.map((each, idx) => (
        <input
          className="otp-input"
          id={`${idx}-id`}
          pattern="[0-9]"
          inputMode="numeric"
          ref={(node) => (inputRefs.current[idx] = node)}
          onKeyDown={(e) => {
            const pressedKey = e.key;
            console.log(value, "onKeyDown");
            if (pressedKey === "Backspace" && !value[idx]) {
              inputRefs.current[idx - 1]?.focus();
            }
            if (pressedKey === "Backspace" && value[idx]) {
              const tempArray = value.slice();
              tempArray[idx] = "";
              setValue(tempArray);
            }
          }}
          onChange={(e) => {
            console.log("Trigger change", e.target, e.target.value);
            handleInputChange(idx, e.target.value);
          }}
          onClick={() => {
            inputRefs.current[idx]?.setSelectionRange(1, 1);
          }}
          value={each}
          key={idx}
        />
      ))}
    </>
  );
}

export default InputOTP;
