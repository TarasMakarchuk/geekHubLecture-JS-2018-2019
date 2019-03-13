import React, {Component} from 'react'
import './skills.css'

class Skills extends Component {
    render() {
        return (
            <div className='skills-block'>
                My skills and super powers:)))
                <ul>
                    <li className='javascript-logo'><img src={require('../img/logoJS1.png')} alt='jsvascript'/></li>
                    <li className='gitHub-logo'><img src={require('../img/logoGit.png')} alt='github'/></li>
                    <li className='es6-logo'><img src={require('../img/logoES6.png')} alt='es6'/></li>
                    <li className='react-logo'><img src={require('../img/logoReact.png')} alt='react'/></li>
                    <li className='nodeJS-logo'><img src={require('../img/logoNodeJS.png')} alt='nodeJS'/></li>
                    <li className='webpack-logo'><img src={require('../img/logoWebpack.png')} alt='webpack'/></li>
                    <li className='mongodb-logo'><img src={require('../img/logoMongodb.png')} alt='mongodb'/></li>
                    <li className='JSON-logo'><img src={require('../img/logoJSON.png')} alt='JSON'/></li>
                    <li className='jQuery-logo'><img src={require('../img/logoJQuery.png')} alt='jQuery'/></li>
                    <li className='html5-logo'><img src={require('../img/logoHTML5.png')} alt='html5'/></li>
                    <li className='css3-logo'><img src={require('../img/logoCSS3.png')} alt='css3'/></li>
                    <li className='DOM-logo'><img src={require('../img/logoDOM.png')} alt='DOM'/></li>
                    <li className='AJAX-logo'><img src={require('../img/logoAjax.png')} alt='AJAX'/></li>
                    <li className='mouse-logo'><img src={require('../img/logoMouse.png')} alt='mouse'/></li>
                    <li className='basketball-logo'><img src={require('../img/logoBasketball.png')} alt='basketball'/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Skills;