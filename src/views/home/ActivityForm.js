import React, { useState } from 'react';
import { Input } from 'mdb-ui-kit';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBTextArea,
    MDBDropdown
} from 'mdb-react-ui-kit';
import Select from 'react-select';
import { getActivitiesList } from '../../redux/store/actions';
import { useDispatch } from 'react-redux';

export default function ActivityForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [activity, setActivity] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');

    const dispatch = useDispatch();

    const activityOptions = [
        { value: 'Run', label: 'Run' },
        { value: 'Bicycle', label: 'Bicycle ride' },
        { value: 'Swim', label: 'Swim' },
        { value: 'Walk', label: 'Walk' },
        { value: 'Hike', label: 'Hike' }
    ];

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const postObj = { name, description, activity, duration, date };
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postObj)
            };

            fetch('http://localhost:7000/activity/add', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data?.status) {
                        dispatch(getActivitiesList());
                        setName("");
                        setActivity("");
                        setDescription("");
                        setDuration("");
                        setDate("");
                        // setErrorMsg(data?.message);
                        // setAlertDisplay(true);
                    }
                });
        } catch (error) {
            window.scrollTo(0, 0);
            // setAlertDisplay(true);
            // setErrorMsg(error);
        }

    }


    return (
        <form className='shadow-lg p-4' style={{ width: '500px', height: 'auto' }} onSubmit={submitData}>
            <h3 className='mb-3 text-center text-muted'>Add Activity</h3>
            <MDBInput className='mb-4' id='form5Example1' label='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <Select
                className="basic-single mb-4"
                classNamePrefix="select"
                // defaultValue={activityOptions[0]}
                // isDisabled={isDisabled}
                // isLoading={isLoading}
                // isClearable={isClearable}
                // isRtl={isRtl}
                // isSearchable={isSearchable}
                value={activity}
                name="activity"
                options={activityOptions}
                onChange={(e) => setActivity(e.value)}
            />
            <MDBTextArea className='mb-4' rows='3' id='form5Example2' label='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <MDBInput className='mb-4' type='number' id='form5Example1' label='Duration' value={duration} onChange={(e) => setDuration(e.target.value)} />
            <MDBInput className='mb-4' type='date' id='form5Example1' label='Date' value={date} onChange={(e) => setDate(e.target.value)} />


            <button className='form-control btn btn-success' type='submit'>
                Submit
            </button>

            {/* <MDBBtn type='submit' block onClick={submitData}>
                Submit
            </MDBBtn> */}
        </form>
    );
}
