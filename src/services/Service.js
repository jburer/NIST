import axios from "axios";

const SP80037R2API = axios.create({
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

const FIPS200API = axios.create({
  baseURL: "http://localhost:3003",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSteps() {
    console.log("\nService.getSteps():  start");
    return SP80037R2API.get("/Steps");
  },
  getStep(id) {
    console.log("\nService.getStep():  start");
    return SP80037R2API.get("/Steps/" + id);
  },
  getMinimumRequirements() {
    console.log("\nService.getMinimumRequirements():  start");
    return FIPS200API.get("/MinimumRequirements");
  },
  getMinimumRequirement(ControlFamilyID) {
    console.log("\nService.getMinimumRequirement():  start");
    return FIPS200API.get(
      "/MinimumRequirements?ControlFamilyID=" + ControlFamilyID
    );
  },
  getPublications() {
    console.log("\nService.getPublications():  start");
    return publicationsAPI.get("/Publications");
  },
  getPublication(publication) {
    console.log("\nService.getPublication():  start");
    console.log(" ... Service.getPublication().publication = " + publication);
    return publicationsAPI.get("/Publications?Publication=" + publication);
  },
  getBusinessRoles() {
    console.log("\nService.getBusinessRoles():  start");
    return businessroleAPI.get("/Roles");
  },
  getBusinessRole(businessrole) {
    console.log("\nService.getBusinessRole():  start");
    return businessroleAPI.get("/Roles?Role=" + businessrole);
  }
};
