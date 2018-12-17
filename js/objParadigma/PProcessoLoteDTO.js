class PProcessoLoteDTO extends UtilXMLParadigma {
    constructor(lsPProcessoLoteDTO) {

        super();
        this._cdLicitacaoLote;
        this._dsLicitacaoLote;
        this._sqApresentacaoLicitacaoLote;
        this._tDtAdjudicacao;
        this._tDHomologacao;
        this._lstResultadoDoLote = [];
        this.carregarPProcessoLote(lsPProcessoLoteDTO);
        this.carregarPProcessoLoteResultado(lsPProcessoLoteDTO);
    }

    carregarPProcessoLote(lsPProcessoLoteDTO) {

        let item = lsPProcessoLoteDTO;

        this.cdLicitacaoLote = this.retornarValor(item, "a:nCdLoteSequencial", true);
        this.dsLicitacaoLote = this.retornarValor(item, "a:sDsLote", true);
        this.sqApresentacaoLicitacaoLote = this.retornarValor(item, "a:nCdLoteSequencial", true); // verificar como esta isso na tabela
        this.tDtAdjudicacao = this.retornarValor(item, "a:tDtAdjudicacao", true);
        this.tDHomologacao = this.retornarValor(item, "a:tDtFinalizacao", true);

    }

    carregarPProcessoLoteResultado(lsPProcessoLoteDTO) {

        const lstPProcessoLoteResultado = lsPProcessoLoteDTO.getElementsByTagName("a:lstPProcessoLoteResultado");
        const pProcessoLoteResultadoDTO = lstPProcessoLoteResultado[0].getElementsByTagName("a:PProcessoLoteResultadoDTO");
        let x = 0;
        for (let index = 0; index < pProcessoLoteResultadoDTO.length; index++) {

            let bFlVencedor = this.retornarValor(pProcessoLoteResultadoDTO[index], "a:bFlVencedor", true);

            if (bFlVencedor == 1) {

                let resultado = new PProcessoLoteResultadoDTO(pProcessoLoteResultadoDTO[index]);
                this._lstResultadoDoLote[x] = resultado;
                x++;

            }
        }

    }

    get lstResultadoDoLote() {
        return this._lstResultadoDoLote;
    }
    set lstResultadoDoLote(lstResultadoDoLote) {
        if (lstResultadoDoLote != null) {
            this._lstResultadoDoLote = lstResultadoDoLote;
        } else {
            this._msnValidacao += this.montarMensagem('Lista com resultado do Lote', 'lsPProcessoLoteDTO', 'PProcessoLoteResultadoDTO', null);
        }
    }

    get tDHomologacao() {
        return this._tDHomologacao;
    }
    set tDHomologacao(tDHomologacao) {
        if (tDHomologacao != null) {
            this._tDHomologacao = tDHomologacao;
        } else {
            this._msnValidacao += this.montarMensagem('Data de Homologacao do Lote', 'lsPProcessoLoteDTO', 'tDtFinalizacao', null);
        }
    }

    get tDtAdjudicacao() {
        return this._tDtAdjudicacao;
    }
    set tDtAdjudicacao(tDtAdjudicacao) {
        if (tDtAdjudicacao != null) {
            this._tDtAdjudicacao = tDtAdjudicacao;
        } else {
            this._msnValidacao += this.montarMensagem('Data de Adjudicação do Lote', 'lsPProcessoLoteDTO', 'tDtAdjudicacao', null);
        }
    }

    get sqApresentacaoLicitacaoLote() {
        return this._sqApresentacaoLicitacaoLote;
    }
    set sqApresentacaoLicitacaoLote(sqApresentacaoLicitacaoLote) {
        if (sqApresentacaoLicitacaoLote != null) {
            this._sqApresentacaoLicitacaoLote = sqApresentacaoLicitacaoLote;
        } else {
            this._msnValidacao += this.montarMensagem('Código sequencial do Lote', 'lsPProcessoLoteDTO', 'nCdLoteSequencial', null);
        }
    }

    get dsLicitacaoLote() {
        return this._dsLicitacaoLote;
    }
    set dsLicitacaoLote(dsLicitacaoLote) {
        if (dsLicitacaoLote != null) {
            this._dsLicitacaoLote = dsLicitacaoLote;
        } else {
            this._msnValidacao += this.montarMensagem('Descrição do Lote', 'lsPProcessoLoteDTO', 'sDsLote', null);
        }
    }

    get cdLicitacaoLote() {
        return this._cdLicitacaoLote;
    }
    set cdLicitacaoLote(cdLicitacaoLote) {
        if (cdLicitacaoLote != null) {
            this._cdLicitacaoLote = cdLicitacaoLote;
        } else {
            this._msnValidacao += this.montarMensagem('Código do Lote', 'lsPProcessoLoteDTO', 'nCdLoteSequencial', null);
        }
    }
}