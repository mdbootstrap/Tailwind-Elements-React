import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputDisabled(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 xl:w-96 pt-5">
        <TEInput
          type="text"
          id="exampleFormControlInput5"
          label="Disabled input"
          placeholder="Disabled input"
          disabled
        ></TEInput>
      </div>
    </div>
  );
}
