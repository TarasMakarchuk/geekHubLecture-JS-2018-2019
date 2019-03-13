import React, {Component} from 'react'
import './contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
    //     this.state = {
    //         yourName: '',
    //         email: '',
    //         myEmail: '2278452@gmail.com',
    //         message: '',
    //         error: null
    //     };
    //     this.sendMailgun = () => this.sendMailgun();
    //     this.handleSubmit = () => this.handleSubmit();
    //     this.handleChange = this.handleChange.bind(this);
    // }
    //
    // handleChange({target}) {
    //     if (target.name === 'yourName') this.setState({yourName: target.value});
    //     if (target.name === 'email') this.setState({email: target.value});
    //     if (target.name === 'message') this.setState({message: target.value});
    // }
    //
    // handleSubmit(event) {
    //     event.preventDefault();
    //     let data = {
    //         to: this.state.myEmail,
    //         subject: this.state.yourName,
    //         from: this.state.email,
    //         text: this.state.message
    //     };
    //     console.log('dataToSend', data);
    //     this.sendMailgun(data);
    // }
    //
    // sendMailgun(data) {
    //     let apiKey = 'fdb3a538158f5f1d57ab7af8eaab2cd9-acb0b40c-30934822';
    //     let domain = 'sandboxe7ca40b18b2842b9bf1ef57a74548e53.mailgun.org';
    //     let mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});
    //     mailgun.messages().send(data, function (error, body) {
    //         if (error) {
    //             console.log(error);
    //         }
    //         console.log(mailgun);
    //         console.log(body);
    //         console.log(data);
    //     })
    }

    render() {
        return (
            <div className='contact-block'>
                <h4>Contact with me</h4>
                <form className='sendmail-form' action="https://formspree.io/2278452@gmail.com" method="POST">

                {/*<form className='sendmail-form' method='POST'*/}
                    {/*// onSubmit={this.sendMailgun}*/}
                {/*>*/}

                    {/*<form className='sendmail-form' method='POST' onSubmit={this.toSendLetter}>*/}
                    <input type='text' name='yourName' placeholder='enter your name' onChange={this.handleChange}/>
                    <input type='text' name='email' placeholder='enter your e-mail' onChange={this.handleChange}/>
                    <textarea name='message' placeholder='enter your message' onChange={this.handleChange}/>
                    <button className='btn-send' type='submit'><img className="send-mail-img"
                                                                    src={require('../img/mail.png')} alt='mail'/>Send
                    </button>

                </form>

                <h5>UA, Cherkasy, <br/>
                    +38 063 227 84 52,<br/>
                    2278452@gmail.com
                </h5>
            </div>
        )
    }
}

export default Contact;