import React from 'react';
import classes from './Header.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faFlag } from '@fortawesome/fontawesome-free-solid';
import ToggleBtn from './ToggleButton/ToggleButton';

const header = (props) => {
  let headerClasses = props.currentMode ? [classes.header, classes.light].join(' ') : [classes.header, classes.dark].join(' '),
      logoClasses = props.currentMode ? [classes.logo, classes.light].join(' ') : [classes.logo, classes.dark].join(' '),
      flagClasses = props.currentMode ? [classes.flag, classes.light].join(' ') : [classes.flag, classes.dark].join(' '),
      toggleClasses = props.currentMode ? [classes.toggle, classes.light].join(' ') : [classes.toggle, classes.dark].join(' ');

  return (
    <div className={headerClasses}>
      <span className={flagClasses}>
        <FontAwesomeIcon
          icon={faFlag}
          onClick={props.changeSidebarState}
        />
      </span>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className={logoClasses}
    >
        <span>collectio</span>
        <span
          className={classes.github}
        >
          <FontAwesomeIcon
            icon={faGithub}
          />
        </span>
      </a>
      <div 
        className={toggleClasses}
      >
        <span className={classes.toggle__text}>{props.currentMode ? 'light' : 'dark'}</span>
        <ToggleBtn 
          onClick={props.changeMode}
          currentMode={props.currentMode}
        />
      </div>
    </div>
  )
};

export default header;