import axios from 'axios'

/**
 * Asynchronous function that retrieves main data for a user from an API.
 *
 * @param {string} userId - The ID of the user to retrieve data for.
 * @return {Promise<Object>} A promise that resolves to the user's main data.
 */
export const getUserMainData = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Asynchronous function that retrieves activity data for a user from an API.
 *
 * @param {string} userId - The ID of the user to retrieve data for.
 * @return {Promise<Object>} A promise that resolves to the user's activity data.
 */
export const getUserActivity = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Asynchronous function that retrieves average session data for a user from an API.
 *
 * @param {string} userId - The ID of the user to retrieve data for.
 * @return {Promise<Object>} A promise that resolves to the user's average session data.
 */
export const getUserAverageSessions = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Asynchronous function that retrieves performance data for a user from an API.
 *
 * @param {string} userId - The ID of the user to retrieve data for.
 * @return {Promise<Object>} A promise that resolves to the user's performance data.
 */
export const getUserPerformances = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};