import React, { useState, useEffect } from 'react';

const serverURL = "https://shielded-earth-02834.herokuapp.com";
const name = "ellen";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchCount();
    }, []);

    const fetchCount = async () => {
        const fetchedCount = await getCount(name);
        setCount(fetchedCount.count);
    };

    const getCount = async (name) => {
        const response = await fetch(serverURL + '/counters/' + name, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const responseJSON = await response.json();
        return responseJSON;
    };

    const incrementCount = async (name) => {
        await updateCount(name);
        fetchCount();
    };

    const updateCount = async (name) => {
        await fetch(serverURL + '/counters/' + name, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
    };

    return (
        <div style={{ margin: '3%' }}>
            Counter
            <div>{count}</div>
            <div><button onClick={() => incrementCount(name)}>+</button></div>
        </div>
    );
}
