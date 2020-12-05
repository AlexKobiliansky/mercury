import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/styles';
import LoginForm from './UI/Forms/LoginForm';
import RegisterForm from './UI/Forms/RegisterForm';

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
        root: {
            background: "linear-gradient(45deg, green 30%, orange 90%)",
        }
    });

    const classes = useStyles();

    return (
        <div className="loginScreen">
            <div className="loginBlock">
                <div className="header">
                    <AppBar position="static" className={classes.root}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Register" {...a11yProps(0)} />
                            <Tab label="Login" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                </div>
                <div className="content">
                    <TabPanel value={value} index={0} component="span">
                        <RegisterForm />
                    </TabPanel>
                    <TabPanel value={value} index={1} component="span">
                        <LoginForm />
                    </TabPanel>
                </div>
            </div>
        </div>
    );
}

export default NoAuthLayout;
