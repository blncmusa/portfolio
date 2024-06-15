export interface Project {
    id?: number,
    created_at?: string,
    name: string,
    image?: string,
    description: string,
    tags?: string[],
    is_featured?: boolean,
    link: string
}