import React, {Component} from 'react'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer-block'>
                &copy; made by T. Makarchuk, 2019.
                <a href='https://www.facebook.com/taras.makarchuk.35'><img src={require('../img/fb.png')} alt="facebook"
                                                                           className="facebook-logo"/></a>
                <a href='https://github.com/TarasMakarchuk'><img className="gitHub-logo"
                                                                 src={require("../img/logoGitHub.png")}
                                                                 alt="gitHub"/></a>
            </div>
        )
    }
}

export default Footer;