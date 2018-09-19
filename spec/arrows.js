describe("Arrrow functions", function(){

    it("provide a compact syntax to define a function", function(){
       
        let add = (a,b)=>{
            return a+b;
        }
        let square = x => x*x;
        let three = () =>  3;

        expect(add(2,3)).toEqual(5);
        expect(square(2)).toEqual(4);
        expect(three()).toEqual(3);
    });

    it("can be used with array methods", function(){
       
       let sum = 0;
       let number = [1,2,3,4];
            
       number.forEach(n=>sum+=n)
       
        expect(sum).toEqual(10);

        var doubled = number.map(n=>n*2);
        expect(doubled).toEqual([2,4,6,8]);
    });

    
    it("lexically binds to this", function(done){
       
       this.name = "Sonia";

       setTimeout(()=>{
           expect(this.name).toBe("Sonia");
           done(); 
       },10);
     });


});