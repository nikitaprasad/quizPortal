import React from 'react';


class Results extends React.Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
      var message = 'You did awesome!';
    } else if (percent < 80 && percent > 50) {
      var message = 'You did just fine';
    } else {
      var message = 'You did horrible, sorry';
    }
    return (
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length}</h4>
        <h2>{percent}% - {message}</h2>
       
      </div>
    );
  }
}

export default Results;
