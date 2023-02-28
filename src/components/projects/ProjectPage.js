import React from 'react';
import {useParams} from "react-router-dom";
import {useProjectInfo} from "../../hooks/useProjectInfo";
import SimpleSlider from "../blog/SimpleSlider";

function ProjectPage(props) {
    const {id} = useParams()

    const {isLoading, data, isError, error} =
        useProjectInfo(id)
    if (isLoading) {
        return <h2 className={'fs-secondary-heading'}>Loading...</h2>
    }
    if (isError) {
        return <h2 className={'fs-secondary-heading'}>{error.message}</h2>
    }
    // console.log(data.data.projecteam)

    const currentDate = new Date(data.data.created)


    return (
        <main className={'flow'}>
            <section className={'blog-header'}>
                <div className="container">
                    <h1 className={'fs-primary-heading'}>
                        {data.data.name}
                    </h1>
                    <p className={'caption'}>{data.data.description}</p>
                    <p className={'caption'}>{
                        currentDate.toLocaleDateString(
                            undefined,{
                                dateStyle: 'full',
                            }
                        )
                    }</p>

                </div>
            </section>
            {data.data.embedVideo && (

                <section>
                    <div className="container">
                        <div className="iframe-container">
                            <iframe width="560" height="315" src={data.data.embedVideo}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </section>
            )}

            {
                data && (
            <section className="blog-section">
                <div className="container flow" dangerouslySetInnerHTML={{__html: data.data.body }}>

                </div>
            </section>

                )
            }

            <section className={'slider-section'}>
                <div className="container">
                    <SimpleSlider images={data.data.carousel}/>
                </div>
            </section>
            <section className="blog-recommendation">
                <div className="container">
                    <h2 className="fs-third-heading">
                        Related
                    </h2>

                </div>
            </section>
            <section className="project-team-section">
                <div className="container">
                    <div className="project-team">

                        {
                            data?.data.projectTeam.map(item => (
                                <div key={item.name} className="project-team-group">
                                    <h4 className="fs-forth-heading">
                                        {item.name}
                                    </h4>
                                    {
                                        item.members.map((member, index) => (
                                            <h5 key={index}>{member}</h5>))
                                    }

                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </main>
    );
}

export default ProjectPage;
