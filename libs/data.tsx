import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGithub,
  SiFigma,
  SiFacebook, 
  SiTwitter,
  SiInstagram,
  SiLinkedin,
  
} from "react-icons/si";
import {VscCallIncoming} from "react-icons/vsc"

export const skills = [
  {
    id: 1,
    title: `JavaScript`,
    icon: <SiJavascript size={50} />,
    contents: ``,
  },
  {
    id: 2,
    title: `TypeScript`,
    icon: <SiTypescript size={50} />,
    contents: ``,
  },
  {
    id: 3,
    title: `React/Native`,
    icon: <SiReact size={50} />,
    contents: ``,
  },
  {
    id: 4,
    title: `Next JS`,
    icon: <SiNextdotjs size={50} />,
    contents: ``,
  },
  {
    id: 5,
    title: `Version Control`,
    icon: <SiGithub size={50} />,
    contents: ``
  },
  {
    id: 6,
    title: `Figma Design`,
    icon: <SiFigma size={50} />,
    contents: ``
  }
];

export const contacts = [
    {
        id: 1,
        title: 'Facebook',
        icon: <SiFacebook size={30}/>,
        content: `fb//owwnoblee`,
        link: 'https://web.facebook.com/owwnoblee'
    },
    {
        id: 2,
        title: 'Twitter',
        icon: <SiTwitter size={30}/>,
        content: `twitter//oww_noble`
    },
    {
        id: 3,
        title: `Instagram`,
        icon: <SiInstagram size={30}/>,
        content: `ig//oww_noble`
    },
    {
        id: 4,
        title: `LinkedIn`,
        icon: <SiLinkedin size={30}/>,
        content: `linkedin//patricialofamia`
    },
    {
        id: 5,
        title: `Mobile Number`,
        icon: <VscCallIncoming size={30}/>,
        content: '09949241944'
    }
]