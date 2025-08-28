import { useState, useEffect} from "react";
import { Consultant, ConsultantPortrait, ConsultantRow, ConsultantRowDetails, ConsultantRowHeaders } from "~/shared/components/consultant/consultant-component";
import { DataService } from "~/shared/services/dataService";

export const Gallery = () => {
    const [searchResults, setSearchResults] = useState<any[]>();
    const [displayResults, setDisplayResults] = useState("portrait");
    const [rowHeaderStyles, setRowHeadersStyles] = useState("grid grid-cols-5 gap-5");
    const [searchLocation, setSearchLocation] = useState("");
    const [searchSkills, setSearchSkills] = useState("");
    const [searchAvailabilty, setSearchAvailabilty] = useState("Any");

    const searchConsultants = () => {
        const data = DataService().searchConsultants("", searchLocation, searchSkills, searchAvailabilty);

        if (data) {
            setSearchResults(data);
        }
    }

    const renderSearchResults = (displayResults: string) => {
        setDisplayResults(displayResults);

        let tempStyles = "";

        switch (displayResults) {
            case "portrait":
                tempStyles = "grid grid-cols-5 gap-5";
                break;
            case "row-details":
                tempStyles = "grid grid-cols-5";
                break;
            case "row":
                tempStyles = "";
                break;
            default:
                tempStyles = "";
                break;
        }

        setRowHeadersStyles(tempStyles);

    }

    const handleSearchLocation = (e: any) => {
        setSearchLocation(e.target.value);
    }

    const handleSearchSkills = (e: any) => {
        setSearchSkills(e.target.value);
    }

    const handleSearchAvailability = (e: any) => {
        setSearchAvailabilty(e.target.value);
    }

    const handleReset = (e: any) => {
        setSearchLocation("");
        setSearchSkills("");
        setSearchAvailabilty("Any");

        searchConsultants();
    }

    useEffect(() => {
        searchConsultants();
    }, []);


    return (<main className="grid grid-row p-7">
                <div className="mb-2">
                    <h2>Consultants</h2>
                </div>
                <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-2" role="alert">
                    <p className="font-bold">Important Information</p>
                    <p>Please note that those people who appear in those search results are not real. 
                        Pictures of indivduals were taken from Unsplash, a royalty free picture website. 
                    </p>
                    <p>Names and locations were randomly assigned to those profiles. 
                        Those personal details are fake, and does not represent the person shown in the search results.
                    </p>
                </div>
                <div className="bg-gray-100 grid grid-cols-4 rounded-md p-2">
                    <div>Location <input type="text" 
                                            className="border-1 bg-white" 
                                            aria-label="location" 
                                            value={searchLocation}
                                            onChange={handleSearchLocation}
                                            /></div>
                    <div>Skills <input type="text" 
                                        className="border-1 bg-white"  
                                        aria-label="skills"
                                        value={searchSkills}
                                        onChange={handleSearchSkills}
                                        /></div>
                    <div>Availability <select  className="border-1 bg-white"
                                                aria-label="availability" 
                                                role="combobox"
                                                value={searchAvailabilty}
                                                onChange={handleSearchAvailability}
                                                >
                            <option>Any</option>
                            <option>Immediate</option>
                            <option>Pending</option>
                            <option>Unavailable</option>
                        </select>
                    </div>
                    <div>
                        <button 
                            className="bg-gray-500 p-2 rounded-m w-20 text-white cursor-pointer mr-4"
                            onClick={() => searchConsultants()}
                            >Search</button>
                        <button 
                            className="bg-gray-500 p-2 rounded-m w-20 text-white cursor-pointer"
                            onClick={handleReset}
                        >Reset</button>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-md p-2">
                    <p>Display Results: 
                    <button className="display-results-button" 
                            onClick={() => renderSearchResults("portrait")}>Portrait</button> 
                    <button className="display-results-button"
                            onClick={() => renderSearchResults("row")}>Row</button>
                    <button className="display-results-button" 
                            onClick={() => renderSearchResults("details")}>Details</button>
                    
                    </p>
                </div>
                { (searchResults && searchResults.length > 0) ? 
                    <div className={rowHeaderStyles}>
                        { (displayResults === "row") ? 
                            <ConsultantRowHeaders/>
                            : <></>}
                        {searchResults.map((consultant) => 
                            <Consultant key={consultant.id} 
                                consultant={{id:consultant.id, 
                                name:consultant.name, 
                                role:consultant.role, 
                                skills:consultant.skills,
                                thumbnail:consultant.thumbnail,
                                location: consultant.location,
                                availability: consultant.availability}}>

                                { (displayResults === "portrait") ? 
                                    <div><ConsultantPortrait/></div>
                                : <></>}

                                { (displayResults === "details") ? 
                                    <ConsultantRowDetails/>
                                : <></>}

                                { (displayResults === "row") ? 
                                    <ConsultantRow/>
                                : <></>}
                            </Consultant>)}
                    </div>
                    : 
                    <p>No records found</p>}
            </main>);
}