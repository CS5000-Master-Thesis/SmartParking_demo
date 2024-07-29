import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import useStep from '../utils/useStep';
import participantsAll from '../assets/currentParticipants/participants_all.png';

/**
 * Component which will display a IntroShowTodos.
 */
const IntroShowTodos: React.FC = () => {
    const { nextStep } = useStep();

    useEffect(() => {
        const reset = async () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            await localStorage.clear();
        };
        reset();
    }, []);

    return (
            <div className='theme-demo'>
                {/* <Link to={'/'} className="logo demo-page">
                    <img src={logo} alt="Selv logo" />
                </Link> */}
                <div className='demo-intro' id='app'>
                    <div className='todos'>
                        <span className='heading'><h2><strong>Smart Parking Demo</strong></h2></span>
                        <h3>Here is <strong>your to-do list</strong> for today:</h3>
                        <ul className='todos'>
                            <li>{"Receive credentials"}</li>
                            <li>{"Provide credentials"}</li>
                            <li>{"Prove identity"}</li>
                        </ul>
                        <Link to={nextStep}>
                            <Button className='cta'>
                                {"Continue"}
                            </Button>
                        </Link>
                    </div>
                    <div className='image-wrapper'>
                        <img src={participantsAll} alt='All participants' />
                    </div>
                </div>
            </div>
    );
};

export default IntroShowTodos;
