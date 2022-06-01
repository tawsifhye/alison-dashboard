import { FinishedModule } from 'interface/interface';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'redux/reducers';
import Styles from '../styles/Navbar.module.css'
interface Props {
    bgcolor: string;
    progress?: string
}


const ProgressBar = ({ bgcolor }: Props) => {
    const [currentModule, setCurrentModule] = useState<FinishedModule>();
    const { finishedModules }: any = useSelector((state: State) => state.moduleInfo);
    const router = useRouter();
    const { params } = router.query;
    console.log(currentModule);

    useEffect(() => {
        if (params) {
            const filteredFinishedModule = finishedModules.find((module: FinishedModule) => module.moduleId == params[1]);
            setCurrentModule(filteredFinishedModule);
        }
    }, [finishedModules, params])
    const Parentdiv = {
        height: '5px',
        width: '150px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: '5px 0',
    }

    const Childdiv = {
        height: '100%',
        width: `${100}%`,
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