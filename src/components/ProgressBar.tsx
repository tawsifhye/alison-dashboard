import React from 'react';
import Styles from '../styles/Navbar.module.css'
interface Props {
    bgcolor: string;
    progress: string
}


const ProgressBar = ({ bgcolor, progress }: Props) => {
    const Parentdiv = {
        height: '5px',
        width: '150px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: '5px 0',
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,

    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <>

            <div style={Parentdiv}>
                <div style={{ ...Childdiv, textAlign: 'right' }}>

                </div>
            </div>
        </>
    )
};

export default ProgressBar;