import View from "./View.js";


class Megjelenit {
  #list = [];
  #toroltSorok = [];

  constructor(list, szuloElem) {
    this.#list = list;
    
    
    szuloElem.append(`<table class="table table-bordered table-striped">`);
    this.tablaElem = szuloElem.children("table");
    this.tablazatbaIr();
  }
  isSorTorolve(sor) {
    return this.#toroltSorok.some((toroltSor) => toroltSor.id === sor.id);
}

tablazatbaIr() {
  let txt = "";
  this.#list.forEach((elem) => {
    const isToroltSor = this.#toroltSorok.some((toroltSor) => toroltSor.id === elem.id);

    if (!isToroltSor) {
      const megjelenitSor = new View(elem, this.tablaElem);

    }
  });
}


 
}

export default Megjelenit;