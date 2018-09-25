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

    it("can build an iterables..", function(){
        class Company{
            constructor(){
                this.employees = [];
            }

            addEmployees(...names){
                this.employees = this.employees.concat(names);

            }

            *[Symbol.iterator](){
                for(let e of this.employees){
                    console.log(e);
                    yield e;
                }
            }
        }


        let count = 0;
        let company = new Company();
        company.addEmployees("Sumon", "Sohan", "Zakir");

       for(let employee of company){
           count+=1;
       }

        expect(count).toBe(3);
    });

    it("can take a parameter from next (param)", function(){
       
       let range = function*(start, end){
           let current = start;
           while(current<=end){
               let delta = yield current;
              
               current +=delta || 1; 
           }
       }


        let result = [];
        let iterator = range(1,10);
        let next = iterator.next();

        while(!next.done){
            result.push(next.value);
            next = iterator.next(2);
        }

        expect(result).toEqual([1,3,5,7,9]);
    });



});

