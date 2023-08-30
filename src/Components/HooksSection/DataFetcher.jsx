import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        //Lógica para obtener datos de una API
        fetchData()
        .then(response => setData(response))
        .catch(error => console.log(error))
    }, []);


return (
    <div>
    { data.map((item) => (        
            <p key={item.id}>{item.name}</p>
        ))}
    </div>  
)}

export default DataFetcher;