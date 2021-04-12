import { Navigate } from 'react-router-dom';
import HomeLayout from 'src/components/HomeLayout';
import MainLayout from 'src/components/MainLayout';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import NotFound from 'src/pages/NotFound';
import Home from 'src/pages/Home';
import Account from 'src/pages/Account';
import Settings from 'src/pages/Settings';
import CVsAndCoverLetters from 'src/pages/CVsAndCoverLetters/CVsAndCoverLetters';
import WritingACV from 'src/pages/CVsAndCoverLetters/WritingACV';
import CoverLetters from 'src/pages/CVsAndCoverLetters/CoverLetters';
import LinkedIn from 'src/pages/CVsAndCoverLetters/LinkedIn';
import PsychometricTesting from 'src/pages/PsychometricTesting/PsychometricTesting';
import SituationalJudgementTests from 'src/pages/PsychometricTesting/SituationalJudgementTests';
import PersonalityAssessments from 'src/pages/PsychometricTesting/PersonalityAssessments';
import AssessmentCentres from 'src/pages/AssessmentCentres/AssessmentCentres';
import GroupExercises from 'src/pages/AssessmentCentres/GroupExercises';
import VirtualAssessmentCentres from 'src/pages/AssessmentCentres/VirtualAssessmentCentres';
import Presentations from 'src/pages/AssessmentCentres/Presentations';
import Interviews from 'src/pages/Interviews/Interviews';
import TelephoneInterviews from 'src/pages/Interviews/TelephoneInterviews';
import FaceToFaceInterviews from 'src/pages/Interviews/FaceToFaceInterviews';
import VideoInterviews from 'src/pages/Interviews/VideoInterviews';
import IndustrySkills from 'src/pages/IndustrySkills/IndustrySkills';
import AgileDevelopment from 'src/pages/IndustrySkills/AgileDevelopment';
import Git from 'src/pages/IndustrySkills/Git';
import MySQL from 'src/pages/IndustrySkills/MySQL';
import UnitTesting from 'src/pages/IndustrySkills/UnitTesting';
import Podcasts from 'src/pages/Podcasts';
import CustomerList from 'src/pages/CustomerList';
import ProductList from 'src/pages/ProductList';

const routes = [
  {
    path: 'app',
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

      { path: 'customers', element: <CustomerList /> },
      { path: 'products', element: <ProductList /> },

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
      { path: '/', element: <Navigate to="/app/" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;