class VOSolicitacaoCompra extends VOEntidade {

    constructor() {

        super();
        this._cdSolicitacaoCompraPeIntegrado;
        this._cdUnidadeGestoraGestao
        this._cdUnidadeGestora
        this._cdUGResponsavelLicitacao
        this._dsResumidaSolicitacaoCompra
        this._nuAnoSolicitacaoCompra
        this._colecaoSolicitacaoCompraItem = [];
         
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

    get nuAnoSolicitacaoCompra() {
        return this._nuAnoSolicitacaoCompra;
    }
    set nuAnoSolicitacaoCompra(nuAnoSolicitacaoCompra) {
        if (nuAnoSolicitacaoCompra != null) {
            this._nuAnoSolicitacaoCompra = nuAnoSolicitacaoCompra;
        } else {
            this.mensagem += this.montarMensagem('VOSolicitacaoCompra o código da nuAnoSolicitacaoCompra esta null');
        }
    }

    get dsResumidaSolicitacaoCompra() {
        return this._dsResumidaSolicitacaoCompra;
    }
    set dsResumidaSolicitacaoCompra(dsResumidaSolicitacaoCompra) {
        if (dsResumidaSolicitacaoCompra != null) {
            this._dsResumidaSolicitacaoCompra = dsResumidaSolicitacaoCompra;
        } else {
            this.mensagem += this.montarMensagem('VOSolicitacaoCompra o código da dsResumidaSolicitacaoCompra esta null');
        }
    }

    get cdUGResponsavelLicitacao() {
        return this._cdUGResponsavelLicitacao;
    }
    set cdUGResponsavelLicitacao(cdUGResponsavelLicitacao) {
        if (cdUGResponsavelLicitacao != null) {
            this._cdUGResponsavelLicitacao = cdUGResponsavelLicitacao;
        } else {
            this.mensagem += this.montarMensagem('VOSolicitacaoCompra o código da cdUGResponsavelLicitacao esta null');
        }
    }

    get cdUnidadeGestora() {
        return this._cdUnidadeGestora;
    }
    set cdUnidadeGestora(cdUnidadeGestora) {
        if (cdUnidadeGestora != null) {
            this._cdUnidadeGestora = cdUnidadeGestora;
        } else {
            this.mensagem += this.montarMensagem('VOSolicitacaoCompra o código da cdUnidadeGestora esta null');
        }
    } 

    get cdUnidadeGestoraGestao() {
        return this._cdUnidadeGestoraGestao;
    }
    set cdUnidadeGestoraGestao(cdUnidadeGestoraGestao) {
        if (cdUnidadeGestoraGestao != null) {
            this._cdUnidadeGestoraGestaoo = cdUnidadeGestoraGestao;
        } else {
            this.mensagem += this.montarMensagem('VOSolicitacaoCompra o código da cdUnidadeGestoraGestao esta null');
        }
    } 
    
    get cdSolicitacaoCompraPeIntegrado() {
        return this._cdSolicitacaoCompraPeIntegrado;
    }
    set cdSolicitacaoCompraPeIntegrado(cdSolicitacaoCompraPeIntegrado) {
        if (cdSolicitacaoCompraPeIntegrado != null) {
            this._cdSolicitacaoCompraPeIntegrado = cdSolicitacaoCompraPeIntegrado;
        } else {
            this.mensagem += this.montarMensagem('VOSolicitacaoCompra o código da cdSolicitacaoCompraPeIntegrado esta null');
        }
    }  
}