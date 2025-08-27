import { test, expect } from '@playwright/test';
import { compareArrays } from '~/shared/utils/helpers';

test.describe('compareArrays ', () => {
    const searchArray = ["aws", "Javascript", "git"];
    const skillsArray = ["Play framework", "React", "GIT", "AWS", "Java"];

    test('- Find matching skills. should return matching records', () => {
        const results = compareArrays(searchArray, skillsArray);
        expect(results).toContain("GIT");
        expect(results).toContain("AWS");
    });

    test('- Try to find non-existent skills. should return empty array', () => {
        const tempArray = ["alpha", "bravo", "charlie"];
        const results = compareArrays(tempArray, skillsArray);

        expect(results).toStrictEqual([]);
    });

    test('- Both arrays are null. should return -1', () => {
        const results = compareArrays(undefined, undefined);
        expect(results).toStrictEqual([]);
    });

    test('- Search array is null. should return -1', () => {
        const results = compareArrays(undefined, skillsArray);
        expect(results).toStrictEqual([]);
    });

    test('- Skills array is null. should return -1', () => {
        const results = compareArrays(searchArray, undefined);
        expect(results).toStrictEqual([]);
    });

});
