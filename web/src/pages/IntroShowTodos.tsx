import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import useStep from '../utils/useStep';
import includedParticipants from '../assets/landing/included_participants.png';
import { useTranslation, Trans } from 'react-i18next';

/**
 * Component which will display a IntroShowTodos.
 */
const IntroShowTodos: React.FC = () => {
    const { nextStep } = useStep();

    const { t } = useTranslation();

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
                        <span className='heading'><h2>{"Welcome to the"}</h2><h2 className='highlight'>{"Smart Parking Demo"}</h2></span>
                        <Trans i18nKey="pages.demo.introShowTodos.hereIsTodo">
                            <h3>Here is <strong>your to-do list</strong> for today:</h3>
                        </Trans>
                        <ul className='todos'>
                            <li>{"Receive credentials"}</li>
                            <li>{"Provide credentials"}</li>
                            <li>{"Prove identity"}</li>
                        </ul>
                        <Link to={nextStep}>
                            <Button className='cta'>
                                {t("actions.continue")}
                            </Button>
                        </Link>
                    </div>
                    <div className='image-wrapper'>
                        <img src={includedParticipants} alt='Included participants' />
                    </div>
                </div>
            </div>
    );
};

export default IntroShowTodos;
