import { test, expect } from '@playwright/test';
import { DataService } from '~/shared/services/dataService';

test.describe('dataService ', () => {
    test('- get consultants ', () => {
        const data = DataService().getAllConsultants();
        expect(data.length).toBeGreaterThan(0);
    });

    test('- get consultants by id. Should return David\'s record', () => {
        const id = 8;
        const data = DataService().getConsultantByID(id);
        expect(data).toBeDefined();
        expect(data?.id).toBe(id);
        expect(data?.name).toBe("David");
    });

    test('- get consultants by id. Should return Lexi\'s record', () => {
        const id = 14;
        const data = DataService().getConsultantByID(id);
        expect(data).toBeDefined();
        expect(data?.id).toBe(id);
        expect(data?.name).toBe("Lexi");
    });

    test('- get consultants by id. Does not exists. Should return undefined', () => {
        const id = 999;
        const data = DataService().getConsultantByID(id);
        expect(data).not.toBeDefined();
    });

    test('- get next consultant. Should return record with ID 2', () => {
        const id = 1;
        const data = DataService().getNextConsultant(id);
        expect(data).toBeDefined();
        expect(data?.id).toBe(2);
    });

    test('- get next consultant. Should return record with ID 8', () => {
        const id = 7;
        const data = DataService().getNextConsultant(id);
        expect(data).toBeDefined();
        expect(data?.id).toBe(8);
    });

    test('- get next consultant. Record Id is 999. Should return first record with ID 1', () => {
        const id = 999;
        const data = DataService().getNextConsultant(id);
        expect(data).toBeDefined();
        expect(data?.id).toBe(1);
    });

    test('- get next consultant. Record Id is 0. Should return first record with ID 1', () => {
        const id = 0;
        const data = DataService().getNextConsultant(id);
        expect(data).toBeDefined();
        expect(data?.id).toBe(1);
    });

    test('- Search consultants. Location: Newcastle. Should only return consultants from Newcastle', () => {
        const data = DataService().searchConsultants("", "Newcastle", "", "any");
        expect(data.length).toBeGreaterThan(0);

        const everyResults = data.every((item) => item.location === "Newcastle");
        expect(everyResults).toBe(true);
    });

    test('- Search consultants. Location: Bristol. Should only return consultants from Bristol', () => {
        const data = DataService().searchConsultants("", "Bristol", "", "any");
        expect(data.length).toBeGreaterThan(0);

        const everyResults = data.every((item) => item.location === "Bristol");
        expect(everyResults).toBe(true);
    });

    test('- Search consultants. Locations: London and Edinburgh. Should only return consultants from London and Edinburgh', () => {
        const data = DataService().searchConsultants("", "London, Edinburgh", "", "any");
        expect(data.length).toBeGreaterThan(0);

        const tempList = ["London", "Edinburgh"];

        const everyResults = data.every((item) => tempList.includes(item.location));
        expect(everyResults).toBe(true);
    });

    test('- Search consultants. Locations: Perth and Edinburgh. Should only return consultants from Edinburgh.', () => {
        // NO RECORDS FROM PERTH EXISTS
        const data = DataService().searchConsultants("", "Perth, Edinburgh", "", "any");
        expect(data.length).toBeGreaterThan(0);

        const tempList = ["Perth", "Edinburgh"];

        const everyResults = data.every((item) => item.location === "Edinburgh");
        expect(everyResults).toBe(true);
    });

    test('- Search consultants. Location: Perth. Should not return any results', () => {
        const data = DataService().searchConsultants("", "Perth", "", "any");
        expect(data).toStrictEqual([]);
    });

    const searchAvailability = (val: string) => {
        const data = DataService().searchConsultants("", "", "", val.trim().toLowerCase());
        expect(data.length).toBeGreaterThan(0);

        const everyResults = data.every((item) => item.availability.toLowerCase() === val.trim().toLowerCase());
        expect(everyResults).toBe(true);
    }

    test('- Search consultants. Availability: Immediate. Should return results', () => {
        searchAvailability("Immediate");
    });

    test('- Search consultants. Availability: Pending. Should return results', () => {
        searchAvailability("pending");
    });

    test('- Search consultants. Availability: Unavailable. Should return results', () => {
        searchAvailability("Unavailable");
    });

    test('- Search consultants. Skills: AWS. Should return results', () => {
        const data = DataService().searchConsultants("", "", "AWS", "any");
        expect(data.length).toBeGreaterThan(0);

        const everyResults = data.every((item) => item.skills.includes("AWS"));
        expect(everyResults).toBe(true);
    });

    test('- Search consultants. Skills: AWS, PHP, Java. Should return results', () => {
        const data = DataService().searchConsultants("", "", "AWS, java, PHP", "any");
        expect(data.length).toBeGreaterThan(0);

        expect(data.some((item) => item.skills.includes("AWS"))).toBe(true);
        expect(data.some((item) => item.skills.includes("PHP"))).toBe(true);
        expect(data.some((item) => item.skills.includes("Java"))).toBe(true);
    });

    test('- Search skills ', () => {
        const data = DataService().searchConsultantsSkills("AWS, java");

        console.log(data.results1);
        //console.log(data.results2);
        //console.log(data.results3);
        //console.log(data.results4);
    });

});
