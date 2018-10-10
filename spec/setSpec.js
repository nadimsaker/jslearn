describe("Set",function(){
    it("should contains zero items when constructed",function(){
        var set = new Set();
        expect(set.size).toBe(0);
    });
    it("should contains 1 items when constructed",function(){
        var set = new Set();
        set.add("Joe");
        expect(set.size).toBe(1);
    });

    it("should contains keys",function(){
        var set = new Set();
        var keys = {};
        set.add(keys);
        expect(set.has(keys)).toBe(true);
    });

    it("should contains array",function(){
        var set = new Set([1,2,3]);
        expect(set.has(3)).toBe(true);
    });

    it("should not contains duplicate keys",function(){
        var set = new Set();
        var keys = {};
        set.add(keys);
        set.add(keys);
        expect(set.size).toBe(1);
    });

    it("should not have no item after clear is called",function(){
        var set = new Set();
        var keys = {};
        set.add(1);
        set.add(2);
        expect(set.size).toBe(2);
        set.clear();
        expect(set.size).toBe(0);
    });

    it("should delete 1 item when delete is called",function(){
        var set = new Set();
        var keys = {};
        set.add(1);
        set.add(2);
        expect(set.size).toBe(2);
        set.delete(1);
        expect(set.size).toBe(1);
        set.delete(2);
        expect(set.size).toBe(0);
    });

    it("should call a callback function once for each item",function(){
        var set = new Set();
        var keys = {};
        set.add("a");
        set.add("b");
        set.add("c");

        expect(set.size).toBe(3);

        let itemcount = 0;
        set.forEach(item=>{
            console.log(item);
            itemcount++;
        })

        expect(itemcount).toBe(3);
    });

    it("should call a callback function once for each item",function(){
        var set = new Set();
        var keys = {};
        set.add("a");
        set.add("b");
        set.add("c");

        expect(set.size).toBe(3);

        let itemcount = 0;
        set.forEach(item=>{
            console.log(item);
            itemcount++;
        })

        expect(itemcount).toBe(3);
    });

    it("should support for of iteration",function(){
        let  set = new Set([1,2,3]);
        expect(set.size).toBe(3);

        let itemcount = 0;
       for(var item of set){
           console.log(item);
           itemcount++;
       }
        expect(itemcount).toBe(3);
    });

    it("should return an iterator arrays when entries is called",function(){
        let  set = new Set([1,2,3]);
        var ent = set.entries();
        var frnt = ent.next().value;
        expect(frnt[0]).toBe(1);
        expect(frnt[1]).toBe(1);


    });

    it("should return an iterator arrays when entries is called",function(){
        let  set = new Set([1,2,3]);
        var v = set.values();
        var firstValue = v.next().value;
        expect(firstValue).toBe(1);
    });

    it("should be able to be constructed with an iterator",function(){
        let set1 = new Set();
        set1.add(1);
        set1.add(2);
        set1.add(3);

        let set2 = new Set();
        set2 = set1;
        expect(set2.size).toBe(3);
    });

});
