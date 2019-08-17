import axios from "axios";

export default {
  getLeaderBoards: function() {
    return axios.get("/api/leaderboards");
  },
  saveToLeaderBoards: function(data) {
    return axios.post("/api/leaderboards", data);
  }
};