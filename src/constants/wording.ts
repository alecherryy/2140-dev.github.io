import Josibake from '../images/avatars/josibake.jpg';
import Ruben from '../images/avatars/ruben.jpg';

export const MENU_ITEMS = [
  {
    text: 'About',
    anchor: 'about',
  },
  {
    text: 'Team',
    anchor: 'team',
  },
  {
    text: 'Get Involved',
    anchor: 'getInvolved',
  },
];

export const FOOTER_WORDING = {
  email: 'hello@2140.dev',
  text: `Stichting 2140, Registered at the Chamber of Commerce in Amsterdam under 93717113. <br />All artwork featured on this website was sourced and derived from <a href="http://www.freepik.com/" target="_blank">Freepik</a>; you can see more of the artist's work <a href="https://www.freepik.com/author/fullvector" target="_blank">here</a>.`,
  // gpg: `<b>GPG</b>: XXXX YYYY ZZZZ AAAA BBBB CCCC DDDD EEEE FFFF GGGG`,
};

export const HERO_WORDING = {
  title: `Supporting<br />Bitcoin to 2140<br />and <u>beyond</u>`,
  blurb: `2140 is a European non-profit organization (NGO) dedicated to supporting Bitcoin research and development. Our mission is to provide protocol veterans with long-term stability through employment in our Amsterdam office and to onboard aspiring contributors.`,
  button: `Read more`,
};

export const ABOUT_WORDING = {
  eyebrow: '01 — About',
  title: `Building <s>projects</s> careers`,
  blurb: `At 2140, our focus is the long-term security, resilience and maintainability of the Bitcoin network. Our employment opportunities and fellowship programs are not just about funding developers. We want contributors to build a career within the space and focus on large-scale, multi-year initiatives.`,
  sections: [
    {
      eyebrow: 'What we offer',
      subtitle: `Working on Bitcoin is hard enough, making it your full-time job shouldn't be`,
      content: `<i>Full-time Employment:</i> Long-term contributors are the backbone of any open-source project. With years of experience, they possess the technical knowledge and expertise crucial to the ecosystem's success. At 2140, we handle administrative tasks and provide the stability and resources typical of traditional employment. Our support allows contributors to focus on what truly matters: building a repository of technical knowledge and driving multi-year initiatives. Our Amsterdam office helps by offering a space for in-person collaboration, fostering a strong sense of community and collaboration.

<br /><br /><i>One-year Fellowship:</i> Becoming an open-source contributor can be intimidating and challenging. Our fellowship program helps newcomers aspiring to become full-time contributors by offering mentorship and hands-on experience in open-source development. This program ensures a steady influx of new talent, contributing to the sustainability and growth of Bitcoin. We want to ensure the community of people who understand Bitcoin on a deep, technical level is growing year over year, not shrinking.`,
    },
  ],
};

export const TEAM_WORDING = {
  eyebrow: '02 — Team',
  title: 'Meet the team',
  content: `We are a mix of long-term contributors and researchers united by a common goal: to support Bitcoin until the last subsidy is mined, and beyond.`,
  team: [
    {
      name: 'josibake',
      role: 'Co-founder, Bitcoin Core contributor',
      twitter: 'https://twitter.com/josibake',
      github: 'https://github.com/josibake',
      image: Josibake,
    },
    {
      name: 'RubenSomsen',
      role: 'Co-founder, Bitcoin Sorcerer',
      twitter: 'https://twitter.com/SomsenRuben',
      github:
        'https://gist.github.com/RubenSomsen/c9f0a92493e06b0e29acced61ca9f49a',
      image: Ruben,
    },
  ],
  join: {
    eyebrow: 'Join us',
    subtitle: `Already working as an open-source contributor? We'd love to chat!`,
    content: `If you are currently contributing to Bitcoin in an open source capacity and interested in working with us in Amsterdam, we would love to hear from you! <br />Give us a shout at <a href="mailto:hello@2140.dev">hello@2140.dev</a>.<br /><br />If you're interested in our fellowship program, check back for more information as we build the program out.`,
  },
};

export const GET_INVOLVED_WORDING = {
  eyebrow: '3 — Get Involved',
  title: 'Get involved in our <u>mission</u>',
  content: `2140 is not a business: we are a non-profit with 100% of donations being used to provide employment for Bitcoin contributors. Our aim is to do this sustainably, which is only possible with community support.`,
  button: {
    title: 'Support our mission',
    text: 'Join us in empowering this vital work',
  },
};

export const DONATE_WORDING = {
  page: {
    title: `Support our <u>mission</u> at 2140`,
    content: `We are committed to the continous development and progress of Bitcoin; this is why, 100% of your donation goes to supporting the Bitcoin contributors at 2140. You can make a one-time donation or contact us to set up a recurring payment. We appreciate your help and support.`,
    disclaimer: 'Onchain and fiat methods',
  },
  faqs: {
    eyebrow: '1 - Learn more',
    title: 'Frequently Asked Questions',
    content: `Lorem ipsum dolor sit amet, ex eos esse vocibus philosophia. Has
  ei essent adversarium, sea ea suas necessitatibus, at duo tamquam
  accusam.`,
    items: [
      {
        title: 'Lorem ipsum dolor sit amet, ex eos esse vocibus philosophia?',
        content: `Has ei
        essent adversarium, sea ea suas necessitatibus, at duo tamquam
        accusam. Eu probo inani molestiae usu, mei ut exerci quaestio, hinc
        commodo bonorum ei eam. Eu pro euismod tractatos interpretaris, qui in
        impetus percipitur.`,
      },
      {
        title: 'Vivendum persecuti no duo, ius nullam recusabo id?',
        content: `Te sint probatus ius, duo novum principes an,
        sed te diceret tincidunt. Vel et iusto dicit intellegebat. Qui no
        lorem elitr veritus. Veri pericula est no.`,
      },
      {
        title: 'Te sint probatus ius, duo novum principes?',
        content: `Vel et iusto dicit intellegebat.`,
      },
      {
        title: 'Lorem ipsum dolor sit amet, ex eos esse vocibus philosophia?',
        content: `Has ei
        essent adversarium, sea ea suas necessitatibus, at duo tamquam
        accusam. Eu probo inani molestiae usu, mei ut exerci quaestio, hinc
        commodo bonorum ei eam. Eu pro euismod tractatos interpretaris, qui in
        impetus percipitur.`,
      },
      {
        title: 'Vivendum persecuti no duo, ius nullam recusabo id?',
        content: `Te sint probatus ius, duo novum principes an,
        sed te diceret tincidunt. Vel et iusto dicit intellegebat. Qui no
        lorem elitr veritus. Veri pericula est no.`,
      },
      {
        title: 'Te sint probatus ius, duo novum principes?',
        content: `Vel et iusto dicit intellegebat.`,
      },
      {
        title: ' Eu probo inani molestiae usu, mei ut exerci quaestio?',
        content: `Eu probo inani molestiae usu, mei ut exerci quaestio, hinc
        commodo bonorum ei eam. Eu pro euismod tractatos interpretaris, qui in
        impetus percipitur.`,
      },
    ],
  },
  donate: {
    eyebrow: `2 — Donate`,
    title: 'Start supporting Bitcoin developers',
    content: `Lorem ipsum dolor sit amet, ex eos esse vocibus philosophia. Has
    ei essent adversarium, sea ea suas necessitatibus, at duo tamquam
    accusam. Eu probo inani molestiae usu, mei ut exerci quaestio,
    hinc commodo bonorum ei eam.`,
  },
};
