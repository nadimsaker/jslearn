describe("Rest parameter", function(){
    it("is like a varages", function(){
     

        function doWork(name,...numbers){
            let r = 0;
            numbers.forEach(function(n){
                r += n;
            });
            return r;
        }

        expect(doWork("nadim",1,2,3,4)).toBe(10);
        
    });
    
});