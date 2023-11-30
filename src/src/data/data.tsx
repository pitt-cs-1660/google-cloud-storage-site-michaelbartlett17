import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/hero.jpeg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Michael Bartlett Resume',
  description: "Michael Bartlett's Personal Resume Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Michael Bartlett.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pittsburgh based <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">eServices Technology</strong> working on a fullstack javascript application.
        Additionally, I'm a senior at the University of Pittsburgh studying <strong className="text-stone-100">Computer Science</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I enjoy <strong className="text-stone-100">biking</strong>,
        hitting the <strong className="text-stone-100">gym</strong>, or catching up on a {' '}
        <strong className="text-stone-100">Netflix Show</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a software engineer based in Pittsburgh, PA working on a fullstack JavaScript Application. Having been employed here for over a year,
  I've become well-acquianted with React.js, Express.js, Node.js, and SQL Server. I'm currently a senior at the University of Pittsburgh studying Computer Science.
  Outside of my professional life, I enjoy biking, lifting, and catching up on a Netflix show.`,
  aboutItems: [
    {label: 'Location', text: 'Pittsburgh, PA', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Interests', text: 'Biking, Lifting, Netflix-Binging', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Pittsburgh', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'eServices Technology', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'HTML/CSS',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'React.js',
        level: 7,
      },
      {
        name: 'Redux.js',
        level: 7,
      },
      {
        name: 'TypeScript',
        level: 6,
      }
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Express.js',
        level: 8,
      },
      {
        name: 'Flask',
        level: 7,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
    ]
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'Kubernetes',
        level: 4,
      }
    ]
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'PowerShell',
        level: 4,
      },
      {
        name: 'Kubernetes',
        level: 3,
      }
    ]
  }
  // {
  //   name: 'Backend development',
  //   skills: [
  //     {
  //       name: 'Node.js',
  //       level: 8,
  //     },
  //     {
  //       name: 'Rust',
  //       level: 5,
  //     },
  //     {
  //       name: 'Golang',
  //       level: 4,
  //     },
  //   ],
  // },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2024',
    location: 'University of Pittsburgh',
    title: 'B.S. Computer Science; Minor in Information Science',
    content: <p>I'm currently pursuing a B.S. in Computer Science and a Minor in Information Science. 
      As I wrap up my degree in Spring Semester 2024, I will be working moving from a part-time to a fill-time role as a Software Engineer at eServices Technology.
      My interests include automation, DevOps, and general fullstack development.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - Present',
    location: 'eServices Technology',
    title: 'Software Engineer',
    content: (
      <p>
        Orignally starting as an intern from May 2022 - August 2022, I moved into a part-time role as a Junior Software Engineer in August 2022.
        Beginning January 2023, I will be moving into a full-time role as a Software Engineer.
        In this role, I work on a fullstack JavaScript application, using React.js, Express.js, Node.js, and SQL Server.
        I've completed a variety of projects to enhace the application, including a POS system, a communications module utilizing Twilio SMS, mobile wallet ticketing, and a variety of other features.
        Additionally, I squash bugs and am helping to complete a migration from a legacy PHP codebase.
      </p>
    ),
  },
  {
    date: 'May 2020 - Present',
    location: 'Remote',
    title: 'Freelance Web Consulting/Development',
    content: (
      <p>
        In this role, I collaborate with a range of clients from various industries, such as landscaping, IT, indoor air quality services, salons, and construction companies, to develop and enhance their WordPress websites.
        I offer tailored solutions and create customized WordPress themes to meet the unique needs of each client. Additionally, I assist clients in establishing and expanding their online presence by utilizing strategies like social media management,
        Google My Business optimization, and targeted online advertising. Furthermore, I actively contribute to setting up and maintaining WooCommerce, an eCommerce platform, for clients who require online selling capabilities on their websites.
      </p>
    ),
  },
  {
    date: 'June 2023 - August 2023',
    location: 'The D.E. Shaw Group',
    title: 'Systems Administrator Intern',
    content: (
      <p>
        During my internship I developed a proactive monitoring solution to proactively respond to common Outlook issues, resulting in a significant decrease in the number of helpdesk tickets.
        Additionally, I implemented Slack-based automation to streamline a manual task as a Systems Administrator, greatly improving our team's efficiency.
        I also had the opportunity to collaborate closely with a team of Systems Administrators, collectively providing support for a workforce of over 3000 employees.
        To achieve these objectives, I leveraged a range of technologies, including PowerShell, Python, and Kubernetes.
      </p>
    ),
  },
  {
    date: 'August 2021 - April 2022',
    location: 'University of Pittsburgh',
    title: 'Undergraduate Teaching Assistant',
    content: (
      <p>
        I led recitation sections for Introduction to Programming and Intermediate Programming where I taught supplementary course material.
        I instructed weekly lab assignments, guided students with Object-Oriented Programming questions, and offered additional assistance with personal office hours.
      </p>
    ),
  },
];
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'michael@michaelbartlett.me',
      href: 'mailto:michael@michaelbartlett.me',
    },
    {
      type: ContactType.Location,
      text: 'Pittsburgh, Pennsylvania',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'michaelbartlett17',
      href: 'https://github.com/michaelbartlett17',
    },
    {
      type: ContactType.LinkedIn,
      text: 'michaelbartlett17',
      href: 'https://linkedin.com/in/michaelbartlett17',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/michaelbartlett17'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/michaelbartlett17/'}
];
