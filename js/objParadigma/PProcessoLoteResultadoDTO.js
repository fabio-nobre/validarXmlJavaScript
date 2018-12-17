class PProcessoLoteResultadoDTO extends UtilXMLParadigma {

    constructor(PProcessoLoteResultadoDTO) {
        super();
        this._tDtResultado;
        this._dVlResultado;
        this._sCdFornecedor;
        this.carregarResultadoLote(PProcessoLoteResultadoDTO);
    }

    carregarResultadoLote(PProcessoLoteResultadoDTO) {

        this.dVlResultado = this.retornarValor(PProcessoLoteResultadoDTO, "a:dVlResultado", true);
        this.sCdFornecedor = this.retornarValor(PProcessoLoteResultadoDTO, "a:sCdFornecedor", true);
        this.tDtResultado = this.retornarValor(PProcessoLoteResultadoDTO, "a:tDtResultado", true);
    }

    get tDtResultado() {
        return this._tDtResultado;
    }
    set tDtResultado(tDtResultado) {
        if (tDtResultado != null) {
            this._tDtResultado = tDtResultado;
        } else {
            this._msnValidacao += this.montarMensagem('Lista com os itens do Lote', 'PProcessoLoteResultadoDTO', 'tDtResultado', null);
        }
    }

    get sCdFornecedor() {
        return this._sCdFornecedor;
    }
    set sCdFornecedor(sCdFornecedor) {
        if (sCdFornecedor != null) {
            this._sCdFornecedor = sCdFornecedor;
        } else {
            this._msnValidacao += this.montarMensagem('Lista com os itens do Lote', 'PProcessoLoteResultadoDTO', 'sCdFornecedor', null);
        }
    }

    get dVlResultado() {
        return this._dVlResultado;
    }
    set dVlResultado(dVlResultado) {
        if (dVlResultado != null) {
            this._dVlResultado = dVlResultado;
        } else {
            this._msnValidacao += this.montarMensagem('Lista com os itens do Lote', 'PProcessoLoteResultadoDTO', 'dVlResultado', null);
        }
    }

}