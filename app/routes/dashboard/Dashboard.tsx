import { useState, useEffect} from "react";
import { Consultant, ConsultantDashboard } from "~/shared/components/consultant/consultant-component";
import { DataService } from "~/shared/services/dataService";

export const Dashboard = () => {
    const [consultantID, setConsultantID] = useState(0);
    const [consultant, setConsultant] = useState<any>();

    const getNextConsultant = () => {
        const data = DataService().getNextConsultant(consultantID);

        if (data) {
            setConsultantID(data.id);
            setConsultant(data);
        }
    }

    useEffect(() => {
        getNextConsultant();
    },[]);

    const handleClick = () => {
        getNextConsultant();
    };

    return (<main className="flex items-center justify-center pt-16 pb-4">
        <div className="size-40 self-start pl-5"><h2>recruit your team</h2></div>
        { consultant ?
            <div className="bg-gray-100 rounded-md p-3">
                <Consultant key={consultant.id} 
                            consultant={{id:consultant.id, 
                            name:consultant.name, 
                            role:consultant.role, 
                            skills:consultant.skills,
                            thumbnail:consultant.thumbnail,
                            location: consultant.location,
                            availability: consultant.availability}}>
                    <ConsultantDashboard/>
                </Consultant>
                <div className="grid grid-cols-2 gap-10 pt-5">
                    <div className="place-self-end bg-blue-300">
                        <button className="bg-red-500 p-2 rounded-m w-20 text-white cursor-pointer" onClick={() => handleClick()}>No</button>
                    </div>
                    <div className="place-self-start bg-blue-300">
                        <button className="bg-green-500 p-2 rounded-md w-20 text-white cursor-pointer" onClick={() => handleClick()}>Yes</button>
                    </div>
                </div>
            </div>
        : <p>No Consultant details</p>}
    </main>);
};