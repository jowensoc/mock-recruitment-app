import { ConsultantContext, useConsultantContext } from "~/shared/context/ConsultantContextType";
import { getAvailabilityClass } from "~/shared/utils/helpers";

export const ConsultantPortrait = () => {
    const { consultant } = useConsultantContext();
    const thumbnail = "/mock-recruitment-app/assets/images/" + consultant.thumbnail;

    return (<ConsultantContext.Provider value={{consultant}}>
                <div className="">
                    <img src={thumbnail}
                    alt={consultant.name}
                    title={consultant.name} 
                    className="h-46 object-center border-5 border-blue-400 rounded-full m-auto"/>
                </div>
                <div className="text-center">
                    <h2>{consultant.name}</h2>
                    <p>Location: { consultant.location}</p>
                </div>
                <div className="text-center">
                    <p>Role: {consultant.role}</p>
                </div>
                <div className="text-center">
                    <p>Skills: { consultant?.skills?.join(", ") }</p>
                </div>
                <div className="text-center">
                    <p>Availablity: <span className={getAvailabilityClass(consultant?.availability)}>{ consultant?.availability }</span></p>
                </div>
            </ConsultantContext.Provider>);
}