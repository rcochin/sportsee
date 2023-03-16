import PropTypes from 'prop-types';

export class UserPerformances {
    /**
     * Creates a new UserPerformances instance.
     *
     * @param {Array} performances - An array of performance items.
     * @param {Object} kindMap - An object mapping kind values to their respective translations.
     */
    constructor(performances = [], kindMap = {}) {
        this.performances = performances.map(item => ({
            ...item,
            kind: kindMap[item.kind],
        }));
        this.kindTrad = {
            cardio: 'Cardio',
            energy: 'Energie',
            endurance: 'Endurance',
            strength: 'Force',
            speed: 'Vitesse',
            intensity: 'Intensité',
        };
    }

    /**
     * Gets an array of performance items with their respective translated kind values.
     *
     * @return {Array} An array of performance items with translated kind values.
     */
    getPerformances() {
        return this.performances.map(item => ({
            ...item,
            kind: this.kindTrad[item.kind],
        }));
    }
}

UserPerformances.propTypes = {
    performances: PropTypes.arrayOf(PropTypes.shape({
        kind: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    })).isRequired,
    kindMap: PropTypes.object.isRequired,
};