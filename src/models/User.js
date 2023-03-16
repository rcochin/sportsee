import PropTypes from 'prop-types';
import { KeyData } from './KeyData';
import { UserInfos } from './UserInfos';

/**
 * Represents a user with main data and key data.
 */
export class User {
  /**
   * Creates a new user.
   * @param {number} id - The user's id.
   * @param {UserInfos} userInfos - The user's personal information.
   * @param {number} todayScore - The user's score for the day.
   * @param {KeyData} keyData - The user's key data.
   */
  constructor(id, userInfos, todayScore, keyData) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore;
    this.keyData = new KeyData(
      keyData.calorieCount,
      keyData.proteinCount,
      keyData.carbohydrateCount,
      keyData.lipidCount
    );
  }

  /**
   * Returns the main data for the user.
   * @returns {{ userInfos: string, todayScore: number, userStats: Object[] }} The user's main data.
   */
  getMainData() {
    const userStats = this.keyData.getUserStats();
    const userInfos = this.userInfos.firstName;
    const todayScore = this.todayScore * 100;

    return {
      userInfos,
      todayScore,
      userStats,
    };
  }
}

/**
 * The prop types for the User class.
 */
User.propTypes = {
  id: PropTypes.number,
  userInfos: PropTypes.instanceOf(UserInfos),
  todayScore: PropTypes.number,
  keyData: PropTypes.instanceOf(KeyData),
};