class List {
    length = 0;
    data = {};
    constructor(args) {
        if(args.length > 0) {
            for (let i = 0; i < arguments.length; i++) {
                this.data[i] = arguments[i];
                this.length++;
              }
        }
    }
}


const list = new List(4,5,6,9);
console.log(list);