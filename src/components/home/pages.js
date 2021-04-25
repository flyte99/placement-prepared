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
      {
        title: 'Writing a CV',
        path: 'writing_a_cv',
        summary: "Employers ask for a Curriculum Vitae (CV) as a summary of an applicant's background, qualifications and extracurricular interests."
      },
      {
        title: 'Cover Letters',
        path: 'cover_letters',
        summary: 'Cover letters accompany a CV to emphasise why an applicant is applying to a particular role and how they are suitable.'
      },
      {
        title: 'LinkedIn',
        path: 'linkedin',
        summary: 'LinkedIn is an employment-orientated social media that many companies are now using to recruit employees.'
      }
    ]
  },
  {
    title: 'Psychometric Tests',
    icon: PenTool,
    path: 'psychometric_testing',
    subpages: [
      {
        title: 'Situational Judgement',
        path: 'situational_judgement_tests',
        summary: 'Situational judgement tests assess how an applicant would behave in a variety of work-based situations'
      },
      {
        title: 'Personality Assessments',
        path: 'personality_assessments',
        summary: 'Personality assessments examine how likely an applicant is to fit into the role and company culture'
      }
    ]
  },
  {
    title: 'Assessment Centres',
    icon: Briefcase,
    path: 'assessment_centres',
    subpages: [
      {
        title: 'Group Exercises',
        path: 'group_exercises',
        summary: 'Applicants are placed into groups and expected to solve a problem by working together and agreeing on a solution within a set time limit'
      },
      {
        title: 'Virtual Assessment Centres',
        path: 'virtual_assessment_centres',
        summary: 'During the coronavirus pandemic, some graduate employers moved to running virtual or digital assessment centres instead'
      },
      {
        title: 'Presentations',
        path: 'presentations',
        summary: 'Recruiters can ask applicants to prepare presentations individually or as a group'
      }
    ]
  },
  {
    title: 'Interviews',
    icon: Users,
    path: 'interviews',
    subpages: [
      {
        title: 'Telephone Interviews',
        path: 'telephone_interviews',
        summary: 'Typically focused on the competencies that the recruiter is looking for and used to determine which applicants to invite to a face-to-face interview'
      },
      {
        title: 'Video Interviews',
        path: 'video_interviews',
        summary: 'Applicants are presented with questions and asked to record their response, often within a time limit'
      },
      {
        title: 'Face-to-Face Interviews',
        path: 'face_to_face_interviews',
        summary: 'During Face-to-Face interviews employers explain the job and ask the applicant questions to determine their fit for the role'
      }
    ]
  },
  {
    title: 'Industry Skills',
    icon: Codesandbox,
    path: 'industry_skills',
    subpages: [
      {
        title: 'Agile Development Methods',
        path: 'agile_development_methods',
        summary: 'Used in software development cycles to aid productivity by collaboration and constant reassessment'
      },
      {
        title: 'Git',
        path: 'git',
        summary: 'Git is a popular version control system used for tracking changes in repositories'
      },
      {
        title: 'MySQL',
        path: 'mysql',
        summary: 'MySQL is a relational database management system'
      },
      {
        title: 'Unit Testing',
        path: 'unit_testing',
        summary: 'A testing method where individual units of source code are tested to determine whether they are fit for use'
      }
    ]
  },
  {
    path: 'podcasts',
    icon: Mic,
    title: 'Podcasts'
  }
];
