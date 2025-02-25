import  {useState} from 'react';
import './App.css'

// eslint-disable-next-line react/prop-types
const DataList = ({data}) => {
    const [editableData, setEditableData] = useState(data);
    const [tempData, setTempData] = useState(data);
    const [isEditing, setIsEditing] = useState(false);
    const [isListing, setIsListing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setEditableData(tempData);
        console.log('Saved data:', tempData);
        // Here you can add logic to save the data to a server
    };

    const handleStartListingClick = () => {
        setIsListing(!isListing);
    };

    const handleInputChange = (event, section, itemKey) => {
        const newData = {...tempData};
        newData[section][itemKey] = event.target.value;
        setTempData(newData);
    };

    return (
        <div>
            {isListing ? (
                <div>
                    {Object.keys(editableData).map((section, index) => (
                        <div key={index}>
                            <h2>{section}</h2>
                            <ul>
                                {Object.keys(editableData[section]).map((itemKey) => (
                                    <li key={itemKey}>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={tempData[section][itemKey]}
                                                onChange={(event) => handleInputChange(event, section, itemKey)}
                                            />
                                        ) : (
                                            editableData[section][itemKey]
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {isEditing ? (
                        <button onClick={handleSaveClick}>Save</button>
                    ) : (
                        <button onClick={handleEditClick}>Edit</button>
                    )}
                </div>
            ) : (<p>...</p>
            )}
            <button onClick={handleStartListingClick}>Start Listing</button>
        </div>
    );
};

const App = () => {
    const data = {
        one: {
            "1": "this is one",
            "2": "this is two",
            "3": "this is three"
        },
        two: {
            "1": "this is one",
            "2": "this is two",
            "3": "this is three"
        },
        three: {
            "1": "this is one",
            "2": "this is two",
            "3": "this is three"
        }
    };

    return (
        <div>
            <DataList data={data}/>
        </div>
    );
};

export default App;
