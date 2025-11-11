import './sidebar.css';
import { getVesselProfiles, getPortProfiles } from '../../utilities/api';


const SideBar = () => {

    const getPort = async () => {
        try {
            const portData = await getPortProfiles();
            console.log('Port data: ', portData);
        } catch (error) {
            console.error('Kunde inte hämta data:', error);
        }
    }

    const getVessels = async () => {
    try {
      const vesselData = await getVesselProfiles();
      console.log('Vessel data: ', vesselData);
    } catch (error) {
      console.error('Kunde inte hämta data: ', error);
    }
  }
  return (
    <div className="sidebar-container">
        <div className="sidebar-content">
            <h1>Ship Database</h1>
            <button onClick={getVessels}>Vessels</button>
            <button onClick={getPort}>Port</button>
        </div>
    </div>
  )
}

export default SideBar;