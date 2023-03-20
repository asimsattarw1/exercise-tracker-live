import React, { useEffect } from 'react';
import Card from '../../components/Card';
import AppNavbar from '../../components/AppNavbar';
import ActivityForm from './ActivityForm';
import { getActivitiesList } from '../../redux/store/actions';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivitiesList());
  }, []);

  return (
    <div className='container-fluid vh-100'>
      <AppNavbar />
      <div className='row h-100'>
        <div className='col-9 d-flex justify-content-center align-items-center'>
          <ActivityForm />
        </div>
        <div className='col-3' style={{ maxWidth: '100vh' }}>
          <h4 className='mt-5 text-center text-muted'>Today's activities</h4>
          <Card />
        </div>
      </div>
    </div>
  )
}
