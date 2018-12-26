class VOEntidade {
    constructor() {
        this._msnValidacao = "";
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
        txt += '</p></div>';
        return txt;
        //txt += 'a tag <a:nStParticipacao> tem o valor = 1 </p</div>';
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
}
