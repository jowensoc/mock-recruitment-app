import { ConsultantContext } from "~/shared/context/ConsultantContextType";
import { type ConsultantType } from "~/shared/types/ConsultantType";

interface ConsultantProps {
    children?: React.ReactNode;
    consultant: ConsultantType 
}

export const Consultant: React.FC<ConsultantProps> = ({children, consultant}) => {

    return (
        <ConsultantContext.Provider value={{consultant}}>
            { children }
        </ConsultantContext.Provider>);
}