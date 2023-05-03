import React from 'react';
import { useSelector } from 'react-redux';
import cardImg from '../assets/images/a.avif';
import moment from 'moment';

const CardGallary = () => {

    let thisDate = moment().format('YYYY-MM-DD');
    const store = useSelector((state) => state?.activitiesList);
    const today = store.length > 0 && store.filter(el => el?.date === thisDate);
    return (
        <div className='shadow bg-light py-4 px-3 mt-4 h-auto d-flex justify-content-center flex-wrap'>
            <h3 className='text-info text-center w-100'>Today's activities<hr /></h3>
            {today.length >0 && today.map((d, i) => {
                console.log(d?.date === thisDate)
                return (
                    <div key={d?.id} className="bg-light h-auto me-3 my-3" style={{ width: "250px", height: "250px", borderRadius: '7px', border: '1px solid lightgray' }}>
                        <div className='' style={{ heigth: '100px', width: '100%' }}>
                            <img className="card-img-top" src={cardImg} alt="Card image" style={{ width: "100%" }} />
                        </div>
                        <div className="p-4">
                            <h4 className="card-title">{d?.name}</h4>
                            <div className='d-flex justify-content-center'>
                            <span className="text-center text-light bg-primary p-2"  style={{borderRadius:'40px'}}>{d?.activity}</span>
                            </div>
                            <p className="card-text">{d?.description}</p>
                            <div className='text-muted d-flex justify-content-between'>
                                <span>Date:</span> <span>{d?.date}</span>
                            </div>
                            <div className='text-muted d-flex justify-content-between'>
                                <span>Duration:</span> <span>{d?.duration}</span>
                            </div>
                            {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default CardGallary
