import PropTypes from 'prop-types';
import calorieImg from '../assets/calories-icon.png'
import carbsImg from '../assets/carbs-icon.png'
import proteinImg from '../assets/protein-icon.png'
import lipidImg from '../assets/fat-icon.png'

/**
 * Represents the key data for a user, including calorie, protein, carbohydrate, and lipid counts.
 *
 * @class
 * @param {number} calorieCount - The number of calories for the user.
 * @param {number} proteinCount - The number of protein grams for the user.
 * @param {number} carbohydrateCount - The number of carbohydrate grams for the user.
 * @param {number} lipidCount - The number of lipid grams for the user.
 */
export class KeyData {
    constructor ( calorieCount, proteinCount, carbohydrateCount, lipidCount ) {
        this.calorieCount = calorieCount;
        this.proteinCount = proteinCount;
        this.carbohydrateCount = carbohydrateCount;
        this.lipidCount = lipidCount;
    }
    
    /**
     * Returns an array of user statistics for the key data.
     *
     * @return {object[]} An array of user statistics for the key data.
     */
    getUserStats() {
        const userStats = [
            { type: "calorie", value: this.calorieCount, unit: "kCal", imageSrc: calorieImg },
            { type: "glucide", value: this.carbohydrateCount, unit: "g", imageSrc: carbsImg },
            { type: "protéine", value: this.proteinCount, unit: "g", imageSrc: proteinImg },
            { type: "lipide", value: this.lipidCount, unit: "g", imageSrc: lipidImg }
        ];

        return userStats;
    }
}

/**
 * Prop types for the `KeyData` class.
 *
 * @static
 * @property {number} calorieCount - The number of calories for the user.
 * @property {number} proteinCount - The number of protein grams for the user.
 * @property {number} carbohydrateCount - The number of carbohydrate grams for the user.
 * @property {number} lipidCount - The number of lipid grams for the user.
 */
KeyData.propTypes = {
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number
};