import React, { useState, useEffect, useRef } from 'react';
import run from '../assets/images/run.gif';
import walk from '../assets/images/walk.gif';
import hike from '../assets/images/hike.gif';
import swim from '../assets/images/swim.gif';
import bicycle from '../assets/images/bicycle.gif';



const ViewModal = ({ viewActivity }) => {

    const [image, setImage] = useState('');
    // setImage(viewActivity);

    useEffect(() => {

        if (viewActivity.toLowerCase() === 'run') {
            setImage(run);
        }
        else if (viewActivity.toLowerCase() === 'walk') {
            setImage(walk);
        }
        else if (viewActivity.toLowerCase() === 'hike') {
            setImage(hike);
        }
        else if (viewActivity.toLowerCase() === 'swim') {
            setImage(swim);
        }
        else if (viewActivity.toLowerCase() === 'bicycle') {
            setImage(bicycle);
        }

    }, [viewActivity])

    return (
        <div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{viewActivity}</h4>
                        </div>
                        <div className="modal-body">
                            <img src={image} alt='no image' style={{ width: '100%', maxHeight: '600px' }} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=> setImage('')}>
                                Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewModal
