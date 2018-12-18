class PProcessoOrdemCompraDTO extends UtilXMLParadigma {
    constructor(pProcessoOrdemCompraDTO, cdUGResponsavelLicitacao) {

        super();
        this._cdSolicitacaoCompraPeIntegrado;
        //this._cdUGResponsavelLicitacao;
        this._cdUnidadeGestoraGestao;
        this._cdUnidadeGestora;
        this._dsResumidaSolicitacaoCompra;
        this._nuAnoSolicitacaoCompra;
        this._lstOtdItensSA = [];
        this._dQtItem;
        
        this.carregarDadosBasicosSA(pProcessoOrdemCompraDTO, cdUGResponsavelLicitacao);

        this.toString();

    }

    toString(){
        let sa =   ' SolicitacaoCompra: '        + this._cdSolicitacaoCompraPeIntegrado  + ' UG ResponsavelLicitacao: ' + this._cdUGResponsavelLicitacao +
                   ' UG Solicitante: '           + this._cdUnidadeGestora                + ' Gestão UG Solicitante: '   + this._cdUnidadeGestoraGestao   +
                   ' Ano SolicitacaoCompra: '    + this._nuAnoSolicitacaoCompra          + ' Descrição Solicitação: '   + this._dsResumidaSolicitacaoCompra ;

        /*let saItem;
        this._lstOtdItensSA.forEach(function(ItemSA){
                    saItem += ItemSA + '<br>';
        });
        
        console.log(sa + '<br>' + saItem);
        return sa + '<br>' + saItem;*/
        return sa + this._lstOtdItensSA;
    }
    
    // Recuperando as informações basicas Ordem de Compra - PProcessoOrdemCompraDTO
    carregarDadosBasicosSA(pProcessoOrdemCompraDTO, cdUGResponsavelLicitacao) {
    
        this.cdSolicitacaoCompraPeIntegrado = this.retornarValor(pProcessoOrdemCompraDTO, "sCdOrdemCompraEmpresa", true);
        //this.cdUGResponsavelLicitacao       = cdUGResponsavelLicitacao;
        this.cdUnidadeGestoraGestao         = this.retornarValor(pProcessoOrdemCompraDTO, "sCdGestao", true);
        this.cdUnidadeGestora               = this.retornarValor(pProcessoOrdemCompraDTO, "sCdComprador", true);
        this.dsResumidaSolicitacaoCompra    = this.retornarValor(pProcessoOrdemCompraDTO, "sDsOrdemCompra", true);
        this.nuAnoSolicitacaoCompra         = this.retornarValor(pProcessoOrdemCompraDTO, "tDtEmissao", true);
        
        this.retornarOTDItensSA(pProcessoOrdemCompraDTO);

    }
    
    // retorna o endereço dos itens na sa
    retornarOTDItensSA(pProcessoOrdemCompraDTO) {
    
        let lstPProcessoOrdemCompraRequisicao   = pProcessoOrdemCompraDTO.getElementsByTagName("lstPProcessoOrdemCompraRequisicao");
       
        for (let index = 0; index < lstPProcessoOrdemCompraRequisicao.length; index++) {
    
            var lsRequisicaoDTO                 = lstPProcessoOrdemCompraRequisicao[index].getElementsByTagName("PProcessoOrdemCompraRequisicaoDTO");
    
            let dQtItem                     = this.retornarValor(lsRequisicaoDTO[index], "dQtItem", true);
            let dVlReferencia               = this.retornarValor(lsRequisicaoDTO[index], "dVlReferencia", true);
            let sCdItemRequisicaoEmpresa    = this.retornarValor(lsRequisicaoDTO[index], "sCdItemRequisicaoEmpresa", true);
            let sCdProduto                  = this.retornarValor(lsRequisicaoDTO[index], "sCdProduto", true);
            let sCdRequisicaoEmpresa        = this.retornarValor(lsRequisicaoDTO[index], "sCdRequisicaoEmpresa", true);
            let sCdUnidadeMedida            = this.retornarValor(lsRequisicaoDTO[index], "sCdUnidadeMedida", true);

            this._lstOtdItensSA[index] =  'dQtItem: '+ dQtItem +' dVlReferencia: '+dVlReferencia+' sCdItemRequisicaoEmpresa: '+sCdItemRequisicaoEmpresa
                                          +' sCdProduto: '+sCdProduto+' sCdRequisicaoEmpresa: '+sCdRequisicaoEmpresa+' sCdUnidadeMedida: '+sCdUnidadeMedida;
        }
    }

    get cdSolicitacaoCompraPeIntegrado() {
        return this._cdSolicitacaoCompraPeIntegrado;
    }
    set cdSolicitacaoCompraPeIntegrado(cdSolicitacaoCompraPeIntegrado) {
        if (cdSolicitacaoCompraPeIntegrado != null) {
            this._cdSolicitacaoCompraPeIntegrado = cdSolicitacaoCompraPeIntegrado;
        } else {
            this._msnValidacao += this.montarMensagem('Código da Solicitação de aquisição PEintegrado', 'PProcessoResultadoParcialDTO', 'sCdOrdemCompraEmpresa', null);
        }
    }

    get cdUGResponsavelLicitacao() {
        return this._cdUGResponsavelLicitacao;
    }
    set cdUGResponsavelLicitacao(cdUGResponsavelLicitacao) {
        if (cdUGResponsavelLicitacao != null) {
            this._cdUGResponsavelLicitacao = cdUGResponsavelLicitacao;
        } else {
            this._msnValidacao += this.montarMensagem('Unidade Gestora da Licitação', 'PProcessoResultadoParcialDTO', 'sCdComprador', null);
        }
    }

    get cdUnidadeGestoraGestao() {
        return this._cdUnidadeGestoraGestao;
    }
    set cdUnidadeGestoraGestao(cdUnidadeGestoraGestao) {
        if (cdUnidadeGestoraGestao != null) {
            this._cdUnidadeGestoraGestao = cdUnidadeGestoraGestao;
        } else {
            this._msnValidacao += this.montarMensagem('Unidade Gestora Gestão', 'lsPProcessoOrdemCompraDTO', 'sCdGestao', null);
        }
    }

    get cdUnidadeGestora() {
        return this._cdUnidadeGestora;
    }
    set cdUnidadeGestora(cdUnidadeGestora) {
        if (cdUnidadeGestora != null) {
            this._cdUnidadeGestora = cdUnidadeGestora;
        } else {
            this._msnValidacao += this.montarMensagem('Unidade Gestora Da Solicitacao de Aquisição', 'lsPProcessoOrdemCompraDTO', 'sCdComprador', null);
        }
    }

    get dsResumidaSolicitacaoCompra() {
        return this._dsResumidaSolicitacaoCompra;
    }
    set dsResumidaSolicitacaoCompra(dsResumidaSolicitacaoCompra) {
        if (dsResumidaSolicitacaoCompra != null) {
            this._dsResumidaSolicitacaoCompra = dsResumidaSolicitacaoCompra;
        } else {
            this._msnValidacao += this.montarMensagem('Descrição da Solicitação de Aquisição', 'lsPProcessoOrdemCompraDTO', 'sDsOrdemCompra', null);
        }
    }

    get nuAnoSolicitacaoCompra() {
        return this._nuAnoSolicitacaoCompra;
    }
    set nuAnoSolicitacaoCompra(nuAnoSolicitacaoCompra) {
        if (nuAnoSolicitacaoCompra != null) {
            this._nuAnoSolicitacaoCompra = nuAnoSolicitacaoCompra;
        } else {
            this._msnValidacao += this.montarMensagem('Data emissão solicitacao aquisição', 'lsPProcessoOrdemCompraDTO', 'tDtEmissao', null);
        }
    }

    get dQtItem() {
        return this._dQtItem;
        }
    set dQtItem(dQtItem) {
        if (dQtItem != null) {
            this._dQtItem = dQtItem;
        } else {
            this._msnValidacao += this.montarMensagem('Quantidade de itens da solicitacao aquisição', 'lsPProcessoOrdemCompraDTO', 'dQtItem', null);
        }
    }

}