import React from "react";
import { blog } from "../../assets/data/blog";
import BlogCard from "../cards/BlogCard";

const Blog = () => {
  return (
    <div className="py-6">
      <div className="pt-5 pb-3">
        <div className="text-center mb-5">
          <h5 className="text-primary letter-space-3 font-semibold uppercase mb-3zS">
            Our Blog
          </h5>
          <h1 className="text-4xl font-bold py-3">Latest From Our Blog</h1>
        </div>
        <div className="flex md:flex-col lg:flex-row justify-center items-center  pb-3">
          {blog.map((element, index) => {
            return (
              <BlogCard
                key={index}
                image={element.image}
                feed={element.feed}
                date={element.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
