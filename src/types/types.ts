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

export interface Activity { 
    id: number,
    crreated_at: string,
    name: string,
    description?: string,
    category: string,
    tags: string[],
    date: string,
    link?: string,
    image?: string,
    status?: string,
    tech: string[]
}