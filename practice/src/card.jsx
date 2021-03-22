import React from 'react';
import './index.css';

function Card(props){
    let alternate="Image of"+props.SName;
    return(
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt={alternate} className="card_img"/>
                <div className="card_info">
                    <span className="card_catagory">
                        {props.title}
                    </span>
                    <h3 className="card_title">{props.SName}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card