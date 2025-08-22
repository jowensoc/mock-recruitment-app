export const getAvailabilityClass = (val?:string) => {
    if (!val) {
        return "";
    }

    let results = ""
    switch (val.trim().toLowerCase()) {
        case "immediate":
            results = "availability-immediate";
            break;
        case "pending":
            results = "availability-pending";
            break;
        case "unavailable":
            results = "availability-unavailable";
            break;
        default:
            results = "";
            break;
    }

    return results;
};