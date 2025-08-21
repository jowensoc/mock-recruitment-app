export const DataService = () => {
    const getAllConsultants = () => {
        return data;
    }

    const getConsultantByID = (id: number) => {
        const results = data.find((item) => item.id == id);

        return results;
    }

    return {
        getAllConsultants,
        getConsultantByID
    }
}

const data = [
    {
        "id": 1,
        "name": "Kermit",
        "role": "Senior Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "kermit.png"
    },
    {
        "id": 2,
        "name": "Miss Piggy",
        "role": "Senior Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "miss-piggy.png"
    },
    {
        "id": 3,
        "name": "Gonzo",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "gonzo.png"
    },
    {
        "id": 4,
        "name": "Elmo",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "elmo.png"
    },
    {
        "id": 5,
        "name": "Animal",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "animal.png"
    },
    {
        "id": 6,
        "name": "Fozzie Bear",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "fozzie-bear.png"
    },
    {
        "id": 7,
        "name": "Rowlf the Dog",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "rowlf-the-dog.png"
    },
    {
        "id": 8,
        "name": "Rizzo the Rat",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "rizzo-the-rat.png"
    },
    {
        "id": 9,
        "name": "Dr. Bunsen",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "dr-bunsen.png"
    },
    {
        "id": 10,
        "name": "Beaker",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "beaker.png"
    },
    {
        "id": 11,
        "name": "The Swedish Chef",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "the-swedish-chef.png"
    },
    {
        "id": 12,
        "name": "Statler",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "statler.png"
    },
    {
        "id": 13,
        "name": "Waldorf",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "waldorf.png"
    },
    {
        "id": 14,
        "name": "Scooter",
        "role": "Consultant",
        "skills": [
            "Java",
            "React",
            "AWS"
        ],
        "thumbnail": "scooter.png"
    }
];