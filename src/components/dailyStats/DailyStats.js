import './DailyStats.css'

/**
 * A component that displays daily nutrition stats.
 *
 * @param {Object} props - The props object for the component.
 * @param {string} props.type - The type of the nutrition stat.
 * @param {number} props.value - The value of the nutrition stat.
 * @param {string} props.unit - The unit of the nutrition stat.
 * @param {string} props.image - The image source for the nutrition stat icon.
 * @return {JSX.Element} - The DailyStats component.
*/
const DailyStats = ({type, value, unit, image}) => {
 
    return(
        <div className='nutrition-container'>
            <figure>
                <img alt='icone-nutrition' src={image} />
            </figure>
            <div>
                <h3>{value} {unit}</h3>
                <p>{type}</p>
            </div>

        </div>
    )
}

export default DailyStats

