import React from 'react';
import vira from '../../assets/apps/vira.png';

const Vira = () => (
    <a
        href='https://www.tanglelabs.io/'
        target='_blank'
        rel='noopener noreferrer'
    >
        <img src={vira} width={80} alt='powered by TangleLabs' />
    </a>
);

export default Vira;
