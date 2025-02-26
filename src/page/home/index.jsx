import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import NavbarBottom from "../../components/Navbarbottom";
import { getHomePosts } from "../../service/postService";
import { data } from "react-router";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getHomePosts();
      setPost(data);
    })();
  }, []);
  console.log(data);
  

  return (
    <div>
      <Navbar />
      <NavbarBottom />
      {post.map((post) => {
        <div key={post.id}>
          <p>{post.description}</p>
        </div>;
      })}
    </div>
  );
};

export default Home;
