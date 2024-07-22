import React from 'react';
import poweredByIota from '../../assets/poweredBy/poweredByIota.svg';

const IOTA = () => (
    <a
        href='https://iota.org'
        target='_blank'
        rel='noopener noreferrer'
    >
        <img src={poweredByIota} alt='powered by Iota' />
    </a>
);

export default IOTA;