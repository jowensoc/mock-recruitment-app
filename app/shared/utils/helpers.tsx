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

export const compareArrays = (searchArray?:string[], currentArray?: string[]) => {
    if (!searchArray || !currentArray) {
        return [];
    }

    //const results = currentArray.filter(item => { searchArray.includes(item.trim().toLowerCase()) });
    //const results = currentArray.filter((item) => item.trim().toLowerCase() === "aws");
    const results = currentArray.filter((item) => searchArray.includes(item.trim().toLowerCase()));

    console.log("searchArray: " + searchArray);
    console.log("currentArray: " + currentArray);
    console.log("results: " + results);

    return results;
};