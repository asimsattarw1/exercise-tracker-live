import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import mypic from '../assets/images/c.avif';
import { NavLink } from 'react-bootstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editAction } from '../redux/store/exerciseReducer';

export default function CardList(props) {
  const [toolkitShow, setToolkitShow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editActivity = (editObj) => {
    navigate(`/edit/${editObj?._id}`)
    dispatch(editAction(editObj));
  }

  return (
    <MDBCard className='h-auto' onMouseOver={() => setToolkitShow(true)} onMouseLeave={() => setToolkitShow(false)}
      style={{ position: 'relative' }}
    >
      <div className={toolkitShow ? 'd-flex justify-content-end w-100' : 'd-none'} style={{ position: 'absolute' }}>
        <DeleteForeverIcon className='ms-2 text-danger' title='Delete' onClick={() => props?.deleteActivity(props?._id)} />
        <EditIcon className='ms-3 text-warning' title='Edit' onClick={() => editActivity(props)} />
      </div>
      <MDBCardImage src={mypic} position='top' alt='...' />
      <MDBCardBody className="mb-5 bg-warning shadow-lg card-body d-flex flex-column align-items-center">
        <h5 className="card-title text-light bg-primary p-2 px-4" style={{ borderRadius: '40px' }}>{props?.activity}</h5>
        <MDBCardTitle><u>{props?.name}</u></MDBCardTitle>
        <div className="d-flex justify-content-between text-muted pt-2 px-0">
          <div>{props?.date}</div>
          <div className='mx-5'>{props?.duration}</div>
        </div>
        <MDBCardText className=''>
          <p className="card-text">{props?.description}</p>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

    //   <div className="card" style={{width:'400px'}}>
    //   <img className="card-img-top" src={props?.url} alt="Card image" style={{width:'100%'}}/>
    //   <div className="card-body">
    //     <h4 className="card-title">{props?.title}</h4>
    //     <p className="card-text">{props?.desc}</p>
    //     <a href="#" className="btn btn-primary">See Profile</a>
    //   </div>
    // </div>
  );


}