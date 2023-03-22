import React from 'react';
import threeBillboards from '../../images/recommedations/threeBillboards.png'
import inBruges from './../../images/recommedations/In-Bruges-01.jpg'
import lockStock from './../../images/recommedations/lockStock.png'
import fightClub from './../../images/recommedations/fightClub.png'


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
                        <img src={threeBillboards} alt=""/>

                        <div className={'film-desc'}>
                            <h3 className={'fs-third-heading'}>
                                Three Billboards Outside Ebbing, Missouri
                            </h3>
                            <p className={'fs-body'}>
                                Three Billboards Outside Ebbing, Missouri is a 2017 crime drama
                                film written, directed, and co-produced by Martin McDonagh and starring Frances
                                McDormand as a Missouri woman who rents three roadside billboards to draw attention to
                                her daughter's unsolved rape and murder.
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
                        <img src={fightClub} alt="in Bruges Film"/>
                        <div className={'film-desc'}>
                            <h3 className={'fs-third-heading'}>
                                Fight Club
                            </h3>
                            <p className="fs-body">
                                Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt,
                                Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name
                                by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his
                                white-collar job. He forms a "fight club" with soap salesman Tyler Durden (Pitt), and
                                becomes embroiled in a relationship with a mysterious woman, Marla Singer (Bonham
                                Carter).

                            </p>
                        </div>
                        <img src={lockStock} alt="in Bruges Film"/>
                        <div className={'film-desc'}>
                            <h3 className={'fs-third-heading'}>
                                Lock, Stock and Two Smoking Barrels
                            </h3>
                            <p className="fs-body">
                                Lock, Stock and Two Smoking Barrels is a 1998 black comedy crime film written and
                                directed by Guy Ritchie, produced by Matthew Vaughn.
                                The story is a heist involving a self-confident young card sharp who loses £500,000 to a
                                powerful crime lord in a rigged game of three-card brag. To pay off his debts, he and
                                his friends decide to rob a small-time gang who happen to be operating out of the flat
                                next door.
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
                                described by her as the most difficult of her books to write. It was first published
                                in the United Kingdom by the Collins Crime Club on 6 November 1939, as Ten Little
                                Niggers, after the children's counting rhyme and minstrel song, which serves as a
                                major plot element. The US edition was released in January 1940 with the title And
                                Then There Were None, taken from the last five words of the song. Successive American
                                reprints and adaptations use that title, though Pocket Books paperbacks used the title
                                Ten Little Indians between 1964 and 1986. UK editions continued to use the original
                                title until 1985.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'book-recommendation-section'}>
                <div className="container">
                    <h2 className={'fs-secondary-heading header-link'}>
                        Useful articles
                    </h2>
                    <ul className="list">
                        <li>
                            <a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-items" className="link">
                                Grid guide
                            </a>
                            &nbsp;- here you can find most useful grid properties with illustrations.

                        </li>
                        <li>
                            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className="link">Flexbox guide</a>
                            &nbsp;- here you can find most useful flex properties with illustrations.
                        </li>
                        <li>
                            <a href="https://blog.webdevsimplified.com/2022-07/react-router/" className="link">React Router V6</a>
                            Ultimate React Router v6 Guide
                            July 25, 2022
                        </li>
                        <li>
                            <a href="https://www.youtube.com/playlist?list=PLzKJi2GjpkEHaM3ViS4MfTpzoP5dqYQi1" className="link">
                                Typography & Design
                            </a>
                            &nbsp;- great playlist about typography
                        </li>
                    <li>
                            <a href="https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/" className="link">
                                Event Bubbling and Event Catching
                            </a>
                            &nbsp;- help you understand event bubbling and event catching like a pro
                        </li>
                    </ul>
                </div>
            </section>


        </main>
    );
}

export default ForYou;