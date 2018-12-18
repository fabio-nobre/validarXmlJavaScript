class PProcessoLoteDTO extends UtilXMLParadigma {
    constructor(lsPProcessoLoteDTO) {

        super();
        this._dVlLance;
        this._nCdLote;
        this._nCdLoteSequencial;
        this._nStLote;
        this._sCdFornecedor;
        this._sDsLote;
        this._tDtEncerramento;
        this._tDtFinalizado;

        this.carregarPProcessoLote(lsPProcessoLoteDTO);
    }

    carregarPProcessoLote(lsPProcessoLoteDTO) {

        let lote = lsPProcessoLoteDTO;

        this.dVlLance          = this.retornarValor(lote, "a:dVlLance", true);
        this.nCdLote           = this.retornarValor(lote, "a:nCdLote", true);
        this.nCdLoteSequencial = this.retornarValor(lote, "a:nCdLoteSequencial", true); 
        this.nStLote           = this.retornarValor(lote, "a:nStLote", true);
        this.sCdFornecedor     = this.retornarValor(lote, "a:sCdFornecedor", true);
        this.sDsLote           = this.retornarValor(lote, "a:sDsLote", true);
        this.tDtEncerramento   = this.retornarValor(lote, "a:tDtEncerramento", true);
        this.tDtFinalizado     = this.retornarValor(lote, "a:tDtFinalizado", true);

    }

    get dVlLance() {
        return this._dVlLance;
    }
    set dVlLance(dVlLance) {
        if (dVlLance != null) {
            this._dVlLance = dVlLance;
        } else {
            this._msnValidacao += this.montarMensagem('Valor do lance', 'lsPProcessoLoteDTO', 'dVlLance', null);
        }
    }

    get nCdLote() {
        return this._nCdLote;
    }
    set nCdLote(nCdLote) {
        if (nCdLote != null) {
            this._nCdLote = nCdLote;
        } else {
            this._msnValidacao += this.montarMensagem('Código do lote', 'lsPProcessoLoteDTO', 'nCdLote', null);
        }
    }

    get nCdLoteSequencial() {
        return this._nCdLoteSequencial;
    }
    set nCdLoteSequencial(nCdLoteSequencial) {
        if (nCdLoteSequencial != null) {
            this._nCdLoteSequencial = nCdLoteSequencial;
        } else {
            this._msnValidacao += this.montarMensagem('Sequencial do lote', 'lsPProcessoLoteDTO', 'nCdLoteSequencial', null);
        }
    }

    get nStLote() {
        return this._nStLote;
    }
    set nStLote(nStLote) {
        if (nStLote != null) {
            this._nStLote = nStLote;
        } else {
            this._msnValidacao += this.montarMensagem('ST do lote', 'lsPProcessoLoteDTO', 'nStLote', null);
        }
    }

    get sCdFornecedor() {
        return this._sCdFornecedor;
    }
    set sCdFornecedor(sCdFornecedor) {
        if (sCdFornecedor != null) {
            this._sCdFornecedor = sCdFornecedor;
        } else {
            this._msnValidacao += this.montarMensagem('Código do Fornecedor', 'lsPProcessoLoteDTO', 'sCdFornecedor', null);
        }
    }

    get sDsLote() {
        return this._sDsLote;
    }
    set sDsLote(sDsLote) {
        if (sDsLote != null) {
            this._sDsLote = sDsLote;
        } else {
            this._msnValidacao += this.montarMensagem('Descrição do Lote', 'lsPProcessoLoteDTO', 'sCdFornecedor', null);
        }
    }

    get tDtEncerramento() {
        return this._tDtEncerramento;
    }
    set tDtEncerramento(tDtEncerramento) {
        if (tDtEncerramento != null) {
            this._tDtEncerramento = tDtEncerramento;
        } else {
            this._msnValidacao += this.montarMensagem('Data de encerramento', 'lsPProcessoLoteDTO', 'tDtEncerramento', null);
        }
    }

    get tDtFinalizado() {
        return this._tDtFinalizado;
    }
    set tDtFinalizado(tDtFinalizado) {
        if (tDtFinalizado != null) {
            this._tDtFinalizado = tDtFinalizado;
        } else {
            this._msnValidacao += this.montarMensagem('Data Finalizado', 'lsPProcessoLoteDTO', 'tDtFinalizado', null);
        }
    }
}