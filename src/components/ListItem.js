import React from 'react';
import {Link} from "react-router-dom";

function ListItem({item}) {
    return (
        <li>
            <Link to={`/${item.type}/${item.id}`} className={'project-card'}>

                <div className="description-block white-text">
                    <h2 className="fs-secondary-heading">{item.name}</h2>
                    <p className="fs-forth-heading">
                        {item.description}
                    </p>
                </div>
                <img
                    src={item.cover}
                    alt="blog cover"/>
            </Link>

        </li>
    );
}

export default ListItem;