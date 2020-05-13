import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



const Contact = ({ user }) => {
    return (
        <div className="contact-page">
            <h2 className="contact-page-title">Contact Me</h2>
            <div className="contact-me">
                Interested in working with me? You can find me on
             <div className="contact-list">
                    {/* LinkedIn*/}
                    <a href="https://www.linkedin.com/" rel="noopner noreferer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://github.com/MuhammadUsmanMushtaq" rel="noopner noreferer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* Email */}
                    <a href="mailto:usman820901@gmail.com" rel="noopner noreferer" target="_blank">
                        <i className="fa fa-envelope-square" aria-hidden="true" />
                    </a>

                </div >
            </div >
        </div >
    )
}

export default Contact;

// {/* https://cdn0.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png */ }