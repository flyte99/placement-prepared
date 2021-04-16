import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  username: '',
  firstName: '',
  lastName: '',
  institution: '',
  progress: [
    { page: 'cvs_and_cover_letters', completed: false },
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
    { page: 'unit_testing', completed: false },
  ]
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => ({
      token: action.payload.token,
      username: action.payload.username,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      institution: action.payload.institution,
      progress: action.payload.progress
    }),
    signOutUser: () => initialState,
    updateProgress: (state, action) => ({
      progress: action.payload
    })
  }
});
export const { loginUser, signOutUser, updateProgress } = usersSlice.actions;
export default usersSlice.reducer;
