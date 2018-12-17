// 1 - Com a homologação parcial como vai ficar a questão dos metodos de reprocessamento, quando for necessário reprocessar um processo?
// 2 - Como vai ficar a questão dos itens com fornecedores que não estão cadastrados no efisco quando for
//        necessario reprocessar?
class OTDProcessoResultadoDTO_cicero extends UtilXMLParadigma {

    constructor(pProcessoResultadoParcial) {

        super();
        this._pProcessoResultadoParcialDTO = pProcessoResultadoParcial;

        this._qtFornecedoresConvidadosLicitacao;
        this._qtFornecedoresHabilitadosLicitacao;
        this._qtFornecedoresParticipantesLicitacao;
        this._cdModalidadeLicitacao;

        this._nuParticipantesHablLicitacao;
        this._tDtSessaoInauguralLicitacao;
        this._txObservacaoLicitacao;
        this._nuProcessoLicitacao;
        
        this._dtPublicacaoEditalLicitacao;
        this._cdUnidadeGestora;
        this._dsObjetoLicitacao;
        this._inLoteLicitacao;
        this._lstPPRocessoOrdemCompraDTO = [];
        this._lstPPRocessoItemDTO = [];
        this._lstPPRocessoLote = [];

        this.carregarDadosBasicosResultadoDTO();
        this.carregarlstPPProcessoOrdemCompra();
        /*this.carregarlstProcessoItemDTO();
        this.carregarLstPProcessoLote(); */

    }

    getModalidadeSefaz(){
    }

    getMsgProcessoResultado(){
        let msn = this.msnValidacao;

        //mensagens das ordens de compra
        this._lstPPRocessoOrdemCompraDTO.forEach(function(ordemCompra){
            msn += ordemCompra.msnValidacao;
        });

        //mensagens dos itesn
        this._lstPPRocessoItemDTO.forEach(function(item){
            msn += item.msnValidacao;

            //mensagens do resultado
            item._lstItemResultadoDTO.forEach(function (resultado) {
                msn += resultado.msnValidacao;
            });
        });

        // mensagem do lote
        this._lstPPRocessoLote.forEach(function(lote){
            msn += lote.msnValidacao;

            //mensagem do resultado do lote
            lote._lstResultadoDoLote.forEach(function(resultado){
                msn += resultado.msnValidacao;
            });
        });

        return msn;
    }

    carregarLstPProcessoLote() {

        var lstPProcessoLote = this._pProcessoResultadoParcialDTO[0].getElementsByTagName("a:lstPProcessoLote");
        var lsPProcessoLoteDTO = lstPProcessoLote[0].getElementsByTagName("a:PProcessoLoteDTO");

        for (let index = 0; index < lsPProcessoLoteDTO.length; index++) {
            let lote = new PProcessoLoteDTO(lsPProcessoLoteDTO[index])
            this._lstPPRocessoLote[index] = lote;
        }
    }

    carregarlstProcessoItemDTO() {
        const lstPProcessoItem = this._pProcessoResultadoParcialDTO[0].getElementsByTagName("a:lstPProcessoItem");
        const lsPProcessoItemDTO = lstPProcessoItem[0].getElementsByTagName("a:PProcessoItemDTO");

        for (let index = 0; index < lsPProcessoItemDTO.length; index++) {

            let itemDTO = new PProcessoItemDTO(lsPProcessoItemDTO[index]);
            this._lstPPRocessoItemDTO[index] = itemDTO;
        }

    }

    carregarlstPPProcessoOrdemCompra() {

        let lstPPProcessoOrdemCompra = this._pProcessoResultadoParcialDTO[0].getElementsByTagName("a:lstPPProcessoOrdemCompra");
        let lsPProcessoOrdemCompraDTO = lstPPProcessoOrdemCompra[0].getElementsByTagName("PProcessoOrdemCompraDTO");
        

        for (let index = 0; index < lsPProcessoOrdemCompraDTO.length; index++) {

            let ordemCompra = new PProcessoOrdemCompraDTO(lsPProcessoOrdemCompraDTO[index], this.cdUnidadeGestora);
            this._lstPPRocessoOrdemCompraDTO[index] = ordemCompra;

        }
    }

