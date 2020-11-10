import React, { useEffect, useState } from "react";

const SvgIcon = ({ name, size, color }) => {
    const [svg, setSvg] = useState(null);
    console.log("SvgIcon -> svg", svg);

    useEffect(() => {
        fetch(
            `https://res.cloudinary.com/eze-mmuo/image/upload/v1605027529/svg_opt/${name}.svg`
        )
            .then(res => res.text())
            .then(text => setSvg(text));
    }, []);
    return <span dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default SvgIcon;
