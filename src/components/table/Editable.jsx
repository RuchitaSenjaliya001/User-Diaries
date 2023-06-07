import React, { useState } from "react";

export const EditableCell = ({ value: initialValue }) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return <input value={value} onChange={handleChange} className="bg-inherit" />;
};
