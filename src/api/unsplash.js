import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1ab3ee372b8a696d91a77e5fc6f8496110216ebc7616419507cd7eaf511229ef"
  }
});
