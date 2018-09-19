describe("Class", function(){

    it("can create a class", function(){
       
        class Employee{

            doWork() {
                return "Complete!";
            };

            getName(){
                return "Adam";
            }
        };

        let e = new Employee();

        expect(e.doWork()).toBe("Complete!");
        expect(e.getName()).toBe("Adam");

    });

    it("can create a class", function(){
       
        class Employee{

            constructor(name){
                this._name=name;
            }

            doWork() {
                return "Complete!";
            };

            getName(){
                return this._name;
            }
        };

        let e1 = new Employee("Adam");
        let e2 = new Employee("Sonia");

        expect(e1.getName()).toBe("Adam");
        expect(e2.getName()).toBe("Sonia");
    });

    it("can have getters and setters", function(){
       
        class Employee{

            constructor(name){
                this._name=name;
            }

            doWork() {
                return "Complete!";
            };

            get name(){
                return this._name.toUpperCase();
            }

            set name(newValue){
                this._name = newValue;
            }
        };

        let e1 = new Employee("Adam");
        let e2 = new Employee("Sonia");

        e1.name = "Limon";
        expect(e1.name).toBe("LIMON");
        expect(e2.name).toBe("SONIA");
    });

    it("can have a super class", function(){
       
        class Person{

            constructor(name){
                this._name=name;
            }

          
            get name(){
                return this._name.toUpperCase();
            }

            set name(newValue){
                 if(newValue){
                    this._name = newValue;
                 }
            }
        };

        class Employee extends Person{
            doWork() {
                return `${this._name} is working`;
            };

        }

        let p1 = new Person("Niaz");
        let e1 = new Employee("Adam");
       

        expect(p1.name).toBe("NIAZ");
        
        expect(e1.name).toBe("ADAM");
        expect(e1.doWork()).toBe("Adam is working");
    });


    it("can invoke a super method", function(){
       
        class Person{

            constructor(name){
                this._name=name;
            }

          
            get name(){
                return this._name;
            }

            set name(newValue){
                 if(newValue){
                    this._name = newValue;
                 }
            }
        };

        class Employee extends Person{
            constructor(title, name){
                super(name);
                this._title = title;
              
            }

            get title(){
                return this._title;
            }

            doWork() {
                return `${this._name} is working`;
            };

        }

        let e1 = new Employee("Tester", "Sonia");
        expect(e1.name).toBe("Sonia");
        expect(e1.title).toBe("Tester");
    });

    it("can override method", function(){
       
        class Person {

            constructor(name){
                this._name=name;
            }
          
            get name(){
                return this._name;
            }

            set name(newValue){
                 if(newValue){
                    this._name = newValue;
                 }
            }
            
            doWork() {
                return "free";
            };

            toString(){
                return this._name;
            }
        };

        class Employee extends Person{

            constructor(title, name){
                super(name);
                this._title = title;
            }
            
            get title(){
                return this._title;
            }

            doWork() {
                return "paid";
            };

        }

        let e1 = new Employee("Tester", "Sonia");
        let p1 = new Person("Sumon");

        //expect(p1.doWork()).toBe("free");
        //expect(e1.doWork()).toBe("paid");

        expect(e1.toString()).toBe("Sonia");
        expect(p1.toString()).toBe("Sumon");

        let everyonework = function(...people){
            var result = [];
            for(var i = 0; i<people.length; i++){
                if(people[i].doWork){
                    result.push(people[i].doWork());
                }
            }
            return result;
        }

        expect(everyonework(e1,p1,{})).toEqual(["paid", "free"]);
    });

});