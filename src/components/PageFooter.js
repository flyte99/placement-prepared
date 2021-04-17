import { Button } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import { Check } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgress } from '../features/user/usersSlice';

const PageFooter = ({ pageComplete }) => {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.users.progress);

  const initialState = progress[`${pageComplete}`];

  const [completed, setComplete] = useState(initialState);
  const changeStatus = () => {
    const pageStatus = !completed;
    setComplete(pageStatus);

    const updatePageProgress = {
      page: pageComplete,
      completed: pageStatus
    };
    dispatch(updateProgress(updatePageProgress));
  };

  return (
    <div className="mark-as-completed">
      {
        completed ? (
          <Button className="complete-button" variant="contained" onClick={changeStatus}>
            <Check size={50} />
          </Button>
        ) : (
          <Button className="complete-button" variant="outlined" onClick={changeStatus}>
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
