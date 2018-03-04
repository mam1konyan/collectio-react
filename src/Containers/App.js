import React, { Component } from 'react';
import classes from './App.scss';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';
import Content from '../Components/Content/Content';
import axios from 'axios';

class App extends Component {
  
  state = {
    countryNames: [],
    lightMode: true,
    activeItemCode: '',
    activeItemName: '',
    isSidebarOpened: false,
    isMobileDevice: this.props.windowSize.width < 769
  }

  handleSidebarClick = (code, name) => {

    //handleSidebarOpening called only if sidebar is opened on mobile device
    if (this.state.isMobileDevice && this.state.isSidebarOpened) {
      this.handleSidebarOpening();
    }
    
    this.setState({ 
      activeItemCode: code,
      activeItemName: name
    });
  }

  handleModeChange = () => {

    this.setState( (prevState) => {
      return {
        lightMode: !prevState.lightMode
      }
    });
  }

  handleSidebarOpening = () => {
    
    this.setState((prevState) => {
      return {
        isSidebarOpened: !prevState.isSidebarOpened
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isMobileDevice: nextProps.windowSize.width < 769
    });
  }

  componentWillMount() {
    
    if (!this.state.countryNames.length) {
      axios.get('http://localhost:3000/request.json') // IMPORTANT: replace localhost with your domain before putting code on live server
        .then(response => {
          this.setState({
            countryNames: response.data.body
          })
          console.log('will', response);
        }
      );
    }
  }

  render() {

    return (
      <div className={classes.wrapper}>
        <Header
          country={this.state.activeItemName}
          changeMode={this.handleModeChange}
          currentMode={this.state.lightMode}
          changeSidebarState={this.handleSidebarOpening}
          isMobileDevice={this.state.isMobileDevice}
        />
        <Sidebar 
          countries={this.state.countryNames}
          activeCode={this.state.activeItemCode}
          activeName={this.state.activeItemName}
          handleClick={ (code, name) => this.handleSidebarClick(code, name) }
          currentMode={this.state.lightMode}
          sidebarOpened={this.state.isSidebarOpened}
          isMobileDevice={this.state.isMobileDevice}
        />
        <Content 
          activeCode={this.state.activeItemCode}
          countries={this.state.countryNames}
          handleClick={() => this.handleSidebarClick('', '')}
          currentMode={this.state.lightMode}
        />
        <Footer
          currentMode={this.state.lightMode}
        />
      </div>
    );
  }
}

export default App;
