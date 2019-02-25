import React, {Component} from 'react';
import '../styles/slider.css';

class Slider extends Component {
    constructor(props) {
        super();

        this.state = {
            images: props.images,
            description: props.description,
            timeInterval: props.timeInterval,
            currentImageIndex: 0
        };

        this.makeNextStep = this.makeNextStep.bind(this);
    }

    makeNextStep() {
        if (this.state.currentImageIndex < this.state.images.length - 1) {
            this.setState(({currentImageIndex: index}) => ({
                    currentImageIndex: index + 1
                })
            );
        } else {
            this.setState({
                currentImageIndex: 0
            })
        }
    }

    componentDidMount() {
        setInterval(this.makeNextStep, this.props.timeInterval);
        console.log(this.props.timeInterval);
    }

    render() {
        return (
            <div className='slider'>
                <div className='img-block'>
                    <img src={this.state.images[this.state.currentImageIndex]} alt='image'/>
                    <div className='description'>{this.state.description[this.state.currentImageIndex]}</div>
                </div>
            </div>

    );
    }
}

export default Slider;