import Model from "../Modell/Model.js";
import Megjelenit from "../View/Megjelenitview.js";

class Controller {
    constructor(){
    const szuloElem = $(".tarolo");
    const MODEL=new Model()
    const megjelenito = new Megjelenit(MODEL.getList(), szuloElem);

    console.log(MODEL.getList())
    $(window).on("torles", (event) => {
        console.log(event.detail);
        megjelenito.storeDeletedSor(toroltSor);
        console.log(ToroltSorok)
    });
    }
}
export default Controller