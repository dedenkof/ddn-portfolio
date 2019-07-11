import React, { Component, Fragment } from 'react';
import { Grid, Cell} from "react-mdl";
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render(){
        return (
            <Fragment>
                <div className="resume-body">
                    <Grid className="resume-grid">
                <Cell col={4} tablet={6} phone={12} className={"resume-left-side"}>
                        <div className={"resume-avatar"}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                            />
                        </div>

                        <h2 className={"resume-name"}>Name</h2>
                        <h4 className={"resume-headline"}>Programmer</h4>
                        <hr className={"resume-line"}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr className={"resume-line"}/>
                        <h5 className={"resume-headline"}>Address</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                        <h5 className={"resume-headline"}>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5 className={"resume-headline"}>Email</h5>
                        <p>someone@example.com</p>
                        <h5 className={"resume-headline"}>Web</h5>
                        <p>mywebsite.com</p>
                        <hr className={"resume-line"}/>
                </Cell>
                <Cell col={8} tablet={6} phone={12} className={"resume-right-side"}>
                    <h2>Education</h2>
                    <Education
                        startYear={2002}
                        endYear={2006}
                        schoolName="My University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <Education
                        startYear={2007}
                        endYear={2009}
                        schoolName="My 2nd University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Experience</h2>
                    <Experience
                        startYear={2009}
                        endYear={2012}
                        jobName="First Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <Experience
                        startYear={2012}
                        endYear={2016}
                        jobName="Second Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills
                        skill="javascript"
                        progress={100}
                    />
                    <Skills
                        skill="HTML/CSS"
                        progress={80}
                    />
                    <Skills
                        skill="NodeJS"
                        progress={50}
                    />
                    <Skills
                        skill="React"
                        progress={25}
                    />
                </Cell>
                    </Grid>
                </div>
            </Fragment>

        );
    }

}

export default Resume;