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
                        <div className="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Zjl2vmy02As"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
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

            <section className={'book-recommendation-section'}>
                <div className="container">
                    <h2 className={'fs-secondary-heading header-link'}>
                        Best Books
                    </h2>
                    <div className="grid">
                        <img
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg/440px-Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg"}
                            alt=""/>

                        <div className={'film-desc'}>
                            <h3 className={'fs-third-heading'}>
                                The Count of Monte Cristo
                            </h3>
                            <p className={'fs-body'}>
                                The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel
                                written by French author Alexandre Dumas (père) completed in 1844. It is one of the
                                author's most popular works, along with The Three Musketeers. Like many of his novels,
                                it was expanded from plot outlines suggested by his collaborating ghostwriter Auguste
                                Maquet.</p>
                        </div>
                        <img
                            src={"https://upload.wikimedia.org/wikipedia/en/4/4a/And_Then_There_Were_None_First_Edition_Cover_1939.jpg"}
                            alt="in Bruges Film"/>
                        <div className={'film-desc'}>
                            <h3 className={'fs-third-heading'}>
                                And Then There Were None
                            </h3>
                            <p className="fs-body">
                                And Then There Were None is a mystery novel by the English writer Agatha Christie,
                                described by her as the most difficult of her books to write.[2] It was first published
                                in the United Kingdom by the Collins Crime Club on 6 November 1939, as Ten Little
                                Niggers,[3] after the children's counting rhyme and minstrel song, which serves as a
                                major plot element.[4][5] The US edition was released in January 1940 with the title And
                                Then There Were None, taken from the last five words of the song.[6] Successive American
                                reprints and adaptations use that title, though Pocket Books paperbacks used the title
                                Ten Little Indians between 1964 and 1986. UK editions continued to use the original
                                title until 1985.[7]
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}

export default ForYou;