class TratamentoDados extends UtilXMLParadigma{
    constructor() {

       super();
        this._msg;
        this._severidade;
        this._tag;
        this._objeto;
        this._dadoImpeditivo;
        this._dadoInformativo;
        this._listaDados = [];
    }

    // Monta uma lista e devolve o objeto referente a sua severidade
    montarObjetoESeveridade() {   
        
        // Adciona na lista (listaDados) as informações do dado não recuperado do xml
        this.addInformacoes({ msg: this._msg, severidade: this._severidade, tag: this._tag, obj: this._objeto});
        
        // Define os Filtros de Severidade das informações
        const informativo   = dadoInf => dadoInf.severidade == 2
        const impeditivo    = dadoImp => dadoImp.severidade == 1
                
        // Monta objeto conforme filtro de severidade e converte a lista (listaDados) para o objeto{} equivalente
        this.dadoImpeditivo     = Object.assign({}, this._listaDados.filter(impeditivo));
        this.dadoInformativo    = Object.assign({}, this._listaDados.filter(informativo));

        return this.dadoImpeditivo[0] !== undefined ? this.dadoImpeditivo[0] : this.dadoInformativo[0];        
    }

        
    // Adcionar objeto na lista de dados que não foram preenchidos
    addInformacoes(...dados) {
        dados.forEach(l => this._listaDados.push(l))
    }

    // GETS e SETS
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

    get dadoImpeditivo() {
        return this._dadoImpeditivo;
    }
    set dadoImpeditivo(dadoImpeditivo) {
            this._dadoImpeditivo = dadoImpeditivo;
    }

    get dadoInformativo() {
        return this._dadoInformativo;
    }
    set dadoInformativo(dadoInformativo) {
            this._dadoInformativo =  dadoInformativo;
    }  

}