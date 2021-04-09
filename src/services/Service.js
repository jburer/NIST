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
    return nistAPI.get("/Steps");
  },
  getStep(id) {
    return nistAPI.get("/Steps/" + id);
  },
  getMinimumRequirements() {
    return nistAPI.get("/FIPS200");
  },
  getMinimumRequirement(ControlFamilyID) {
    return nistAPI.get("/FIPS200?ControlFamilyID=" + ControlFamilyID);
  },
  getFIPS199() {
    return nistAPI.get("/FIPS199");
  },
  getPublications() {
    return nistAPI.get("/Publications");
  },
  getPublication(publication) {
    return nistAPI.get("/Publications?Publication=" + publication);
  },
  getBusinessRoles() {
    return nistAPI.get("/Roles");
  },
  getBusinessRole(businessrole) {
    return nistAPI.get("/Roles?Role=" + businessrole);
  },
  getGlossary() {
    return nistAPI.get("/Glossary");
  },
  getTerm(term) {
    return nistAPI.get("/Glossary?Term=" + term);
  }
};
