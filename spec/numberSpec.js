describe("Numbers",function(){
    it("should parse binary values with Number function",function(){
        var binNum = Number("0b1001");
        expect(binNum).toBe(9);
    });

    it("should parse parseInt and parseFloat",function(){
        expect(Number.parseInt(3.5)).toBe(3);
        expect(Number.parseFloat(3)).toBe(3.0);
    });

    it("should not convert strings when calling Number.IsFinit vs global",function(){
        expect(Number.isFinite("1")).toBe(false);
        expect(isFinite("1")).toBe(true);
    });

    it("should not convert strings when calling Number.isNaN vs global",function(){
        expect(Number.isNaN("1")).toBe(false);
        expect(isNaN("GA")).toBe(true);
    });

    it("should correctly detect integers with isInteger",function(){
        expect(Number.isInteger(1)).toBe(true);
        expect(Number.isInteger(1.0)).toBe(true);
        expect(Number.isInteger(1.5)).toBe(false);
    });

    it("should expose max and min and power",function(){
        expect(Math.pow(2,3)).toBe(8);
        expect(Math.pow(2,53)).toBe(Math.pow(2,53)+1);
        console.log(Math.pow(2,53)+1);
    });

});