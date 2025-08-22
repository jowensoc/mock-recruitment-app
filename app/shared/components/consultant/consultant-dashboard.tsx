import { ConsultantContext, useConsultantContext } from "~/shared/context/ConsultantContextType";
import { getAvailabilityClass } from "~/shared/utils/helpers";

export const ConsultantDashboard = () => {
    const { consultant } = useConsultantContext();
    const thumbnail = "/app/assets/images/" + consultant.thumbnail

    return (<ConsultantContext.Provider value={{consultant}}>
                <div>
                    <img src={thumbnail}
                    alt={consultant.name}
                    title={consultant.name} 
                    className="h-48 w-96 object-contain"/>
                </div>
                <div className="text-center">
                    <h2>{consultant.name}</h2>
                    <p>Location: { consultant.location}</p>
                </div>
                <div className="text-center">
                    <h3>{consultant.role}</h3>
                </div>
                <div className="text-center">
                    <p>Skills: { consultant?.skills?.join(", ") }</p>
                </div>
                <div className="text-center">
                    <p>Availablity: <span className={getAvailabilityClass(consultant?.availability)}>{ consultant?.availability }</span></p>
                </div>
            </ConsultantContext.Provider>);
}