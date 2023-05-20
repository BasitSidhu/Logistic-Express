import React from "react";
import "./blog.css";
import blogimage from "../../img/blog.jpg";

const Blog = () => {
  return (
    <div className="blogpage">
      <h5 className="blogtitle">Blog</h5>
      <div className="blogmain col-md-12">
        <div className="col-md-4">
          <div className="blogparent">
            <img
              src={blogimage}
              alt=""
              className="blogimage"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>

        <div className="blogtext col-md-5">
          <h2>We take your business wherever it goes.</h2>
          <p>
            if you are in bussiness, then you understand the importance of time.
            when your customer get pakage faster then usuall, the more
            effeciently your business will grow. It is beacuse cuorier serverces
            play a major role in developing business. they insure pakages
            arrives on ntime and perfect condition. They helps Your business in
            dependending on your decision that you made.
          </p>
        </div>
      </div>
      <div className="blogtextparent"></div>
      <div className="blogmain col-md-12">
        <div className="col-md-4">
          <div className="blogparent">
            <img
              src={blogimage}
              alt=""
              className="blogimage"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>

        <div className="blogtext col-md-5">
          <h2>be the Best</h2>
          <p>
            During the process of seleting a courier service to help with
            shipping your business, it is very important to know that they also
            provides express and emerency services. in bussines they colud be
            possibility that an unexpected and spontaneous challenge emerged, ad
            it needs special attentention and solution. In courier services you
            may asked to delivered pakages, supplies or any kind of equipment on
            short notice. it is also nesseccory to deleerved pakeges on time and
            location.
          </p>
        </div>
      </div>
      <div className="blogtextparent"></div>
    </div>
  );
};

export default Blog;
