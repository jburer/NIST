import axios from "axios";

const stepsAPI = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const publicationsAPI = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const businessroleAPI = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSteps() {
    console.log("\n... Service.getSteps:  start");
    return stepsAPI.get("/Steps");
  },
  getStep(id) {
    console.log("\n... Service.getStep:  start");
    return stepsAPI.get("/Steps/" + id);
  },
  getPublications() {
    console.log("\n... Service.getPublications():  start");
    return publicationsAPI.get("/Publications");
  },
  getPublication(publication) {
    console.log("\n... Service.getPublication:  start");
    return publicationsAPI.get("/Publications?Publication=" + publication);
  },
  getBusinessRoles() {
    console.log("\n... Service.getBusinessRoles:  start");
    return businessroleAPI.get("/Roles");
  },
  getBusinessRole(businessrole) {
    console.log("\n... Service.getBusinessRole:  start");
    return businessroleAPI.get("/Roles?Role=" + businessrole);
  }
};
