import React from "react";

const Home: React.FC = () => {
  const fun = () => {
    return new Promise((resolve) => {
      resolve({ id: "123" });
    });
  };
  fun();

  return (
    <div className=" flex gap-4">
      <div>content</div>
    </div>
  );
};

export default Home;
