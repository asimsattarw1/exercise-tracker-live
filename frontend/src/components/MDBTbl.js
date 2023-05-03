import React from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { alertDataAction, editAction, nullAlertDataAction } from '../redux/store/exerciseReducer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { getActivitiesList } from '../redux/store/actions';
import ViewModal from './ViewModal';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useCookies } from 'react-cookie';


export default function MDBTbl({ currentItems }) {

    const [viewActivity, setViewActivity] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cookies] = useCookies(["user"]);

    const user = useSelector(state => state.user?.user);

    const editActivity = async (editObj) => {
        navigate(`/edit/${editObj?._id}`)
        dispatch(editAction(editObj));
    }

    const deleteActivity = async (id) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authorization': `${cookies?.jwt}` },
                body: JSON.stringify({ id })
            };

            fetch('http://localhost:7000/activity/delete', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        dispatch(getActivitiesList({ uid: user?._id, token: cookies?.jwt }));
                        dispatch(alertDataAction({ status: 'success', msg: data?.message, show: 'show' }));
                        setTimeout(() => {
                            dispatch(nullAlertDataAction());
                        }, 5000)
                    }
                });
        } catch (error) {
            dispatch(alertDataAction({ status: 'error', msg: error, show: 'show' }));
            setTimeout(() => {
                dispatch(nullAlertDataAction());
            }, 5000)
        }
    }


    return (
        <>
            {currentItems.length > 0 ?
                <MDBTable align='middle' className='tbl table-hover'>
                    <MDBTableHead className='bg-success text-light text-bold'>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Activity</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Duration</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>View</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {currentItems.map((items) => {
                            return (<tr key={items?._id}>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>{items?.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>{items?.activity}</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>{items?.date}</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>{items?.duration}</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>{items?.description}</p>
                                </td>
                                <td onClick={() => setViewActivity(items?.activity)}>
                                    <VisibilityIcon className="" color="" data-bs-toggle="modal" data-bs-target="#myModal" />

                                </td>
                                <td>
                                    <MDBBtn color='link'>
                                        <EditIcon className='ms-3 text-warning' title='Edit' onClick={() => editActivity(items)} />
                                    </MDBBtn>

                                    <MDBBtn color='link'>
                                        <DeleteForeverIcon className='ms-2 text-danger' title='Delete' onClick={() => deleteActivity(items?._id)} />
                                    </MDBBtn>
                                </td>
                            </tr>
                            )
                        })}
                    </MDBTableBody>
                </MDBTable>
                :
                <h1 className='text-muted text-center w-100'>No data to show</h1>
            }
            {viewActivity ?
                <ViewModal viewActivity={viewActivity} /> : ''
            }
        </>
    );
}