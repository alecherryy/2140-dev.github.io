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
  title: `The year was`,
  year: `2140`,
  blurb: `We are dedicated to advancing Bitcoin through direct support and employment for researchers and developers contributing to its ecosystem.`,
  button: `Read more`,
};

export const ABOUT_WORDING = {
  eyebrow: '01 — About',
  title: `Supporting Bitcoin ~projects~ careers`,
  content: `Our mission is to empower Bitcoin Core developers through financial support, resources, and a
            collaborative community.`,
  subtitle: `We are dedicated to fostering the security, resilience, and progress of the Bitcoin network.`,
  paragraphs: [
    `We believe in the transformative power of Bitcoin to promote financial independence and privacy. By funding those at the forefront of Bitcoin development, we commit to safeguarding the network’s open-source ethos, enhancing its technological infrastructure, and ensuring its ongoing decentralization.`,
    `Our goal is to catalyze innovation within the Bitcoin ecosystem, making it more accessible, efficient, and secure for everyone, everywhere.`,
  ],
};

export const TEAM_WORDING = {
  eyebrow: '02 — Team',
  title: 'Meet Our Contributors',
  content: `Comprising visionary Bitcoin Core developers, passionate technologists, and forward-thinking strategists, our
    team is united by a common goal: to advance and secure the Bitcoin network.`,
  team: [
    {
      name: 'josibake',
      role: 'Bitcoin Core Developer',
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
  eyebrow: '03 — Donate',
  title: 'Get involved in our mission',
  donate: {
    title: `Donate — Support the Future of Bitcoin`,
    content: `Your donation fuels the innovative work of leading Bitcoin researchers and developers, ensuring the growth and security of the ecosystem. With your contribution, we can offer more resources, opportunities, and support to those shaping the future of Bitcoin.`,
    button: {
      title: 'Support our mission',
      text: 'Join us in empowering this vital work',
    },
  },
  contact: {
    title: `Get in touch — At 2140, we're always eager to connect`,
    content: `Whether you're a developer with insights to share, a potential collaborator interested in our mission, or simply curious about our work, your thoughts are invaluable to us. Reach out today to discuss how we can work together to secure and innovate the Bitcoin ecosystem.`,
  },
};
