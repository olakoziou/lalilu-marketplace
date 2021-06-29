import Container from './components/Container';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import GlobalStyles from './globalStyles';
import styled from 'styled-components';
import { colors } from './components/styles';

const AppDiv = styled.div`
  position: relative;
  min-height: 200vh;
  min-width: 100%;
  overflow: hidden;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(100% 0, 100% 100%, 46% 100%, 0 100%, 68% 59%, 63% 27%);
    background-color: rgba(${colors.mainblue});
    z-index: -1;
  }
`;

function App() {
  return (
    <AppDiv className="App">
      <GlobalStyles />
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </AppDiv>
  );
}

export default App;
