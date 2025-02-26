import {useState} from 'react';
import './App.css'

// eslint-disable-next-line react/prop-types
const SectionList = ({section, items, onSave}) => {

    const [showExtra, setShowExtra] = useState(false);
    const [type, setType] = useState("");
    const [reason, setReason] = useState("");

    const handleSave = () => {
        onSave(section, type, reason);
        setType("");
        setReason("");
        setShowExtra(false);
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section}</h2>
            <ul className="mb-4">
                {items.map((item, index) => (
                    <li key={index} className="ml-4">- {item}</li>
                ))}
            </ul>
            {showExtra ? (
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Save Type and Reason
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setShowExtra(true)}
                    className="bg-green-500 text-white p-2 rounded"
                >
                    Add Extra
                </button>
            )}
        </div>
    );
};

const ParentComponent = () => {
    const initialData = {
        one: ["this is one1", "this is two1", "this is three1"],
        two: ["this is one2", "this is two2", "this is three2"],
        three: ["this is one3", "this is two3", "this is three3"],
    };

    const [data, setData] = useState(initialData);

    const saveExtra = (section, type, reason) => {
        setData((prevData) => ({
            ...prevData,
            [section]: [...prevData[section], `Type: ${type}, Reason: ${reason}`],
        }));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Section Editor</h1>
            {Object.keys(data).map((key) => (
                <SectionList
                    key={key}
                    section={key}
                    items={data[key]}
                    onSave={saveExtra}
                />
            ))}
        </div>
    );
};

export default ParentComponent;