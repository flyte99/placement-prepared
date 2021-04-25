import { Briefcase, Codesandbox, FileText, Home, Mic, PenTool, Users } from 'react-feather';

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
      { title: 'Writing a CV', path: 'writing_a_cv' },
      { title: 'Cover Letters', path: 'cover_letters' },
      { title: 'LinkedIn', path: 'linkedin' }
    ]
  },
  {
    title: 'Psychometric Tests',
    icon: PenTool,
    path: 'psychometric_testing',
    subpages: [
      { title: 'Situational Judgement', path: 'situational_judgement_tests' },
      { title: 'Personality Assessments', path: 'personality_assessments' }
    ]
  },
  {
    title: 'Assessment Centres',
    icon: Briefcase,
    path: 'assessment_centres',
    subpages: [
      { title: 'Group Exercises', path: 'group_exercises' },
      { title: 'Virtual Assessment Centres', path: 'virtual_assessment_centres' },
      { title: 'Presentations', path: 'presentations' }
    ]
  },
  {
    title: 'Interviews',
    icon: Users,
    path: 'interviews',
    subpages: [
      { title: 'Telephone Interviews', path: 'telephone_interviews' },
      { title: 'Video Interviews', path: 'video_interviews' },
      { title: 'Face-to-Face Interviews', path: 'face_to_face_interviews' }
    ]
  },
  {
    title: 'Industry Skills',
    icon: Codesandbox,
    path: 'industry_skills',
    subpages: [
      { title: 'Agile Development Methods', path: 'agile_development_methods' },
      { title: 'Git', path: 'git' },
      { title: 'MySQL', path: 'mysql' },
      { title: 'Unit Testing', path: 'unit_testing' }
    ]
  },
  {
    path: 'podcasts',
    icon: Mic,
    title: 'Podcasts'
  }
];
