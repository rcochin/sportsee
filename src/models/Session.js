import PropTypes from 'prop-types';

/**
 * Represents a session with information about the day, the user's weight, and the number of calories.
 *
 * @class
 * @param {string} day - The day of the session.
 * @param {number} kilogram - The user's weight for the session.
 * @param {number} calories - The number of calories for the session.
 */
export class Session {
    constructor ( day, kilogram, calories ) {
        this.day = day;
        this.kilogram = kilogram;
        this.calories = calories;
    }
    
    /**
     * Returns an object with information about the session, including the day, user's weight, and number of calories.
     *
     * @return {object} An object with information about the session.
     */
    getSessionInfos() {        
        const day = this.day;
        const kilogram = this.kilogram;
        const calories = this.calories;
        
        return {
            day,
            kilogram,
            calories
        }
    }
}

/**
 * Prop types for the `Session` class.
 *
 * @static
 * @property {string} day - The day of the session.
 * @property {number} kilogram - The user's weight for the session.
 * @property {number} calories - The number of calories for the session.
 */
Session.propTypes = {
    day: PropTypes.string,
    kilogram: PropTypes.number,
    calories: PropTypes.number,
};