import { ConsultantContext, useConsultantContext } from "~/shared/context/ConsultantContextType";
import { getAvailabilityClass } from "~/shared/utils/helpers";

export const ConsultantRowHeaders = () => {
    return (
            <div className="bg-gray-300 p-3 rounded-md mb-1 grid grid-cols-5 gap-2">
                <div>
                    <h1>Name</h1>
                </div>
                <div>
                    <h1>Location</h1>
                </div>
                <div>
                    <h1>Role</h1>
                </div>
                <div>
                    <h1>Skills</h1>
                </div>
                <div>
                    <h1>Availability</h1>
                </div>
            </div>);
}