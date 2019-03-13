import React, {Component} from 'react'
import './resume.css'

class Resume extends Component {
    render() {
        return (
            <div className='resume-block'>

                <ul className="resume-text">
                    <li>Taras Makarchuk,</li>
                    <li>location - Cherkasy, UA.</li>
                    <li>At this time I am a student of the course Geek Hub, where I study javascript.</li>

                    <h4> Education </h4>

                    <li>1999 - 2004 year - "Cherkasy Banking Academy", specialization banking.</li>
                    <li>2018 - present moment - courses "Geek Hub" (Cherkasy), specialization javascript.</li>

                    <h4>Experience</h4>

                    <li>2018 - present moment - learning javascript on Geek Hub courses.</li>
                    <li>2004 - present moment - work in the banking system of Ukraine.</li>

                    <h4>Skills</h4>

                    <li>JavaScript (ES6)</li>
                    <li>Git</li>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>Webpack</li>
                    <li>JSON</li>
                    <li>HTML5, CSS3</li>
                    <li>AJAX</li>
                    <li>Jquery</li>
                    <li>MongoDB</li>

                    <h4>Languages</h4>

                    <li>Russian - native</li>
                    <li>Ukrainian - native</li>
                    <li>English - pre-intermediate</li>

                    <h4>Additional information</h4>

                    <li>ingenuity</li>
                    <li>teamwork skills</li>
                    <li>organizational skills</li>

                    <h4>Hobby</h4>
                    <li>basketball, cycling</li>
                </ul>
            </div>
        )
    }
}

export default Resume;