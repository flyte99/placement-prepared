import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  username: '',
  firstName: '',
  lastName: '',
  institution: '',
  progress: {
    cvs_and_cover_letters: false,
    cv: false,
    cover_letters: false,
    linkedin: false,
    psychometric_testing: false,
    situational_judgement: false,
    personality_assessments: false,
    assessment_centres: false,
    group_exercises: false,
    virtual_assessment_centres: false,
    presentations: false,
    interviews: false,
    telephone_interviews: false,
    video_interviews: false,
    face_to_face_interviews: false,
    agile_development: false,
    git: false,
    mysql: false,
    unit_testing: false,
  }
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
      ...state,
      progress: action.payload
    })
  }
});
export const { loginUser, signOutUser, updateProgress } = usersSlice.actions;
export default usersSlice.reducer;
