import PropTypes from 'prop-types';

/**
 * Class representing a user's average sessions.
 */
export class UserAverageSessions {
  /**
   * Create a user's average sessions.
   * @param {number} id - The user's ID.
   * @param {Array} sessions - The user's average sessions.
   */
  constructor(id, sessions = []) {
    this.id = id;
    this.sessions = sessions.map(session => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
  }

  /**
   * Get the user's sessions.
   * @return {Array} An array of objects representing the user's sessions.
   */
  getSessions() {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const userSessions = this.sessions.map(session => {
      const day = days[session.day - 1];
      return {
        day,
        sessionLength: session.sessionLength
      };
    });
    return userSessions;
  }
}

UserAverageSessions.propTypes = {
  id: PropTypes.number.isRequired,
  sessions: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number.isRequired,
    sessionLength: PropTypes.number.isRequired,
  })).isRequired,
};