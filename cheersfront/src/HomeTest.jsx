import React, {useEffect, useState} from 'react'
import Api from './Utils/Api';

const HomeTest = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    console.log("HomeTest");

    useEffect(() => {
        const get = async () => {
            console.log("Before Try");
            try {
                console.log("isWorking");
                const response = await Api.get('/');
                const responseJson = await response.data;
                await setData(responseJson);
                setLoading(false);
                console.log(responseJson);
            } catch (e) {
                console.error(e);
            }
        }
        get();
    }, [isLoading]);
  return (
    <div>
      <p>{data.Name}</p>
      <p>{data.Age}</p>
    </div>
  )
}

export default HomeTest
