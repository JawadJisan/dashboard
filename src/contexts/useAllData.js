import React, { useEffect, useState } from 'react';

const useAllData = () => {
    const [allData, setAllData] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/info')
        .then(res=>res.json())
        .then(data=> {setAllData(data)
        // console.log(data, 'from mongo db')
        });
    },[])
    return [allData, setAllData];
};

export default useAllData;