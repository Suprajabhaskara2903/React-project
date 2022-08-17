import React from "react";

// bgcolor, padding etc are passed as props:
const Avatar = ({children, backgroundColor,px,py,color,borderRadius,fontSize,textAlign, cursor}) => {
    // here style is an object
    const style = {
        backgroundColor ,
        padding : `${px} ${py}`,
        // if color is not provided, provide a black color
        color : color || 'black',
        borderRadius,
        fontSize,
        textAlign : "center",
        // if cursor value provided as a prop, let it be, if not provided, make cursor null
        cursor : cursor || null,
        textDecoration : "none"
    }
    return (
        <div style={style}>
            {/* returning the children */}
            {children}
        </div>
    )

}

export default Avatar