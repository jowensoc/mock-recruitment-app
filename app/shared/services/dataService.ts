export const DataService = () => {
    const getAllConsultants = () => {
        return data;
    }

    const getConsultantByID = (id: number) => {
        const results = data.find((item) => item.id == id);

        return results;
    }

    const getNextConsultant = (id: number) => {
        id += 1;
        const results = data.find((item) => item.id == id);

        // return first record
        if (!results) {
            return data[0];
        }

        return results;
    }

    const hasSkills = (array1:string[], array2:string[]) => {
        return array2.every((item) => array1.includes(item))
    }

    const searchConsultants = (name?: string, location?: string, skills?: string, availability?: string) => {
        let searchResults = data;

        const locationList = (location) ? location.toLowerCase().split(", ") : [];
        const skillsList = (skills) ? skills.toLowerCase().split(", ") : [];

        if (locationList.length > 0) {
            searchResults = searchResults.filter((item) => locationList.includes(item.location.toLowerCase()));
        }

        // if (skillsList.length > 0) {
        //     searchResults = searchResults.filter((item) => item.skills));
        // }

        if (availability && availability.trim().toLowerCase() !== "any") {
            searchResults = searchResults.filter((item) => 
                item.availability.trim().toLowerCase() === availability.trim().toLowerCase());
        }
        
        return searchResults;
    }

    return {
        getAllConsultants,
        getConsultantByID,
        getNextConsultant,
        searchConsultants
    }
}

const data = [
    {
        "id": 1,
        "name": "Sarah",
        "role": "Senior Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "001.png",
        "location": "Newcastle",
        "availability": "Immediate"
    },
    {
        "id": 2,
        "name": "Brian",
        "role": "Senior Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "002.png",
        "location": "Newcastle",
        "availability": "Pending"
    },
    {
        "id": 3,
        "name": "Jane",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "003.png",
        "location": "Bristol",
        "availability": "Unavailable"
    },
    {
        "id": 4,
        "name": "Samantha",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "004.png",
        "location": "Glasgow",
        "availability": "Immediate"
    },
    {
        "id": 5,
        "name": "Gary",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "005.png",
        "location": "Edinburgh",
        "availability": "Immediate"
    },
    {
        "id": 6,
        "name": "Kirsty",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "006.png",
        "location": "Newcastle",
        "availability": "Pending"
    },
    {
        "id": 7,
        "name": "Abigail",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "007.png",
        "location": "London",
        "availability": "Immediate"
    },
    {
        "id": 8,
        "name": "David",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "008.png",
        "location": "Birmingham",
        "availability": "Unavailable"
    },
    {
        "id": 9,
        "name": "Kevin",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "009.png",
        "location": "London",
        "availability": "Immediate"
    },
    {
        "id": 10,
        "name": "Chris",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "010.png",
        "location": "Newcastle",
        "availability": "Immediate"
    },
    {
        "id": 11,
        "name": "Dani",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "011.png",
        "location": "Newcastle",
        "availability": "Immediate"
    },
    {
        "id": 12,
        "name": "Jacqui",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "012.png",
        "location": "Newcastle",
        "availability": "Immediate"
    },
    {
        "id": 13,
        "name": "Amira",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "013.png",
        "location": "London",
        "availability": "Immediate"
    },
    {
        "id": 14,
        "name": "Lexi",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "014.png",
        "location": "Newcastle",
        "availability": "Immediate"
    }
];