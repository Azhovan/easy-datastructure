class scanner {

    constructor(str) {
        this.input = str;
        this.hashList = [];
    }

    findNonerepeated() {
        for (let i in this.input) {
            let hashcode = this.input.charCodeAt(i);

            if (this.hashList.hasOwnProperty(hashcode)) {
                let value = this.hashList[hashcode];
                this.hashList[hashcode] = (value+=1);
            } else {
                this.hashList[hashcode] = 1;
            }
        }

        for (let i in this.input) {
            let hashcode = this.input.charCodeAt(i);
            if(this.hashList[hashcode] === 1 ){
                return this.input[i];
            }
        }

        return 'there is no unique character atr all';
    }

    gethashList() {
        return this.hashList;
    }

    printOccurrence()
    {
        for(let i in this.input) {
            let hashCode = this.input.charCodeAt(i);
            console.log(this.input[i], this.hashList[hashCode]);
        }
    }
}

const sc = new scanner('this is really great');
console.log(sc.findNonerepeated());
console.log(sc.printOccurrence());
