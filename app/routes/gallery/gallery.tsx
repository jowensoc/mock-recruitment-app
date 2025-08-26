import { useState, useEffect} from "react";
import { Consultant, ConsultantPortrait, ConsultantRowDetails } from "~/shared/components/consultant/consultant-component";
import { DataService } from "~/shared/services/dataService";

export const Gallery = () => {
    const [searchResults, setSearchResults] = useState<any[]>();

    const searchConsultants = () => {
        const data = DataService().getAllConsultants();

        if (data) {
            setSearchResults(data);
        }
    }

    useEffect(() => {
        searchConsultants();
    }, []);


    return (<main className="grid grid-row p-7">
                <div>
                    <h2>Consultants</h2>
                </div>
                <div className="bg-gray-100 grid grid-cols-4 rounded-md p-1">
                    <div>Location <input type="text" className="border-1 bg-white"/></div>
                    <div>Skills <input type="text" className="border-1 bg-white"/></div>
                    <div>Availability <select  className="border-1 bg-white">
                            <option>Any</option>
                            <option>Available</option>
                            <option>Pending</option>
                            <option>Unavailable</option>
                        </select>
                    </div>
                    <div>
                        <button className="bg-gray-500 p-2 rounded-m w-20 text-white cursor-pointer">Search</button>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-md p-1">
                    <p>Display Results: 
                    <button className="display-results-button">Portrait</button> 
                    <button className="display-results-button">Details</button>
                    <button className="display-results-button">Row</button>
                    </p>
                </div>
                { (searchResults) ? 
                    <div>
                        {searchResults.map((consultant) => 
                            <Consultant key={consultant.id} 
                                consultant={{id:consultant.id, 
                                name:consultant.name, 
                                role:consultant.role, 
                                skills:consultant.skills,
                                thumbnail:consultant.thumbnail,
                                location: consultant.location,
                                availability: consultant.availability}}>
                                    <ConsultantRowDetails/>
                            </Consultant>)}
                    </div>
                    : 
                    <p>No search results available</p>}
            </main>);
}