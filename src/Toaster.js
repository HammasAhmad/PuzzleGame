import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toaster({ toaster }) {
    const notify = () => toast("Wow so easy!");
    let winner = new Audio('./music/winner.mp3')

    React.useEffect(() => {
        if (toaster === true) {
            notify()
            winner.play()
        }

    }, [])

    return (
        <div>
            {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="colored"
            /> */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                // closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
            // pauseOnHover
            />
        </div>
    );
}