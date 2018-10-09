describe("Arrays",function(){
    it("should return the first matching element using find",function(){
        var ary = [1,5,10,11];
  
        var match = ary.find(item => item>8);
        expect(match).toBe(10);
    });
    it("should return the first matching index using findindex",function(){
        var ary = [1,5,10,11];
  
        var match = ary.findIndex(item => item==10);
        expect(match).toBe(2);
    });


    it("should fill the entire array when fill is called",function(){
        var ary = [1,5,10,11];  
        ary.fill(15);
        expect(ary[2]).toBe(15);
    });

    it("should fill the entire array when fill is called with args",function(){
        var ary = [1,5,10,11];  
        ary.fill(15);
        expect(ary[2]).toBe(15);
    });

    it("should fill the entire array when fill is called with args",function(){
        var ary = [1,5,10,11];  
        ary.fill(100,1,3);
        expect(ary[0]).toBe(1);
        expect(ary[1]).toBe(100);
        expect(ary[2]).toBe(100);
        expect(ary[3]).toBe(11);
    });

    it("should fill the entire array when fill is called with args",function(){
        var ary = [10,20,30,40,50];  
        ary.copyWithin(1);
        //expect(ary[0]).toBe(30);  


    });

    it("should create a new array",function(){
        var aryof = Array.of(5,6);
        var ary = new Array(5)
        
        
        expect(aryof.length).toBe(2);  
        expect(ary.length).toBe(5);  

    });

    it("keys ",function(){
        var ary = ["sohan", "shakil","Sumon"];
        var i = ary.keys();
        
        var nxt = i.next().value;
        expect(nxt).toBe(0);  

        nxt = i.next().value;
        expect(nxt).toBe(1);  
        
        nxt = i.next().value;
        expect(nxt).toBe(2);  
        
    });

    it("entries ",function(){
        var ary = ["sohan", "shakil","Sumon"];
        var e = ary.entries();
        var v = e.next().value;
        //expect(v).toBe(0);
        expect(v[0]).toBe(0);
        expect(v[1]).toBe("sohan");
        v = e.next().value;
        expect(v[0]).toBe(1);
        expect(v[1]).toBe("shakil");
        v = e.next().value;
        expect(v[0]).toBe(2);
        expect(v[1]).toBe("Sumon");

    });



});
