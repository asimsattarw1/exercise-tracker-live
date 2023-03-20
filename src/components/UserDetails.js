import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../css/profile.css';
import { get_nasa_data } from '../redux/nasa/nasaActions';
import SpinnerComp from './SpinnerComp';

const UserDetails = () => {
    const [data, setData] = useState(null);

    const dispatch = useDispatch();
    const nasa = useSelector(state => state.nasa);

    async function fetchData() {
        let api_key = "mkP0OomNrlcY1xRQpSFjs0OcKaGu3jiB4qnoKG0b";
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
        let data = await res.json();
        if (data) {
            dispatch(get_nasa_data(data));
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (nasa?.nasaData != null) {
                setData(nasa?.nasaData);
            }

        }, 2000);
    }, [nasa]);

    return (
        <div className='row banner bg-secondary' style={{ background: `url(${data != null && data?.hdurl})` }}>
            {data == null && <SpinnerComp />}
            <div className='col-12'>
                <h1 className='text-center text-light'>Muhammad Asim Sattar</h1>
            </div>
        </div>
    )
}

export default UserDetails
