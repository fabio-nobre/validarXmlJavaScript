class VOSolicitacaoCompraItem extends VOEntidade {

    constructor() {

        super();
        this._sqItemSolicitacaoCompra
        CdMaterialServicoItem
        CdUnidadeFornecimento
         
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