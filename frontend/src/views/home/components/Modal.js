import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import ActivityForm from './ActivityForm'

const Modal = () => {
 
    const { edit } = useSelector(state => state);
    let showModalRef = useRef();
    let hideModalRef = useRef();

    const hideModalFunc = () => {
        hideModalRef.current.click()
    }

    useEffect(() => {
        if (edit !== null) {
            showModalRef.current.click();
        }
    }, [edit]);

    return (
        <div className='shadow d-flex justify-content-between bg-light py-4 px-3 mt-4'>
            <div>
                <h3 className=''>Welcome</h3>
            </div>

            <button type="button" ref={showModalRef} className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal"
            >
                Add Activity+
            </button>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Add activity</h4>
                        </div>

                        <div className="modal-body">
                            <ActivityForm hideModalFunc={hideModalFunc} />
                        </div>

                        <div className="modal-footer">
                            <button ref={hideModalRef} type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal
