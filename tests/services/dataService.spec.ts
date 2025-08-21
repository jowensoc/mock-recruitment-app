import { test, expect } from '@playwright/test';
import { DataService } from '~/shared/services/dataService';

test.describe('dataService ', () => {
    test('- get consultants ', () => {
        const data = DataService().getAllConsultants();
        expect(data.length).toBeGreaterThan(0);
    });

    test('- get Rizzo the Rat ', () => {
        const id = 8;
        const data = DataService().getConsultantByID(id);
        expect(data).toBeDefined();
        expect(data?.id).toBe(id);
        expect(data?.name).toBe("Rizzo the Rat");
    });

    test('- get Scooter ', () => {
        const id = 14;
        const data = DataService().getConsultantByID(id);
        expect(data).toBeDefined();
        expect(data?.id).toBe(id);
        expect(data?.name).toBe("Scooter");
    });

    test('- get non-existent record ', () => {
        const id = 999;
        const data = DataService().getConsultantByID(id);
        expect(data).not.toBeDefined();
    });

    test.describe('- get next consultant', () => {
        test('- Beginning of collection. Should return next record ', () => {
            const id = 1;
            const data = DataService().getNextConsultant(id);
            expect(data).toBeDefined();
            expect(data?.id).toBe(2);
        });

        test('- Middle of collection. Should return next record', () => {
            const id = 7;
            const data = DataService().getNextConsultant(id);
            expect(data).toBeDefined();
            expect(data?.id).toBe(8);
        });

        test('- End of Collection. Should return the first record', () => {
            const id = 999;
            const data = DataService().getNextConsultant(id);
            expect(data).toBeDefined();
            expect(data?.id).toBe(1);
        });

        test('- No ID. Should return the first record', () => {
            const id = 0;
            const data = DataService().getNextConsultant(id);
            expect(data).toBeDefined();
            expect(data?.id).toBe(1);
        });
    });
});
