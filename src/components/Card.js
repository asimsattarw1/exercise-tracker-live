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

export default function Card(props) {
  const [toolkitShow, setToolkitShow] = useState(false);

  return (
    // <MDBCard>
    //   <MDBCardImage src={mypic} position='top' alt='...' />
    //   <MDBCardBody>
    //     <MDBCardTitle>Title</MDBCardTitle>
    //     <MDBCardText>
    //       <p>klfghjl;sdh dshlkj dshdsfl hdff ds hdsdh dh ds h df h dfh sd h sd h 
    //      f hs fg h fg gh fghdfgh gh d hgs df d gh dsh sd fh  shsdh sdh dshds h dfh</p>
    //     </MDBCardText>
    //   </MDBCardBody>
    // </MDBCard>

    <div className="card shadow" style={{ width: '400px', position: 'relative' }}
      onMouseOver={() => setToolkitShow(true)} onMouseLeave={() => setToolkitShow(false)}
    >
      <div className={toolkitShow ? 'd-flex justify-content-end w-100' : 'd-none'} style={{ position: 'absolute' }}>
        <DeleteForeverIcon className='ms-2 text-danger' title='Delete' onClick={() => { }} />
        <EditIcon className='ms-3 text-warning' title='Edit' onClick={() => { }} />
      </div>

      <img className="card-img-top" src={mypic} alt="Card image" style={{ width: '', height: 'auto' }} />
      <div className="card-body d-flex flex-column align-items-center">
        <h3 className="card-title text-light bg-primary p-2 px-4" style={{ borderRadius: '40px' }}>Swimming</h3>
        <h4 className="card-title"><u>M Asim Sattar</u></h4>
        <div className="d-flex justify-content-between text-muted pt-2 px-0"><div>12-03-2023</div><div className='mx-5'>15-mins</div></div>
        <p className="card-text">klfghjl;sdh dshlkj dshdsfl hdff ds hdsdh dh ds h df h dfh sd h sd h
          f hs fg h fg gh fghdfgh gh d hgs df d gh dsh sd fh  shsdh sdh dshds h dfh</p>
      </div>
    </div>
  );


}