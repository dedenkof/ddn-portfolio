import React, { Fragment } from 'react';
//import React, { Component, Fragment } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";


/*class App extends Component {
  render() {
    return(
        <Fragment><h1>Hello world</h1></Fragment>
    );
  }
}*/


function App() {
  return (
      <Fragment>{/* Uses a transparent header that draws on top of the layout's background */}
        <div style={{height: '100vh', position: 'relative'}}>
          <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
            <Header transparent title="Title" style={{color: 'white'}}>
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
        </div></Fragment>
  );
}

export default App;


