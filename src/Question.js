import React from 'react';

class Question extends React.Component {

  handleChange(e) {
    const { setScore, question, setSelectedchoice } = this.props;
    const selected = e.target.value;
    setSelectedchoice(selected);
    if (selected === question.correct) {
      setScore(this.props.score + 1);
    }
  }
  render() {
    const { question } = this.props;
    return (
      <div className="well">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {
            question.choices.map(choice => {
              return (
                <li className="list-group-item" key={choice.id}>{choice.id}
                  <input onClick={this.handleChange.bind(this)} type="radio" name={question.id} value={choice.id} checked={question.selectedChoice===choice.id}/> {choice.text}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Question;
