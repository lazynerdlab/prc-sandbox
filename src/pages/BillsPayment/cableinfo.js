import React from "react";
import dstv from "../../assets/dstv.jpg";
import gotv from "../../assets/gotv.jpg";
import startimes from "../../assets/startimes.jpg";
export const CableData = [
  {
    value: "dstv",
    label: React.createElement(() => (
      <div className="flex justify-between items-center">
        DSTV <img src={dstv} className="h-[2rem] w-[2rem]" />
      </div>
    )),
  },
  {
    value: "gotv",
    label: React.createElement(() => (
      <div className="flex justify-between items-center">
        GOTV <img src={gotv} className="h-[2rem] w-[2rem]" />
      </div>
    )),
  },
  {
    value: "startimes",
    label: React.createElement(() => (
      <div className="flex justify-between items-center">
        Startimes <img src={startimes} className="h-[2rem] w-[2rem]" />
      </div>
    )),
  },
];
export const CableVariations = {
  dstv: [
    { label: "DStv Great Wall	₦1725 + ₦39 Service Fee", value: "500" },
    { label: "DStv Padi	₦2150 + ₦39 Service Fee", value: "dstv-padi" },
    { label: "DStv Yanga	₦2950 + ₦39 Service Fee", value: "dstv-yanga" },
    { label: "DStv Confam	₦5300 + ₦39 Service Fee", value: "dstv-confam" },
    { label: "DStv Asian	₦7100 + ₦39 Service Fee", value: "dstv6" },
    { label: "DStv Compact	₦9000 + ₦39 Service Fee", value: "dstv79" },
    { label: "DStv Compact Plus	₦14250 + ₦39 Service Fee", value: "dstv7" },
    { label: "DStv Premium	₦21000 + ₦39 Service Fee", value: "dstv3" },
    {
      label: "DStv Premium Asia	₦23500 + ₦39 Service Fee",
      value: "dstv10",
    },
    {
      label: "DStv Premium-French	₦29300 + ₦39 Service Fee",
      value: "dstv9",
    },
    {
      label: "DStv Confam + ExtraView	₦8200 + ₦39 Service Fee",
      value: "confam-extra",
    },
    {
      label: "DStv Yanga + ExtraView	₦5850 + ₦39 Service Fee",
      value: "yanga-extra",
    },
    {
      label: "DStv Padi + ExtraView	₦5050 + ₦39 Service Fee",
      value: "padi-extra",
    },
    {
      label: "DStv Compact + Asia	₦16100 + ₦39 Service Fee",
      value: "com-asia",
    },
    {
      label: "DStv Compact + Extra View	₦11900 + ₦39 Service Fee",
      value: "dstv30",
    },
    {
      label: "DStv Compact + French Touch ₦11650 + ₦39 Service Fee",
      value: "com-frenchtouch",
    },
    {
      label: "DStv Premium – Extra View ₦23900 + ₦39 Service Fee",
      value: "dstv33",
    },
    {
      label: "DStv Compact Plus – Asia ₦21350 + ₦39 Service Fee",
      value: "dstv40",
    },
    {
      label: "DStv Compact + French Touch + ExtraView	₦14550 + ₦39 Service Fee",
      value: "com-frenchtouch-extra",
    },
    {
      label: "DStv Compact + Asia + ExtraView	₦19000 + ₦39 Service Fee",
      value: "com-asia-extra",
    },
    {
      label: "DStv Compact Plus + French Plus	₦23550 + ₦39 Service Fee",
      value: "dstv43",
    },
    {
      label: "DStv Compact Plus + French Touch	₦16900 + ₦39 Service Fee",
      value: "complus-frenchtouch",
    },
    {
      label: "DStv Compact Plus – Extra View	₦17150 + ₦39 Service Fee",
      value: "dstv45",
    },
    {
      label:
        "DStv Compact Plus + FrenchPlus + Extra View	₦26450 + ₦39 Service Fee",
      value: "complus-french-extraview",
    },
    {
      label: "DStv Compact + French Plus	₦18300 + ₦39 Service Fee",
      value: "dstv47",
    },
    {
      label: "DStv Compact Plus + Asia + ExtraView	₦24250 + ₦39 Service Fee",
      value: "dstv48",
    },
    {
      label: "DStv Premium + Asia + Extra View	₦31000 + ₦39 Service Fee",
      value: "dstv61",
    },
    {
      label: "DStv Premium + French + Extra View	₦32200 + ₦39 Service Fee",
      value: "dstv62",
    },
    {
      label: "DStv HDPVR Access Service	₦2900 + ₦39 Service Fee",
      value: "hdpvr-access-service",
    },
    {
      label: "DStv French Plus Add-on	₦9300 + ₦39 Service Fee",
      value: "frenchplus-addon",
    },
    {
      label: "DStv Asian Add-on	₦7100 + ₦39 Service Fee",
      value: "asia-addon",
    },
    {
      label: "DStv French Touch Add-on	₦2650 + ₦39 Service Fee",
      value: "frenchtouch-addon",
    },
    {
      label: "DStv ExtraView Access	₦2900 + ₦39 Service Fee",
      value: "extraview-access",
    },
    {
      label: "DStv French 11	₦4100 + ₦39 Service Fee",
      value: "french11",
    },
  ],
  gotv: [
    { label: "GOtv Smallie	₦900 + ₦39 Service Fee", value: "gotv-smallie" },
    { label: "GOtv Jinja	₦1900 + ₦39 Service Fee", value: "gotv-jinja" },
    { label: "GOtv Jolli	₦2800 + ₦39 Service Fee", value: "gotv-jolli" },
    { label: "GOtv Max	₦4150 + ₦39 Service Fee", value: "gotv-max" },
    { label: "GOtv Supa	₦5500 + ₦39 Service Fee", value: "gotv-supa" },
  ],
  startimes: [
    { label: "Startimes Nova	₦900 + ₦39 Service Fee", value: "nova" },
    { label: "Startimes Basic	₦1850 + ₦39 Service Fee", value: "basic" },
    { label: "Startimes Smart	₦2600 + ₦39 Service Fee", value: "smart" },
    { label: "Startimes Classic ₦2750 + ₦39 Service Fee", value: "classic" },
    { label: "Startimes Super	₦4900 + ₦39 Service Fee", value: "super" },
  ],
};
