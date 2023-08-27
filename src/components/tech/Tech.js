import React from 'react';
import TechItem from "./TechItem";

function Tech(props) {
    return (
       <main className="flow">
           <section className="tech-list-section">
               <div className="container">
                   <h1 className={'fs-secondary-heading'}>
                       This is my Tech setup
                   </h1>
                   <ul className={'tech-items-list'}>
                      <TechItem/>
                      <TechItem/>
                   </ul>
               </div>
           </section>
       </main>
    );
}

export default Tech;