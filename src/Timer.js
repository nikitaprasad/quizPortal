import React from 'react';
import QuestionSet from './QuestionSet';



class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ms: props.ms,
            timeOut: false
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            if ((this.state.ms) <= 0) {
                
                this.setState({ timeOut: true })
                return;
            }
            this.setState({ ms: this.state.ms - 1000 });
        }, 1000)
    }
    format() {
        const { ms } = this.state;
        let seconds = Math.floor(ms / 1000);
        let minutes = Math.floor(seconds / 60);
        seconds = seconds - (minutes * 60);

        minutes = minutes < 1 ? '00' : minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 1 ? '00' : seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${seconds}`;
    }
    render() {
        if (this.state.timeOut) {
            return (
                

                <QuestionSet {...this.state} />
            );
        }

        return (
            <div>{this.format(this.state.ms)}</div>
        )
    }
}

export default Timer;