    carregarDadosBasicosResultadoDTO() {

        const xml = this._pProcessoResultadoParcialDTO;
        //xml[0].getElementsByTagName("a:nCdModulo")[0].childNodes[0].nodeValue;
        // sDsObservacao - precisamos apenas o ultimo
        let ultimo = xml[0].getElementsByTagName("a:sDsObservacao").length;
        let txObservacao = xml[0].getElementsByTagName("a:sDsObservacao")[ultimo - 1];
        this.txObservacaoLicitacao = this.retornarValor(txObservacao, null, true);
        
        let qtFornecedoresConvidados = xml[0].getElementsByTagName("a:dQtFornecedoresConvidados")[ultimo - 1];
        this.qtFornecedoresConvidadosLicitacao = this.retornarValor(qtFornecedoresConvidados, null, true);

        let qtFornecedoresHabilitados = xml[0].getElementsByTagName("a:dQtFornecedoresHabilitados")[ultimo - 1];
        this.qtFornecedoresHabilitadosLicitacao = this.retornarValor(qtFornecedoresHabilitados, null, true);

        let qtFornecedoresParticipantes = xml[0].getElementsByTagName("a:dQtFornecedoresParticipantes")[ultimo - 1];
        this.qtFornecedoresParticipantesLicitacao = this.retornarValor(qtFornecedoresParticipantes, null, true);
        

        /*
        obs_1
        Esta data não foi retornada no xml novo identificar se vai ser retornada ou foi substituida 11/12/2018*/
        let tDtInicial = this.retornarValor(xml[0], "a:tDtInicial", true);
        /**/
        let tDtInicialDisputa = this.retornarValor(xml[0], "a:tDtInicialDisputa", true);
        this.tDtSessaoInauguralLicitacao = (tDtInicial == null) ? tDtInicialDisputa : tDtInicial;



        this.nuProcessoLicitacao = this.retornarValor(xml[0], "a:sNrProcessoDisplay", true);
        this.cdModalidadeLicitacao = this.retornarValor(xml[0], "a:nCdModulo", true);
        this.dtPublicacaoEditalLicitacao = this.retornarValor(xml[0], "a:tDtPublicacao", true);
        this.cdUnidadeGestora = this.retornarValor(xml[0], "a:sCdComprador", true);
        this.dsObjetoLicitacao = this.retornarValor(xml[0], "a:sDsObjeto", true);
        this.inLoteLicitacao = this.retornarValor(xml[0], "a:nIdTipoApuracao", true);
        //vo.nuAnoLicitacao                  = vo.tDtSessaoInauguralLicitacao;
        // vo.nuParticipantesLicitacao        = nuParticipantes ;

    }

    get lstPPProcessoOrdemCompra(){
        return this._lstPPRocessoOrdemCompraDTO;    
    }
    

    get qtFornecedoresConvidadosLicitacao(){
        return this._qtFornecedoresConvidadosLicitacao;
    }
    set qtFornecedoresConvidadosLicitacao(qtFornecedoresConvidados){
        if (qtFornecedoresConvidados != null) {
            this._qtFornecedoresConvidadosLicitacao = qtFornecedoresConvidados;
        } else {
            this.msnValidacao += this.montarMensagem('Quantidade de Fornecedores convidados', null, 'dQtFornecedoresConvidados', null);
        }
    }

    get qtFornecedoresHabilitadosLicitacao() {
        return this._qtFornecedoresHabilitadosLicitacao;
    }
    set qtFornecedoresHabilitadosLicitacao(qtFornecedoresHabilitados) {
        if (qtFornecedoresHabilitados != null) {
            this._qtFornecedoresHabilitadosLicitacao = qtFornecedoresHabilitados;
        } else {
            this.msnValidacao += this.montarMensagem('Numero de Fornecedores Habilitados', null, 'dQtFornecedoresHabilitados', null);
        }
    }

