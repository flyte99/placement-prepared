import { Button } from '@material-ui/core';
import axios from 'axios';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import { Check } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgress } from '../features/user/usersSlice';

const PageFooter = ({ pageComplete }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users);
  const { progress } = currentUser;

  const initialState = progress[`${pageComplete}`];

  const [completed, setComplete] = useState(initialState);
  const changeStatus = () => {
    const pageStatus = !completed;
    setComplete(pageStatus);

    axios.post('http://localhost:8000/api/update-progress/', {
      token: currentUser.token,
      page: pageComplete,
      completed: pageStatus
    }, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        dispatch(updateProgress(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
