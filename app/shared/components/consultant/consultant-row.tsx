import { ConsultantContext, useConsultantContext } from "~/shared/context/ConsultantContextType";
import { getAvailabilityClass } from "~/shared/utils/helpers";

export const ConsultantRow = () => {
    const { consultant } = useConsultantContext();
    const thumbnail = "/app/assets/images/" + consultant.thumbnail

    return (<ConsultantContext.Provider value={{consultant}}>
            <div className="bg-gray-200 p-3 rounded-md mb-1 grid grid-cols-5 gap-2">
                <div>
                    <p>{consultant.name}</p>
                </div>
                <div>
                    <p>{ consultant.location}</p>
                </div>
                <div>
                    <p>{consultant.role}</p>
                </div>
                <div>
                    <p>{ consultant?.skills?.join(", ") }</p>
                </div>
                <div>
                    <p><span className={getAvailabilityClass(consultant?.availability)}>{ consultant?.availability }</span></p>
                </div>
            </div>
            </ConsultantContext.Provider>);
}