class VOLicitacaoItem {

    constructor() {
        this._SqLicitacaoItem;
        /* this._CdMaterialServicoItem
        CdUnidadeFornecimento
        QtLicitadaLicitacaoItem
        VlMaximoLicitLicitacaoItem
        QtConcorrentesLicitacaoItem
        CdSolicitacaoCompra */
    }

    get colecaoSolicitacaoCompraItem(){
        return this._colecaoSolicitacaoCompraItem;
    }
    set colecaoSolicitacaoCompraItem(colecaoItens){
        if (colecaoItens != null) {
            this._colecaoItens = colecaoItens;
        } else {
            this.mensagem += this.montarMensagem('VOSolicitacaoCompra a coleção de itens não foi informada');
        }
    }
}