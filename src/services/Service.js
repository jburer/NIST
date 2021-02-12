import axios from "axios";

const nistAPI = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSteps() {
    console.log("\nService.getSteps():  start");
    return nistAPI.get("/Steps");
  },
  getStep(id) {
    console.log("\nService.getStep():  start");
    return nistAPI.get("/Steps/" + id);
  },
  getMinimumRequirements() {
    console.log("\nService.getMinimumRequirements():  start");
    return nistAPI.get("/MinimumRequirements");
  },
  getMinimumRequirement(ControlFamilyID) {
    console.log("\nService.getMinimumRequirement():  start");
    return nistAPI.get(
      "/MinimumRequirements?ControlFamilyID=" + ControlFamilyID
    );
  },
  getPublications() {
    console.log("\nService.getPublications():  start");
    return nistAPI.get("/Publications");
  },
  getPublication(publication) {
    console.log("\nService.getPublication():  start");
    console.log(" ... Service.getPublication().publication = " + publication);
    return nistAPI.get("/Publications?Publication=" + publication);
  },
  getBusinessRoles() {
    console.log("\nService.getBusinessRoles():  start");
    return nistAPI.get("/Roles");
  },
  getBusinessRole(businessrole) {
    console.log("\nService.getBusinessRole():  start");
    return nistAPI.get("/Roles?Role=" + businessrole);
  }
};
