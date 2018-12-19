class PProcessoOrdemCompraDTO extends UtilXMLParadigma {
    constructor(pProcessoOrdemCompraNegociacaoDTO, cdUGResponsavelLicitacao) {

        super();
        this._cdSolicitacaoCompraPeIntegrado;
        //this._cdUGResponsavelLicitacao;
        this._cdUnidadeGestoraGestao;
        this._cdUnidadeGestora;
        this._dsResumidaSolicitacaoCompra;
        this._nuAnoSolicitacaoCompra;
        this._lstOtdItensSA = [];
        this._dQtItem;
        
        this.carregarDadosBasicosSA(pProcessoOrdemCompraNegociacaoDTO, cdUGResponsavelLicitacao);

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
    
    // Recuperando as informações basicas Ordem de Compra - pProcessoOrdemCompraNegociacaoDTO
    carregarDadosBasicosSA(pProcessoOrdemCompraNegociacaoDTO, cdUGResponsavelLicitacao) {
    
        this.cdSolicitacaoCompraPeIntegrado = this.retornarValor(pProcessoOrdemCompraNegociacaoDTO, "a:sCdOrdemCompraEmpresa", true);
        this.cdUGResponsavelLicitacao       = cdUGResponsavelLicitacao;
        this.cdUnidadeGestoraGestao         = this.retornarValor(pProcessoOrdemCompraNegociacaoDTO, "a:sCdGestao", true);
        this.cdUnidadeGestora               = this.retornarValor(pProcessoOrdemCompraNegociacaoDTO, "a:sCdComprador", true);
        this.dsResumidaSolicitacaoCompra    = this.retornarValor(pProcessoOrdemCompraNegociacaoDTO, "a:sDsOrdemCompra", true);
        this.nuAnoSolicitacaoCompra         = this.retornarValor(pProcessoOrdemCompraNegociacaoDTO, "a:tDtEmissao", true);
        
        this.retornarOTDItensSA(pProcessoOrdemCompraNegociacaoDTO);

    }
    
    // retorna o endereço dos itens na sa
    retornarOTDItensSA(pProcessoOrdemCompraNegociacaoDTO) {
    
        let lstPProcessoOrdemCompraRequisicao   = pProcessoOrdemCompraNegociacaoDTO.getElementsByTagName("a:lstPProcessoOrdemCompraRequisicao");
       
        for (let index = 0; index < lstPProcessoOrdemCompraRequisicao.length; index++) {
    
            var pProcessoOrdemCompraRequisicaoNegociacaoDTO = lstPProcessoOrdemCompraRequisicao[index].getElementsByTagName("a:PProcessoOrdemCompraRequisicaoNegociacaoDTO");
    
            for (let i = 0; i < pProcessoOrdemCompraRequisicaoNegociacaoDTO.length; i++ ){

                let dQtItem                     = this.retornarValor(pProcessoOrdemCompraRequisicaoNegociacaoDTO[i], "a:dQtItem", true);
                let dVlReferencia               = this.retornarValor(pProcessoOrdemCompraRequisicaoNegociacaoDTO[i], "a:dVlReferencia", true);
                let sCdItemRequisicaoEmpresa    = this.retornarValor(pProcessoOrdemCompraRequisicaoNegociacaoDTO[i], "a:sCdItemRequisicaoEmpresa", true);
                let sCdProduto                  = this.retornarValor(pProcessoOrdemCompraRequisicaoNegociacaoDTO[i], "a:sCdProduto", true);
                let sCdRequisicaoEmpresa        = this.retornarValor(pProcessoOrdemCompraRequisicaoNegociacaoDTO[i], "a:sCdRequisicaoEmpresa", true);
                let sCdUnidadeMedida            = this.retornarValor(pProcessoOrdemCompraRequisicaoNegociacaoDTO[i], "a:sCdUnidadeMedida", true);
                
                this._lstOtdItensSA[i] =  'dQtItem: '+ dQtItem +' dVlReferencia: '+dVlReferencia+' sCdItemRequisicaoEmpresa: '+sCdItemRequisicaoEmpresa
                +' sCdProduto: '+sCdProduto+' sCdRequisicaoEmpresa: '+sCdRequisicaoEmpresa+' sCdUnidadeMedida: '+sCdUnidadeMedida;
            }
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