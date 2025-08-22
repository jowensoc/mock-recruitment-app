export type ConsultantType = {
    id: number,
    name?:string,
    role?:string,
    skills?: [string],
    thumbnail?: string,
    location?:string,
    availability?:string
}