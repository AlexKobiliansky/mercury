import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import { ReactSVG } from 'react-svg';

//styles
import s from './Status.module.sass';

//icons
import clockSvg from 'img/icons/clock-icon.svg';
import doneSvg from 'img/icons/done-icon.svg';


import TimeAgo from 'javascript-time-ago';

TimeAgo.addLocale({
    locale: 'ff',
    now: {
        now: {
            current: "now",
            future: "in a moment",
            past: "just now"
        }
    },
    long: {
        year: {
            past: {
                one: "{0} year delays",
                other: "{0} years delays"
            },
            future: {
                one: "{0} year left",
                other: "{0} years left"
            }
        },
        second: {
            past: {
                one: "{0} second delays",
                other: "{0} seconds delays"
            },
            future: {
                one: "{0} second left",
                other: "{0} seconds left"
            }
        },
        minute: {
            past: {
                one: "{0} minute delays",
                other: "{0} minutes delays"
            },
            future: {
                one: "{0} minute left",
                other: "{0} minutes left"
            }
        },
        hour: {
            past: {
                one: "{0} hour delays",
                other: "{0} hours delays"
            },
            future: {
                one: "{0} hour left",
                other: "{0} hours left"
            }
        },
        day: {
            past: {
                one: "{0} day delays",
                other: "{0} days delays"
            },
            future: {
                one: "{0} day left",
                other: "{0} days left"
            }
        },
        week: {
            past: {
                one: "{0} week delays",
                other: "{0} weeks delays"
            },
            future: {
                one: "{0} week left",
                other: "{0} weeks left"
            }
        },
        month: {
            past: {
                one: "{0} month delays",
                other: "{0} months delays"
            },
            future: {
                one: "{0} month left",
                other: "{0} months left"
            }
        },

    }
})
function Status(props) {

    let status;
    const done = props.doneStatus;
    let date = new Date(Date.parse(props.deadline));
    let today = new Date();



    if (done) {
       status = <div className={s.done}>
           <ReactSVG src={doneSvg} wrapper='span'/>
           <span>Completed</span>
       </div>
    } else {
       if(date > today) {
           status = <div className={s.current}>
               <ReactSVG src={clockSvg} wrapper='span'/>
               <span><ReactTimeAgo date={date} locale="ff"/></span>
           </div>
       } else {
           status = <div className={s.delayed}>
               <ReactSVG src={clockSvg} wrapper='span'/>
               <span><ReactTimeAgo date={date} locale="ff"/></span>
           </div>
       }
    }

    return (
        <div className={s.status}>
            {status}
        </div>
    );
}

export default Status;