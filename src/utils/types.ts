export interface UserProps {
    avatar_url: string
    name: string
    login: string
    company: string
    followers: number
    bio: string
}

export interface ReposProps { 
    name: string
    html_url: string
    created_at: string
    language: string
}