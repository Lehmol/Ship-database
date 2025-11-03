import { getData } from './utilities/api';

function App() {

  const handleClick = async () => {
    try {
      const vesselData = await getData();
      console.log('Vessel data: ', vesselData);
    } catch (error) {
      console.error('Kunde inte hämta data: ', error);
    }
  }
  return(
    <>
      <h1>Ship database</h1>
      <button onClick={handleClick}>Get vessel data</button>

    </>
  )
}

export default App;