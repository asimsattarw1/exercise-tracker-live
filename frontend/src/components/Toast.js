import React from 'react'
import { useSelector } from 'react-redux';

const Toast = () => {
    const myStore = useSelector((state) => state?.alertData);

    return (
        <div className={`toast ${myStore?.show ?? ''} h-auto`}
            style={{ marginTop: "80px", zIndex: "99", maxWidth:'350px', position:'fixed'}}
        >
            <div className={`toast-header ${myStore?.status == 'success' ? 'text-success' : myStore?.status == 'error' ? 'text-danger' : 'text-warning'}  d-flex justify-content-between`}>
                {myStore?.status == 'success' ? 'Success' : myStore?.status == 'error' ? 'Error' : 'Warning'}
                <button type="button" className="btn-close text-success" data-bs-dismiss="toast"></button>
            </div>
            <div className="toast-body">
                {myStore?.msg}
            </div>
        </div>
    )
}

export default Toast
