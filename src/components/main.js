import React from 'react';
import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import { Switch, Route } from 'react-router-dom';

const Main = ({ user }) => (
    <Switch>
        <Route exact path="/">
            <LandingPage user={user} />
        </Route>
        <Route path="/contact">
            <Contact user={user} />
        </Route>
        <Route path="/projects">
            <Projects user={user} />
        </Route>
        <Route path="/resume">
            <Resume user={user} />
        </Route>
    </Switch>
)

export default Main;