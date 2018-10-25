import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from "axios";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
         .then(response => {
             this.setState({posts: response.data})
            console.log(response);
        });
  }

  render() {
    const posts = this.state.posts.map(post => {
        return <Post title={post.title} key={post.id}></Post>
    })

    return (
      <div>
        <section className="Posts">
        {posts}
        </section>
        
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
