
import { User } from '../models/User'
import { UserActivity } from "../models/UserActivity";
import { UserAverageSessions } from "../models/UserAverageSessions";
import { UserPerformances } from "../models/UserPerformances";

let mock = false;
let userDataModule;

if (mock) {
  userDataModule = require("../mocks/mockData");
} else {
  userDataModule = require("../services/userData");
}

const { getUserMainData, getUserActivity, getUserAverageSessions, getUserPerformances } = userDataModule;

/**
 * Retrieves the main data for a given user and returns it as an object.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Object} An object containing the user's main data.
 */
export const manageUserMainData = async (userId) => {
    const userData = await getUserMainData(userId);
    if(!userData){
      return null
    }else{
      let todayScore = userData.data.todayScore ? userData.data.todayScore : userData.data.score;
      let userStats = userData.data.keyData
      let userInfos = userData.data.userInfos;
      const user = new User( userId, userInfos , todayScore, userStats );
      const mainData = user.getMainData();
      return mainData
    }
};

/**
 * Retrieves the activity data for a given user and returns it as an array of objects.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Array} An array of objects representing the user's activity data.
 */
export const manageUserActivity = async (userId) => {
    const userData = await getUserActivity(userId);
    if(!userData){
      return null
    }else {
      const userActivity = new UserActivity( userData.data.userId, userData.data.sessions);
      const activities = userActivity.getActivities();
      return activities;
    }
}

/**
 * Retrieves the average session data for a given user and returns it as an array of objects.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Array} An array of objects representing the user's average session data.
 */
export const manageUserAverageSessions = async (userId) => {
    const userData = await getUserAverageSessions(userId);
    if(!userData){
      return null
    }else {
      const userAverageSessions = new UserAverageSessions(userData.data.userId, userData.data.sessions);
      const sessions = userAverageSessions.getSessions();
      return sessions;
    }
};

/**
 * Retrieves the performance data for a given user and returns it as an array of objects.
 *
 * @param {number} userId - The ID of the user.
 * @returns {Array} An array of objects representing the user's performance data.
 */
export const manageUserPerformances = async (userId) => {
    const userData = await getUserPerformances(userId);
    if(!userData){
      return null
    }else {
      const userPerformances = new UserPerformances(userData.data.data, userData.data.kind);
      const performances = userPerformances.getPerformances();
      return performances;
    }
}