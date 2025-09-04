import { ConsultantContext, useConsultantContext } from "~/shared/context/ConsultantContextType";
import { getAvailabilityClass } from "~/shared/utils/helpers";

export const ConsultantRowDetails = () => {
    const { consultant } = useConsultantContext();
    const thumbnail = "./assets/images/" + consultant.thumbnail;

    return (<ConsultantContext.Provider value={{consultant}}>
            <div className="bg-gray-200 p-3 rounded-md mb-4 grid grid-cols-5 gap-4">
                <div>
                    <img src={thumbnail}
                    alt={consultant.name}
                    title={consultant.name} 
                    className="h-28 object-contain border-3 border-blue-600 rounded-md m-auto"
                    />
                </div>
                <div className="col-span-3">
                    <div>
                        <h2>{consultant.name}</h2>
                        <p>Location: { consultant.location}</p>
                    </div>
                    <div>
                        <p>Role: {consultant.role}</p>
                    </div>
                    <div>
                        <p>Skills: { consultant?.skills?.join(", ") }</p>
                    </div>
                    <div>
                        <p>Availablity: <span className={getAvailabilityClass(consultant?.availability)}>{ consultant?.availability }</span></p>
                    </div>
                    <div>
                        <p> Experience: Vivamus at accumsan ligula. 
                            Donec tempus sagittis risus quis elementum. 
                            Praesent facilisis elementum ipsum a accumsan. 
                            Etiam mi justo, iaculis tempus eros lobortis, tempus varius ante. 
                            Phasellus risus lorem, tincidunt non justo eu, ultricies accumsan est. 
                            Pellentesque vehicula a lorem vel varius. Curabitur non dolor condimentum, 
                            accumsan odio ac, rutrum tortor.</p>
                    </div>
                </div>
            </div>
            </ConsultantContext.Provider>);
}