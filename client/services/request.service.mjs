import Axios from "@/utils/axios";

// Method to make a GET request
export const get = async (endpoint) => {
  try {
    const response = await Axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const query = async (endpoint, data) => {
  try {
    const response = await Axios.get(endpoint, { params: { data } });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Method to make a POST request
export const post = async (endpoint, data) => {
  try {
    const response = await Axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

// Method to make a PUT request
export const update = async (endpoint, data) => {
  try {
    const response = await Axios.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Method to make a DELETE request
export const purge = async (endpoint) => {
  try {
    const response = await Axios.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export default { post, purge, update, get };
