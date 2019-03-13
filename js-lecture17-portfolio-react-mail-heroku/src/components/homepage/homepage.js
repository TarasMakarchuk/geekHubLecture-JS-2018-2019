import React, {Component} from 'react';
import './homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage-background">
                <div className="homepage-block">
                    <div className="homepage-text">
                        Hello! I am Taras Makarchuk. Nowadays I am studying javascript on the Geek Hub courses.<br/>
                        As I saw the inscription "Hello world!", I immediately decided to become a developer.<br/>
                        My current goal is to learn JavaScript, the long-term goal is to create useful things, share
                        knowledge,<br/>
                        and also make the world a better place.
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;