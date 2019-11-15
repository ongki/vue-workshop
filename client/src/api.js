import axios from "axios";
import uuid from "uuid";

const user = {
  id: "b096e151-7c61-47aa-81d6-c0bd3bda4351",
  username: "ongki"
};

export default {
  async getAllPosts() {
    const response = await axios.get("api/posts");
    return response.data;
  },
  async upvotePost(post) {
    post.votes.push(user.id);
    const response = await axios.put(`/api/posts/${post.id}`, post);
    return response.data;
  },
  async savePost(title, url) {
    const data = {
      id: uuid(),
      url,
      title,
      votes: [],
      userId: user.id,
      author: user.username,
      timestamp: new Date().getTime()
    };
    const response = await axios.post("api/posts", data);
    return response.data;
  }
};
