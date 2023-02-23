import React from 'react';
import {Link} from "react-router-dom";

function MainItem({item}) {


    return (
        <div className="project-card">
            <div className={`description-block ${item.style}`}>
                <h2 className="fs-primary-heading">{item.name}</h2>
                <p className="fs-forth-heading">
                    {item.description}
                </p>
                <Link to={`/${item.type}/${item.id}`} className="btn btn-test">
                    Project
                </Link>
            </div>
            <img
                src={item.cover}
                alt={item.name}/>
        </div>
    );
}

export default MainItem;