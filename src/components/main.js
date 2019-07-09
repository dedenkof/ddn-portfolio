import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing';
import About from './about';
import Resume from './resume';
import Projects from './projects';
import Blog from './blog';
import Contact from './contact';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
    </Switch>
);

export default Main;