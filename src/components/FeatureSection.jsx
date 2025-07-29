import { useState } from "react";
import { features } from "../constants/DataSets";

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-center items-center px-4 py-2 rounded-full bg-slate-900 w-fit">
        Features
      </div>
      <div
        id="All features"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10"
      >
        {features.map((cur, idx) => {
          return (
            <div
              key={idx}
              id="single feature"
              className="flex p-4 bg-gray-950/50 rounded-lg"
            >
              <div className="basis-2/12">{cur.icon}</div>
              <div
                id="title and description"
                className="flex flex-col basis-10/12"
              >
                <p className="text-xl">{cur.text}</p>
                <p className="text-sm">{cur.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
