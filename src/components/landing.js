import React, { Fragment } from 'react';
import { Grid, Cell } from "react-mdl";
function Landing() {
    return (
        <Fragment>
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12} tablet={12} phone={12}>
                        <img className="avatar" src="https://i.stack.imgur.com/lxUOp.png?s=328&g=1" alt="avatar"/>
                        <div className="avatar-text">
                            <h2>Full Stack Web Developer</h2>
                            <hr/>
                            <p>Web Designe | HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB | PHP/MySQL</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/dedenkof" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="https://github.com/dedenkof" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/* Behance */}
                                <a href="https://github.com/dedenkof" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-behance-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        </Fragment>
    );
}

export default Landing;


