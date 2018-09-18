describe("iterables", function(){

    it("can work with iterators at a low level", function(){

        let sum = 0;
        let number = [1,2,3,4];

        for(let i = 0; i<number.length;i++){
            sum+=number[i];
        }
        expect(sum).toBe(10);
    });
});