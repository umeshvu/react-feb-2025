import {useState} from 'react';
import './App.css'

function App() {
    const [rawData, setRawData] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            // Fetch data from an API
            const response = await fetch('https://api.github.com/users/corollari/repos');
            const rawDataReceived = await response.json();

            // Set the raw data to state
            setRawData(rawDataReceived);

            // Process the data using map
            const processedData = rawDataReceived.map(item => ({
                id: item.id,
                name: item.name
            }));

            // Set the processed data to state
            setData(processedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // const fetchData = () => {
    //   // Fetch data from an API
    //   fetch('https://api.github.com/users/corollari/repos')
    //   .then(response => response.json())
    //   .then(rawDataReceived => {
    //     setRawData(rawDataReceived);
    //     // Process the data using map
    //     const processedData = rawDataReceived.map(item => ({
    //       id: item.id,
    //       name: item.name
    //     }));
    //     return processedData;
    //   })
    //   .then(data => {
    //     setData(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    // };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            <p>Processed data</p>
            {<pre>{JSON.stringify(data, null, 2)}</pre>}
            <p>Raw data</p>
            {<pre>{JSON.stringify(rawData, null, 2)}</pre>}
        </div>
    );
}

export default App
