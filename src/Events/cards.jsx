import React from "react"
import "./Events.css"


const Card = props =>{

    return(
        <div className="card text-center">
            <div className = "overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className = "class-title">{props.cardTitle}</h4>
                <p className="card-title text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos veniam repellendus commodi earum saepe quas dolores illum quis libero!
                </p>
                <a href = "#" className = "btn btn-outline-success">Anchor tag</a>
            </div>

        </div>

    );
    
}

export default Card;