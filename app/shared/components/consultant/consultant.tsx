import { type ConsultantType } from "~/shared/types/consultant.type";

interface ConsultantProps {
    children?: React.ReactNode;
    consultant: ConsultantType 
}

export const Consultant: React.FC<ConsultantProps> = ({children, consultant}) => {

    return (<div>
        <p>{consultant.id}</p>
        <p>{consultant.name}</p>
        <p>{consultant.role}</p>
        <p>{consultant.skills}</p>
        <div>{ children }</div>
        </div>);
}