import React from 'react';

//Material UI
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classnames from 'classnames';
import { ReactSVG } from 'react-svg';
import ReactTimeAgo from 'react-time-ago';
import TruncateMarkup from 'react-truncate-markup';

//icons
import answerSvg from '../../../img/icons/answer-icon.svg';
import optionsSvg from '../../../img/icons/options-icon.svg';
import Label from "../../ui/atoms/Label/Label";
//styles
import s from './Message.module.sass'

function Message(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let handleReadStatus = () => {
        console.log(!props.read)
        handleClose();
    }

    let letter = props.name.charAt(0);

    return (
        <div className={classnames(s.message, {[s.unread]: !props.read})}>
            <Label img={props.img} title={letter} />
            <div className={s.content}>
                <div className={s.title}>
                    <span className={s.name}>{props.name}</span>
                    <span className={s.time}><ReactTimeAgo date={props.time} locale="en-US"/></span>
                </div>
                <TruncateMarkup lines={1} ellipsis={' (...)'}>
                    <div className={s.desc}>
                        {props.message}
                    </div>
                </TruncateMarkup>

                <div className={s.icons}>
                    <ReactSVG src={answerSvg} wrapper='span'/>
                    <ReactSVG src={optionsSvg} wrapper='span' onClick={handleClick}/>
                    <Menu
                        anchorEl={anchorEl}
                        disableScrollLock={true}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleReadStatus}>Mark as read</MenuItem>
                        <MenuItem >Delete</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Message;