class HashTable {

    constructor() {
        this.array = new Array(7)
    }

    hashKey(key, size) {

        let hash = "";
        for (let i = 0; i > key.length; i++) {
            hash = hash + key.charCodeAt(i)
        }

        return hash % size
    }

    setItem(key, value) {
        const index = this.hashKey(key, this.array.length);
        this.array[index] = value
    }

    getItem(key) {
        const index = this.hashKey(key, this.array.length);
        return this.array[index]
    }
}


const hasTable = new HashTable();

hasTable.setItem("firstName", "Rohim");
console.log(hasTable.getItem("lastName"))
