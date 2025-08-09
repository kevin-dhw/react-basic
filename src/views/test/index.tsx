import React from "react";
import Home from "../home";
import contentData from "./data";

const Test: React.FC = () => {
  return (
    <div className=" flex gap-[40px] p-[20px]">
      <div>
        {contentData.map((item, idx) => {
          return (
            <div key={idx}>
              <div className=" font-bold text-[18px]">{item.title}</div>
              <div className=" pl-[20px]">
                {item.list.map((ele, index) => {
                  return (
                    <div key={index}>
                      <span>{ele.subTitle}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex-1">
        <Home></Home>
      </div>
    </div>
  );
};

export default Test;
