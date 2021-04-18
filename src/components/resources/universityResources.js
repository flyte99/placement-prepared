import { v4 as uuid } from 'uuid';

export default (institution = '') => {
  switch (institution) {
    case 'University of Reading':
      return [
        {
          id: uuid(),
          title: 'University of Reading Careers Pages',
          path: 'https://www.reading.ac.uk/essentials/Careers',
          description: 'The careers team provides lots of helpful resources for starting your career',
          media: '/static/images/resources/uor-logo.png',
        },
        {
          id: uuid(),
          title: 'Career Appointments',
          path: 'https://reading.targetconnect.net/unauth',
          description: 'Book an appointment with a Careers Consultant who can help support your career planning and decision making. Receive advise on how to grow your experience, make successful choices, professional connections and how to achieve your career goals',
          media: '/static/images/resources/targetconnect-logo.svg',
        },
        {
          id: uuid(),
          title: 'Graduates First',
          path: 'https://www.graduatesfirst.com/university-career-services/reading/',
          description: 'Use your university email address to register for free aptitude tests offered by your University Career Services.',
          media: '/static/images/resources/graduates-first-logo.png',
        },
        {
          id: uuid(),
          title: 'Shortlist.me',
          path: 'https://www.graduatesfirst.com/university-career-services/reading/',
          description: 'Shortlist.me allows you to practice and perfect your interview skills whenever and wherever suits you. Shortlist.me recreates the video interview process that you may experience when applying for internships or graduate roles.',
          media: '/static/images/resources/shortlistme-logo.png',
        },
      ];
    default:
      return [];
  }
};
