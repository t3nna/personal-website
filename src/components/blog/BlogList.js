import React from 'react';
import background from '../../images/bg.jpg'
import {Link} from "react-router-dom";

function BlogList(props) {
    return (
        <main className={'flow'}>
            <section className={'blog-section'}>
                <div className="container">
                    <h1 className={'fs-secondary-heading'}>Blog</h1>
                    <ul className="blog-items-list grid">
                        <li >
                            <Link to={'/blog'} className={'project-card'}>

                            <div className="description-block white-text">
                                <h2 className="fs-secondary-heading">Spotify Stats</h2>
                                <p className="fs-forth-heading">
                                    this project is
                                    <br/>
                                    about music
                                </p>
                            </div>
                            <img
                                src="https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/622a0b4bcb413cfc53a4a0c2_____1_-__2.jpg"
                                alt="abc"/>
                            </Link>

                        </li>
                        <li className={'project-card'}>
                            <div className="description-block white-text">
                                <h2 className="fs-secondary-heading">Spotify Stats</h2>
                                <p className="fs-forth-heading">
                                    this project is
                                    <br/>
                                    about music
                                </p>
                            </div>
                            <img
                                src="https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/622a0b4bcb413cfc53a4a0c2_____1_-__2.jpg"
                                alt="abc"/>
                        </li>
                        <li className={'project-card'}>
                            <div className="description-block white-text">
                                <h2 className="fs-secondary-heading">Spotify Stats</h2>
                                <p className="fs-forth-heading">
                                    this project is
                                    <br/>
                                    about music
                                </p>
                                <a href="#" className="btn">
                                    Project
                                </a>
                            </div>
                            <img
                                src="https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/622a0b4bcb413cfc53a4a0c2_____1_-__2.jpg"
                                alt="abc"/>
                        </li>

                    </ul>
                </div>
            </section>
        </main>
    );
}

export default BlogList;
