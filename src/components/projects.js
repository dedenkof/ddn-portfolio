import React, { Component, Fragment } from 'react';
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

  toogleCategories(){
      if(this.state.activeTab === 0){
          return(
              <Fragment>
                  <h1>This state is Web Designe</h1>
              </Fragment>
          )
      }else if(this.state.activeTab === 1){
          return(
              <Fragment>
                  <h1>This state is HTML/CSS</h1>
              </Fragment>
          )
      }else if(this.state.activeTab === 2){
          return(
              <Fragment>
                  <h1>This state is Bootstrap</h1>
              </Fragment>
          )
      }else if(this.state.activeTab === 3){
          return(
              <Fragment>
                  <h1>This state is JavaScript</h1>
              </Fragment>
          )
      }else if(this.state.activeTab === 4){
          return(
              <Fragment>
                  <h1>This state is React</h1>
              </Fragment>
          )
      }else if(this.state.activeTab === 5){
          return(
              <Fragment>
                  <h1>This state is NodeJS</h1>
              </Fragment>
          )
      }else if(this.state.activeTab === 6){
          return(
              <Fragment>
                  <h1>This state is Express</h1>
              </Fragment>
          )
      }else if(this.state.activeTab === 7){
          return(
              <Fragment>
                  <h1>This state is MongoDB</h1>
              </Fragment>
          )
      }else if(this.state.activeTab === 8){
          return(
              <Fragment>
                  <h1>This state is PHP/MySQL</h1>
              </Fragment>
          )
      }
  }

    render() {
        return (
            <Fragment>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}
                          ripple>
                        <Tab>Web Designe</Tab>
                        <Tab>HTML/CSS</Tab>
                        <Tab>Bootstrap</Tab>
                        <Tab>JavaScript</Tab>
                        <Tab>React</Tab>
                        <Tab>NodeJS</Tab>
                        <Tab>Express</Tab>
                        <Tab>MongoDB</Tab>
                        <Tab>PHP/MySQL</Tab>

                    </Tabs>
                    <section className="projects-content">
                        {this.toogleCategories()}
                    </section>
                </div>
            </Fragment>
        );
    }
}


export default Projects;


