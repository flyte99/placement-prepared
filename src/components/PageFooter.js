import { Button } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import { Check } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgress } from '../features/user/usersSlice';

const PageFooter = ({ pageComplete }) => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.users.progress);

  let initialState;

  for (let i = 0; i < progress.length; i++) {
    if (progress[i].page === pageComplete) {
      initialState = progress[i].completed;
      break;
    }
  }

  const [completed, setComplete] = useState(initialState);
  const markComplete = () => {
    const pageStatus = !completed;
    setComplete(pageStatus);

    dispatch(updateProgress(progress));
  };

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
