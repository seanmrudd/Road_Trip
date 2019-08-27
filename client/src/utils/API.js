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

  // getTenEasyPersonal: function() {
  //   return axios.get("/userUpdate/tenEasyPersonal");
  // },
  // updateTenEasyPersonal: function(data){
  //   return axios.update("/userUpdate/tenEasyPersonal", data);
  // },

  // getTwentyEasyPersonal: function() {
  //   return axios.get("/userUpdate/twentyEasyPersonal");
  // },
  // updateTwentyEasyPersonal: function(data){
  //   return axios.update("/userUpdate/twentyEasyPersonal", data);
  // },
  
  // getThirtyEasyPersonal: function() {
  //   return axios.get("/userUpdate/thirtyEasyPersonal");
  // },
  // updateThirtyEasyPersonal: function(data){
  //   return axios.update("/userUpdate/thirtyEasyPersonal", data);
  // },
  
  // getTenHardPersonal: function() {
  //   return axios.get("/userUpdate/tenHardPersonal");
  // },
  // updateTenHardPersonal: function(data){
  //   return axios.update("/userUpdate/tenHardPersonal", data);
  // },
  
  // getTwentyHardPersonal: function() {
  //   return axios.get("/userUpdate/twentyHardPersonal");
  // },
  // updateTwentyHardPersonal: function(data){
  //   return axios.update("/userUpdate/twentyHardPersonal", data);
  // },
  
  // getThirtyHardPersonal: function() {
  //   return axios.get("/userUpdate/thirtyHardPersonal");
  // },
  // updateThirtyHardPersonal: function(data){
  //   return axios.update("/userUpdate/thirtyHardPersonal", data);
  // },
  
};