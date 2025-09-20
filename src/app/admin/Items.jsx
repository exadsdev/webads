"use client";

import React, { useEffect, useState } from 'react';

export default function Page() {
  const [posts, setPosts] = useState([]); // State for posts

  // Fetch posts on component mount
  useEffect(() => {
    fetch('https://cart.accfb-ads.com/get')
      .then((response) => response.json())
      .then((data) => setPosts(data)) // Update the state with fetched posts
      .catch((error) => console.error("Error fetching posts:", error));
  }, []); // Run effect once on mount

  const deleteitem = (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`https://cart.accfb-ads.com/delete/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("Deleted successfully:", result);
        // Optionally remove the deleted post from the state
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  const urlimg = 'https://cart.accfb-ads.com/public';

  return (
    <div className="container mx-auto">
      {posts.map((post) => (
        <div className="card mx-auto mt-5" key={post.id}>
          <div className="title h3 text-center">{post.title}</div>

          {post.name ? (
            <>
              <iframe
                width="200"
                height="100"
                className='vdoimg'
                src={`https://www.youtube.com/embed/${post.name}`}
                title="YouTube video player"
                frameBorder="0"
                allow=" "
                allowFullScreen
              ></iframe>
            </>
          ) : (
            <>
              <img src={urlimg + post.imgvdo} className="vdoimg" alt="item" />
            </>
          )}

          <div className="card-body">
            <h3>{post.title}</h3>
            <p className="card-text">
              {post.content}
            </p>
          </div>

          {/* Delete button with id passed */}
          <button
            type="button"
            onClick={() => deleteitem(post.id)} // Pass post.id as an argument
          >
            ลบ
          </button>

          <br />
          <hr />
        </div>
      ))}
    </div>
  );
}
