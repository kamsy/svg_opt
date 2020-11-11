import React, { useEffect, useState } from "react";

const SvgIcon = ({ name, size, color }) => {
    const [svg, setSvg] = useState(null);
    console.log("SvgIcon -> svg", svg);

    useEffect(() => {
        fetch(
            `https://res.cloudinary.com/eze-mmuo/image/upload/v1605027529/svg_opt/${name}.svg`
        )
            .then(res => res.text())
            .then(text => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(text, "text/html");
                const newSvg = document.createElement("svg");
                newSvg.innerHTML = doc.body.children[0].innerHTML;
                newSvg.style.cssText = `width: ${size}px; height: ${size}px`;
                newSvg.style.fill = color;
                console.log("SvgIcon -> newSvg", newSvg);
                // setSvg(newSvg);
            });
    }, []);
    // return <span>{svg}</span>;
    return (
        <svg width={size} height={size}>
            <image
                href={`https://res.cloudinary.com/eze-mmuo/image/upload/v1605027529/svg_opt/${name}.svg`}
                width={size}
                height={size}
            />
        </svg>
    );
};

export default SvgIcon;
