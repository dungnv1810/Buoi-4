import React from "react";
import './style.css'
function Box(props){
    const {item} = props.item1;
    const {image, title, description} = item;
    return(
        <React.Fragment>
            <div className="wrapper">
                <img className="image" src={image} alt=""/>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
            </div>
        </React.Fragment>
    )
}
export default Box;