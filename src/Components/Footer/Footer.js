import React from 'react';
import classes from './Footer.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCode, faHeart, faGlobe } from '@fortawesome/fontawesome-free-solid';

const footer = (props) => {
    let footerClasses = props.currentMode ? [classes.footer, classes.light].join(' ') : [classes.footer, classes.dark].join(' ');

    return (
        <div className={footerClasses}>
            <div>
                <FontAwesomeIcon
                    icon={faCode}
                    title="Created"
                    className={classes.code}
                />
                with
                <FontAwesomeIcon
                    icon={faHeart}
                    title="love"
                    className={classes.heart}
                />
                by <a target="_blank" rel="noopener noreferrer" href="http://mamikonyan.info/">Paruyr Mamikonyan <sup><FontAwesomeIcon icon={faGlobe} /></sup></a>
            </div>
        </div>
    )
};

export default footer;