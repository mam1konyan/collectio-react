import React from 'react';
import classes from './Breadcrumbs.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

const breadcrumbs = (props) => {
    let wrapperClasses = props.currentMode ? [classes.wrapper, classes.light].join(' ') : [classes.wrapper, classes.dark].join(' ');

    return (
        <div className={wrapperClasses}>
            <div 
                className={classes.name}
            >
                {props.country}
            </div>
            <div
                onClick={props.handleClick}
                className={classes.close}>
                <FontAwesomeIcon 
                    icon={faTimes} 
                />
            </div>
        </div>
    )
};

export default breadcrumbs;