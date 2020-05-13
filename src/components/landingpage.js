import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import profile_rnd from '../profile_rnd.png';

const LandingPage = ({ user }) => {
    return (

        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src={profile_rnd} alt="avatar" className="avatar-img" />
                    <div className="banner-text">
                        <h1>{user.basics.summary}</h1>

                        <Link className="banner-button" to="/projects">Check my work here</Link>

                    </div>
                </Cell>
            </Grid>
        </div >
    );
};

export default LandingPage;