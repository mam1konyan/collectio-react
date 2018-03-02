import React from 'react';
import classes from './Teams.scss';
import Popup from 'reactjs-popup';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

const teams = (props) => {
    let modalStyle = {
            display: 'flex',
            width: '80vw',
            maxWidth: '1200px',
            padding: 0,
            transition: 'all 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
            boxShadow: '0 12px 15px 0 rgba(0,0,0,0.25)',
            minHeight: '400px'
        },
        overlayStyle = {
            background: 'rgba(53, 59, 72, .5)'
        },
        teamClasses = props.currentMode ? [classes.team, classes.light].join(' ') : [classes.team, classes.dark].join(' '),
        teamNameClasses = props.currentMode ? [classes.teamName, classes.light].join(' ') : [classes.teamName, classes.dark].join(' '),
        modalClasses = props.currentMode ? [classes.modal, classes.light].join(' ') : [classes.modal, classes.dark].join(' '),
        modalcloseClasses = props.currentMode ? [classes.modalClose, classes.light].join(' ') : [classes.modalClose, classes.dark].join(' ');

    return (
        <div className={classes.wrapper}>
            <Popup
                trigger={
                    <div className={teamClasses}>
                        <img
                            src={props.team[1]}
                            alt={props.team[0]}
                        />
                    </div>
                }
                modal
                closeOnDocumentClick
                contentStyle={modalStyle}
                overlayStyle={overlayStyle}
            >
            {close => (
                <div className={modalClasses}>
                    <img 
                        className={classes.modalImg}
                        alt={props.team[0]}
                        src={props.team[2]}
                    />
                    <span className={modalcloseClasses} onClick={close}>
                        <FontAwesomeIcon 
                            icon={faTimes}
                        />
                    </span>
                </div>
            )}
            </Popup>
            <span className={teamNameClasses}>
                {props.team[0]}
            </span>
        </div>
    )
};

export default teams;