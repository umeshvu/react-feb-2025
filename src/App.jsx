import {useState} from 'react';
import './App.css'
import _ from 'lodash';

function App() {
    // const [rawData, setRawData] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            // Fetch data from an API
            const response = await fetch('https://api.github.com/users/corollari/repos');
            const rawDataReceived = await response.json();

            // Set the raw data to state
            // setRawData(rawDataReceived);

            // Process the data using map
            let processedData = rawDataReceived.map(item => item.name);

            // let pairs = _.pairs(processedData);
            // let insertPosition = _.findIndex(pairs, function(pair) {
            //     return pair[0] === "0";
            // });
//
// // Insert the new key-value pair
//             let newPair = ["twelve", "12"];
//             pairs.splice(insertPosition, 0, newPair);
//
// // Convert the array back to an object
//             let newObject = _.object(pairs);

            // processedData = {"132":{id:123,name:"umesh"},...processedData};

            // Set the processed data to state
            setData(processedData);
            console.log(processedData);
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


    function insertKeyInPosition(obj, newKey, newValue, position) {
        // Create a new object to hold the reordered properties
        const newObj = {};
        let index = 0;

        // Iterate over the original object's keys
        for (const key in obj) {
            if (index === position) {
                // Insert the new key-value pair at the specified position
                newObj[newKey] = newValue;
            }
            // Copy the existing key-value pair to the new object
            newObj[key] = obj[key];
            index++;
        }

        // If the position is at the end or beyond the current keys
        if (index <= position) {
            newObj[newKey] = newValue;
        }

        return newObj;
    }

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            <p>Processed data</p>
            {<pre>{JSON.stringify(data, null, '\t')}</pre>}
            {/*<p>Raw data</p>*/}
            {/*{<pre>{JSON.stringify(rawData, null, 2)}</pre>}*/}
        </div>
    );
}

export default App
