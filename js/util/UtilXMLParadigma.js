class UtilXMLParadigma {
    constructor() {
        this._msnValidacao = "";
    }
    

    /*verifica se uma tag contem valor no nó de text
    xmlObjeto       - fragmento xml de onde vai se extrair o valor de uma tag 
    strTag          - tag que se deseja recuperar o valor, se for null então verificar se xmlObjeto já contem o texto.
    isRetornarNull  - retorna null ou vazio
    */
    retornarValor(xmlObjeto, strTag, isRetornarNull) {
        let valor;

        if (strTag != null) {
            valor = this.retornarValorComStrTag(xmlObjeto, strTag);
        } else {
            valor = this.retornarValorSemStrTag(xmlObjeto);
        }

        if (valor != null) {
            return valor;
        } else if (isRetornarNull) {
            return null;
        } else {
            return '';
        }

    }

    isExisteTagNoObjeto(xmlObjeto, strTag){
        if (xmlObjeto.getElementsByTagName(strTag)[0]){
            return true;
        }
        return false;
    }


    retornarValorComStrTag(xmlObjeto, strTag) {

        let isExisteTag = this.isExisteTagNoObjeto(xmlObjeto, strTag);

        if(isExisteTag){

            if (xmlObjeto.getElementsByTagName(strTag)[0].textContent.length != 0) {
                return xmlObjeto.getElementsByTagName(strTag)[0].textContent;
            } else {
                return null;
            }  

        }else{
            return null;
        } 
    }

    retornarValorSemStrTag(xmlObjeto) {
        if (xmlObjeto.textContent.length != 0) {
            return xmlObjeto.textContent;
        } else {
            return null;
        }
    }

    // msn
    get msnValidacao() {
        return this._msnValidacao;
    }
    set msnValidacao(msn) {
        this._msnValidacao = msn;
    }
    

    montarMensagem(descValidacao, listaXml, tagXml, txtComplemento) {

        let txt = '<div class="well well-sm"><h4>' + descValidacao + ' :</h4>';
        txt += '<p>A informação de ' + descValidacao + ' do processo não foi recuperada.';
        txt += 'Esta informação é recuperada no xml na lista &#60;' + listaXml + '&#62; com a tag &#60;' + tagXml + '&#62;';
        txt += txtComplemento | "";
        txt += '</p></div>'
        return txt;        
    }

    toHtml(obj) {

        var htmlTable = ""; //= "<div><table class='.table-bordered'>";
        var htmlTH = "<tr>";
        var htmlTD = "<tr>";
        var i = 0;
        for (var [key, value] of Object.entries(licitacao.licitacaoPE)) {
            htmlTH += "<th>" + key + "</th>";
            htmlTD += "<td>" + value + "</td>";
        }

        return htmlTable += htmlTH + "</tr>" + htmlTD + "</tr>";

    }


    verificarPrioridadeDaInformacao(data){
        let msg = "";
        let tag = "";

        for (var campo in data) {
            console.log(campo + ' = ' + data[campo]);     
            
            if(campo == "severidade" && data[campo] == 1){
                console.log("Nao continua");     
            }       
            if(campo == "msg"){
                msg = data[campo];
            } 
            if(campo == "tag"){
                tag = data[campo];
            } 
          }
          this.msnValidacao += this.montarMensagem(msg, null, tag, null);

    }

    // Montar a tabela de exibição
    tabelaProcessoImportado() {
        let header = "";
        const listaHeader = 
            {   'Dados da Licitacao': 'dadosBasicoProcessoLicitacao', 
                'Dados da Solicitacao de Compra': 'dadosSolicitacaoCompra', 
                'Dados dos Itens da LicitacaoItens da Licitacao': 'dadosItensLicitacao',
                'Dados dos Lotes da Licitacao': 'dadosLotesLicitacao' };


        $.each(listaHeader, function(campo, value){
            header += '<BODY class="paginadados"> <TABLE id="table_conteiner" class="conteiner" cellpadding="0" cellspacing="0">'
            +   '<TBODY><TR><TD class="conteinerconteudodados">	<DIV id="div_conteudodados" class="conteudodados">'
            +   '<TABLE id="table_conteudodados" class="conteudodados" cellpadding="0" cellspacing="0"><TBODY><TR><TH class="headertabeladados" '
            +   '><A href="javascript: '+ listaHeader[campo] +'()">'+campo+'</A></TH></TR>'
            +   '<TR><TD class="conteinerconteudodados"><DIV id="'+ listaHeader[campo] +'" style="display: none;"></DIV> </TD></TR>'
            +   '</TBODY></TABLE></DIV></TD></TR></TBODY></TABLE></BODY>';
        })
        return header;
    } 

    // Informções básica referente ao processo
    dadosBasicoProcessoLicitacao(pVolicitacao) {
        
        let nuProcessoLicitacao                     = pVolicitacao._nuProcessoLicitacao;
        let qtFornecedoresConvidadosLicitacao       = pVolicitacao._qtFornecedoresConvidadosLicitacao;
        let qtFornecedoresHabilitadosLicitacao      = pVolicitacao._qtFornecedoresHabilitadosLicitacao;
        let qtFornecedoresParticipantesLicitacao    = pVolicitacao._qtFornecedoresParticipantesLicitacao;
        let cdModuloLicitacao                       = pVolicitacao._cdModuloLicitacao;
        let idTipoApuracaoLicitacao                 = pVolicitacao._idTipoApuracaoLicitacao;
        let cdCompradorLicitacao                    = pVolicitacao._cdCompradorLicitacao;
        let dsObjetoLicitacao                       = pVolicitacao._dsObjetoLicitacao;
        let txObservacaoLicitacao                   = pVolicitacao._txObservacaoLicitacao;
        let dtAgendamentoLicitacao                  = pVolicitacao._dtAgendamentoLicitacao;
        let tDtSessaoInauguralLicitacao             = pVolicitacao._tDtSessaoInauguralLicitacao;
        let dtInicialPropostaLicitacao              = pVolicitacao._dtInicialPropostaLicitacao;
        let dtFinalPropostaLicitacao              = pVolicitacao._dtFinalPropostaLicitacao; 
     
        let htmlDadosProcesso =  '<TABLE class="conteudodados" cellpadding="0" cellspacing="0"><TBODY>'
                    
                    +'<TR><TH class="campoformulario" width="15%">Número do processo:</TH><TD class="tabeladados" width="35%">' + nuProcessoLicitacao + '</TD>'
                    
                    +'<TH class="campoformulario" width="15%">Quantidade de Convidados:</TH><TD class="tabeladados"  width="35%">'+ qtFornecedoresConvidadosLicitacao +'</TD></TR>'
                    
                    +'<TR><TH class="campoformulario">Fornecedores Habilitados:</TH><TD class="tabeladados">'+qtFornecedoresHabilitadosLicitacao+'</TD>'
                    
                    +'<TH class="campoformulario">Fornecedores Participantes:</TH><TD class="tabeladados">'+qtFornecedoresParticipantesLicitacao+'</TD></TR>'
                    
                    +'<TR><TH class="campoformulario">Modulo da Licitação:</TH><TD class="tabeladados">'+cdModuloLicitacao+'</TD>'
                    
                    +'<TH class="campoformulario">Tipo de Apuração:</TH><TD class="tabeladados">'+idTipoApuracaoLicitacao+'</TD></TR>'
                    
                    +'<TR><TH class="campoformulario">Comprador da Licitação:</TH><TD class="tabeladados">'+cdCompradorLicitacao+'</TD>'
                    
                    +'<TH class="campoformulario">Objeto da Licitação:</TH><TD class="tabeladados">'+dsObjetoLicitacao+'</TD></TR>'
                    
                    +'<TR><TH class="campoformulario">Data do Agentamento:</TH><TD class="tabeladados">'+dtAgendamentoLicitacao+'</TD>'
                    
                    +'<TH class="campoformulario">Data inicial da disputa:</TH><TD class="tabeladados">'+tDtSessaoInauguralLicitacao+'</TD></TR>'
                    
                    +'<TR><TH class="campoformulario">Data do inicio da proposta:</TH><TD class="tabeladados">'+dtInicialPropostaLicitacao+'</TD>'
                   
                    +'<TH class="campoformulario">Data do final da proposta:</TH><TD class="tabeladados">'+dtFinalPropostaLicitacao+'</TD></TR>'
                    
                    +'<TR><TH class="campoformulario" colspan="4"></TH></TR>'
                    
                    +'<TR><TH class="campoformulario">Observação:</TH><TD class="tabeladados" colspan="3">'+txObservacaoLicitacao+'</TD></TR>'
          
                    +'</TBODY></TABLE>';
            
        return htmlDadosProcesso;

    }

        // Informções básica referente ao processo
        dadosGenericoBasicoProcessoLicitacao(pVolicitacao) {

            let htmlDadosProcesso =  '<TABLE class="conteudodados" cellpadding="0" cellspacing="0"><TBODY>';
            /* const listaDadosTabela = 
                                    {   'Número do processo:'           : pVolicitacao._nuProcessoLicitacao, 
                                        'Quantidade de Convidados:'     : pVolicitacao._qtFornecedoresConvidadosLicitacao, 
                                        'Fornecedores Habilitados:'     : pVolicitacao._qtFornecedoresHabilitadosLicitacao,
                                        'Fornecedores Participantes:'   : pVolicitacao._qtFornecedoresParticipantesLicitacao,
                                        'Modulo da Licitação:'          : pVolicitacao._cdModuloLicitacao,
                                        'Tipo de Apuração:'             : pVolicitacao._idTipoApuracaoLicitacao,
                                        'Comprador da Licitação:'       : pVolicitacao._cdCompradorLicitacao,
                                        'Objeto da Licitação:'          : pVolicitacao._dsObjetoLicitacao,
                                        'Data do Agentamento:'          : pVolicitacao._dtAgendamentoLicitacao,
                                        'Data inicial da disputa:'      : pVolicitacao._tDtSessaoInauguralLicitacao,
                                        'Data do inicio da proposta:'   : pVolicitacao._dtInicialPropostaLicitacao,
                                        'Data do final da proposta:'    : pVolicitacao._dtFinalPropostaLicitacao,
                                        'Observação:'                   : pVolicitacao._txObservacaoLicitacao };  */

            const listaDadosTabela = this.getVo(pVolicitacao);
            var cont = 2;
            if(listaDadosTabela.length == 0){
                return htmlDadosProcesso += '<TR><TH class="campoformulario" width="100%">Não há dados para exibir</TH></TR></TBODY></TABLE>';
            }

                for(var campo in listaDadosTabela) {
                    htmlDadosProcesso +=  (cont % 2 === 0 ? '<TR><TH class="campoformulario" width="15%">' : '<TH class="campoformulario" width="15%">') + campo +'</TH>'
                    +'<TD class="tabeladados" width="35%">' + listaDadosTabela[campo] + (cont % 2 !== 0 ? '</TD></TR>' : '</TD>');
                    cont++;
                }
                
                return htmlDadosProcesso += '</TBODY></TABLE>';
            
            
    
        }

        getVo(pVo){

            if(pVo instanceof VOLicitacao){
                const listaDadosTabela = 
                {   'Número do processo:'           : pVo._nuProcessoLicitacao, 
                    'Quantidade de Convidados:'     : pVo._qtFornecedoresConvidadosLicitacao, 
                    'Fornecedores Habilitados:'     : pVo._qtFornecedoresHabilitadosLicitacao,
                    'Fornecedores Participantes:'   : pVo._qtFornecedoresParticipantesLicitacao,
                    'Modulo da Licitação:'          : pVo._cdModuloLicitacao,
                    'Tipo de Apuração:'             : pVo._idTipoApuracaoLicitacao,
                    'Comprador da Licitação:'       : pVo._cdCompradorLicitacao,
                    'Objeto da Licitação:'          : pVo._dsObjetoLicitacao,
                    'Data do Agentamento:'          : pVo._dtAgendamentoLicitacao,
                    'Data inicial da disputa:'      : pVo._tDtSessaoInauguralLicitacao,
                    'Data do inicio da proposta:'   : pVo._dtInicialPropostaLicitacao,
                    'Data do final da proposta:'    : pVo._dtFinalPropostaLicitacao,
                    'Observação:'                   : pVo._txObservacaoLicitacao };  
                    return listaDadosTabela;
            }
            if(pVo instanceof VOSolicitacaoCompra){
                const listaDadosTabela = 
                {   'Solicitacao Compra PeIntegrado:'   : pVo._cdSolicitacaoCompraPeIntegrado,
                    'Código Unidade Gestora Gestão:'    : pVo._cdUnidadeGestoraGestao,
                    'Código Unidade Gestora:'           : pVo._cdUnidadeGestora,
                    'Descrição Resumida SA:'            : pVo._dsResumidaSolicitacaoCompra,
                    'Ano da Solicitacão de Compra:'     : pVo._nuAnoSolicitacaoCompra }
                
                return listaDadosTabela;
            }
            if(pVo instanceof VOLicitacaoItem){
                const listaDadosTabela = "";
                /* {   'Solicitacao Compra PeIntegrado:'   : pVo._cdSolicitacaoCompraPeIntegrado,
                    'Código Unidade Gestora Gestão:'    : pVo._cdUnidadeGestoraGestao,
                    'Código Unidade Gestora:'           : pVo._cdUnidadeGestora,
                    'Descrição Resumida SA:'            : pVo._dsResumidaSolicitacaoCompra,
                    'Ano da Solicitacão de Compra:'     : pVo._nuAnoSolicitacaoCompra } */
                
                return listaDadosTabela;
            }
        }
}