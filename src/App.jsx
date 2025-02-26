import {useState} from 'react';
import './App.css';

const SectionEditor = () => {
    const initialData = {
        one: ["this is one1", "this is two1", "this is three1"],
        two: ["this is one2", "this is two2", "this is three2"],
        three: ["this is one3", "this is two3", "this is three3"],
    };

    const [data, setData] = useState(initialData);
    const [inputValues, setInputValues] = useState({});

    // Function to handle input changes dynamically for each section
    const handleInputChange = (section, field, value) => {
        setInputValues((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };

    // Save the "type" and "reason" to the specific section
    const saveExtra = (section) => {
        const { type = "", reason = "" } = inputValues[section] || {};

        if (type && reason) {
            setData((prevData) => ({
                ...prevData,
                [section]: [
                    ...prevData[section],
                    `Type: ${type}, Reason: ${reason}`,
                ],
            }));

            // Clear inputs after saving
            setInputValues((prev) => ({ ...prev, [section]: { type: "", reason: "" } }));
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Section Editor</h1>

            {Object.keys(data).map((section) => (
                <div key={section} className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{section}</h2>

                    {/* List existing items */}
                    <ul className="mb-4">
                        {data[section].map((item, index) => (
                            <li key={index} className="ml-4">- {item}</li>
                        ))}
                    </ul>

                    {/* Input for "type" */}
                    <input
                        type="text"
                        placeholder="Type"
                        value={inputValues[section]?.type || ""}
                        onChange={(e) => handleInputChange(section, "type", e.target.value)}
                        className="border p-2 rounded mr-2"
                    />

                    {/* Input for "reason" */}
                    <input
                        type="text"
                        placeholder="Reason"
                        value={inputValues[section]?.reason || ""}
                        onChange={(e) => handleInputChange(section, "reason", e.target.value)}
                        className="border p-2 rounded mr-2"
                    />

                    {/* Save button */}
                    <button
                        onClick={() => saveExtra(section)}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Save Type and Reason
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SectionEditor;
