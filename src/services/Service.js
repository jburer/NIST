import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSteps(perPage, page) {
    return apiClient.get("/Steps?_limit=" + perPage + "&_page=" + page);
  },
  getStep(id) {
    return apiClient.get("/Steps/" + id);
  },
  getPublications(perPage, page) {
    return apiClient.get("/Publications?_limit=" + perPage + "&_page=" + page);
  },
  getPublication(id) {
    return apiClient.get("/Publications/" + id);
  },
  getBusinessRoles(perPage, page) {
    return apiClient.get("/Roles?_limit=" + perPage + "&_page=" + page);
  },
  getBusinessRole(id) {
    return apiClient.get("/Roles/" + id);
  }
};
