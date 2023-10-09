
class View {
    #adat = {};
    #toroltSorok = [];
    #szerkesztesMode = false;
    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.tablaElem = szuloElem;
        this.#sor();
        this.sorElem = this.tablaElem.children("tr:last-child");

        this.torolElem = this.sorElem.children("td").children(".torol");
        this.szerkesztElem = this.sorElem.children("td").children(".szerkeszt");

        this.szerkesztElem.on("click", () => {
            this.#szerkesztesMode = !this.#szerkesztesMode;

            if (this.#szerkesztesMode) {
                this.szerkesztElem.text("Mentés");
                this.#szerkesztesMegjelenit();
            } else {
                this.szerkesztElem.text("🛠");
                this.#mentes();
                this.#szerkesztesBezar();
            }
        });

        this.torolElem.on("click", () => {
            this.sorElem.remove();
            this.storeDeletedSor(this.sorElem);
            console.log(this.#toroltSorok);
        });
    }
    #mentes() {
        const modnev = this.sorElem.find(".szerkesztes-fajta").val();
        const modkeps = this.sorElem.find(".szerkesztes-kor").val();

        this.#adat.nev = modnev;
        this.#adat.kepeseg = modkeps;
    }
    #szerkesztesMegjelenit() {
        this.sorElem.find("td:nth-child(1)").html(`<input type="text" class="szerkesztes-fajta" value="${this.#adat.nev}">`);
        this.sorElem.find("td:nth-child(2)").html(`<input type="text" class="szerkesztes-kor" value="${this.#adat.kepeseg}">`);
    }
    #szerkesztesBezar() {
        const modnev = this.sorElem.find(".szerkesztes-fajta").val();
        const modkeps = this.sorElem.find(".szerkesztes-kor").val();

        this.#adat.nev = modnev;
        this.#adat.kepeseg = modkeps;
        this.sorElem.find("td:nth-child(1)").html(this.#adat.nev);
        this.sorElem.find("td:nth-child(2)").html(this.#adat.kepeseg);
    }

    storeDeletedSor(sor) {
        const toroltSor = {
            tevekenyseg: sor.find("td:nth-child(1)").text(),
            hatarido: sor.find("td:nth-child(2)").text(),
        };
        this.#toroltSorok.push(toroltSor);
        console.log(this.#toroltSorok);
    }

    #sor() {
        let txt = "<tr>";

        txt += `<td>${this.#adat.nev}</td>`;
        txt += `<td>${this.#adat.kepeseg}</td>`;

        txt += '<td><button class="szerkeszt">🛠</button><button class="torol">❌</button></td>';

        txt += "</tr>";
        this.tablaElem.append(txt);
    }

    #esemenyTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {
            detail: this.#adat,
        });
        window.dispatchEvent(esemeny);
    }
}

export default View;