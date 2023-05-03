import React, { useEffect, useState } from 'react';
import {
    MDBInput,
    MDBTextArea,
} from 'mdb-react-ui-kit';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertDataAction, nullAlertDataAction, nullEditAction } from '../../../redux/store/exerciseReducer';
import { getActivitiesList } from '../../../redux/store/actions';
import { useCookies } from 'react-cookie';

export default function ActivityForm(props) {
    const [description, setDescription] = useState('');
    const [activity, setActivity] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');
    const [editId, setEditId] = useState('');

    const [cookies] = useCookies(["user"]);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user?.user);
    const navigate = useNavigate();
    const { edit } = useSelector(state => state);

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
            const postObj = { uid: user?._id, id: editId, name: user?.name, description: description, activity: activity.value, duration: duration, date: date, };
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authorization': `${cookies?.jwt}` },
                body: JSON.stringify(postObj)
            };

            fetch(editId ? 'http://localhost:7000/activity/update' : 'http://localhost:7000/activity/add', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data?.status) {
                        dispatch(alertDataAction({ status: 'success', msg: data?.message, show: 'show' }));
                        setTimeout(() => {
                            dispatch(nullAlertDataAction());
                        }, 5000);

                        dispatch(getActivitiesList({ uid: user?._id, token: cookies?.jwt }));
                        dispatch(nullEditAction());
                        setActivity("");
                        setDescription("");
                        setDuration("");
                        setDate("");
                        setEditId('');
                        editId ? navigate('/all-record') : navigate('/');
                        props.hideModalFunc();
                    }
                });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }

    useEffect(() => {
        if (edit) {
            setEditId(edit._id);
            setDuration(edit?.duration);
            setDescription(edit?.description);
            setDate(edit?.date);
            setActivity({ value: edit?.activity, label: edit?.activity });
        }
    }, []);

    return (
        <form className='shadow-lg p-4' style={{
            height: 'auto', backgroundColor: 'white'
        }} onSubmit={submitData}>
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
                onChange={(e) => setActivity(e)}
            />
            <MDBTextArea className='mb-4' rows='3' id='form5Example2' label='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <MDBInput className='mb-4' type='number' id='form5Example1' label='Duration' value={duration} onChange={(e) => setDuration(e.target.value)} />
            <MDBInput className='mb-4' type='date' id='form5Example1' label='Date' value={date} onChange={(e) => setDate(e.target.value)} />

            <button className='form-control btn btn-success' type='submit'>
                {editId ? 'Update' : 'Submit'}
            </button>
        </form>
    );
}
