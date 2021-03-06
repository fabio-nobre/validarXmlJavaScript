// 1 - Com a homologação parcial como vai ficar a questão dos metodos de reprocessamento, quando for necessário reprocessar um processo?
// 2 - Como vai ficar a questão dos itens com fornecedores que não estão cadastrados no efisco quando for
//        necessario reprocessar?
class OTDProcessoResultadoDTO extends UtilXMLParadigma {

    constructor(pProcessoResultadoParcial) {

        super();
        this._pProcessoResultadoParcialDTO = pProcessoResultadoParcial;

        this._qtFornecedoresConvidadosLicitacao;
        this._qtFornecedoresHabilitadosLicitacao;
        this._qtFornecedoresParticipantesLicitacao;
        //this._cdModalidadeLicitacao;
        this._cdModuloLicitacao;
        this._idTipoApuracaoLicitacao;
        this._cdCompradorLicitacao;
        this._dsObjetoLicitacao;
        this._txObservacaoLicitacao;
        this._nrEditalLicitacao;
        this._nuProcessoLicitacao;
        this._dtAgendamentoLicitacao;
        this._dtFinalDisputaLicitacao;
        //this._dtFinalPropostaLicitacao;
        this._tDtSessaoInauguralLicitacao;
        this._dtInicialPropostaLicitacao;
        this._dtPublicacaoEditalLicitacao;
        this._inLoteLicitacao;
        this._lstPPRocessoOrdemCompraDTO = [];
        this._lstPPRocessoItemDTO = [];
        this._lstPPRocessoLote = []; 

        this.carregarDadosBasicosResultadoDTO();
        this.carregarlstPPProcessoOrdemCompra();
        this.carregarlstProcessoItemDTO();
        this.carregarLstPProcessoLote(); 

    }

    // Recuperando as informações basicas do documento xml - PProcessoResultadoParcialDTO
    carregarDadosBasicosResultadoDTO() {

        const xml = this._pProcessoResultadoParcialDTO;
        
        // sDsObservacao - precisamos apenas o ultimo
        let ultimo = xml[0].getElementsByTagName("a:sDsObservacao").length;
        
        let qtFornecedoresConvidados = xml[0].getElementsByTagName("a:dQtFornecedoresConvidados")[ultimo - 1];
        this.qtFornecedoresConvidadosLicitacao = this.retornarValor(qtFornecedoresConvidados, null, true);

        let qtFornecedoresHabilitados = xml[0].getElementsByTagName("a:dQtFornecedoresHabilitados")[ultimo - 1];
        this.qtFornecedoresHabilitadosLicitacao = this.retornarValor(qtFornecedoresHabilitados, null, true);

        let qtFornecedoresParticipantes = xml[0].getElementsByTagName("a:dQtFornecedoresParticipantes")[ultimo - 1];
        this.qtFornecedoresParticipantesLicitacao = this.retornarValor(qtFornecedoresParticipantes, null, true);

        /* Analisar na RNUtilitariaLicitacaoImportada - getTipoModalidadeLicitacao a regra para modalidades de licitação

        this.cdModalidade = this.retornarValor(xml[0], "a:nCdModalidade", true);
        this.cdModalidadeLicitacao = this.retornarValor(cdModalidade, null, true); 
        
        */        

       /* 
        1ª Verifica o número do nCdModulo retornado ( Pregão Eletronico, Compra Direta(dispensa,Inexigibilidade) 
        ou Pregão presencial(pregão presencial,carta convite,concorrencia,tomada de preço ) 
        - cdPregaoEletronicoPEIntegrado = 18
        - cdPregaoPresencialPEIntegrado = 22;
        - cdCompraDiretaPEIntegrado = 19;
       */
       let cdModulo = xml[0].getElementsByTagName("a:nCdModulo")[ultimo - 1];
       this.cdModuloLicitacao = this.retornarValor(cdModulo, null, true);
       
       let idTipoApuracao = xml[0].getElementsByTagName("a:nIdTipoApuracao")[ultimo - 1];
       this.idTipoApuracaoLicitacao = this.retornarValor(idTipoApuracao, null, true);

       let cdComprador = xml[0].getElementsByTagName("a:sCdComprador")[ultimo];
       this.cdCompradorLicitacao = this.retornarValor(cdComprador, null, true);
       
       let dsObjeto = xml[0].getElementsByTagName("a:sDsObjeto")[ultimo - 1];
       this.dsObjetoLicitacao = this.retornarValor(dsObjeto, null, true);

       let txObservacao = xml[0].getElementsByTagName("a:sDsObservacao")[ultimo - 1];
       this.txObservacaoLicitacao = this.retornarValor(txObservacao, null, true);

       let nrEdital = xml[0].getElementsByTagName("a:sNrEdital")[ultimo - 1];
       this.nrEditalLicitacao = this.retornarValor(nrEdital, null, true);
       
       let nuProcesso = xml[0].getElementsByTagName("a:sNrProcessoDisplay")[ultimo - 1];
       this.nuProcessoLicitacao = this.retornarValor(nuProcesso, null, true);

       let dtAgendamento = xml[0].getElementsByTagName("a:tDtAgendamento")[ultimo - 1];
       this.dtAgendamentoLicitacao = this.retornarValor(dtAgendamento, null, true);
       
       let dtFinalDisputa = xml[0].getElementsByTagName("a:tDtFinalDisputa")[ultimo - 1];
       this.dtFinalDisputaLicitacao = this.retornarValor(dtFinalDisputa, null, true);

       /* let dtFinalProposta = xml[0].getElementsByTagName("a:tDtFinalProposta")[ultimo - 1];
       this.dtFinalPropostaLicitacao = this.retornarValor(dtFinalProposta, true); */
       
       let tDtInicialDisputa = xml[0].getElementsByTagName("a:tDtInicialDisputa")[ultimo - 1];       
       this.tDtSessaoInauguralLicitacao = this.retornarValor(tDtInicialDisputa, null, true);
    // let tDtInicialDisputa = this.retornarValor(xml[0], "a:tDtInicialDisputa", true);
    // this.tDtSessaoInauguralLicitacao = (tDtInicial == null) ? tDtInicialDisputa : tDtInicial;

       let dtInicialProposta = xml[0].getElementsByTagName("a:tDtInicialProposta")[ultimo - 1]; 
       this.dtInicialPropostaLicitacao = this.retornarValor(dtInicialProposta, null, true);
        /*

        obs_1
        Esta data não foi retornada no xml novo identificar se vai ser retornada ou foi substituida 11/12/2018*/
        let tDtInicial = this.retornarValor(xml[0], "a:tDtInicial", null, true);
        /**/
    }

