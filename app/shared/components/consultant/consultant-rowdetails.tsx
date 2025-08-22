import { ConsultantContext, useConsultantContext } from "~/shared/context/ConsultantContextType";

export const ConsultantRowDetails = () => {
    const { consultant } = useConsultantContext();
    const thumbnail = "/app/assets/images/" + consultant.thumbnail

    return (<ConsultantContext.Provider value={{consultant}}>
                <div>
                    <img src={thumbnail}
                    alt={consultant.name}
                    title={consultant.name} 
                    width="150px"/>
                </div>
                <div>
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
                
            </ConsultantContext.Provider>);
}