describe("default parameter", function(){
    it("provides defaults", function(){
     

        function doWork(name = "Adam"){
            return name;
        }

        expect(doWork("nadim")).toBe("nadim");
        
    });
    
});