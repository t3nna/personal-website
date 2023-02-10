import React from 'react';
import girlDragon from '../../images/recommedations/girlWithTheDragonTattoo.png'
import inBruges from './../../images/recommedations/In-Bruges-01.jpg'

function ForYou(props) {
    return (
        <main>
            <section className={'for-you-header'}>
                <div className="container">
                    <h1 className={'fs-primary-heading'}>
                        Personal recommendations
                    </h1>
                    <p className={'caption'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut consectetur debitis dolore
                        ea eveniet expedita fuga impedit
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-video-left">
                        <div>
                            <a href="https://www.youtube.com/@Fireship">
                                <img src="../../images/bg4.jpg" alt=""/>
                            </a>
                        </div>
                        <div>
                            <h2 className={'fs-secondary-heading'}>
                                Very interesting video
                            </h2>
                            <p className={'fs-body'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore est maxime minima
                                modi mollitia natus, non omnis pariatur, quos sapiente voluptatem.
                            </p>
                            <p className={'fs-body'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolore est maxime minima
                                modi mollitia natus, non omnis pariatur, quos sapiente voluptatem.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className={'film-recommendation-section'}>
                <div className="container">
                    <h2 className={'fs-secondary-heading header-link'}>
                        Best Films
                    </h2>
                    <div className="grid">
                        <img src={girlDragon} alt=""/>

                        <div className={'film-desc'}>
                            <h3 className={'fs-third-heading'}>
                                The Girl with the dragon tattoo
                            </h3>
                            <p className={'fs-body'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ducimus est ex
                                facilis illum labore qui quo ratione sequi? Ab aliquam asperiores at consectetur
                                cupiditate debitis delectus deleniti deserunt eaque exercitationem hic ipsam iste,
                                laboriosam magni nihil perspiciatis qui quo reprehenderit vitae voluptatem voluptatibus.
                            </p>
                        </div>
                        <img src={inBruges} alt="in Bruges Film"/>
                        <div className={'film-desc'}>
                            <h3 className={'fs-third-heading'}>
                                In Bruges
                            </h3>
                            <p className="fs-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt dicta
                                obcaecati placeat quia! Consequuntur eum harum nisi omnis temporibus! Aliquid aut
                                doloribus facere magni nulla numquam omnis perferendis reprehenderit temporibus velit!
                                Asperiores eligendi laboriosam minus praesentium repellat, sequi. Amet harum itaque
                                officia quidem similique! Adipisci architecto distinctio hic voluptatibus.

                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}

export default ForYou;