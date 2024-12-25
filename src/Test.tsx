import React from "react";

export default function Test() {
  function getFirst<T>(items: T[] | T): T | undefined {
    return items[0];
  }
  const firstNumber = getFirst<number>([1, 2, 3]);
  const firstNumber2 = getFirst<string>(["a", "b", "c"]);
  const firstNumber3 = getFirst<boolean>(true);
  const firstNumber4 = getFirst<boolean | string | number>([true, "r", 1]);
  console.log(firstNumber, firstNumber2, firstNumber3, firstNumber4);

  return (
    <div style={{ color: "white" }}>
      {firstNumber} {firstNumber2}
      {firstNumber3}
      {firstNumber4}
    </div>
  );
}
