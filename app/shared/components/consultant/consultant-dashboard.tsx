import { ConsultantContext, useConsultantContext } from "~/shared/context/ConsultantContextType";

export const ConsultantDashboard = () => {
    const { consultant } = useConsultantContext();

    return (<ConsultantContext.Provider value={{consultant}}>
                <div>
                    <img src="/app/assets/images/generic-user.png" 
                    alt={consultant.name}
                    title={consultant.name} 
                    width="50%"/>
                </div>
                <div>
                    <h2>{consultant.name}</h2>
                </div>
                <div>
                    <h3>{consultant.role}</h3>
                </div>
                <div>
                    Skills: { consultant?.skills?.join(", ") }
                </div>
            </ConsultantContext.Provider>);
}