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
});
