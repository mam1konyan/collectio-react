import React, { Component } from 'react';
import classes from './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

class App extends Component {
  
  state = {
    countryNames: [
      { 
        name: 'Armenia',
        code: 'AM',
        childs: [ 
          ['Armenia NT', './logos/armenia/armenia.png', './scarves/armenia/armenia.png'],
          ['FC Alashkert', './logos/armenia/alashkert.png', './scarves/armenia/alashkert.png'],
          ['FC Ararat Yerevan', './logos/armenia/ararat.png', './scarves/armenia/ararat.png'],
          ['FC Banants', './logos/armenia/banants.png', './scarves/armenia/banants.png'],
          ['FC Pyunik', './logos/armenia/pyunik.png', './scarves/armenia/pyunik.png'],
          ['FC Gandzasar Kapan', './logos/armenia/gandzasar.png', './scarves/armenia/gandzasar.png'],
          ['Mika FC', './logos/armenia/mika.png', './scarves/armenia/mika.png'],
          ['FC Pyunik (10 titles)', './logos/armenia/pyunik10.png', './scarves/armenia/pyunik10.png']
        ] 
      },
      {
        name: 'Bulgaria',
        code: 'BG',
        childs: [
          ['PFC Levski Sofia', './logos/bulgaria/levski.png', './scarves/bulgaria/levski.png'],
          ['PFC Ludogorets Razgrad', './logos/bulgaria/ludogorets.png', './scarves/bulgaria/ludogorets.png']
        ]
      },
      {
        name: 'Denmark',
        code: 'DK',
        childs: [
          ['Denmark NT', './logos/denmark/denmark.png', './scarves/denmark/denmark.png']
        ]
      },
      { name: 'England', 
        code: 'GB-ENG',
        childs: [
          ['Chelsea F.C.', './logos/england/chealsea.png', './scarves/england/chelsea.png']
        ] 
      },
      { name: 'Estonia', 
        code: 'EE',
        childs: [
          ['Estonia NT', './logos/estonia/estonia.png', './scarves/estonia/estonia.png']
        ] 
      },
      { name: 'France',
        code: 'FR', 
        childs: [
          ['France NT', './logos/france/france.png', './scarves/france/france.png']
        ] 
      },
      {
        name: 'Germany',
        code: 'DE',
        childs: [
          ['Germany NT', './logos/germany/germany.png', './scarves/germany/germany.png'],
          ['FV Bad Honnef', './logos/germany/honnef.png', './scarves/germany/honnef.png'],
          ['FC Bayern Munich', './logos/germany/bayern.png', './scarves/germany/bayern.png'],
          ['Borussia Dortmund', './logos/germany/borussia_d.png', './scarves/germany/borussia_d.png'],
          ['1. FSV Mainz 05', './logos/germany/mainz.png', './scarves/germany/mainz.png']
        ]
      },
      { name: 'Ireland',
        code: 'IE',
        childs: [
          ['Ireland NT', './logos/ireland/ireland.png']
        ] 
      },
      { name: 'Italy',
        code: 'IT',  
        childs: [
          ['A.S. Roma', './logos/italy/roma.png']
        ] 
      },
      { name: 'Kazakhstan', 
        code: 'KZ',
        childs: [
          ['Kazakhstan NT', './logos/kazakhstan/kazakhstan.png']
        ] 
      },
      { name: 'Lithuania',
        code: 'LT', 
        childs: [
          ['Lithuania NT', './logos/lithuania/lithuania.png']
        ] 
      },
      { name: 'Moldova', 
        code: 'MD',
        childs: [
          ['FC Sheriff Tiraspol', './logos/moldova/sheriff.png']
        ] 
      },
      { name: 'Netherlands', 
        code: 'NL',
        childs: [
          ['Roda JC Kerkrade', './logos/netherlands/roda.png']
        ] 
      },
      {
        name: 'Portugal',
        code: 'PT',
        childs: [
          ['Portugal NT', './logos/portugal/portugal.png'],
          ['S.L. Benfica', './logos/portugal/benfica.png'],
          ['FC Porto', './logos/portugal/porto.png'],
          ['Sporting CP', './logos/portugal/sporting.png']
        ]
      },
      { name: 'Russia',
        code: 'RU',
        childs: [
          ['FC Lokomotiv Moscow', './logos/russia/lokomotiv.png'],
          ['FC Rostov', './logos/russia/rostov.png']
        ] 
      },
      { name: 'Spain',
        code: 'ES',
        childs: [
          ['Spain NT', './logos/spain/spain.png'],
          ['UD Almería', './logos/spain/almeria.png'],
          ['Athletic Bilbao', './logos/spain/athletic_b.png'],
          ['Atlético Madrid', './logos/spain/atletico_m.png'],
          ['FC Barcelona', './logos/spain/barca.png'],
          ['Real Madrid C.F.', './logos/spain/real_m.png']
        ] 
      },
      { name: 'Sweden',
        code: 'SE',
        childs: [
          ['Helsingborgs IF', './logos/sweden/helsingborgs.png']
        ] 
      },
      { name: 'Switzerland',
        code: 'CH', 
        childs: [
          ['AC Bellinzona', './logos/switzerland/bellinzona.png']
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
