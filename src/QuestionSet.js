import React from 'react';
import './App.css';
import Timer from './Timer';
import Header from './Header';
import QuestionList from './QuestionList';
import Results from './Results';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class QuestionSet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            current: 0,
            currentQuestion: '',
            disabledNext: false,
            disabledPrev: true,
            quizCompleted: false,

            questions: [
                {
                    id: 1,
                    text: 'What is ReactJS?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Server-side Framework',
                        },
                        {
                            id: 'b',
                            text: 'User-interface framework',
                        },
                        {
                            id: 'c',
                            text: 'Both',
                        }
                    ],

                    selectedChoice: false,
                    correct: 'c'

                },
                {
                    id: 2,
                    text: 'Which company mantains ReactJS',
                    choices: [
                        {
                            id: 'a',
                            text: 'Google',
                        },
                        {
                            id: 'b',
                            text: 'Airbnb',
                        },
                        {
                            id: 'c',
                            text: 'Facebook',
                        }
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 3,
                    text: 'Which of the following API is a MUST for every ReactJS component?',
                    choices: [
                        {
                            id: 'a',
                            text: 'getInitialState',
                        },
                        {
                            id: 'b',
                            text: 'render',
                        },
                        {
                            id: 'c',
                            text:   'renderComponent'
                        },
                    ],
                    selectedChoice: false,
                    correct: 'c'
                },
                {
                    id: 4,
                    text: 'Is ReactJS a framework by itself?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Yes',
                        },
                        {
                            id: 'b',
                            text: 'No',
                        },
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 5,
                    text: 'Everything in React is a _____________',
                    choices: [
                        {
                            id: 'a',
                            text: 'Component',
                        },
                        {
                            id: 'b',
                            text: 'Module',
                        },
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 6,
                    text: 'How many elements does a react component return?',
                    choices: [
                        {
                            id: 'a',
                            text: '1 Element',
                        },
                        {
                            id: 'b',
                            text: '2 Element',
                        },
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 7,
                    text: 'What is state in React?',
                    choices: [
                        {
                            id: 'a',
                            text: 'A persistant storage.',
                        },
                        {
                            id: 'b',
                            text: 'An internal data store (object) of a component.',
                        },
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 8,
                    text: 'Which of the following is used to pass the data from parent to child?',
                    choices: [
                        {
                            id: 'a',
                            text: 'props',
                        },
                        {
                            id: 'b',
                            text: 'state',
                        },
                    ],
                    selectedChoice: false,
                    correct: 'a'
                },
                {
                    id: 9,
                    text: 'JSX transformer is a MUST to work with ReactJS?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Yes',
                        },
                        {
                            id: 'b',
                            text: 'No',
                        },
                    ],
                    selectedChoice: false,
                    correct: 'b'
                },
                {
                    id: 10,
                    text: 'ReactJS focuses on which of the following part when considering MVC?',
                    choices: [
                        {
                            id: 'a',
                            text: 'M (Model)',
                        },
                        {
                            id: 'b',
                            text: 'V (View)',
                        },
                        {
                            id: 'c',
                            text: 'C (Controller)',
                        },

                    ],
                    selectedChoice: false,
                    correct: 'b'
                }

            ]


        }

    }
    setSelectedchoice(selectedChoice) {

        let newCurrentQuestion = this.state.currentQuestion;
        newCurrentQuestion.selectedChoice = selectedChoice;
        this.setState({ currentQuestion: newCurrentQuestion });

    }
    handleSubmit = e => {
        this.setState({ quizCompleted: true })

    }
    componentWillMount() {
        this.setState({ currentQuestion: this.state.questions ? this.state.questions[this.state.current] : null })

    }
    setScore(score) {
        this.setState({ score });
    }
    togglePrev(e) {

        let index = this.state.current - 1;
        let disabledPrev = (index === 0);
        this.setState({ current: index, disabledPrev: disabledPrev, disabledNext: false, currentQuestion: this.state.questions[index] })
    }
    toggleNext(e) {
        if (!this.state.currentQuestion.selectedChoice) {
            alert("Please select an option to proceed");
        }
        else {
            let index = this.state.current + 1;
            let disabledNext = index === (this.state.questions.length - 1);
            this.setState({ current: index, disabledNext: disabledNext, disabledPrev: false, currentQuestion: this.state.questions[index] })
        }
    }
    render() {
        const { disabledNext, disabledPrev } = this.state
        if (this.state.quizCompleted) {
            var timer = '';
            var header = '';
            var quiz = '';
            var previousButton = '';
            var nextButton = '';
            var submitButton = '';
            var results = <Results {...this.state} />

        }
        else {
            var timer = <Timer ms={1200000} />
            var header = <Header {...this.state} />
            var quiz = <QuestionList setSelectedchoice={this.setSelectedchoice.bind(this)} setScore={this.setScore.bind(this)} handleChange={this.handleChange} {...this.state} />
            var previousButton = <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />;
            var nextButton = <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />;
            var submitButton = <button onClick={this.handleSubmit} className="btn btn-primary" disabled={!(this.state.current === this.state.questions.length - 1)} >
                Submit
            </button>
            var results = '';
        }

        if (!this.props.timeOut) {
            return (
                <div>
                    {timer}
                    {header}
                    {quiz}
                    {previousButton}
                    {nextButton}
                    <div className="submitQuiz">
                        {submitButton}
                    </div>
                    {results}
                </div>
            );
        }
        else
            window.location.assign("/");

    }
}
const Prev = (props) => {
    return (
        <button onClick={props.toggle} disabled={props.active}>Previous</button>
    );
}
const Next = (props) => {
    return (
        <button onClick={props.toggle} disabled={props.active}>Next</button>
    );
}
export default QuestionSet;