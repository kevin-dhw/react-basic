import React from "react";
import classNames from "classnames";

const Home: React.FC = () => {
  return (
    <div className=" flex gap-4">
      <div
        className={classNames(
          " h-[100px] w-[100px] border shadow-[1px_1px_10px_1px_#000]",
          " transition-all ease-in-out delay-100 duration-1000 hover:scale-110 hover:bg-red-500"
        )}
      >
        content
      </div>
    </div>
  );
};

export default Home;
