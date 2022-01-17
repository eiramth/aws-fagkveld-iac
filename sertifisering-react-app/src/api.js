import axios from "axios";

//const apiURL = "https://bv2yqw9ri7.execute-api.us-east-1.amazonaws.com/"; 
const apiURL = "https://v0qj1dbqq5.execute-api.us-east-1.amazonaws.com/test"; // legge til URL for API-et

export const getSertifiseringer = async () => {
  const respons = await axios.get(`${apiURL}/sertifiseringer`);
  return respons.data;
};

export const getSertifisering = async (id) => {
  const respons = await axios.get(`${apiURL}/sertifiseringer/${id}`);
  return respons.data;
};

export const putSertifisering = async (payload) => {
  const respons = await axios.put(`${apiURL}/sertifiseringer`, payload, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return respons.data;
};

export const deleteSertifisering = async (id) => {
  const respons = await axios.delete(`${apiURL}/sertifiseringer/${id}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  alert(respons.data);
};

export const putBilde = async (payload) => {
  const respons = await axios.put(`${apiURL}/upload`, payload, {
    headers: {
      "Content-Type": payload.type,
      "Access-Control-Allow-Origin": "*",
      filename: payload.name,
    },
  });
  return respons.data;
};
