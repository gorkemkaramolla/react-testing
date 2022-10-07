import React, { useState } from "react";

const Todo = () => {
    const [items, setItems] = useState([
        { name: "Item A" },
        { name: "Item B" },
        { name: "Item C" },
    ]);
    const [newItem, setNewItem] = useState("");
    const addItem = () => {
        setItems((prev) => [...prev, { name: newItem }]);
        setNewItem("");
    };
    return (
        <div>
            <h2>Todos</h2>
            <label>
                Text
                <input
                    value={newItem}
                    onChange={(e) => {
                        setNewItem(e.target.value);
                    }}
                />
            </label>
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, key) => (
                    <li key={key}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
