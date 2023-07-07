import Vue from "vue";

import axios from "axios";

// new

const devInstance = createInstance("https://smart-admin.kodsolutions.net/public/graphql");

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "Acess-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Accept-Language": localStorage.getItem("lang"),
    },
  });
}

export default {
  install() {
    Vue.prototype.$http = devInstance;
  },
};

// axios.defaults.withCredentials = true;

axios.defaults.baseURL = "https://smart-admin.kodsolutions.net/public/graphql";

axios.interceptors.request.use(function (config) {
  config.headers.common = {
    "Accept-Language": localStorage.getItem("lang"),
    "Content-Type": "multipart/form-data",
    Authorization: ` Bearer ${localStorage.getItem("authToken")} `,
    Accept: "application/json",
  };
  return config;
});

// new token

axios.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    console.log(error);

    if (error != null && error.response.data.status == 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
