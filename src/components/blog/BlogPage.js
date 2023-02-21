import React from 'react';
import {useParams} from "react-router-dom";

import SimpleSlider from "./SimpleSlider";
import {useBlogInfo} from "../../hooks/useBlogInfo";


function BlogPage(props) {

    // get id from url
    const {id} = useParams()


    const {isLoading, data, isError, error} =
        useBlogInfo(id)
    if(isLoading){
        return <h2 className={'fs-secondary-heading'}>Loading...</h2>
    }
    if(isError){
        return <h2 className={'fs-secondary-heading'}>{error.message}</h2>
    }

    return (
        <main className="flow">
            <section className="blog-header">
                <div className="container">
                    <h1 className="fs-primary-heading">
                        How to Use LeetCode Effectively
                    </h1>
                    <p className="caption">Written by t3nna</p>
                </div>
            </section>
            {
                data && (
            <div dangerouslySetInnerHTML={{__html: data.data.body }}>

            </div>
                )
            }
            <section className="blog-section">
                <div className="container flow">

                    <div className="iframe-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1_vDikyLYVE"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                    <p className="fs-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi dolor eaque exercitationem
                        illo
                        mollitia
                        nesciunt, ut voluptatibus. Ab distinctio ducimus est fugit nam voluptatum?
                    </p>
                    <img
                        src="https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/626949ce30f7100955729ec7_%D0%9F%D0%B0%D1%80%D0%BA%D0%B8%203-p-2600.jpeg"
                        alt="book"/>
                    <h2 className="fs-secondary-heading">
                        +2,500 Questions
                    </h2>
                    <p className="fs-body">
                        While LeetCode has become the unofficial standard for testing coding skills, many first-time
                        LeetCoders
                        find it daunting to go through more than 2,500 problems on the platform. For that reason, in
                        this video,
                        I will share an effective strategy for preparing for LeetCode. I broke the strategy into six
                        steps to
                        help you build a strong foundation in coding interview skills as quickly as possible. If you
                        are one of
                        those guys intimidated by the sheer number of questions, unsure where to start, and
                        unconfident of
                        pulling this off yourself, watch this video until the end because you'll walk away with a
                        clear game
                        plan.
                    </p>
                    <h2 className="fs-secondary-heading">
                        Step 1. Start with the Top 100 Liked Questions


                    </h2>
                    <p className="fs-body">
                        These are the questions upvoted by the community - other LeetCoders - and not selected by
                        the platform.
                        A question is upvoted if the community finds it clear, helpful, and practical. On the other
                        hand, a
                        problem is heavily downvoted if it's unclear, has too many tedious edge cases, or doesn't
                        involve the
                        general concepts of data structures and algorithms. You want to avoid those types of
                        problems in the
                        early stage because your initial focus should be on learning how to play the game instead of
                        battling a
                        boss. Clear and straightforward DSA-based questions can help you achieve that. Start with
                        about fifty
                        easy and mediums questions here. Avoid hard for now. Learn to play the game first.
                    </p>

                    <h2 className="fs-secondary-heading">
                        Step 2. Focus on the questions by topic
                    </h2>

                    <p className="fs-body">
                        Never solve random questions. Now that you have a taste of LeetCode, it's time to choose a
                        topic and
                        start drilling down. As you crack questions from the same topic, you'll realize there is a
                        pattern.
                        Realizing that pattern is the algorithm, the template, and the winning formula to mastering
                        LeetCode.
                        Once the idea clicks, you can use it to solve most of the problems in the topic. Just
                        remember. The more
                        you solve random problems, the longer it'll take for you to get that click. Solve at least
                        twenty
                        questions or until you get that "click" for each topic before moving on. Here's my
                        recommended list of
                        topics to get you started. For more help with data structures and algorithms, check out my
                        recommended
                        courses and
                        <a href="#" className="link">books</a>
                        .
                    </p>
                    <a className="btn-download fs-body" href="#">Download something</a>
                    <h2 className="fs-secondary-heading">
                        Step 3. Order the questions from the highest to lowest acceptance rate
                    </h2>
                    <p className="fs-body">
                        Don't just blindly attempt easies. Some mediums are easier than easies, and some easies are
                        harder than
                        mediums. This is because the LeetCode difficulty level is subjective; the platform
                        determines it. On the
                        other hand, the acceptance rate is objective as it's community driven. Take a look yourself.
                        The
                        acceptance rate of some easies is lower than 50%, while that of some mediums is higher than
                        even 90%!
                        Leverage the stats. If others found it easier, you'll find it easier too.
                    </p>
                    <h2 className="fs-secondary-heading">
                        Step 4. Learn from the solutions
                    </h2>
                    <p className="fs-body">
                        Don't spend more than 45 minutes on each problem. If you're stuck, look up the answer and
                        move on. But
                        promise me this. Learn from the solutions. Like I said earlier, if you grind the problems on
                        the same
                        topic, you'll start to see the pattern and develop the technique needed to solve it. And
                        guess what? The
                        best place for that is none other than the solutions! Peeking at the solutions is the
                        fastest way to
                        learn from the experts. Don't feel guilty about it; it's okay as long as you learn from
                        them. If you
                        prefer more professional and structured help from industry pros, try Pathrise. Pathrise is a
                        career
                        accelerator that helps individuals find jobs through 1-on-1 mentorship, personalized
                        coaching, and
                        workshops. I used to work there as a mentor myself, and the first two weeks are free.

                    </p>

                </div>
            </section>
            <section className={'slider-section'}>
                <div className="container">
                    <SimpleSlider/>

                </div>
            </section>

            <section className="blog-recommendation">
                <div className="container">
                    <h2 className="fs-third-heading">
                        Related
                    </h2>

                    <ul className="list">
                        <li>
                            <a href="#" className="link">Some topic</a>
                            is very interestingsdas sdfad Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus
                            dolore facilis quas!

                        </li>
                        <li>
                            <a href="#" className="link">Some topic</a>
                            is very Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <a href="#" className="link">Some topic</a>
                            is very interesting
                        </li>
                        <li>
                            <a href="#" className="link">Some topic</a>
                            is very interesting
                        </li>
                    </ul>
                </div>
            </section>
            <section className="project-team-section">
                <div className="container">
                    <h3 className="fs-third-heading">
                        Team for this project
                    </h3>
                    <div className="project-team">
                        <div className="project-team-group">
                            <h4 className="fs-forth-heading">
                                Manager
                            </h4>
                            <h5>Ivan Melnyk</h5>
                            <h5>Ivan Melnyk</h5>

                        </div>
                        <div className="project-team-group">
                            <h4 className="fs-forth-heading">
                                Designer
                            </h4>
                            <h5>Denis Shmakov</h5>
                            <h5>Denis Shmakov</h5>
                            <h5>Denis Shmakov</h5>
                            <p>This is our best people
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, optio?
                            </p>

                        </div>
                        <div className="project-team-group">
                            <h4 className="fs-forth-heading">
                                Idea
                            </h4>
                            <h5>Karina Za...</h5>
                        </div>
                        <div className="project-team-group">
                            <h4 className="fs-forth-heading">
                                Consultant
                            </h4>
                            <h5>Даша Корба, ГО «Мапа Реновацій»</h5>
                            <h5>
                                Павло Богайчик, Директор комунального
                                підтриємства «Бюро спадщина»

                            </h5>
                            <h5>
                                Лілія Онищенко, Начальниця управління
                                охорони історичного середовища Львівської міської ради
                            </h5>
                            Надія Лиштва, Начальниця управління з питань <br/>
                            охорони культурої спадщини Дніпровської міської ради
                            <h5>

                            </h5>
                            <h5>Lilita Medvedeva</h5>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default BlogPage;