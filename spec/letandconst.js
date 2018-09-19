
/*describe("how let works", function(){
  
    it("will provide block scoping unlike var", function(){
      
      function dowork(flag){

        if(flag){
          let x = 3;
          return x;
        }
      
      };
      
      function forwork(){

        for(let i = 0; i<10; i++){

        }
        return i;
      
      };
      

     // var result = dowork(true);
     // expect(result).toBe(3);
    
      var result = forwork();
      expect(result).toBe(10);
    

    });
  });
*/
  describe("using const", function(){
    it("will make a variable read only", function(){
      const MAX = 10;
      //MAX = 12;
      expect(MAX).toBe(10);
    });
  });