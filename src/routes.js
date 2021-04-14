import { Navigate } from 'react-router-dom';
import HomeLayout from 'src/components/home/HomeLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account/Account';
import Login from 'src/pages/Account/Login';
import Register from 'src/pages/Account/Register';
import Settings from 'src/pages/Account/Settings';
import AssessmentCentres from 'src/pages/AssessmentCentres/AssessmentCentres';
import GroupExercises from 'src/pages/AssessmentCentres/GroupExercises';
import Presentations from 'src/pages/AssessmentCentres/Presentations';
import VirtualAssessmentCentres from 'src/pages/AssessmentCentres/VirtualAssessmentCentres';
import CoverLetters from 'src/pages/CVsAndCoverLetters/CoverLetters';
import CVsAndCoverLetters from 'src/pages/CVsAndCoverLetters/CVsAndCoverLetters';
import LinkedIn from 'src/pages/CVsAndCoverLetters/LinkedIn';
import WritingACV from 'src/pages/CVsAndCoverLetters/WritingACV';
import Home from 'src/pages/Home';
import AgileDevelopment from 'src/pages/IndustrySkills/AgileDevelopment';
import Git from 'src/pages/IndustrySkills/Git';
import IndustrySkills from 'src/pages/IndustrySkills/IndustrySkills';
import MySQL from 'src/pages/IndustrySkills/MySQL';
import UnitTesting from 'src/pages/IndustrySkills/UnitTesting';
import FaceToFaceInterviews from 'src/pages/Interviews/FaceToFaceInterviews';
import Interviews from 'src/pages/Interviews/Interviews';
import TelephoneInterviews from 'src/pages/Interviews/TelephoneInterviews';
import VideoInterviews from 'src/pages/Interviews/VideoInterviews';
import NotFound from 'src/pages/NotFound';
import Podcasts from 'src/pages/Podcasts';
import PersonalityAssessments from 'src/pages/PsychometricTesting/PersonalityAssessments';
import PsychometricTesting from 'src/pages/PsychometricTesting/PsychometricTesting';
import SituationalJudgementTests from 'src/pages/PsychometricTesting/SituationalJudgementTests';

const routes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'account', element: <Account /> },
      { path: 'settings', element: <Settings /> },

      { path: 'cvs_and_cover_letters', element: <CVsAndCoverLetters /> },
      { path: 'cvs_and_cover_letters/cv', element: <WritingACV /> },
      { path: 'cvs_and_cover_letters/cover-letters', element: <CoverLetters /> },
      { path: 'cvs_and_cover_letters/LinkedIn', element: <LinkedIn /> },

      { path: 'psychometric_testing', element: <PsychometricTesting /> },
      { path: 'psychometric_testing/situational_judgement', element: <SituationalJudgementTests /> },
      { path: 'psychometric_testing/personality', element: <PersonalityAssessments /> },

      { path: 'assessment_centres', element: <AssessmentCentres /> },
      { path: 'assessment_centres/group_exercises', element: <GroupExercises /> },
      { path: 'assessment_centres/virtual', element: <VirtualAssessmentCentres /> },
      { path: 'assessment_centres/presentations', element: <Presentations /> },

      { path: 'interviews', element: <Interviews /> },
      { path: 'interviews/telephone', element: <TelephoneInterviews /> },
      { path: 'interviews/video', element: <VideoInterviews /> },
      { path: 'interviews/face-to-face', element: <FaceToFaceInterviews /> },

      { path: 'industry_skills', element: <IndustrySkills /> },
      { path: 'industry_skills/agile_development', element: <AgileDevelopment /> },
      { path: 'industry_skills/git', element: <Git /> },
      { path: 'industry_skills/mysql', element: <MySQL /> },
      { path: 'industry_skills/unit_testing', element: <UnitTesting /> },

      { path: 'podcasts', element: <Podcasts /> },

      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
