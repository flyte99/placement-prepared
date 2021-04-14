import { Briefcase, Codesandbox, FileText, Home, PenTool, Settings, Users } from 'react-feather';

export default [
  {
    path: '/',
    icon: Home,
    title: 'Home'
  },
  {
    title: 'CVs and Cover Letters',
    icon: FileText,
    path: 'cvs_and_cover_letters',
    subpages: [
      { title: 'Writing a CV', path: 'cvs_and_cover_letters/cv' },
      { title: 'Cover Letters', path: 'cvs_and_cover_letters/cover-letters' },
      { title: 'LinkedIn', path: 'cvs_and_cover_letters/LinkedIn' }
    ]
  },
  {
    title: 'Psychometric Tests',
    icon: PenTool,
    path: 'psychometric_testing',
    subpages: [
      { title: 'Situational Judgement', path: 'psychometric_testing/situational_judgement' },
      { title: 'Personality Assessments', path: 'psychometric_testing/personality' }
    ]
  },
  {
    title: 'Assessment Centres',
    icon: Briefcase,
    path: 'assessment_centres',
    subpages: [
      { title: 'Group Exercises', path: 'assessment_centres/group_exercises' },
      { title: 'Virtual Assessment Centres', path: 'assessment_centres/virtual' },
      { title: 'Presentations', path: 'assessment_centres/presentations' }
    ]
  },
  {
    title: 'Interviews',
    icon: Users,
    path: 'interviews',
    subpages: [
      { title: 'Telephone Interviews', path: 'interviews/telephone' },
      { title: 'Video Interviews', path: 'interviews/video' },
      { title: 'Face-to-Face Interviews', path: 'interviews/face-to-face' }
    ]
  },
  {
    title: 'Industry Skills',
    icon: Codesandbox,
    path: 'industry_skills',
    subpages: [
      { title: 'Agile Development Methods', path: 'industry_skills/agile_development' },
      { title: 'Git', path: 'industry_skills/git' },
      { title: 'MySQL', path: 'industry_skills/mysql' },
      { title: 'Unit Testing', path: 'industry_skills/unit_testing' }
    ]
  },
  {
    path: 'settings',
    icon: Settings,
    title: 'Settings'
  }
];
