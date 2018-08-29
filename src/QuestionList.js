import React from 'react';
import Question from './Question';

class QuestionList extends React.Component {
  render() {
    return(
      <div className="questions">
        {          
             <Question question={this.props.currentQuestion} key={this.props.currentQuestion.id}  {...this.props}/>
        }
      </div>
    );
  }
}
export default QuestionList;
