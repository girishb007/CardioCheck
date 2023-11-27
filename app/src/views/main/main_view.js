import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setLevel } from '../../../redux/actionCreators/SetLevel';

function MainView() {
    const dispatch = useDispatch();
    const router = useRouter();

    const authentication = (elementLevel) => {
        dispatch(setLevel(elementLevel));
        router.push('/caaas/login');
    };

    return (
        <div className="container main-container" style={{ backgroundColor: 'lightblue' }}> {/* Light Purple Background */}
            <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-6 text-center">
                    <h1>
                        <span  style={{ color: 'black' }}>Cardio</span>
                        <span style={{ color: 'white' }}>Check</span>
                    </h1>
                    <p className="lead mt-4" style={{ color: 'grey', fontStyle: 'italic' }}>Track your beat</p> {/* Grey Color and Italic Font */}
                    <button
                        className="btn m-2"
                        style={{ borderRadius: '25px', 
                        backgroundColor: 'white', 
                        color: 'black', 
                        padding: '10px 20px', 
                        fontSize: '1.2rem' 
                    }} 
                        onClick={(e) => {
                            authentication('personal');
                            e.preventDefault();
                        }}
                    >
                        Personal
                    </button>
                    <button
                        className="btn m-2"
                        style={{ 
                            borderRadius: '25px', 
                        backgroundColor: 'white', 
                        color: 'black', 
                        padding: '10px 20px', 
                        fontSize: '1.2rem' }}
                        onClick={(e) => {
                            authentication('organisation');
                            e.preventDefault();
                        }}
                    >
                        Organisation
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainView;
