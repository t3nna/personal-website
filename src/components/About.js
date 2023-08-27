import React from "react";
import me from "../images/me.webp";

function About(props) {
  return (
    <main className={"flow"}>
      <section>
        <div className="container">
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/Zjl2vmy02As"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className={"about-section "}>
        <div className="container">
          <div className={"grid"}>
            <img src={me} alt="" />
            <div className="about-me flow">
              <h1 className={"fs-third-heading"}>Hey Guys!</h1>
              <p className={"fs-body"}>
                Lorem ipsum dolor sit amet,{" "}
                <a href="#" className={"link"}>
                  this is so funny
                </a>
                consectetur adipisicing elit. Maiores provident quo voluptatum.
              </p>
              <p className={"fs-body"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                alias aliquam asperiores cupiditate delectus dolorem eos eveniet
                explicabo id labore, necessitatibus, nemo nobis omnis quam
                recusandae repellendus repudiandae sed totam ullam, unde
                voluptatum.
              </p>
              <p className={"fs-body"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam architecto at autem consequuntur corporis debitis
                distinctio, eligendi eos est hic illum in ipsa ipsam iure labore
                maxime, molestias necessitatibus nihil odio officiis quibusdam
                quo repellendus, reprehenderit voluptas voluptatibus voluptatum.
              </p>
            </div>
          </div>
          <button className="btn btn-download">
            <a href="../files/CV.pdf" download>
              Download CV
            </a>
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;
