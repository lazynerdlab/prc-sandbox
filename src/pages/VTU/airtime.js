import React from "react";
import airtel from "../../assets/airtel.jpg";
import mtn from "../../assets/mtn.jpg";
import glo from "../../assets/glo.jpg";
import etisalat from "../../assets/9mobile.jpg";
export const airtime = () => [
  {
    value: "mtn",
    label: React.createElement(
      <div className="flex justify-between items-center">
        MTN <img src={mtn} className="h-[1.2rem] w-[1.2rem]" />
      </div>
    ),
  },
  {
    value: "airtel",
    label: React.createElement(
      <div className="flex justify-between items-center">
        AIRTEL <img src={airtel} className="h-[1.2rem] w-[1.2rem]" />
      </div>
    ),
  },
  {
    value: "glo",
    label: React.createElement(
      <div className="flex justify-between items-center">
        GLO <img src={glo} className="h-[1.2rem] w-[1.2rem]" />
      </div>
    ),
  },
  {
    value: "etisalat",
    label: React.createElement(
      <div className="flex justify-between items-center">
        9MOBILE <img src={etisalat} className="h-[1.2rem] w-[1.2rem]" />
      </div>
    ),
  },
];