    // Recuperando as informações referente a ordem de compra (SA) - PProcessoResultadoParcialDTO > lstPPProcessoOrdemCompra
    carregarlstPPProcessoOrdemCompra() {

        // lstPPProcessoOrdemCompra > PProcessoOrdemCompraDTO
        let lstPPProcessoOrdemCompra = this._pProcessoResultadoParcialDTO[0].getElementsByTagName("a:lstPPProcessoOrdemCompra");
        let lsPProcessoOrdemCompraDTO = lstPPProcessoOrdemCompra[0].getElementsByTagName("PProcessoOrdemCompraDTO");

        for (let index = 0; index < lsPProcessoOrdemCompraDTO.length; index++) {

            let ordemCompra = new PProcessoOrdemCompraDTO(lsPProcessoOrdemCompraDTO[index], this.cdUnidadeGestora);
            this._lstPPRocessoOrdemCompraDTO[index] = ordemCompra;

        }
    } 

    // Recuperando as informações referente aos itens - PProcessoResultadoParcialDTO > lstPProcessoItem
    carregarlstProcessoItemDTO() {

        // lstPProcessoItem > PProcessoItemDTO
        const lstPProcessoItem = this._pProcessoResultadoParcialDTO[0].getElementsByTagName("a:lstPProcessoItem");
        const lsPProcessoItemDTO = lstPProcessoItem[0].getElementsByTagName("PProcessoItemDTO");

        for (let index = 0; index < lsPProcessoItemDTO.length; index++) {

            let itemDTO = new PProcessoItemDTO(lsPProcessoItemDTO[index]);
            this._lstPPRocessoItemDTO[index] = itemDTO;
        }

    }

    
    // Métodos GETs e SETs  

    // Quantidade de fornecedores total de convidados
    get qtFornecedoresConvidadosLicitacao(){
        return this._qtFornecedoresConvidadosLicitacao;
    }
    set qtFornecedoresConvidadosLicitacao(qtFornecedoresConvidados){
        if (qtFornecedoresConvidados != null) {
            this._qtFornecedoresConvidadosLicitacao = qtFornecedoresConvidados;
        } else {

            let dados ={
                  msg: 'Quantidade de Fornecedores convidados',
                  severidade: 2,
                  tag: 'dQtFornecedoresConvidados',
                  obj:this
                };

            this.verificarPrioridadeDaInformacao(dados);
            //this.msnValidacao += this.montarMensagem('Quantidade de Fornecedores convidados', null, 'dQtFornecedoresConvidados', null);
        }
    }

    // Quantidade total de fornecedores habilitados à participar do processo
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

    // Quantidade total de fornecedores que participam desse no processo
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

/*  get cdModalidadeLicitacao() {
        return this._cdModalidadeLicitacao;
    }
    set cdModalidadeLicitacao(cdModalidade) {
        if (cdModalidade != null) {
            this._cdModalidadeLicitacao = cdModalidade;
        } else {
            this.msnValidacao += this.montarMensagem('Modalidade da Licitação ', null, 'nCdModulo', null);
        }
    } */

