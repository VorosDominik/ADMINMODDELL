import { Lista } from "../../adatok.js";
class Model {
    #list = []
    constructor(list){
        this.#list = Lista
        ;

    }
    ujAdat(obj){
        this.#list.push(obj)
    }
    getList(){
        return this.#list
    }
}
export default Model