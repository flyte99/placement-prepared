import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  username: '',
  firstName: '',
  lastName: '',
  institution: '',
  progress: {
    cvs_and_cover_letters: false,
    writing_a_cv: false,
    cover_letters: false,
    linkedin: false,
    psychometric_testing: false,
    situational_judgement_tests: false,
    personality_assessments: false,
    assessment_centres: false,
    group_exercises: false,
    virtual_assessment_centres: false,
    presentations: false,
    interviews: false,
    telephone_interviews: false,
    video_interviews: false,
    face_to_face_interviews: false,
    agile_development_methods: false,
    git: false,
    mysql: false,
    unit_testing: false,
  },
  score: 0
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
      progress: action.payload.progress,
      score: action.payload.score
    }),
    signOutUser: () => initialState,
    updateProgress: (state, action) => ({
      ...state,
      progress: action.payload
    }),
    updateScore: (state, action) => ({
      ...state,
      score: action.payload
    })
  }
});
export const { loginUser, signOutUser, updateProgress, updateScore } = usersSlice.actions;
export default usersSlice.reducer;
