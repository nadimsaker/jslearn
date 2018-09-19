describe("spread parameter", function(){
    it("can spread an array across parameters.", function(){
    
        function doWork(a,b,c,d){
            return a+b+c+d;
        }
        expect(doWork(...[1,2,3,4])).toBe(10);
    });
    
    it("can build arrays", function(){
    
        var a = [1,2,3];
        var c = [10,11];
        var b = [...a,4,5,6,7,8,9,...c];
       
        expect(b).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
    });
});