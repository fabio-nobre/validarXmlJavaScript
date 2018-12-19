class TratamentoDados extends UtilXMLParadigma {
    constructor(pDados) {

        super();
        this._msg;
        this._severidade;
        this._tag;
        this._objeto;
        this._lsImpeditiva = [];
        this._lsInformativa = [];
        
        //this.carregar();
        //this.carregarTratamentoDados(pDados);
    }

    carregarTratamentoDados(pDados) {   
        
        
        for (var campo in pDados) {
            if(campo == "severidade" && pDados[campo] == 1){
                
                this.lsImpeditiva = campo + ' = ' + pDados[campo];
            } else {
                this.lsInformativa = campo + ' = ' + pDados[campo];
            }

               
        }

        console.log(this.lsImpeditiva); 
        console.log(this.lsInformativa); 
    }

    carregar() {   
        
            if(this.severidade == 1){
                this.lsImpeditiva = this.msg;
                this.lsImpeditiva = this.severidade;
                this.lsImpeditiva = this.tag;
                this.lsImpeditiva = this.objeto;
            } else {
                this.lsInformativa = this.msg;
                this.lsInformativa = this.severidade;
                this.lsInformativa = this.tag;
                this.lsInformativa = this.objeto;
            }


        console.log(this.lsImpeditiva); 
        console.log(this.lsInformativa); 
    }

    get msg() {
        return this._msg;
    }
    set msg(msg) {
            this._msg = msg;
    }

    get severidade() {
        return this._severidade;
    }
    set severidade(severidade) {
        this._severidade = severidade;        
    }

    get tag() {
        return this._tag;
    }
    set tag(tag) {
            this._tag = tag;
    }

    get objeto() {
        return this._objeto;
    }
    set objeto(objeto) {
            this._objeto = objeto;
    }

    get lsImpeditiv() {
        return this._lsImpeditiva;
    }
    set lsImpeditiv(lsImpeditiv) {
            this._lsImpeditiva.push(lsImpeditiv);
    }

    get lsInformativa() {
        return this._lsInformativa;
    }
    set lsInformativa(lsInformativa) {
            this._lsInformativa.push(lsInformativa);
    }

/*     get carregar() {
        return this._carregar;
    }
    set carregar(carregar) {
        this._carregar = _carregar;
    } */
    

}