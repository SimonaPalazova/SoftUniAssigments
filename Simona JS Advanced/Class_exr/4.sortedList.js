class List {
    constructor(){
        this.arr = [];
        this.size = this.arr.length;
    }
    add(element) {
        
        this.arr.push(element)
        this.arr.sort((a, b) => Number(a) - Number(b));
        this.size = this.arr.length
    }
    remove(index) {
      
        if (index >= 0 && index < this.size) {
            this.arr.splice(Number(index), 1);
            this.arr.sort((a, b) => Number(a) - Number(b));
            this.size = this.arr.length
        }else{
            throw new Error('Invalid index!')
        }
        
    }
    get(index) {
        
        if (index >= 0 && index < this.size) {
            return this.arr[Number(index)]
        }else{
            throw new Error('Invalid index!')
        }
    
    }
    size(){
        return this.arr.length
    }

}



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1); console.log(list.get(1));