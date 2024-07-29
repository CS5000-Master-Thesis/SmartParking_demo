import React from 'react';
import frame from '../assets/backgrounds/circleFrame5.svg';
import { useTranslation } from 'react-i18next';
import IOTA from './powerdBy/IOTA';

const SidebarInstance = ({ children, poweredBy, currentParticipants }: {
    children?: JSX.Element | null | undefined;
    poweredBy?: JSX.Element;
    currentParticipants?: JSX.Element;
}) => {
    const { t } = useTranslation();

    return (
        <div className='sidebar-wrapper'>
            <div>
                <div className='sidebar-wrapper__header'>
                    <div className="sidebar-drop-selector">
                        {/* <DropSelector /> */}
                    </div>
                </div>
                <div>
                    <h2 className='todo-list'>
                        {t("components.sideBar.yourTodoList")}
                    </h2>
                    { children }
                </div>

            </div>
            <div className='sidebar-footer'>
                <div className='sidebar-participants'>
                    { currentParticipants }
                </div>

               <IOTA/>
                {poweredBy && (
                    <>
                        <span style={{paddingLeft: '25px', paddingTop: '5px', paddingBottom: '5px'}}>and</span>
                        { poweredBy }
                    </>
                )}
            </div>
            <img src={frame} alt='' className='frame' />
        </div>
    );
};

export default SidebarInstance;