    get qtFornecedoresParticipantesLicitacao(){
        return this._qtFornecedoresParticipantesLicitacao;
    }
    set qtFornecedoresParticipantesLicitacao(qtFornecedoresParticipantes){
        if (qtFornecedoresParticipantes != null) {
            this._qtFornecedoresParticipantesLicitacao = qtFornecedoresParticipantes;
        } else {
            this.msnValidacao += this.montarMensagem('Quantidade fornecedores participantes', null, 'dQtFornecedoresParticipantes', null);
        }
    }

    get tDtSessaoInauguralLicitacao() {
        return this._tDtSessaoInauguralLicitacao;
    }
    set tDtSessaoInauguralLicitacao(tDtSessaoInaugural) {
        if (tDtSessaoInaugural != null) {
            this._tDtSessaoInauguralLicitacao = tDtSessaoInaugural;
        } else {
            this.msnValidacao += this.montarMensagem('Data da Sessão Inaugural', 'lsPProcessoResultado', 'tDtInicial ou tDtInicialDisputa', null);
        }
    }

    get txObservacaoLicitacao() {
        return this._txObservacaoLicitacao;
    }
    set txObservacaoLicitacao(txObservacao) {
        if (txObservacao != null) {
            this._txObservacaoLicitacao = txObservacao;
        } else {
            this.msnValidacao += this.montarMensagem('Observação da Licitação', 'lsPProcessoResultado', 'sDsObservacao', null);
        }
    }

    get nuProcessoLicitacao() {
        return this._nuProcessoLicitacao;
    }
    set nuProcessoLicitacao(nuProcesso) {
        if (nuProcesso != null) {
            this._nuProcessoLicitacao = nuProcesso;
        } else {
            this.msnValidacao += this.montarMensagem('Número do Processo da Licitação', 'lsPProcessoResultado', 'sNrProcessoDisplay', null);
        }
    }

    get cdModalidadeLicitacao() {
        return this._cdModalidadeLicitacao;
    }
    set cdModalidadeLicitacao(cdModalidade) {
        if (cdModalidade != null) {
            this._cdModalidadeLicitacao = cdModalidade;
        } else {
            this.msnValidacao += this.montarMensagem('Modalidade da Licitação ', 'lsPProcessoResultado', 'nCdModulo', null);
        }
    }

    get dtPublicacaoEditalLicitacao() {
        return this._dtPublicacaoEditalLicitacao;
    }
    set dtPublicacaoEditalLicitacao(dtEdital) {
        if (dtEdital != null) {
            this._dtPublicacaoEditalLicitacao = dtEdital;
        } else {
            this.msnValidacao += this.montarMensagem('Data de Publicação do Edital da Licitação', 'lsPProcessoResultado', 'tDtPublicacao', null);
        }
    }

    get cdUnidadeGestora() {
        return this._cdUnidadeGestora;
    }
    set cdUnidadeGestora(cdUG) {
        if (cdUG != null) {
            this._cdUnidadeGestora = cdUG;
        } else {
            this.msnValidacao += this.montarMensagem('Unidade Gestora da Licitação', 'lsPProcessoResultado', 'sCdComprador', null);
        }
    }

    get dsObjetoLicitacao() {
        return this._dsObjetoLicitacao;
    }
    set dsObjetoLicitacao(ObjLicitacao) {
        if (ObjLicitacao != null) {
            this._dsObjetoLicitacao = ObjLicitacao;
        } else {
            this.msnValidacao += this.montarMensagem('Objeto da Licitação ', 'lsPProcessoResultado', 'sDsObjeto', null);
        }
    }

    get inLoteLicitacao() {
        return this._inLoteLicitacao;
    }
    set inLoteLicitacao(inLoteLicit) {
        if (inLoteLicit != null) {
            this._inLoteLicitacao = inLoteLicit;
        } else {
            this.msnValidacao += this.montarMensagem('Licitação Lote', 'lsPProcessoResultado', 'nIdTipoApuracao', null);
        }
    }


}