import { useState, useEffect} from "react";
import { Consultant } from "~/shared/components/consultant/consultant";
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
        <div>Dashboard</div>
        { consultant ?
            <div>
                <Consultant consultant={{id:consultant.id, 
                                        name:consultant.name, 
                                        role:consultant.role, 
                                        skills:consultant.skills}}>
                </Consultant>
                <div><button onClick={() => handleClick()}>Next</button></div>
            </div>
        : <p>No Consultant details</p>}
    </main>);
};