export interface HomeProps {
    skills: SkillProps,
    contacts: ContactsProps
}

export interface SkillProps {
    id: number,
    title: string,
    icon: JSX.Element,
    contents: string
}

export interface ContactsProps {
    id: number,
    title: string,
    icon: JSX.Element,
    content: string
}