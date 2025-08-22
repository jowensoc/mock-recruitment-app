import { ConsultantContext, useConsultantContext } from "~/shared/context/ConsultantContextType";

export const ConsultantDashboard = () => {
    const { consultant } = useConsultantContext();
    const thumbnail = "/app/assets/images/" + consultant.thumbnail

    return (<ConsultantContext.Provider value={{consultant}}>
                <div>
                    <img src={thumbnail}
                    alt={consultant.name}
                    title={consultant.name} 
                    width="50%"/>
                </div>
                <div>
                    <h2>{consultant.name}</h2>
                    <p>Location: { consultant.location}</p>
                </div>
                <div>
                    <h3>{consultant.role}</h3>
                </div>
                <div>
                    <p>Skills: { consultant?.skills?.join(", ") }</p>
                </div>
                <div>
                    <p>Availablity: { consultant?.availability }</p>
                </div>
            </ConsultantContext.Provider>);
}