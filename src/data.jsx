import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Norbert',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ochieng',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Kenyan',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Kenya, Siaya, Ugunja',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+254743999130',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'norbtony2268@gmail.com',
  },

  {
    id: 9,
    title: 'GitHub : ',
    description: 'NorbLevi',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Kiswahili',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '3',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '2',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '0',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 May - PRESENT',
    Title: 'Web Developer <span> Free-Lance  Developer</span>',
    desc: 'As of the moment a using my skills to develop websites and achive the users design of choice',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Sep 2022 - Dec 2022',
    Title: 'Mentorship <span> Elias Ict Center </span>',
    desc: 'During my time in school I under went a mentorship program where i expressed my skills in html,css and javascript and was introduced to js frameworks',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    Title: 'KCSE <span> Kocholia High School </span>',
    desc: 'Completed my High school exams at Kocholia High School in 2019,',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    Title: 'Diploma in Computer Science <span> Baringo Technical Collage </span>',
    desc: 'Join Baringo Technical Collge on september 2020  and did my last paper on May 2023',
  },

];

export const skills = [
  {
    id: 1,
    Title: 'Html',
    percentage: '85',
  },

  {
    id: 2,
    Title: 'Javascript',
    percentage: '65',
  },

  {
    id: 3,
    Title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    Title: 'Java',
    percentage: '25',
  },


  {
    id: 5,
    Title: 'React',
    percentage: '55',
  },

  {
    id: 6,
    Title: 'Python',
    percentage: '45',
  }
];

export const portfolio = [
 
  {
    id: 1,
    img: Work1,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Hotel Web',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html Css JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com/NorbLevi',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Web design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'FreeLance Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com/NorbLevi',
      },
    ],
  },
 
  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
