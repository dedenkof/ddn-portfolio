import React, { Component, Fragment } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMedia, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

  toogleCategories(){
      if(this.state.activeTab === 0){
          return(
              <Fragment>
              <div className="projects-grid">
                  {/*Projects 1 */}
                  <Card shadow={2} className="project-item">
                      <CardTitle style={
                          {color: '#fff', height: '176px',
                          background: 'url(https://itea.ua/wp-content/uploads/2017/10/react-adv.png) #3f51b5 center / cover'}
                      }>
                        React Project #1
                      </CardTitle>
                      <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Mauris sagittis pellentesque lacus eleifend lacinia...
                      </CardText>
                      <CardActions  border>
                          <Button colored>Github</Button>
                          <Button colored>CodePen</Button>
                          <Button colored>Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                          <IconButton name="share" />
                      </CardMenu>
                  </Card>

                  {/*Projects 2 */}
                  <Card shadow={2} className="project-item">
                      <CardTitle style={
                          {color: '#fff', height: '176px',
                              background: 'url(https://itea.ua/wp-content/uploads/2017/10/react-adv.png) #3f51b5 center / cover'}
                      }>
                          React Project #2
                      </CardTitle>
                      <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Mauris sagittis pellentesque lacus eleifend lacinia...
                      </CardText>
                      <CardActions  border>
                          <Button colored>Github</Button>
                          <Button colored>CodePen</Button>
                          <Button colored>Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                          <IconButton name="share" />
                      </CardMenu>
                  </Card>

                  {/*Projects 3 */}
                  <Card shadow={2} className="project-item">
                      <CardTitle style={
                          {color: '#fff', height: '176px',
                              background: 'url(https://itea.ua/wp-content/uploads/2017/10/react-adv.png) #3f51b5 center / cover'}
                      }>
                          React Project #3
                      </CardTitle>
                      <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Mauris sagittis pellentesque lacus eleifend lacinia...
                      </CardText>
                      <CardActions  border>
                          <Button colored>Github</Button>
                          <Button colored>CodePen</Button>
                          <Button colored>Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                          <IconButton name="share" />
                      </CardMenu>
                  </Card>

                  {/*Projects 4 */}
                  <Card shadow={2} className="project-item">
                      <CardTitle style={
                          {color: '#fff', height: '176px',
                              background: 'url(https://itea.ua/wp-content/uploads/2017/10/react-adv.png) #3f51b5 center / cover'}
                      }>
                          React Project #4
                      </CardTitle>
                      <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Mauris sagittis pellentesque lacus eleifend lacinia...
                      </CardText>
                      <CardActions  border>
                          <Button colored>Github</Button>
                          <Button colored>CodePen</Button>
                          <Button colored>Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                          <IconButton name="share" />
                      </CardMenu>
                  </Card>
              </div>
              </Fragment>
          )
      }else if(this.state.activeTab === 1){
          return(
              <Fragment>
                  <div className="page-title">
                      <h1>This state is HTML/CSS</h1>
                      <hr/>
                  </div>
              </Fragment>
          )
      }else if(this.state.activeTab === 2){
          return(
              <Fragment>
              <div className="page-title">
              <h1>This state is Bootstrap</h1>
          <hr/>
          </div>
      </Fragment>
          )
      }else if(this.state.activeTab === 3){
          return(
              <Fragment>
              <div className="page-title">
              <h1>This state is JavaScript</h1>
          <hr/>
          </div>
      </Fragment>

          )
      }else if(this.state.activeTab === 4){
          return(
              <Fragment>
              <div className="page-title">
              <h1>This state is React</h1>
          <hr/>
          </div>
      </Fragment>
          )
      }else if(this.state.activeTab === 5){
          return(
              <Fragment>
              <div className="page-title">
              <h1>This state is NodeJS</h1>
          <hr/>
          </div>
      </Fragment>
          )
      }else if(this.state.activeTab === 6){
          return(
              <Fragment>
              <div className="page-title">
              <h1>This state is Express</h1>
          <hr/>
          </div>
      </Fragment>
          )
      }else if(this.state.activeTab === 7){
          return(
              <Fragment>
                  <div className="page-title">
                      <h1>This state is MongoDB</h1>
                      <hr/>
                  </div>
              </Fragment>
          )
      }else if(this.state.activeTab === 8){
          return(
              <Fragment>
                  <div className="page-title">
                      <h1>This state is PHP/MySQL</h1>
                      <hr/>
                  </div>
              </Fragment>
          )
      }
  }

    render() {
        return (
            <Fragment>
                <div className="page-title">
                    <h1>This state is Web Designe</h1>
                    <hr/>
                </div>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
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
                    <section>
                        <Grid>
                            <Cell col={12} tablet={12} phone={12}>
                                <div className="projects-content">
                                    {this.toogleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    </section>
                </div>
            </Fragment>
        );
    }
}


export default Projects;


