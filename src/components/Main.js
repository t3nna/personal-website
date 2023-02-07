import React from 'react';

function Main(props) {
    return (
        <main className="flow">
            <section className="section-header">
                <div className="container">

                    <h1 className="fs-primary-heading">Hello, these are my projects</h1>
                    <p className="fs-third-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
                        nihil.</p>
                    <p></p>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="project-container flow">
                        <div className="project-card">
                            <div className="description-block text-bg-white">
                                <h2 className="fs-primary-heading">Spotify Stats</h2>
                                <p className="fs-forth-heading">
                                    this project is
                                    <br/>
                                        about music
                                </p>
                                <a href="#" className="btn btn-test">
                                    Projects
                                </a>
                            </div>
                            <img
                                src="https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/6234aa029b279e1febec6f22_Palats%20cover%202-p-800.jpeg"
                                alt="abc"/>
                        </div>
                        <div className="project-card">
                            <div className="description-block white-text">
                                <h2 className="fs-primary-heading">Spotify Stats</h2>
                                <p className="fs-third-heading">
                                    this project is
                                    <br/>
                                        about music
                                </p>
                                <a href="#" className="btn btn-transparent">
                                    Project
                                </a>
                            </div>
                            <img
                                src="https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/622a0b4bcb413cfc53a4a0c2_____1_-__2.jpg"
                                alt="abc"/>
                        </div>
                        <div className="project-card">
                            <div className="description-block text-bg-black">
                                <h2 className="fs-primary-heading">Spotify Stats</h2>
                                <p className="fs-third-heading">
                                    this project is
                                    <br/>
                                        about music
                                </p>
                                <a href="#" className="btn ">
                                    Project
                                </a>
                            </div>
                            <img
                                src="https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/6234aa029b279e1febec6f22_Palats%20cover%202-p-800.jpeg"
                                alt="abc"/>
                        </div>


                    </div>
                </div>
            </section>

        </main>
    );
}

export default Main;