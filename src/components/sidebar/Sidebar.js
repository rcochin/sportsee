import Gym from '../../assets/gym.png'
import Biking from '../../assets/biking.png'
import Swimming from '../../assets/swimming.png'
import Yoga from '../../assets/yoga.png'
import './Sidebar.css'
import IconSidebar from '../iconSidebar/IconSidebar'

/**
 * Sidebar component containing sport icons and copyright
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = () =>{
    return (
        <div className="sidebar">
            <div className='sidebar-content'>
                <div className="sport-container">
                    <IconSidebar imgSrc={Yoga}/>
                    <IconSidebar imgSrc={Swimming}/>
                    <IconSidebar imgSrc={Biking}/>
                    <IconSidebar imgSrc={Gym}/>
                </div>
                <p className="copyright">Copiryght, SportSee 2020</p>
            </div>
          
        </div>
    )
}

export default Sidebar;