import { useEffect, useState } from "react";

export const useDebounce = (value: string, millisecond: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, millisecond);

    return () => clearTimeout(handler);
  }, [value, millisecond]);

  return debounceValue;
};

/* 
//* What is debounce?

 is useful for delaying the execution of functions or state updates until a specified time period has passed without any further changes to the input value
*/
