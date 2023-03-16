import PropTypes from 'prop-types';
import { Session } from './Session';

/**
 * Class representing a user activity.
 */
export class UserActivity {
  /**
   * Create a user activity.
   * @constructor
   * @param {number} id - The ID of the user.
   * @param {Array} sessions - The sessions of the user.
   */
  constructor(id, sessions = []) {
    this.id = id;
    this.sessions = sessions.map(session => new Session(session.day, session.kilogram, session.calories));
  }

  /**
   * Get the activities of the user.
   * @return {Array} The activities of the user.
   */
  getActivities() {
    return this.sessions.map(session => session.getSessionInfos());
  }
}

UserActivity.propTypes = {
  id: PropTypes.number.isRequired,
  sessions: PropTypes.arrayOf(PropTypes.instanceOf(Session)).isRequired,
};