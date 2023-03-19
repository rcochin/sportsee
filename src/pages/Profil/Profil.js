import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DailyActivites from '../../components/dailyActivities/DailyActivites';
import DailyStats from '../../components/dailyStats/DailyStats';
import Sidebar from '../../components/sidebar/Sidebar';
import TimeChart from '../../components/timeChart/TimeChart';
import RadarChart from '../../components/radarChart/RadarChart';
import './Profil.css';
import '../../responsive.css';
import ObjectifChart from '../../components/objectifChart/ObjectifChart';
import { manageUserMainData, manageUserActivity, manageUserAverageSessions, manageUserPerformances } from '../../managers/dataManager';
/**
 * React component representing the user profile page.
 *
 * @return {JSX.Element} React component for the profile page.
 */
const Profil = () => {
  const [stats, setStats] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [timeSessions, setTimeSession] = useState([]);
  const [performance, setPerformance] = useState([]);
  const { userId } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const mainData = await manageUserMainData(userId);
      const activityData = await manageUserActivity(userId);
      const averageSessions = await manageUserAverageSessions(userId);
      const performances = await manageUserPerformances(userId);

      if (mainData && activityData && averageSessions && performances) {
        setStats(mainData);
        setActivityData(activityData);
        setTimeSession(averageSessions);
        setPerformance(performances);
        setError(false);
      } else {
        setError(true);
      }
    };

    fetchData();
  }, [userId]);

  if (error) {
    console.log("message d'erreur");
    return (
      <div className='error-msg'>
        <h1>Erreur</h1>
        <p>Un problème est survenu lors du chargement des données utilisateur.</p>
      </div>
    );
  }
  
  /**
  * React component representing the user profile page.
  *
  * @return {JSX.Element} React component for the profile page.
  */
  return (
    <div className='page-wrapper'>
      <Sidebar />
      {error ? (
        <div className='error-msg'>
          <h1>Erreur</h1>
          <p>Un problème est survenu lors du chargement des données utilisateur.</p>
        </div>
      ) : (
        <div className='page-profil'>
          <h1>Bonjour <span>{ stats.userInfos }</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className='stats-container'>
            <div className='col-1'>
              <DailyActivites data={activityData} />
              <div className='small-charts-container'>
                <TimeChart timeActivity={timeSessions} />
                <RadarChart performances={performance} />
                <ObjectifChart score={stats.todayScore} />
              </div>
            </div>
            <div className='col-2'>
              {stats.userStats &&
                stats.userStats.map((item, index) => (
                  <DailyStats key={index} type={item.type} value={item.value} unit={item.unit} image={item.imageSrc} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
  
export default Profil;