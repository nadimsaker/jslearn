describe("template literals", function(){
    it("can easily combine literals and data.", function(){
        function doWork(name){
            return `Helllo ${name}`;
        }
        expect(doWork("Adam")).toBe("Helllo Adam");
    });

    it("can easily url.", function(){
        function doWork(url){
            return `http://www.google.com/${url}/`;
        }
        expect(doWork("Adam")).toBe("http://www.google.com/Adam/");
    });
    

});