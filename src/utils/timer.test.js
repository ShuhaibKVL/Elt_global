import { it, describe, expect } from "vitest";
import timer from "../utils/timer";
import fixedTime from "../utils/fixedtime";

describe("Timer Function", () => {

    it("returns correct time difference when classTime is greater than currentTime", () => {
    const currentTime = fixedTime
    const classTime = '05 Aug 2024 4:30 PM'

    const result = timer(classTime, currentTime);

    expect(result).toHaveProperty("days")
    expect(result).toHaveProperty("hours")
    expect(result).toHaveProperty("minutes")
    expect(result).toHaveProperty("seconds")
    });


    it("returns null when either classTime or nowTime is not a valid date", () => {
        const classTime = '05 Aug 2024 4:30 PM'
        const invalidDate = 'not-a-date'
    
        const result = timer(classTime, invalidDate);
    
        expect(result).toBe(null)
        expect(result).toBe(null)
        expect(result).toBe(null)
        expect(result).toBe(null)
        });

});

