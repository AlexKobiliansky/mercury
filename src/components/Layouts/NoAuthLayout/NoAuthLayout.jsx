import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles';
import LoginForm from '../../UI/Forms/LoginForm';
import RegisterForm from '../../UI/Forms/RegisterForm';

import logo from '../../../img/logo.png';
import styles from './NoAuthLayout.module.sass'
import {NavLink} from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component='div'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function NoAuthLayout() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles({
        header: {
            background: '#0e1a35',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '45px',
            '@media (max-width:992px)': {
                paddingLeft: '30px',
            },
            '@media (max-width:480px)': {
                paddingLeft: '15px',
            }
        },
        tabs: {
            width: 'auto',
        },
        tab: {
            fontSize: '24px',
            lineHeight: '5',
            textTransform: 'none',
            fontWeight: '500',
            minWidth: 'auto',
            padding: '0 50px',
            '@media (max-width:992px)': {
                fontSize: '20px',
                padding: '0 30px',
                lineHeight: '4',
            },
            '@media (max-width:480px)': {
                fontSize: '16px',
                padding: '0 20px',
            },
            '@media (max-width:390px)': {
                fontSize: '15px',
                padding: '0 15px',
            }
        },
        indicator: {
            background: '#5584ff',
            height: '10px',
            '@media (max-width:992px)': {
                height: '5px'
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={styles.loginScreen}>
            <div className={styles.loginBlock}>
                <AppBar position="static" className={classes.header}>
                    <NavLink to='/' className={styles.logo}><img src={logo} alt="Mercury"/></NavLink>
                    <Tabs value={value} onChange={handleChange} className={classes.tabs} classes={{ indicator: classes.indicator }}>
                        <Tab label="Register" {...a11yProps(0)} className={classes.tab}/>
                        <Tab label="Login" {...a11yProps(1)} className={classes.tab}/>
                    </Tabs>
                </AppBar>

                <div className="content">
                    <TabPanel value={value} index={0} component="span">
                        <RegisterForm/>
                    </TabPanel>
                    <TabPanel value={value} index={1} component="span">
                        <LoginForm/>
                    </TabPanel>
                </div>
            </div>
        </div>
    );
}

export default NoAuthLayout;
