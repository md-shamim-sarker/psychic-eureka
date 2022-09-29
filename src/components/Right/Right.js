import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import './Right.css';
import Swal from 'sweetalert2';

const Right = (props) => {
    const [breaks, setBreaks] = useState(0);

    const breakHandler = (t) => {
        setBreaks(t);
        localStorage.setItem('breaks', t);
    };

    useEffect(() => {
        const breaks = localStorage.getItem('breaks');
        if(breaks) {
            setBreaks(breaks);
        } else {
            setBreaks(0);
        }

    }, [breaks]);

    const completeHandler = () => {
        Swal.fire('Complete Activity.');
    };

    return (
        <div className='right'>
            <div style={{
                display: "flex",
                alignItems: 'center',
                columnGap: '5px'
            }}>
                <img style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%"
                }} src="https://placeimg.com/80/80/people" alt="" />
                <div>
                    <h4 style={{
                        display: "inline"
                    }}>Student Name</h4><br />
                    <p style={{
                        display: "inline"
                    }}>Bangladesh</p>
                </div>
            </div>
            <div style={{
                backgroundColor: "white",
                marginTop: "15px",
                padding: "5px 0",
                borderRadius: "5px"
            }}>
                <small>Weight: 75kg |
                    Height: 6ft |
                    Age: 25y</small>
            </div>
            <hr />
            <h3>Add A Break</h3>
            <div style={{display: "flex", justifyContent: 'space-between'}}>
                <button onClick={() => breakHandler(20)}>20s</button>
                <button onClick={() => breakHandler(25)}>25s</button>
                <button onClick={() => breakHandler(30)}>30s</button>
                <button onClick={() => breakHandler(35)}>35s</button>
                <button onClick={() => breakHandler(40)}>40s</button>
            </div>
            <hr />
            <h3>Excercise Details</h3>
            <h4 style={{
                backgroundColor: "white",
                marginTop: "15px",
                padding: "5px 2px",
                borderRadius: "5px"
            }}>Excercise Time: {props.gyms} minutes</h4>
            <h4 style={{
                backgroundColor: "white",
                marginTop: "15px",
                padding: "5px 2px",
                borderRadius: "5px"
            }}>Break Time: {breaks} seconds</h4>
            <hr />
            <button onClick={completeHandler} className='btn'>Activity Completed</button>
        </div>
    );
};

export default Right;