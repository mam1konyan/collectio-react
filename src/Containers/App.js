import React, { Component } from 'react';
import classes from './App.scss';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';
import Content from '../Components/Content/Content';

class App extends Component {
  
  state = {
    countryNames: [
      { 
        name: 'Armenia',
        code: 'AM',
        childs: [ 
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png'],
          ['Item Name', './logos/armenia/120X120.png', './scarves/armenia/900X300.png']
        ] 
      },
      {
        name: 'Bulgaria',
        code: 'BG',
        childs: [
          ['Item Name', './logos/bulgaria/120X120.png', './scarves/bulgaria/900X300.png'],
          ['Item Name', './logos/bulgaria/120X120.png', './scarves/bulgaria/900X300.png'],
          ['Item Name', './logos/bulgaria/120X120.png', './scarves/bulgaria/900X300.png'],
          ['Item Name', './logos/bulgaria/120X120.png', './scarves/bulgaria/900X300.png'],
          ['Item Name', './logos/bulgaria/120X120.png', './scarves/bulgaria/900X300.png'],
          ['Item Name', './logos/bulgaria/120X120.png', './scarves/bulgaria/900X300.png'],
          ['Item Name', './logos/bulgaria/120X120.png', './scarves/bulgaria/900X300.png']
        ]
      },
      {
        name: 'Denmark',
        code: 'DK',
        childs: [
          ['Item Name', './logos/denmark/120X120.png', './scarves/denmark/900X300.png'],
          ['Item Name', './logos/denmark/120X120.png', './scarves/denmark/900X300.png'],
          ['Item Name', './logos/denmark/120X120.png', './scarves/denmark/900X300.png'],
          ['Item Name', './logos/denmark/120X120.png', './scarves/denmark/900X300.png']
        ]
      },
      { name: 'England', 
        code: 'GB-ENG',
        childs: [
          ['Item Name', './logos/england/120X120.png', './scarves/england/900X300.png'],
          ['Item Name', './logos/england/120X120.png', './scarves/england/900X300.png'],
          ['Item Name', './logos/england/120X120.png', './scarves/england/900X300.png']
        ] 
      },
      { name: 'Estonia', 
        code: 'EE',
        childs: [
          ['Item Name', './logos/estonia/120X120.png', './scarves/estonia/900X300.png'],
          ['Item Name', './logos/estonia/120X120.png', './scarves/estonia/900X300.png']
        ] 
      },
      { name: 'France',
        code: 'FR', 
        childs: [
          ['Item Name', './logos/france/120X120.png', './scarves/france/900X300.png']
        ] 
      },
      {
        name: 'Germany',
        code: 'DE',
        childs: [
          ['Item Name', './logos/germany/120X120.png', './scarves/germany/900X300.png']
        ]
      },
      { name: 'Ireland',
        code: 'IE',
        childs: [
          ['Item Name', './logos/ireland/120X120.png', './scarves/ireland/900X300.png']
        ] 
      },
      { name: 'Italy',
        code: 'IT',  
        childs: [
          ['Item Name', './logos/italy/120X120.png', './scarves/italy/900X300.png']
        ] 
      },
      { name: 'Kazakhstan', 
        code: 'KZ',
        childs: [
          ['Item Name', './logos/kazakhstan/120X120.png', './scarves/kazakhstan/900X300.png']
        ] 
      },
      { name: 'Lithuania',
        code: 'LT', 
        childs: [
          ['Item Name', './logos/lithuania/120X120.png', './scarves/lithuania/900X300.png']
        ] 
      },
      { name: 'Moldova', 
        code: 'MD',
        childs: [
          ['Item Name', './logos/moldova/120X120.png', './scarves/moldova/900X300.png']
        ] 
      },
      { name: 'Netherlands', 
        code: 'NL',
        childs: [
          ['Item Name', './logos/netherlands/120X120.png', './scarves/netherlands/900X300.png']
        ] 
      },
      {
        name: 'Portugal',
        code: 'PT',
        childs: [
          ['Item Name', './logos/portugal/120X120.png', './scarves/portugal/900X300.png']
        ]
      },
      { name: 'Russia',
        code: 'RU',
        childs: [
          ['Item Namew', './logos/russia/120X120.png', './scarves/russia/900X300.png']
        ] 
      },
      { name: 'Spain',
        code: 'ES',
        childs: [
          ['Item Name', './logos/spain/120X120.png', './scarves/spain/900X300.png']
        ] 
      },
      { name: 'Sweden',
        code: 'SE',
        childs: [
          ['Item Name', './logos/sweden/120X120.png', './scarves/sweden/900X300.png']
        ] 
      },
      { name: 'Switzerland',
        code: 'CH', 
        childs: [
          ['Item Name', './logos/switzerland/120X120.png', './scarves/switzerland/900X300.png']
        ] 
      },
    ],
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
