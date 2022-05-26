import React, { SyntheticEvent, useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Data } from 'interface/interface';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'redux/reducers';
import Link from 'next/link';
import { getSelectedModule, getSelectedModuleItem } from 'redux/actions/moduleAction';


export default function MobileDropDown() {
    const [moduleData, setModuleData] = useState<Data[]>([]);
    const [menuLabel, setMenuLabel] = useState<string>("");
    const [expanded, setExpanded] = useState<string | false>(false);
    const { moduleId, moduleResourceIndex } = useSelector((state: State) => state.moduleInfo)
    const dispatch = useDispatch();

    const handleChange =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setModuleData(data))
    }, []);

    const getSelectedModuleId = (label: string, id: string, type: string, index: number) => {
        if (type !== 'quiz') {
            setMenuLabel(label);
            dispatch(getSelectedModule(id));
            dispatch(getSelectedModuleItem(index));
        }
    }

    return (
        <Accordion elevation={0} sx={{
            width: '100%',
            mt: 2,
            display: {
                md: 'none',
            }

        }}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon
                    sx={{
                        backgroundColor: '#465159',
                        color: '#fff',
                        borderRadius: '50%'
                    }} />
                }

                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{
                    fontWeight: 500,
                    color: '#465159'
                }}>{menuLabel ? menuLabel : moduleData[0]?.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
                {
                    moduleData.map(module => (
                        <>
                            <Accordion
                                key={module.id}
                                expanded={expanded === module.id}
                                onChange={handleChange(module.id)}
                                sx={{
                                    boxShadow: 'none',
                                    padding: 0,

                                }}>
                                <AccordionSummary
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{
                                        margin: 0,
                                        padding: '0px !important',

                                    }}
                                >

                                    <Typography sx={{
                                        width: '100%',
                                        flexShrink: 0,
                                        backgroundColor: '#E8E8E8',
                                        padding: '10px',
                                    }}>
                                        {module?.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    {
                                        module?.submenu.map((menu, index) => (

                                            <Link key={menu.title} href={menu.type === 'quiz' ? `/quiz/${module.id}` : '/'}>
                                                <Typography
                                                    sx={{
                                                        marginLeft: '10px',
                                                        marginTop: '10px',
                                                        cursor: 'pointer',
                                                        '&:first-child': {
                                                            marginTop: '0px',
                                                        }
                                                    }}
                                                    onClick={() => getSelectedModuleId(module.title, module.id, menu.type, index)}
                                                >
                                                    {menu?.title}
                                                </Typography>
                                            </Link>


                                        ))
                                    }
                                </AccordionDetails>
                            </Accordion>
                        </>
                        /*  <Typography key={module.id}
                             sx={{
                                 backgroundColor: '#E8E8E8',
                                 width: '100%',
                                 padding: '10px'
                             }}>
                             {module.title}
                         </Typography> */
                    ))
                }
            </AccordionDetails>
        </Accordion>
    );
}

