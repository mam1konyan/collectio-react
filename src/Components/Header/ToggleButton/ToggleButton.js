import React, { Component } from 'react';
import classes from './ToggleButton.js';
import ToggleButton from 'react-toggle-button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/fontawesome-free-solid';

class ToggleBtn extends Component {
    
    state = {
        lightMode: true
    }



    styles = {
        toggleColors: {
            active: { base: '#e67e22' },
            inactive: { base: '#34495e' },
            activeThumb: { base: '#d35400' },
            inactiveThumb: { base: '#2c3e50' },
        },
        trackStyle: { height: '8px!important' },
        trackStyleHover: {background: 'red'},
        thumbStyle: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
    }

    render() {

        let icon = this.state.lightMode ? (<FontAwesomeIcon icon={faSun} />) : (<FontAwesomeIcon icon={faMoon} />);
        return (
            <ToggleButton
                inactiveLabel={''}
                activeLabel={''}
                className={classes.toggleBtn}
                activeLabelStyle={this.activeLabelStyle}
                value={this.state.lightMode}
                thumbIcon={icon}
                colors={this.styles.toggleColors}
                thumbStyle={this.styles.thumbStyle}
                trackStyle={{}}
                onToggle={(value) => {
                    
                    this.props.onClick();
                    
                    this.setState({
                        lightMode: !value,
                    })
                }}
            />
        )
    }
};

export default ToggleBtn;