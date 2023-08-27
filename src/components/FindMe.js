import React from 'react';
import {Link} from "react-router-dom";
import me from '../images/me.webp'

function FindMe(props) {
    return (
        <main className="find-me-page">

            <header>
                <img src={me} alt="Ivan - creator" className="author-picture"/>
                <h1 className="nick">
                    @t3nna
                </h1>
            </header>
            <ul className="social-medias">
                <li>
                    <a href="https://github.com/t3nna" target="_blank" rel="noreferrer">
                        <img src="/icons/icons8-github.svg" alt="github"/>
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/t3nna/" target="_blank" rel="noreferrer">
                        <img src="/icons/icons8-linkedin-circled.svg" alt="linkedin"/>
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="mailto:t3nna1001@gmail.com" target="_blank" rel="noreferrer">
                        <img src="/icons/icons8-gmail.svg" alt="home"/>
                        Email
                    </a>
                </li>
                <li>
                    <a href="https://BeRe.al/t3nnna" target="_blank" rel="noreferrer">
                        <img src="/icons/icons8-bereal.svg" alt="home"/>
                        BeReal
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@t3nnna" target="_blank" rel="noreferrer">
                        <img src="/icons/icons8-tiktok.svg" alt="home"/>
                        TikTok
                    </a>
                </li>
                <li>
                    <Link to={'/'}>
                        <img src="/icons/icons8-opened-folder.svg" alt="home"/>
                        Website
                    </Link>
                </li>

            </ul>

            <div className="faq">

                <h2>Frequently Asked Questions</h2>

                <div className={'faq-header'}>
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <symbol viewBox="0 0 24 24" id="expand-more">
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </symbol>
                        <symbol viewBox="0 0 24 24" id="close">
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </symbol>
                    </svg>
                </div>

                <details>
                    <summary>
                        How long have you been programming?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="control-icon control-icon-expand" width="24" height="24">
                            <path fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"/>
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="control-icon control-icon-close" width="24" height="24">
                            <path fillRule="evenodd"
                                  d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                                  clipRule="evenodd"/>
                        </svg>
                    </summary>
                    <p>Since 2019</p>
                </details>

                <details>

                    <summary>
                        Can I use it all the time?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="control-icon control-icon-expand" width="24" height="24">
                            <path fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"/>
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="control-icon control-icon-close" width="24" height="24">
                            <path fillRule="evenodd"
                                  d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                                  clipRule="evenodd"/>
                        </svg>
                    </summary>
                    <p>Of course you can, we won't stop you.</p>
                </details>

                <details>
                    <summary>
                        Are there any restrictions?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="control-icon control-icon-expand" width="24" height="24">
                            <path fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"/>
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="control-icon control-icon-close" width="24" height="24">
                            <path fillRule="evenodd"
                                  d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                                  clipRule="evenodd"/>
                        </svg>
                    </summary>
                    <p>Only your imagination my friend. Go forth!</p>
                </details>
            </div>


        </main>
    );
}

export default FindMe;