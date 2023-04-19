import React from "react";
import { blogs } from "./blogs";
import "./style.scss";
import Image from "next/image";
import { CommonButton } from "@/components/Buttons/Buttons";

const Blog = () => {
  return (
    <section>
      <div className="blogSection">
        <div className="blogSectionHead">
          <h2>Chal Naari Blogs.</h2>
        </div>
        <div className="blogSContainer">
          {blogs.map((blog) => {
            return (
              <>
                <div className="blogSChild">
                  <div className="blogSChildImage">
                    <Image src={blog.image} />
                  </div>
                  <div className="blogSChildContent">
                    <h4>
                      <a href={blog.link}>{blog.title}</a>
                    </h4>
                    <p>
                      <span>{blog.date}</span>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <CommonButton text="View All" />
      </div>
    </section>
  );
};

export default Blog;
