import { useState, useEffect} from "react";
import { Consultant, ConsultantDashboard, ConsultantRowDetails } from "~/shared/components/consultant/consultant-component";
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


    return (<main className="flex items-center justify-center pb-4">
                <div>Search</div>
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
                    "<p>No search results available</p>"}
            </main>);
}