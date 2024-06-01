import dayjs from 'dayjs';
import Josibake from '../images/josibake.jpg';
import Ruben from '../images/ruben.jpg';

export const MENU_ITEMS = [
  {
    text: 'About',
    anchor: '#about',
  },
  {
    text: 'Team',
    anchor: '#team',
  },
  {
    text: 'Donate',
    anchor: '#donate',
  },
];

export const HERO_WORDING = {
  title: `Supporting Bitcoin<br /> to 2140 and beyond`,
  blurb: `2140 is a Europe-based non-profit organization (NGO) dedicated to supporting Bitcoin research and development. Our mission is to provide protocol veterans with long-term stability through employment in our Amsterdam office and to onboard aspiring contributors.`,
  button: `Read more`,
};

export const ABOUT_WORDING = {
  eyebrow: '01 — About',
  title: `Building <s>projects</s> careers`,
  content: ``,
  subtitle: `Working on Bitcoin is hard enough, making it your full-time job shouldn't be.`,
  paragraphs: [
    `2140 is a non-profit organization dedicated to supporting FOSS contributors by providing stable, full-time employment. Our Amsterdam-based office serves as a hub for collaboration and innovation where open source contributors can continue their work with the security of traditional employment.`,
    `Our focus is on security, resilience, and long-term maintainability. While short term projects are important, we aim to give contributors stability and runway to focus on bigger, multi-year problems. Its also why we focus on mentorship and career growth: we want to ensure that the community of people who understand the Bitcoin protocol on a deep technical level is growing year over year, not shrinking.`,
  ],
};

export const TEAM_WORDING = {
  eyebrow: '02 — Team',
  title: 'Meet Our Contributors',
  content: `We are a mix of long-term contributors, researchers, and new faces all united by a common goal: to to support Bitcoin until the last subsidy is mined, and beyond.`,
  team: [
    {
      name: 'josibake',
      role: 'Bitcoin Core contributor',
      twitter: 'https://twitter.com/josibake?lang=en',
      github: 'https://github.com/josibake',
      image: Josibake,
    },
    {
      name: 'RubenSomsen',
      role: 'Bitcoin Sorcerer',
      twitter: 'https://twitter.com/SomsenRuben',
      github: 'https://gist.github.com/RubenSomsen',
      image: Ruben,
    },
  ],
};

export const DONATE_WORDING = {
  eyebrow: '3 — Donate',
  title: 'Get involved in our mission',
  donate: {
    eyebrow: '3.1 — Donate',
    title: `Support the Future of Bitcoin`,
    content: `2140 is not a business: we are a non-profit with 100% of donations being used to provide long-term support to open source contributors. Our aim is to do this sustainably, which is only possible with community support.`,
    button: {
      title: 'Support our mission',
      text: 'Join us in empowering this vital work',
    },
  },
  contact: {
    eyebrow: '3.2 — Contact',
    title: `Get in touch — At 2140, we're always eager to connect`,
    content: `Whether you're a developer with insights to share, a potential collaborator, or simply curious about our work, we'd love to hear from you!`,
  },
};
