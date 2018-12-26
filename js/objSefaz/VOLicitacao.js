class VOLicitacao {

    constructor() {
        this._nuProcessoLicitacao;
        this._cdModalidadeLicitacao;
        this._dtPublicacaoEditalLicitacao;
        this._dtSessaoInauguralLicitacao;
        this._cdUnidadeGestora;
        this._dsObjetoLicitacao;
        this._txObservacaoLicitacao;
        this._inLoteLicitacao;
        this._nuAnoLicitacao;
        this._nuParticipantesLicitacao;
    }

    get nuProcessoLicitacao() {
        return this._nuProcessoLicitacao;
    }
    set nuProcessoLicitacao(nuProcessoLicitacao) {
        if (nuProcessoLicitacao != null) {
            this._nuProcessoLicitacao = nuProcessoLicitacao;
        } else {
            this.mensagem += this.montarMensagem('VOLicitacao número do processo da licitação esta null');
        }
    }

    get cdModalidadeLicitacao() {
        return this._cdModalidadeLicitacao;
    }
    set cdModalidadeLicitacao(cdModalidadeLicitacao) {
        if (cdModalidadeLicitacao != null) {
            this._cdModalidadeLicitacao = cdModalidadeLicitacao;
        } else {
            this.mensagem = montarMensagem('VOLicitacao código da modalidade da licitação null');
        }
    }

    get dtPublicacaoEditalLicitacao() {
        return this._dtPublicacaoEditalLicitacao;
    }
    set dtPublicacaoEditalLicitacao(dtPublicacaoEditalLicitacao) {
        if (dtPublicacaoEditalLicitacao != null) {
            this._dtPublicacaoEditalLicitacao = dtPublicacaoEditalLicitacao;
        } else {
            this.mensagem = montarMensagem('VOLicitacao dtPublicacaoEditalLicitacao está null');
        }
    }

    get dtSessaoInauguralLicitacao() {
        return this._dtSessaoInauguralLicitacao;
    }
    set dtSessaoInauguralLicitacao(dtSessaoInauguralLicitacao) {
        if (dtSessaoInauguralLicitacao != null) {
            this._dtSessaoInauguralLicitacao = dtSessaoInauguralLicitacao;
        } else {
            this.mensagem = montarMensagem('VOLicitacao dtSessaoInauguralLicitacao está null');
        }
    }

    get cdUnidadeGestora() {
        return this._cdUnidadeGestora;
    }
    set cdUnidadeGestora(cdUnidadeGestora) {
        if (cdUnidadeGestora != null) {
            this._cdUnidadeGestora = cdUnidadeGestora;
        } else {
            this.mensagem = montarMensagem('VOLicitacao cdUnidadeGestora está null');
        }
    }

    get dsObjetoLicitacao() {
        return this._dsObjetoLicitacao;
    }
    set dsObjetoLicitacao(dsObjetoLicitacao) {
        if (dsObjetoLicitacao != null) {
            this._dsObjetoLicitacao = dsObjetoLicitacao;
        } else {
            this.mensagem = montarMensagem('VOLicitacao dsObjetoLicitacao está null');
        }
    }

    get txObservacaoLicitacao() {
        return this._txObservacaoLicitacao;
    }
    set txObservacaoLicitacao(txObservacaoLicitacao) {
        if (txObservacaoLicitacao != null) {
            this._txObservacaoLicitacao = txObservacaoLicitacao;
        } else {
            this.mensagem = montarMensagem('VOLicitacao txObservacaoLicitacao está null');
        }
    }

    get inLoteLicitacao() {
        return this._inLoteLicitacao;
    }
    set inLoteLicitacao(InLoteLicitacao) {
        if (inLoteLicitacao != null) {
            this._inLoteLicitacao = inLoteLicitacao;
        } else {
            this.mensagem = montarMensagem('VOLicitacao inLoteLicitacao está null');
        }
    }

    get nuAnoLicitacao() {
        return this._nuAnoLicitacao;
    }
    set nuAnoLicitacao(nuAnoLicitacao) {
        if (nuAnoLicitacao != null) {
            this._nuAnoLicitacao = nuAnoLicitacao;
        } else {
            this.mensagem = montarMensagem('VOLicitacao nuAnoLicitacao está null');
        }
    }

    get nuParticipantesLicitacao() {
        return this._nuParticipantesLicitacao;
    }
    set nuParticipantesLicitacao(nuParticipantesLicitacao) {
        if (nuParticipantesLicitacao != null) {
            this._nuParticipantesLicitacao = nuParticipantesLicitacao;
        } else {
            this.mensagem = montarMensagem('VOLicitacao nuParticipantesLicitacao está null');
        }
    }
}