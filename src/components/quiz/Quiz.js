import { Avatar, Box, Button, Card, CardActions, Grid, IconButton, Pagination, Typography } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import axios from 'axios';
import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'src/css/Components.css';
import { updateScore } from '../../app/usersSlice';

const Quiz = ({ questions }) => {
  const currentUser = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [revealScore, setRevealScore] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowAnswers(true);
    const nextQuestion = currentQuestion + 1;

    if (questions.length <= nextQuestion) {
      axios.post('http://localhost:8000/api/update-score/', {
        token: currentUser.token,
        updatedScore: score * 10
      }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          dispatch(updateScore(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      setRevealScore(true);
    }
  };

  return (
    <Box className="quiz">
      {
        showScore ? (
          <Box>
            <Typography variant="h3" align="center" color="#ffffff">
              You scored {score} out of {questions.length}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setShowScore(false);
                  setShowAnswers(false);
                  setRevealScore(false);
                }}
              >
                <Refresh sx={{ color: 'white' }} />
                <Typography variant="h4" color="white">Try again?</Typography>
              </IconButton>
            </Box>
          </Box>
        )
          : (
            <>
              <Box sx={{ m: 1 }}>
                <Typography variant="h4" color="#ffffff">
                  Question {currentQuestion + 1} of {questions.length}
                </Typography><br />
                <Typography variant="h3" align="center" color="#ffffff">
                  {questions[currentQuestion].questionText}
                </Typography>
                <Box sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    alt={questions[currentQuestion].questionText}
                    style={{ width: questions[currentQuestion].width, height: 270 }}
                    src={questions[currentQuestion].questionImage}
                    variant="square"
                  />
                </Box>
              </Box>
              <Grid container className="quiz-answer-block">
                {
                  questions[currentQuestion].answerOptions.map((answerOption) => {
                    let cardColour = 'primary';
                    let textColour = 'primary';

                    if (showAnswers) {
                      cardColour = answerOption.isCorrect ? 'green' : 'red';
                      textColour = 'white';
                    }
                    return (
                      <Card key={answerOption.answerText} className="quiz-answer" sx={{ backgroundColor: cardColour }}>
                        <CardActions>
                          <Button
                            fullWidth
                            sx={{ color: textColour }}
                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                          >
                            <Typography>{answerOption.answerText}</Typography>
                          </Button>
                        </CardActions>
                      </Card>
                    );
                  })
                }
              </Grid>
              {revealScore ? (
                <Button
                  fullWidth
                  color="secondary"
                  variant="contained"
                  onClick={() => setShowScore(true)}
                >
                  <Typography>Reveal Score</Typography>
                </Button>
              ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', tm: 5 }}>
                  <Pagination
                    color="secondary"
                    count={questions.length}
                    size="small"
                    onChange={(event, page) => {
                      setShowAnswers(false);
                      setCurrentQuestion(page - 1);
                    }}
                  />
                </Box>
              )}
            </>
          )
      }
    </Box>
  );
};
Quiz.propTypes = {
  questions: PropTypes.array.isRequired
};

export default Quiz;
