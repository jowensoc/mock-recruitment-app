import { Consultant } from "~/shared/components/consultant/consultant";

export const Dashboard = () => {

    return (<main className="flex items-center justify-center pt-16 pb-4">
        <div>Dashboard</div>
        <Consultant consultant={{id:1, name:"Fred Smith", role:"Consultant", skills:["react"]}}></Consultant>
    </main>);
};