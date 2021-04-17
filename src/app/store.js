import { configureStore } from '@reduxjs/toolkit';
import usersReducer from 'src/app/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
});
