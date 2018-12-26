        // Adciona na lista (listaDados) as informações do dado não recuperado do xml
        let listaDados = [{msg: 'Quantidade de Fornecedores convidados', severidade: '1', tag: 'dQtFornecedoresConvidados', obj: null}];
        //console.log(listaDados);     
        //console.log('=================================');   
        /* console.log(Object.entries(listaDados[0]));     
        console.log('=================================');   
        console.log(Object.assign({},listaDados)[0]);        
        console.log('= /================================');*/   
        
        // Define os Filtros de Severidade das informações
        const informativo   = dadoInf => dadoInf.severidade == 2
        const impeditivo    = dadoImp => dadoImp.severidade == 1
        
        // Monta objeto conforme filtro de severidade e converte a lista (listaDados) para o objeto{} equivalente
        const dadoImpeditivo     = Object.assign({}, listaDados.filter(impeditivo));
        const dadoInformativo    = Object.assign({}, listaDados.filter(informativo));
        
        //console.log(dadoImpeditivo);
        //console.log('=================================');  
        //console.log(dadoInformativo);        
        //console.log('=================================');  
        console.log(dadoImpeditivo[0]);
        console.log('=================================');  
        //console.log(dadoInformativo[0]);        
        
        //Retorna o obejto montado ja com as informações referente a relevancia das informações não localizadas
        //console.log(dadoImpeditivo[0] !== undefined ? dadoImpeditivo : dadoInformativo);        
        //console.log(this.dadoImpeditivo[0] !== undefined ? (Object.assign({}, this.dadoImpeditivo) : (Object.assign({}, this.dadoInformativo);        
        
        
     