    // 
    get cdModuloLicitacao() {
        return this._cdModuloLicitacao;
    }
    set cdModuloLicitacao(cdModulo) {
        if (cdModulo != null) {
            this._cdModuloLicitacao = cdModulo;
        } else {
            this.msnValidacao += this.montarMensagem('Codigo do Modulo da Licitação ', null, 'nCdModulo', null);
        }
    }

    get idTipoApuracaoLicitacao() {
        return this._idTipoApuracaoLicitacao;
    }
    set idTipoApuracaoLicitacao(idTipoApuracao) {
        if (idTipoApuracao != null) {
            this._idTipoApuracaoLicitacao = idTipoApuracao;
        } else {
            this.msnValidacao += this.montarMensagem('ID do tipo de apuração da Licitação ', null, 'nIdTipoApuracao', null);
        }
    }

    get cdCompradorLicitacao() {
        return this._cdCompradorLicitacao;
    }
    set cdCompradorLicitacao(cdComprador) {
        if (cdComprador != null) {
            this._cdCompradorLicitacao = cdComprador;
        } else {
            this.msnValidacao += this.montarMensagem('Código do comprador da Licitação ', null, 'sCdComprador', null);
        }
    }

    get dsObjetoLicitacao() {
        return this._dsObjetoLicitacao;
    }
    set dsObjetoLicitacao(dsObjeto) {
        if (dsObjeto != null) {
            this._dsObjetoLicitacao = dsObjeto;
        } else {
            this.msnValidacao += this.montarMensagem('Objeto da Licitação ', null, 'sDsObjeto', null);
        }
    }

    get txObservacaoLicitacao() {
        return this._txObservacaoLicitacao;
    }
    set txObservacaoLicitacao(txObservacao) {
        if (txObservacao != null) {
            this._txObservacaoLicitacao = txObservacao;
        } else {
            this.msnValidacao += this.montarMensagem('Observação da Licitação', null, 'sDsObservacao', null);
        }
    }

    get nrEditalLicitacao() {
        return this._nrEditalLicitacao;
    }
    set nrEditalLicitacao(nrEdital) {
        if (nrEdital != null) {
            this._nrEditalLicitacao = nrEdital;
        } else {
            this.msnValidacao += this.montarMensagem('Numero do edital da Licitação', null, 'sNrEdital', null);
        }
    }

    get nuProcessoLicitacao() {
        return this._nuProcessoLicitacao;
    }
    set nuProcessoLicitacao(nuProcesso) {
        if (nuProcesso != null) {
            this._nuProcessoLicitacao = nuProcesso;
        } else {
            this.msnValidacao += this.montarMensagem('Número do Processo da Licitação', null, 'sNrProcessoDisplay', null);
        }
    }

    get dtAgendamentoLicitacao() {
        return this._dtAgendamentoLicitacao;
    }
    set dtAgendamentoLicitacao(dtAgendamento) {
        if (dtAgendamento != null) {
            this._dtAgendamentoLicitacao = dtAgendamento;
        } else {
            this.msnValidacao += this.montarMensagem('Data de agendamento da Licitação', null, 'tDtAgendamento', null);
        }
    }
    
    get dtFinalDisputaLicitacao() {
        return this._dtFinalDisputaLicitacao;
    }
    set dtFinalDisputaLicitacao(dtFinalDisputa) {
        if (dtFinalDisputa != null) {
            this._dtFinalDisputaLicitacao = dtFinalDisputa;
        } else {
            this.msnValidacao += this.montarMensagem('Data final da disputa da Licitação', null, 'tDtFinalDisputa', null);
        }
    }
    
    /* get dtFinalPropostaLicitacao() {
        return this.dtFinalPropostaLicitacao;
    }
    set dtFinalPropostaLicitacao(dtFinalProposta) {
        if (dtFinalProposta != null) {
            this.dtFinalPropostaLicitacao = dtFinalProposta;
        } else {
            this.msnValidacao += this.montarMensagem('Data final da Proposta da Licitação', null, 'tDtFinalDisputa', null);
        }
    } */

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
 
    get dtInicialPropostaLicitacao() {
        return this._dtInicialPropostaLicitacao;
    }
    set dtInicialPropostaLicitacao(dtInicialProposta) {
        if (dtInicialProposta != null) {
            this._dtInicialPropostaLicitacao = dtInicialProposta;
        } else {
            this.msnValidacao += this.montarMensagem('Data inicial da proposta', null, 'tDtInicialProposta', null);
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
        var lsPProcessoLoteDTO = lstPProcessoLote[0].getElementsByTagName("a:PProcessoLoteNegociacaoDTO");

        for (let index = 0; index < lsPProcessoLoteDTO.length; index++) {
            let lote = new PProcessoLoteDTO(lsPProcessoLoteDTO[index])
            this._lstPPRocessoLote[index] = lote;
        }
    }



}