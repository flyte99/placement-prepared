import { configureStore } from '@reduxjs/toolkit';
import usersReducer from 'src/features/user/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
});
