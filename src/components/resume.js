import React from 'react';

const Resume = ({ user }) => {
    return (
        <div class="resume-page">
            <h2 className="resume-page-title">Resume</h2>
            <div className="resume-page-section">
                <div> <h4>Education</h4></div>
                <div className="resume-page-education-list">
                    {user.education.map((education, i) => (
                        <div key={i} className="resume-page-education">
                            <div className="resume-education-institute">{education.institution}</div>
                            <div>
                                <div className="resume-education-type">
                                    {education.studyType}, {education.area}
                                </div>
                                <div className="resume-education-type">
                                    {education.start.year} to {education.end.year}
                                </div>
                            </div>
                            <div>{education.description.replace('\n\n', '\n')}</div>
                        </div>

                    ))}
                </div>
            </div>

            <div className="resume-page-section">
                <div><h4>Skills</h4></div>
                <div className="resume-page-skill-list">
                    {user.skills.map((skill, i) => (
                        <div key={i} className="resume-page-skill">
                            <div className="resume-skill-name">{skill.name}</div>
                            <div className="resume-skill-level">{skill.level}</div>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    )
}
export default Resume;