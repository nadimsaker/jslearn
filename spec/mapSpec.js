describe("Maps",function(){
    it("should contains zero items when constructed",function(){
        var map = new Map();
        expect(map.size).toBe(0);
    });
    it("should contains `1` items when added",function(){
        var map = new Map();
        map.set("age", 25);
        expect(map.size).toBe(1);
    });

    it("should contains items when get is called",function(){
        var map = new Map();
        map.set("age", 25);
        expect(map.size).toBe(1);
        expect(map.get("age")).toBe(25);
    });

    it("should allow object to be the key",function(){
        var map = new Map();
        var obj = {"age": "ag"}
        map.set("ag",25);
        expect(map.size).toBe(1);
        expect(map.get("ag")).toBe(25);
    });
    
    it("should contain an items when given an array",function(){
        
        var array = [['name','Roman'],["age",25],["roll",330]];
        var map = new Map(array);

        
        expect(map.size).toBe(3);
        expect(map.has("age")).toBe(true);
        expect(map.get("age")).toBe(25);
    });

    it("should should not allow duplicate key",function(){
        
        
        var map = new Map();
        var key = {};
        
        map.set(key,"first");
        map.set(key,"second");

        expect(map.size).toBe(1);
        expect(map.get(key)).toBe("second");
    });


    it("should should not allow duplicate key",function(){
        var map = new Map();
        map.set(1,"first");
        map.set(2,"second");
        expect(map.size).toBe(2);
        map.clear();
        expect(map.size).toBe(0);
     });

     
    it("should should clear all item",function(){
        var map = new Map();
        map.set(1,"first");
        map.set(2,"second");
        expect(map.size).toBe(2);
        map.clear();
        expect(map.size).toBe(0);
    });

    it("should remove item when delete is called",function(){
        var map = new Map();
        map.set(1,"first");
        map.set(2,"second");
        expect(map.size).toBe(2);
        map.delete(1);
        expect(map.size).toBe(1);
        expect(map.get(1)).not.toBe('first');
        expect(map.get(2)).toBe('second');
        expect(map.has(2)).toBe(true);

    });

    it("should support foreach function callback",function(){
        var array = [['name','Roman'],["age",25],["roll",330]];
        var map = new Map(array);
        expect(map.size).toBe(3);
        var count=0;
        map.forEach(function(key,value){
            count++;
        });
        expect(count).toBe(3);
    });

    it("should support for of iteration",function(){
        var array = [['name','Roman'],["age",25],["roll",330]];
        var map = new Map(array);
        expect(map.size).toBe(3);
        var count=0;
        for(var [key,value] of map){
            console.log(value);
            count++;
        }
        expect(count).toBe(3);
    });

    it("should return an iteration of kay values pair",function(){
        var array = [['name','Roman'],["age",25],["roll",330]];
        var map = new Map(array);
        expect(map.size).toBe(3);
        var count=0;
        for(var [key,value] of map){
            console.log(value);
            count++;
        }
        expect(count).toBe(3);

        var entries = map.entries();
        var first = entries.next().value;
        expect(first[0]).toBe('name');
        expect(first[1]).toBe('Roman');
    });

    it("should return an iteration of keys when key os called",function(){
        var array = [['name','Roman'],["age",25],["roll",330]];
        var map = new Map(array);
        expect(map.size).toBe(3);
        

       var map2 = new Map(map.entries());

       expect(map2.size).toBe(3);
        
    });


});