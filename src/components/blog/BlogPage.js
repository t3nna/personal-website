import React from "react";
import { useParams } from "react-router-dom";

import SimpleSlider from "./SimpleSlider";
import { useBlogInfo } from "../../hooks/useBlogInfo";

function BlogPage(props) {
  // get id from url
  const { id } = useParams();

  const { isLoading, data, isError, error } = useBlogInfo(id);
  if (isLoading) {
    return <h2 className={"fs-secondary-heading"}>Loading...</h2>;
  }
  if (isError) {
    return <h2 className={"fs-secondary-heading"}>{error.message}</h2>;
  }

  const currentDate = new Date(data.data.created);

  // seperating section from page styles
  const linkedSection = data.data.type.split(" ");

  return (
    <main className="flow">
      <section className="blog-header">
        <div className="container">
          <h1 className="fs-primary-heading">{data.data.name}</h1>
          <p className="caption">{data.data.description}</p>
          <p className={"caption"}>
            {currentDate.toLocaleDateString(undefined, {
              dateStyle: "full",
            })}
          </p>
        </div>
      </section>
      {data && (
        <section
          className={
            linkedSection[1] === "alt"
              ? "blog-section-alt flow"
              : "blog-section"
          }
        >
          {/*<section className={'blog-section'} >*/}
          <div
            className="container flow"
            dangerouslySetInnerHTML={{ __html: data.data.body }}
          ></div>
        </section>
      )}
    </main>
  );
}

export default BlogPage;
