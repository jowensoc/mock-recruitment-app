import {useContext, createContext} from "react";
import { type ConsultantType } from "~/shared/types/ConsultantType";

export type ConsultantContextType = {
    consultant: ConsultantType;
}

export const ConsultantContext = createContext<ConsultantContextType | undefined>(undefined);
export function useConsultantContext() {
    const context = useContext(ConsultantContext);
    if(!context) {
        throw new Error("useConsultantContext must be used within a ConsultantContext");
    }
    return context;
}