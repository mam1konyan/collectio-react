import React from 'react';
import classes from './Sidebar.scss';

const sidebar = (props) => {
    const linesCount = props.countries.length;

    let rowStyle = {
            height: (window.innerHeight / linesCount) < 50 ? '50px' : (window.innerHeight / linesCount) + 'px'
        },
        sidebarStyle,
        coverStyle,
        sidebarClasses = props.currentMode ? [classes.sidebar, classes.light].join(' ') : [classes.sidebar, classes.dark].join(' '),
        countryClasses = props.currentMode ? [classes.country, classes.light].join(' ') : [classes.country, classes.dark].join(' '),
        activeClasses = props.currentMode ? [classes.active, classes.light].join(' ') : [classes.active, classes.dark].join(' '),
        countClasses = props.currentMode ? [classes.count, classes.light].join(' ') : [classes.count, classes.dark].join(' ');

        if (props.isMobileDevice) {
            sidebarStyle = { 
                transform: props.sidebarOpened ? 'translateX(100vw)' : '',
            };
            coverStyle = { 
                opacity: props.sidebarOpened ? '1' : '0',
                pointerEvents: props.sidebarOpened ? 'visible' : 'none',
                background: props.sidebarOpened ? 'rgba(0,0,0,0.5)' : 'transparent'
            }
        } else {
            sidebarStyle = { display: '0' }
        }
    
    return (
        <div 
            className={sidebarClasses}
            style={sidebarStyle}
        >
            <div 
                className={classes.sidebarCover} 
                style={coverStyle}
                onClick={() => props.handleClick(props.activeCode, props.activeName)}
            ></div>
            <ul>
                { 
                    props.countries.map( (country, i) => {
                        return (
                            <li key={i}
                                className={props.activeCode === country.code ? activeClasses : countryClasses}
                                onClick={() => props.handleClick(country.code, country.name)}
                                style={rowStyle}
                                    >
                                    <img 
                                    className={ classes.flag }
                                        src={'/flags/' + country.code + '@3x.png'}
                                        height="24"
                                        alt=""
                                    />
                                    <span>{country.name}</span>
                                <span className={countClasses}>{country.childs.length}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default sidebar;