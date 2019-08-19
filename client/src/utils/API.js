import axios from "axios";

export default {
  getLeaderBoardTenEasy: function() {
    return axios.get("/api/tenEasy");
  },
  saveToLeaderBoardTenEasy: function(data) {
    return axios.post("/api/tenEasy", data);
  },

  getLeaderBoardTwentyEasy: function() {
    return axios.get("/api/twentyEasy");
  },
  saveToLeaderBoardTwentyEasy: function(data) {
    return axios.post("/api/twentyEasy", data);
  },

  getLeaderBoardThirtyEasy: function() {
    return axios.get("/api/thirtyEasy");
  },
  saveToLeaderBoardThirtyEasy: function(data) {
    return axios.post("/api/thirtyEasy", data);
  },

  getLeaderBoardTenHard: function() {
    return axios.get("/api/tenHard");
  },
  saveToLeaderBoardTenHard: function(data) {
    return axios.post("/api/tenHard", data);
  },

  getLeaderBoardTwentyHard: function() {
    return axios.get("/api/twentyHard");
  },
  saveToLeaderBoardTwentyHard: function(data) {
    return axios.post("/api/twentyHard", data);
  },
  
  getLeaderBoardThirtyHard: function() {
    return axios.get("/api/thirtyHard");
  },
  saveToLeaderBoardThirtyHard: function(data) {
    return axios.post("/api/thirtyHard", data);
  }
};