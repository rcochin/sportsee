import PropTypes from 'prop-types';

/**
 * Class representing the user information.
 */
export class UserInfos {
    /**
     * Create a user information object.
     * @param {string} firstName - The first name of the user.
     * @param {string} lastName - The last name of the user.
     * @param {number} age - The age of the user.
     */
    constructor ( firstName, lastName, age ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
}
  
UserInfos.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.age,
};