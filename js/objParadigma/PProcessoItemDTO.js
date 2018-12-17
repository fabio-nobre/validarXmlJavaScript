class PProcessoItemDTO extends UtilXMLParadigma {

    constructor(pProcessoItem) {

        super();

        this._dtHomologacaoRatificacao;
        this._dtAdjudicacao;
        this._cdLicitacaoLote;
        this._cdMaterialServicoItem;
        this._sqItemSolicitacaoCompra;
        this._dsItem;
        this._cdUnidadeFornecimento;
        this._dVlReferencia;
        this._dQtItemItemSa;
        this._lstItemResultadoDTO = [];
        this._lstItemEnderecoEValorReferencia = [];
        this.carregarDadosItem(pProcessoItem);

    }

    carregarDadosItem(pProcessoItem) {

        let item = pProcessoItem;

        this.dtHomologacaoRatificacao = this.retornarValor(item, "a:tDtFinalizacao", true);
        this.dtAdjudicacao = this.retornarValor(item, "a:tDtAdjudicacao", true);
        this.cdLicitacaoLote = this.retornarValor(item, "a:nCdLoteSequencial", true);
        this.cdMaterialServicoItem = this.retornarValor(item, "a:sCdProduto", true);
        this.sqItemSolicitacaoCompra = this.retornarValor(item, "a:nCdItemSequencial", true);
        this.dsItem = this.retornarValor(item, "a:sDsItem", true);
        this.cdUnidadeFornecimento = this.retornarValor(item, "a:sCdUnidadeMedida", true);
        this.dVlReferencia = this.retornarValor(item, "a:dVlReferencia", true);
        this.dQtItemItemSa = this.retornarValor(item, "a:dQtItem", true);
        this.lstItemEnderecoEValorReferencia = this.enderecoItensSAVencedorValorReferencia(item);
        this.carregarLstProcessoItemResultadoDTO(pProcessoItem);


    }

    carregarLstProcessoItemResultadoDTO(pProcessoItem) {

        const lstPProcessoItemResultado = pProcessoItem.getElementsByTagName("a:lstPProcessoItemResultado");
        const lstPProcessoItemResultadoDTO = lstPProcessoItemResultado[0].getElementsByTagName("a:PProcessoItemResultadoDTO");
        let x = 0;
        for (let index = 0; index < lstPProcessoItemResultadoDTO.length; index++) {

            let itemVencedor = this.retornarValor(lstPProcessoItemResultadoDTO[index], "a:bFlVencedor", true);
            if (itemVencedor == 1) {
                const resultado = new PProcessoItemResultadoDTO(lstPProcessoItemResultadoDTO[index]);
                this._lstItemResultadoDTO[x] = resultado;
                x++;
            }
        }
    }

    enderecoItensSAVencedorValorReferencia(pProcessoItem) {

        var lstEnderecoItemVencedor = {};
        var lstPProcessoItemEndereco = pProcessoItem.getElementsByTagName("a:lstPProcessoItemEndereco");

        for (let index = 0; index < lstPProcessoItemEndereco.length; index++) {

            let lsPProcessoItemEnderecoDTO = lstPProcessoItemEndereco[index].getElementsByTagName("a:PProcessoItemEnderecoDTO");


            lstEnderecoItemVencedor.dQtItem = this.retornarValor(lsPProcessoItemEnderecoDTO[0], "a:dQtItem", true);

            for (let i = 0; i < lsPProcessoItemEnderecoDTO.length; i++) {

                let lstPProcessoItemEnderecoRequisicao = lsPProcessoItemEnderecoDTO[i].getElementsByTagName("a:lstPProcessoItemEnderecoRequisicao");

                for (let x = 0; x < lstPProcessoItemEnderecoRequisicao.length; x++) {

                    let lsRequisicaoDTO = lstPProcessoItemEnderecoRequisicao[x].getElementsByTagName("a:PProcessoItemEnderecoRequisicaoDTO");

                    let dVlReferencia = this.retornarValor(lsRequisicaoDTO[x], "a:dVlReferencia", true);
                    let sCdComprador = this.retornarValor(lsRequisicaoDTO[x], "a:sCdComprador", true);
                    let sCdItemRequisicaoEmpresa = this.retornarValor(lsRequisicaoDTO[x], "a:sCdItemRequisicaoEmpresa", true);
                    let sCdRequisicaoEmpresa = this.retornarValor(lsRequisicaoDTO[x], "a:sCdRequisicaoEmpresa", true);
                    lstEnderecoItemVencedor.dVlReferencia = dVlReferencia
                    lstEnderecoItemVencedor.endereco = sCdComprador + "_" + sCdItemRequisicaoEmpresa + "_" + sCdRequisicaoEmpresa;
                }
            }

        }

        return lstEnderecoItemVencedor;

    }
    //// retornarValor(item,"a:tDtFinalizacao",true);
    get dtHomologacaoRatificacao() {
        return this._dtHomologacaoRatificacao;
    }
    set dtHomologacaoRatificacao(dtHomologacaoRatificacao) {
        if (dtHomologacaoRatificacao != null) {
            this._dtHomologacaoRatificacao = dtHomologacaoRatificacao;
        } else {
            this._msnValidacao += this.montarMensagem('Data de Homologação do Item', 'lsPProcessoItemDTO', 'tDtFinalizacao', null);
        }
    }

    // retornarValor(item,"a:tDtAdjudicacao",true);
    get dtAdjudicacao() {
        return this._dtAdjudicacao;
    }
    set dtAdjudicacao(dtAdjudicacao) {
        if (dtAdjudicacao != null) {
            this._dtAdjudicacao = dtAdjudicacao;
        } else {
            this._msnValidacao += this.montarMensagem('Data de Adjudicação do Item', 'lsPProcessoItemDTO', 'tDtAdjudicacao', null);
        }
    }

    // retornarValor(item,"a:nCdLoteSequencial",true);
    get cdLicitacaoLote() {
        return this._cdLicitacaoLote;
    }
    set cdLicitacaoLote(cdLicitacaoLote) {
        if (cdLicitacaoLote != null) {
            this._cdLicitacaoLote = cdLicitacaoLote;
        } else {
            this._msnValidacao += this.montarMensagem('Código do Lote', 'lsPProcessoItemDTO', 'nCdLoteSequencial', null);
        }
    }

    // retornarValor(item,"a:sCdProduto",true);
    get cdMaterialServicoItem() {
        return this._cdMaterialServicoItem;
    }
    set cdMaterialServicoItem(cdMaterialServicoItem) {
        if (cdMaterialServicoItem != null) {
            this._cdMaterialServicoItem = cdMaterialServicoItem;
        } else {
            this._msnValidacao += this.montarMensagem('Código do Item', 'lsPProcessoItemDTO', 'sCdProduto', null);
        }
    }

    // retornarValor(item,"a:nCdItemSequencial",true);
    get sqItemSolicitacaoCompra() {
        return this._sqItemSolicitacaoCompra;
    }
    set sqItemSolicitacaoCompra(sqItemSolicitacaoCompra) {
        if (sqItemSolicitacaoCompra != null) {
            this._sqItemSolicitacaoCompra = sqItemSolicitacaoCompra;
        } else {
            this._msnValidacao += this.montarMensagem('Código sequencial do item', 'lsPProcessoItemDTO', 'nCdItemSequencial', null);
        }
    }

    // retornarValor(item,"a:sDsItem",true);
    get dsItem() {
        return this._dsItem;
    }
    set dsItem(dsItem) {
        if (dsItem != null) {
            this._dsItem = dsItem;
        } else {
            //this._msnValidacao += this.montarMensagem('Código sequencial do item','lsPProcessoItemDTO','nCdItemSequencial',null);
        }
    }

    // retornarValor(item,"a:sCdUnidadeMedida",true);
    get cdUnidadeFornecimento() {
        return this._cdUnidadeFornecimento;
    }
    set cdUnidadeFornecimento(cdUnidadeFornecimento) {
        if (cdUnidadeFornecimento != null) {
            this._cdUnidadeFornecimento = cdUnidadeFornecimento;
        } else {
            this._msnValidacao += this.montarMensagem('Unidade Fornecimento do item', 'lsPProcessoItemDTO', 'sCdUnidadeMedida', null);
        }
    }

    //  retornarValor(item,"a:dVlReferencia",true);
    get dVlReferencia() {
        return this._dVlReferencia;
    }
    set dVlReferencia(dVlReferencia) {
        if (dVlReferencia != null) {
            this._dVlReferencia = dVlReferencia;
        } else {
            this._msnValidacao += this.montarMensagem('Valor de referencia do item', 'lsPProcessoItemDTO', 'dVlReferencia', null);
        }
    }

    // retornarValor(item,"a:dQtItem",true);
    get dQtItemItemSa() {
        return this._dQtItemItemSa;
    }
    set dQtItemItemSa(dQtItemItemSa) {
        if (dQtItemItemSa != null) {
            this._dQtItemItemSa = dQtItemItemSa;
        } else {
            this._msnValidacao += this.montarMensagem('Quantidade do item', 'lsPProcessoItemDTO', 'dQtItem', null);
        }
    }

    //resultadoVencedor
    get resultadoVencedor() {
        return this._resultadoVencedor;
    }
    set resultadoVencedor(resultadoVencedor) {
        if (resultadoVencedor != null) {
            this._resultadoVencedor = resultadoVencedor;
        } else {
            this._msnValidacao += this.montarMensagem('Resultado dos itens vencedor', 'lstPProcessoItemResultadoDTO', 'bFlVencedor', null);
        }
    }

    //lstItemEnderecoEValorReferencia
    get lstItemEnderecoEValorReferencia() {
        return this._lstItemEnderecoEValorReferencia;
    }
    set lstItemEnderecoEValorReferencia(lstItemEnderecoEValorReferencia) {
        if (lstItemEnderecoEValorReferencia != null) {
            this._lstItemEnderecoEValorReferencia = lstItemEnderecoEValorReferencia;
        } else {
            this._msnValidacao += this.montarMensagem('Lista Endereço dos itens vencediso e valor de referência',
                'lstPProcessoItemEnderecoRequisicao', 'sCdComprador , sCdItemRequisicaoEmpresa , sCdRequisicaoEmpresa', null);
        }
    }
}