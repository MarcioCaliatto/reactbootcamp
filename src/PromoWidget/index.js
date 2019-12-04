import React, {Component} from 'react';
import moment from 'moment';

export default class PromoWidget extends Component{
    constructor(props) {
        super(props)

        this.state = {
            timer: moment.duration(0),
            deadline: moment('2019-12-05T06:00:00')
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                //timer: moment(this.state.timer.asMilliseconds()).format()
                timer: moment.duration(this.state.deadline.diff(moment())) 
            })
        }, 1000)
        
    }   

    render() {
        return(
            <div>
                <span>{this.state.timer.asHours().toFixed(2)}</span>
            </div>
        )
    }
}