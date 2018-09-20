describe("iterables", function(){

    it("can work with iterators at a low level", function(){

        let sum = 0;
        let numbers = [1,2,3,4];

        //for
        for(let i = 0; i<numbers.length;i++){
            sum+=numbers[i];
        }
        expect(sum).toBe(10);

        //for in
        sum = 0;
        for(let i in numbers){
            sum+=numbers[i];
        }
        expect(sum).toEqual(10);

        Iterator
        sum = 0;
        let iterator = numbers.values();
        let next = iterator.next();

        while(!next.done){
            sum += next.value;
            next = iterator.next();
        }
        expect(sum).toBe(10);

       
    });
});