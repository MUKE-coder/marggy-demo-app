"use client";
import React, { useState } from "react";

export default function Shop() {
  function handleClick(name) {
    console.log(name);
  }
  // hOOk => working logic to solve a small problem
  const [activeTab, setActiveTab] = useState("tab-3");
  console.log(activeTab);
  return (
    <div>
      <h2>Shop Page</h2>
      {/* <button className="cursor-pointer" onClick={() => handleClick("JB")}>
        Click Me
      </button> */}
      <div className="flex">
        <button
          onClick={() => setActiveTab("tab-1")}
          className={`${
            activeTab == "tab-1"
              ? "cursor-pointer py-2 px-6 rounded-full bg-blue-600 text-white"
              : "cursor-pointer py-2 px-6 rounded-full bg-slate-200 text-black"
          }`}
        >
          Tab1
        </button>

        <button
          onClick={() => setActiveTab("tab-2")}
          className={`${
            activeTab == "tab-2"
              ? "cursor-pointer py-2 px-6 rounded-full bg-blue-600 text-white"
              : "cursor-pointer py-2 px-6 rounded-full bg-slate-200 text-black"
          }`}
        >
          Tab2
        </button>
        <button
          onClick={() => setActiveTab("tab-3")}
          className={`${
            activeTab == "tab-3"
              ? "cursor-pointer py-2 px-6 rounded-full bg-blue-600 text-white"
              : "cursor-pointer py-2 px-6 rounded-full bg-slate-200 text-black"
          }`}
        >
          Tab3
        </button>
      </div>
    </div>
  );
}
