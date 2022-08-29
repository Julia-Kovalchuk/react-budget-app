import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: string = "") => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return { value, onChange };
};
