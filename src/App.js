import React, { useEffect, useState } from "react";
import "./App.css";
import SvgIcon from "./components/SvgIcon";

const svg_names = [
    "AlarmClock",
    "PaintBrush",
    "ProfileUser",
    "PowerOffSvg",
    "LoanStatusSvg",
    "MasterCard",
    "LoanHistory",
    "MicroChip",
    "LinkedInSvg"
];
const App = () => {
    return (
        <div className="App">
            {svg_names.map((name, index) => (
                <SvgIcon {...{ name, size: index * 20, color: "blue" }} />
            ))}
        </div>
    );
};

export default App;
