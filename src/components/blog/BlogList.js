import React from 'react';

import {useBlogList} from "../../hooks/useBlogList";
import ListItem from "../ListItem";

function BlogList(props) {
    const onSuccess = data => {
        console.log(data.data)
    }

    const {isLoading, data, isError, error} =
        useBlogList(onSuccess)
    if(isLoading){
        return <h2 className={'fs-secondary-heading'}>Loading...</h2>
    }
    if(isError){
        return <h2 className={'fs-secondary-heading'}>{error.message}</h2>
    }

    return (
        <main className={'flow'}>
            <section className={'blog-list-section'}>
                <div className="container">
                    <h1 className={'fs-secondary-heading'}>Blog</h1>
                    <ul className="blog-items-list grid">
                        {
                            data?.data.map(blog =>(
                                <ListItem key={blog.id} item={blog}/>
                            ))
                        }
                        {/*<li>
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
                        </li>*/}

                    </ul>
                </div>
            </section>
        </main>
    );
}

export default BlogList;
