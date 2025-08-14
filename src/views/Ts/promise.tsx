import React from "react";

const Home: React.FC = () => {
  const fun = () => {
    return new Promise((resolve) => {
      resolve({ id: "123" });
    });
  };
  fun();

  const fn = <T, U>(num: T, str: U): T => {
    console.log(str, "str");
    return num;
  };
  fn(1, "1");

  return (
    <div className=" flex gap-4">
      <div>content</div>
    </div>
  );
};

export default Home;
