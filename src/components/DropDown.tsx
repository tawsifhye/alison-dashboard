import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/system';
import { Data } from 'interface/interface';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { getSelectedModule, getSelectedModuleItem } from 'redux/actions/moduleAction';


const StyledMenu = styled((props: any) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(2),
        minWidth: 180,
        color: '#465159',
        boxShadow:
            '',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginLeft: theme.spacing(20),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));



const DropDown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenuId, setSelectedMenuId] = useState<string>("");
    const [moduleData, setModuleData] = useState<Data[]>([]);
    const [menuLabel, setMenuLabel] = useState<string>('');
    const dispatch = useDispatch()
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const showSubMenu = (id: string) => {
        setSelectedMenuId(id);
    }

    const getSelectedModuleId = (label: string, id: string, type: string, index: number) => {
        setMenuLabel(label);
        if (type !== 'quiz') {
            dispatch(getSelectedModule(id));
            dispatch(getSelectedModuleItem(index));
        }
        setAnchorEl(null);
    }
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setModuleData(data))


    }, [])
    return (
        <>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                sx={{
                    background: '#fff',
                    color: '#465159',
                    width: '100%',
                    '&:hover': {
                        background: 'transparent'
                    }
                }}
                disableElevation
                disableRipple
                onClick={handleClick}
                startIcon={<KeyboardArrowDownIcon />}
            >
                {!menuLabel ? moduleData[0]?.title : menuLabel}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {
                    moduleData.map(item => (
                        <MenuItem
                            key={item.title}
                            sx={{ width: '100%' }}
                            component="div"
                            onMouseOver={() => showSubMenu(item.id)}
                            onMouseLeave={() => showSubMenu('')} disableRipple>
                            {item.title} <ChevronRightIcon />
                            {item.id === selectedMenuId && < Box
                                sx={{
                                    background: '#fff',
                                    position: 'fixed',
                                    width: 'auto',
                                    padding: 0,
                                    // left: '350px',
                                    left: 'calc(20% + 470px)',
                                    top: '72px',
                                    minHeight: 'auto',
                                    borderLeft: '1px solid #f4f5f7',
                                    // box-shadow: 0 3px 8px 0 #323232;
                                    boxShadow: '0 3px 8px 0 rgb(50 50 50 / 20%)'
                                }}
                            >
                                {item.submenu.map((menu, index) => (

                                    <Link key={menu.title} href={menu.type === 'quiz' ? `/quiz/${item.id}` : `/topic/module/${item.id}/${menu.slug}`}>
                                        <MenuItem onClick={() => getSelectedModuleId(item.title, item.id, menu.type, index)
                                        } >
                                            {menu.title}
                                        </MenuItem>
                                    </Link>

                                ))}
                            </Box>
                            }
                        </MenuItem>

                    ))
                }
            </StyledMenu>
        </>
    );
};

export default DropDown;