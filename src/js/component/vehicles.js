import React from "react";


export const Vehicles = () => {
    return ( <
        div className = "card mx-5 d-flex justify-content-center"
        style = {
            {
                width: "18rem"
            }
        } >
        <
        img src = "https://turismolanzarote.com/wp-content/uploads/2017/03/Playas-PuertoDelCarmen-PlayaGrande-LR-5.jpg"
        className = "card-img-top"
        alt = "..." /
        >
        <
        div className = "card-body" >
        <
        h5 className = "card-title" > Landspeeder < /h5> <
        p className = "card-text" >
        Speed: 1100 km <
        /p>

        <
        div className = "card-footer" >
        <
        a href = "#"
        className = "btn btn-primary mx-1" >
        Go somewhere <
        /a> <
        button type = "button"
        className = "btn btn-outline-warning mx-3 "
        style = {
            {
                height: 40,
                width: 40
            }
        } > < i className = "fa fa-heart" > < /i></button >
        <
        /div> <
        /div> <
        /div>

    );
};