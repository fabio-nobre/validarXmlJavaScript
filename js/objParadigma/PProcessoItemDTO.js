class PProcessoItemDTO extends UtilXMLParadigma {

    constructor(pProcessoItem, ptipoLicitacao) {

        super();

        this._dQtItemItemSa;
        this._dQtParticipanteItemSa;        
        this._dVlLanceSa;
        this._dVlReferenciaSa;
        this._nCdItemSequencialSa;
        this._nCdLoteSequencialSa;
        this._nCdMarcaSa;
        this._nStSituacaoSa;
        this._sCdFornecedorSa;
        this._nDsMarcaSa;
        this._sNrProtocoloSa;
        this._tDtEncerramentoSa;
        this._tDtFinalizadoSa;
        this._tDtRevogadoSa;
        this._sCdItemRequisicaoEmpresa;
        
        this._lstItemResultadoDTO = [];
        this._lstItemEnderecoEValorReferencia = [];
        this._lstOtdOrdemCompraRequisicaoItensSA = [];
        this.carregarDadosItem(pProcessoItem, ptipoLicitacao);

    }

    carregarDadosItem(pProcessoItem, ptipoLicitacao) {

        let item = pProcessoItem;

        this.dQtItemItemSa          =   this.retornarValor(item, "a:dQtItem", true);
        this.dQtParticipanteItemSa  =   this.retornarValor(item, "a:dQtParticipanteItem", true);
        this.dVlLanceSa             =   this.retornarValor(item, "a:dVlLance", true);
        this.dVlReferenciaSa        =   this.retornarValor(item, "a:dVlReferencia", true);
        this.nCdItemSequencialSa    =   this.retornarValor(item, "a:nCdItemSequencial", true);

        if(ptipoLicitacao != "1"){
            this.nCdLoteSequencialSa    =   this.retornarValor(item, "a:nCdLoteSequencial", true);
        }
        
        this.nCdMarcaSa             =   this.retornarValor(item, "a:nCdMarca", true);
        this.nStSituacaoSa          =   this.retornarValor(item, "a:nStSituacao", true);
        this.sCdFornecedorSa        =   this.retornarValor(item, "a:sCdFornecedor", true);
        this.sDsMarcaSa             =   this.retornarValor(item, "a:sDsMarca", true);
        this.sNrProtocoloSa         =   this.retornarValor(item, "a:sNrProtocolo", true);
        this.tDtEncerramentoSa      =   this.retornarValor(item, "a:tDtEncerramento", true);
        this.tDtFinalizadoSa        =   this.retornarValor(item, "a:tDtFinalizado", true);
        this.tDtRevogadoSa          =   this.retornarValor(item, "a:tDtRevogado", true);
    
        this.retornarOTDOrdemCompraRequisicaoItensSA(pProcessoItem);

       /* 
        this.lstItemEnderecoEValorReferencia = this.enderecoItensSAVencedorValorReferencia(item);
        this.carregarLstProcessoItemResultadoDTO(pProcessoItem); */

    }

    // Métodos GETs e SETs  
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

    get dQtParticipanteItemSa() {
        return this._dQtParticipanteItemSa;
    }
    set dQtParticipanteItemSa(dQtParticipanteItemSa) {
        if (dQtParticipanteItemSa != null) {
            this._dQtParticipanteItemSa = dQtParticipanteItemSa;
        } else {
            this._msnValidacao += this.montarMensagem('Quantidade de participantes', 'lsPProcessoItemDTO', 'dQtParticipanteItem', null);
        }
    }

    get dVlLanceSa() {
        return this._dVlLanceSa;
    }
    set dVlLanceSa(dVlLanceSa) {
        if (dVlLanceSa != null) {
            this._dVlLanceSa = dVlLanceSa;
        } else {
            this._msnValidacao += this.montarMensagem('Valor do lance', 'lsPProcessoItemDTO', 'dVlLance', null);
        }
    }    

    get dVlReferenciaSa() {
        return this._dVlReferenciaSa;
    }
    set dVlReferenciaSa(dVlReferenciaSa) {
        if (dVlReferenciaSa != null) {
            this._dVlReferenciaSa = dVlReferenciaSa;
        } else {
            this._msnValidacao += this.montarMensagem('Valor de referencia', 'lsPProcessoItemDTO', 'dVlReferencia', null);
        }
    }  
    
    // Código Licitação Item
    get nCdItemSequencialSa() {
        return this._nCdItemSequencialSa;
    }
    set nCdItemSequencialSa(nCdItemSequencialSa) {
        if (nCdItemSequencialSa != null) {
            this._nCdItemSequencialSa = nCdItemSequencialSa;
        } else {
            this._msnValidacao += this.montarMensagem('Código Licitação Item', 'lsPProcessoItemDTO', 'nCdItemSequencial', null);
        }
    }

    // Código Licitação Lote
    get nCdLoteSequencialSa() {
        return this._nCdLoteSequencialSa;
    }
    set nCdLoteSequencialSa(nCdLoteSequencialSa) {
        if (nCdLoteSequencialSa != null) {
            this._nCdLoteSequencialSa = nCdLoteSequencialSa;
        } else {
            this._msnValidacao += this.montarMensagem('Código Licitação Lote', 'lsPProcessoItemDTO', 'nCdLoteSequencial', null);
        }
    }

    get nCdMarcaSa() {
        return this._nCdMarcaSa;
    }
    set nCdMarcaSa(nCdMarcaSa) {
        if (nCdMarcaSa != null) {
            this._nCdMarcaSa = nCdMarcaSa;
        } else {
            this._msnValidacao += this.montarMensagem('Código da marca', 'lsPProcessoItemDTO', 'nCdMarca', null);
        }
    }

    get nStSituacaoSa() {
        return this._nStSituacaoSa;
    }
    set nStSituacaoSa(nStSituacaoSa) {
        if (nStSituacaoSa != null) {
            this._nStSituacaoSa = nStSituacaoSa;
        } else {
            this._msnValidacao += this.montarMensagem('Situação', 'lsPProcessoItemDTO', 'nStSituacao', null);
        }
    }

    // Código do fornecedor
    get sCdFornecedorSa() {
        return this._sCdFornecedorSa;
    }
    set sCdFornecedorSa(sCdFornecedorSa) {
        if (sCdFornecedorSa != null) {
            this._sCdFornecedorSa = sCdFornecedorSa;
        } else {
            this._msnValidacao += this.montarMensagem('Código do fornecedor', 'lsPProcessoItemDTO', 'sCdFornecedor', null);
        }
    }
    
    get sDsMarcaSa() {
        return this._sDsMarcaSa;
    }
    set sDsMarcaSa(sDsMarcaSa) {
        if (sDsMarcaSa != null) {
            this._sDsMarcaSa = sDsMarcaSa;
        } else {
            this._msnValidacao += this.montarMensagem('Descriçao da marca', 'lsPProcessoItemDTO', 'sDsMarca', null);
        }
    }

    get sNrProtocoloSa() {
        return this._sNrProtocoloSa;
    }
    set sNrProtocoloSa(sNrProtocoloSa) {
        if (sNrProtocoloSa != null) {
            this._sNrProtocoloSa = sNrProtocoloSa;
        } else {
            this._msnValidacao += this.montarMensagem('Número do protocolo da SA', 'lsPProcessoItemDTO', 'sNrProtocolo', null);
        }
    }
    
    get tDtEncerramentoSa() {
        return this._tDtEncerramentoSa;
    }
    set tDtEncerramentoSa(tDtEncerramentoSa) {
        if (tDtEncerramentoSa != null) {
            this._tDtEncerramentoSa = tDtEncerramentoSa;
        } else {
            this._msnValidacao += this.montarMensagem('Data de encerramento', 'lsPProcessoItemDTO', 'tDtEncerramento', null);
        }
    }
    
    get tDtFinalizadoSa() {
        return this._tDtFinalizadoSa;
    }
    set tDtFinalizadoSa(tDtFinalizadoSa) {
        if (tDtFinalizadoSa != null) {
            this._tDtFinalizadoSa = tDtFinalizadoSa;
        } else {
            this._msnValidacao += this.montarMensagem('Data de finalização', 'lsPProcessoItemDTO', 'tDtFinalizado', null);
        }
    }
    
    get tDtRevogadoSa() {
        return this._tDtRevogadoSa;
    }
    set tDtRevogadoSa(tDtRevogadoSa) {
        if (tDtRevogadoSa != null) {
            this._tDtRevogadoSa = tDtRevogadoSa;
        } else {
            this._msnValidacao += this.montarMensagem('Data de revogação', 'lsPProcessoItemDTO', 'tDtRevogado', null);
        }
    }
    
    get sCdComprador() {
        return this._sCdComprador;
    }
    set sCdComprador(sCdComprador) {
        if (sCdComprador != null) {
            this._sCdComprador = sCdComprador;
        } else {
            this._msnValidacao += this.montarMensagem('Código comprado item', 'lstPProcessoOrdemCompraRequisicao', 'sCdComprador', null);
        }
    }

    get sCdItemRequisicaoEmpresa() {
        return this._sCdItemRequisicaoEmpresa;
    }
    set sCdItemRequisicaoEmpresa(sCdItemRequisicaoEmpresa) {
        if (sCdItemRequisicaoEmpresa != null) {
            this._sCdItemRequisicaoEmpresa = sCdItemRequisicaoEmpresa;
        } else {
            this._msnValidacao += this.montarMensagem('Código requisicao empresa item', 'lstPProcessoOrdemCompraRequisicao', 'sCdItemRequisicaoEmpresa', null);
        }
    }

    get sCdRequisicaoEmpresa() {
        return this._sCdRequisicaoEmpresa;
    }
    set sCdRequisicaoEmpresa(sCdRequisicaoEmpresa) {
        if (sCdRequisicaoEmpresa != null) {
            this._sCdRequisicaoEmpresa = sCdRequisicaoEmpresa;
        } else {
            this._msnValidacao += this.montarMensagem('Código requisicao empresa', 'lstPProcessoOrdemCompraRequisicao', 'sCdRequisicaoEmpresa', null);
        }
    }

    get lstOtdOrdemCompraRequisicaoItensSA() {
        return this._lstOtdOrdemCompraRequisicaoItensSA;
    }
    set lstOtdOrdemCompraRequisicaoItensSA(_lstOtdOrdemCompraRequisicaoItensSA) {
        if (_lstOtdOrdemCompraRequisicaoItensSA != null) {
            this._lstOtdOrdemCompraRequisicaoItensSA = _lstOtdOrdemCompraRequisicaoItensSA;
        } else {
            this._msnValidacao += this.montarMensagem('Lista Endereço dos itens vencidos',
                'lstPProcessoOrdemCompraRequisicao', 'sCdComprador , sCdItemRequisicaoEmpresa , sCdRequisicaoEmpresa', null);
        }
    }
    // Fim dos GETs e SETs

/*     carregarLstProcessoItemResultadoDTO(pProcessoItem) {

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

     retornarOTDOrdemCompraRequisicaoItensSA(pProcessoItem) {

        for (let index = 0; index < lsPProcessoItemDTO.length; index++) {
            let itemDTO = new PProcessoItemDTO(lsPProcessoItemDTO[index]);
            this._lstPPRocessoItemDTO[index] = itemDTO;
        }

    } */

    retornarOTDOrdemCompraRequisicaoItensSA(pProcessoItemDTO) {
    
        let lstPProcessoOrdemCompraRequisicao   = pProcessoItemDTO.getElementsByTagName("a:lstPProcessoOrdemCompraRequisicao");
       
        for (let index = 0; index < lstPProcessoOrdemCompraRequisicao.length; index++) {
            var lsRequisicaoDTO             =   lstPProcessoOrdemCompraRequisicao[index].getElementsByTagName("a:PProcessoOrdemCompraRequisicaoDTO");
            this.sCdComprador               =   this.retornarValor(lsRequisicaoDTO[index], "a:sCdComprador", true);
            this.sCdItemRequisicaoEmpresa   =   this.retornarValor(lsRequisicaoDTO[index], "a:sCdItemRequisicaoEmpresa", true);
            this.sCdRequisicaoEmpresa       =   this.retornarValor(lsRequisicaoDTO[index], "a:sCdRequisicaoEmpresa", true);
            this._lstOtdOrdemCompraRequisicaoItensSA[index] =  'sCdComprador: '+  this.sCdComprador +' sCdItemRequisicaoEmpresa: '+ this.sCdItemRequisicaoEmpresa +' sCdRequisicaoEmpresa: '+ this.sCdRequisicaoEmpresa;
        }
    }
}