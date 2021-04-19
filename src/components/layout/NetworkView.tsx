import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {NetworkViewProps} from './types';

const NetworkView = ({ children, api }: NetworkViewProps) => {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async() => {

            setLoading(true)
            try {
                const response = await api.call(api.path);
                dispatch(api.localStorage(response.data))
                setData(response.data);
            } catch (err) {
                
                setError(err.message);
            }
            setLoading(false)
        }
        fetchData();
    }, []);

    if(!!error){
        return (
            <div>Issue getting information - {error}</div>
        )
    }

    if(loading){
        return (
            <div>Loading....</div>
        )
    } 

    return children({data, loading, error});
}

export default NetworkView;