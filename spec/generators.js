describe("generators", function(){
    it("can build an iterable", function(){
        // let numbers = function*(){
        //     yield 1;
        //     yield 2;
        //     yield 3;
        //     yield 4;
        // };

          let numbers = function*(start, end){
            for(let i = start; i<=end; i++){
                console.log(i);
                yield i;
            }

        };


        let sum = 0;
        let iterator = numbers(1,4);
        let next = iterator.next();

        while(!next.done){
            sum+=next.value;
            console.log("next");
            next = iterator.next();
        }

        expect(sum).toBe(10);
    });
});

