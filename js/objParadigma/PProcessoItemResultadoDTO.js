class PProcessoItemResultadoDTO extends UtilXMLParadigma {

    constructor(lstPProcessoItemResultadoDTO) {

        super();

        this._vlorItem;
        this._nCdMarca;
        this._sCdFornecedor;
        this._sDsMarca;
        this._sDsModelo;
        this._tDtResultado;

        this.carregarProcessoItemResultadoDTO(lstPProcessoItemResultadoDTO);

    }

    carregarProcessoItemResultadoDTO(lstPProcessoItemResultadoDTO) {


        this.vlorItem = this.retornarValor(lstPProcessoItemResultadoDTO, "a:dVlResultado", true);
        this.nCdMarca = this.retornarValor(lstPProcessoItemResultadoDTO, "a:nCdMarca", true);
        this.sCdFornecedor = this.retornarValor(lstPProcessoItemResultadoDTO, "a:sCdFornecedor", true);
        this.sDsMarca = this.retornarValor(lstPProcessoItemResultadoDTO, "a:sDsMarca", true);
        this.sDsModelo = this.retornarValor(lstPProcessoItemResultadoDTO, "a:sDsModelo", true);
        this.tDtResultado = this.retornarValor(lstPProcessoItemResultadoDTO, "a:tDtResultado", true);

    }

    get tDtResultado() {
        return this._tDtResultado;
    }
    set tDtResultado(tDtResultado) {
        if (tDtResultado != null) {
            this._tDtResultado = tDtResultado;
        } else {
            this._msnValidacao += this.montarMensagem('Data do resultado do item', 'lstPProcessoItemResultadoDTO', 'tDtResultado', null);
        }
    }

    get sDsModelo() {
        return this._sDsModelo;
    }
    set sDsModelo(sDsModelo) {
        if (sDsModelo != null) {
            this._sDsModelo = sDsModelo;
        } else {
            this._msnValidacao += this.montarMensagem('Descrição do modelo do Item', 'lstPProcessoItemResultadoDTO', 'sDsModelo', null);
        }
    }

    get sDsMarca() {
        return this._sDsMarca;
    }
    set sDsMarca(sDsMarca) {
        if (sDsMarca != null) {
            this._sDsMarca = sDsMarca;
        } else {
            this._msnValidacao += this.montarMensagem('Descrição da marca do Item', 'lstPProcessoItemResultadoDTO', 'sDsMarca', null);
        }
    }

    get sCdFornecedor() {
        return this._sCdFornecedor;
    }
    set sCdFornecedor(sCdFornecedor) {
        if (sCdFornecedor != null) {
            this._sCdFornecedor = sCdFornecedor;
        } else {
            this._msnValidacao += this.montarMensagem('Código do Fornecedor do Item', 'lstPProcessoItemResultadoDTO', 'sCdFornecedor', null);
        }
    }

    get nCdMarca() {
        return this._nCdMarca;
    }
    set nCdMarca(nCdMarca) {
        if (nCdMarca != null) {
            this._nCdMarca = nCdMarca;
        } else {
            this._msnValidacao += this.montarMensagem('Código da Marca do Item', 'lstPProcessoItemResultadoDTO', 'nCdMarca', null);
        }
    }

    get vlorItem() {
        return this._vlorItem;
    }
    set vlorItem(vlorItem) {
        if (vlorItem != null) {
            this._vlorItem = vlorItem;
        } else {
            this._msnValidacao += this.montarMensagem('Valor do Item vencedor', 'lstPProcessoItemResultadoDTO', 'dVlResultado', null);
        }
    }

}