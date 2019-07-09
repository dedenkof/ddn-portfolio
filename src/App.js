import React, { Fragment } from 'react';
import './App.css';
import { Layout, Header, Footer, Navigation, Drawer, Content } from "react-mdl";
import Main from './components/main';
import { Link } from 'react-router-dom';

/*class App extends Component {
  render() {
    return(
        <Fragment><h1>Hello world</h1></Fragment>
    );
  }
}*/
function App() {
  return (
      <Fragment>
          <Layout className="main-wrap">
            <Header className="header" title="Title">
              <Navigation>
                <Link to="/">Главная</Link>
                <Link to="/resume">Резюме</Link>
                <Link to="/about">О себе</Link>
                <Link to="/projects">Проекты</Link>
                <Link to="/blog">Блог</Link>
                <Link to="/contact">Контакты</Link>
              </Navigation>
            </Header>
            <Drawer title="Logotipe">
              <Navigation>
                <Link to="/">Link1</Link>
                <Link to="/">Link2</Link>
                <Link to="/">Link3</Link>
                <Link to="/">Link4</Link>
              </Navigation>
            </Drawer>
            <Content>
            <Main/>
            </Content>
          </Layout>
      </Fragment>
  );
}

export default App;


