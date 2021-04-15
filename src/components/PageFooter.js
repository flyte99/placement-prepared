import { Button } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import { Check } from 'react-feather';

const PageFooter = ({ pageComplete }) => {
  // TODO: fetch progress from user state
  const progress = [
    { page: 'cvs_and_cover_letters', completed: true },
    { page: 'cv', completed: false },
    { page: 'cover_letters', completed: false },
    { page: 'linkedin', completed: false },
    { page: 'psychometric_testing', completed: false },
    { page: 'situational_judgement', completed: false },
    { page: 'personality_assessments', completed: false },
    { page: 'assessment_centres', completed: false },
    { page: 'group_exercises', completed: false },
    { page: 'virtual_assessment_centres', completed: false },
    { page: 'presentations', completed: false },
    { page: 'interviews', completed: false },
    { page: 'telephone_interviews', completed: false },
    { page: 'video_interviews', completed: false },
    { page: 'face_to_face_interviews', completed: false },
    { page: 'agile_development', completed: false },
    { page: 'git', completed: false },
    { page: 'mysql', completed: false },
    { page: 'unit_testing', completed: false }
  ];

  let initialState;

  for (let i = 0; i < progress.length; i++) {
    if (progress[i].page === pageComplete) {
      initialState = progress[i].completed;
      break;
    }
  }

  const [completed, setComplete] = useState(initialState);
  const markComplete = () => setComplete(!completed);

  return (
    <div className="mark-as-completed">
      {
        completed ? (
          <Button className="complete-button" variant="contained" onClick={markComplete}>
            <Check size={50} />
          </Button>
        ) : (
          <Button className="complete-button" variant="outlined" onClick={markComplete}>
            <span>Mark as<br /> Complete</span>
          </Button>
        )
      }
    </div>
  );
};
PageFooter.propTypes = {
  pageComplete: PropTypes.string.isRequired
};

export default PageFooter;
