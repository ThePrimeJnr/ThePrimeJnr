import {
  DescriptionOutlined,
  GitHub,
  LinkedIn,
  MailOutlined,
  X,
  YouTube,
} from '@mui/icons-material';

export interface Social {
  name: string;
  value: string;
  logo: React.ComponentType;
}

const socials: Social[] = [
  {
    name: 'Mail',
    value: 'destiny@theprimejnr.com',
    logo: MailOutlined,
  },
  {
    name: 'GitHub',
    value: 'https://github.com/ThePrimeJnr',
    logo: GitHub,
  },
  {
    name: 'X',
    value: 'https://twitter.com/ThePrimeJnr',
    logo: X,
  },
  {
    name: 'LinkedIn',
    value: 'https://www.linkedin.com/in/ThePrimeJnr',
    logo: LinkedIn,
  },
  {
    name: 'Youtube',
    value: 'https://youtube.com/@ThePrimeJnr',
    logo: YouTube,
  },
  {
    name: 'Resume',
    value: '/resume',
    logo: DescriptionOutlined,
  },
];

export default socials;
