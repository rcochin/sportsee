import DailyActivites from '../../components/dailyActivities/DailyActivites'
import DailyStats from '../../components/dailyStats/DailyStats'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeChart from '../../components/timeChart/TimeChart'
import RadarChart from '../../components/radarChart/RadarChart'
import './Profil.css'
import ObjectifChart from '../../components/objectifChart/ObjectifChart'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { manageUserMainData, manageUserActivity, manageUserAverageSessions, manageUserPerformances } from '../../managers/dataManager'
/**
 * React component representing the user profile page.
 *
 * @return {JSX.Element} React component for the profile page.
 */
const Profil = () => {
    const [stats, setStats] = useState([]);
    const { userId } = useParams();
  
    // Uses the API to fetch the user's main information.
    useEffect(() => {
      const fetchData = async () => {
        const data = await manageUserMainData(userId);
        setStats(data);
      };
      fetchData();
    }, [userId]);
  
    const [activityData, setActivityData] = useState([]);
  
    // Uses the API to fetch the user's activity data.
    useEffect(() => {
      const fetchData = async () => {
        const data = await manageUserActivity(userId);
        setActivityData(data);
      };
      fetchData();
    }, [userId]);
  
    const [timeSessions, setTimeSession] = useState([]);
  
    // Uses the API to fetch the user's average time sessions.
    useEffect(() => {
      const fetchData = async () => {
        const data = await manageUserAverageSessions(userId);
        setTimeSession(data);
      };
      fetchData();
    }, [userId]);
  
    const [performance, setPerformance] = useState([]);
  
    // Uses the API to fetch the user's performances.
    useEffect(() => {
      const fetchData = async () => {
        const data = await manageUserPerformances(userId);
        setPerformance(data);
      };
      fetchData();
    }, [userId]);
  
    /**
     * React component representing the user profile page.
     *
     * @return {JSX.Element} React component for the profile page.
     */
    return (
      <div className='page-wrapper'>
        <Sidebar />
        <div className='page-profil'>
          <h1>Bonjour <span>{ stats.userInfos }</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className='stats-container'>
            <div className='col-1'>
              <DailyActivites data={activityData} />
              <TimeChart timeActivity={timeSessions} />
              <RadarChart performances={performance} />
              <ObjectifChart score ={stats.todayScore} />
            </div>
            <div className='col-2'>
              {stats.userStats && stats.userStats.map((item, index) => (
                <DailyStats key={index} type={item.type} value={item.value} unit={item.unit} image={item.imageSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default Profil;