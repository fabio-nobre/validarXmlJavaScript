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

}