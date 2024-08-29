import React from "react";

const BlogCard = ({ image, date, feed, key }) => {
  return (
    <div key={key} className="lg:w-4/12 tile p-4">
      <div className="blog-item tile-card relative overflow-hidden rounded-lg mb-2">
        <img className="img-fluid" src={image} alt="" />
        <a className="absolute z-1 details text-decoration-none" href="">
          <span className=" mb-3">{feed}</span>
          <span className="text-primary m-0">{date}</span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
