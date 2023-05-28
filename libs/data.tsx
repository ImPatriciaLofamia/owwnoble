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
import {VscCallIncoming, VscMail, VscCode, VscHome} from "react-icons/vsc"
import {CgProfile} from "react-icons/cg"

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

export const socials = [
    {
        id: 1,
        title: 'Facebook',
        icon: <SiFacebook size={30}/>,
        content: `owwnoblee.fb`,
        Url : 'https://web.facebook.com/owwnoblee'
    },
    {
        id: 2,
        title: 'Twitter',
        icon: <SiTwitter size={30}/>,
        content: `@oww_noble`,
        Url : 'https://twitter.com/oww_noble'
    },
    {
        id: 3,
        title: `Instagram`,
        icon: <SiInstagram size={30}/>,
        content: `oww_noble.ig`,
        Url : 'https://www.instagram.com/oww_noble/'
    },
    {
        id: 4,
        title: `LinkedIn`,
        icon: <SiLinkedin size={30}/>,
        content: `linkedin//patricialofamia`,
        Url : 'hhttps://www.linkedin.com/in/patricia-lofamia-83a833247/'
    },
    {
        id: 5,
        title: `Mobile Number`,
        icon: <VscCallIncoming size={30}/>,
        content: '09949241944',
        Url : `tel:${+639949241944}`
    }
]

export const contacts = [
  {
    id: 1,
    title: `Name:`,
    icon: <CgProfile size={30}/>,
    content: `Patricia O. Lofamia`
  },
  {
    id: 2,
    title: `Role:`,
    icon: <VscCode size={30}/>,
    content: `React JS Developer`
  },
  {
    id: 3,
    title: `Home Address:`,
    icon: <VscHome size={30}/>,
    content: `P-3 Brgy. Bulhao, Labo, Camarines Norte, Bicol`
  },
]