export interface PCFORNEC {

                /**
                 * Código
                 */
                CODFORNEC: number;

                /**
                 * Fornecedor
                 */
                FORNECEDOR?: string;

                /**
                 * Representante
                 */
                REPRES?: string;

                /**
                 * Contato
                 */
                CONTATO?: string;

                /**
                 * Endereço
                 */
                ENDER?: string;

                /**
                 * Cidade
                 */
                CIDADE?: string;

                /**
                 * UF
                 */
                ESTADO?: string;

                /**
                 * CEP
                 */
                CEP?: string;

                /**
                 * Telefone
                 */
                TELREP?: string;

                /**
                 * Fone
                 */
                TELFAB?: string;

                /**
                 * Celular
                 */
                TELEXREP?: string;

                /**
                 * Telefax
                 */
                TELEXFAB?: string;

                /**
                 * Inscrição Estadual
                 */
                IE?: string;

                /**
                 * CNPJ/CPF
                 */
                CGC?: string;

                /**
                 * Fax
                 */
                FAXREP?: string;

                /**
                 * Fax
                 */
                FAXFAB?: string;

                /**
                 * Bairro
                 */
                BAIRRO?: string;

                /**
                 * Prazo entrega - Lead Time (dias)
                 */
                PRAZOENTREGA?: number;

                /**
                 * Bloqueado
                 */
                BLOQUEIO?: string;

                /**
                 * Data
                 */
                DTBLOQUEIO?: Date;

                /**
                 * Observação
                 */
                OBS?: string;

                /**
                 * Revenda
                 */
                REVENDA?: string;

                /**
                 * Cód.Cliente
                 */
                CODCLI?: number;

                /**
                 * Comprador
                 */
                CODCOMPRADOR?: number;

                /**
                 * Contato
                 */
                REP_CONTATO?: string;

                /**
                 * Endereço
                 */
                REP_ENDERECO?: string;

                /**
                 * Bairro
                 */
                REP_BAIRRO?: string;

                /**
                 * Cidade
                 */
                REP_CIDADE?: string;

                /**
                 * UF
                 */
                REP_UF?: string;

                /**
                 * CEP
                 */
                REP_CEP?: number;

                /**
                 * Excluido
                 */
                EXCLUIDO?: string;

                /**
                 * Ledtime
                 */
                LEDTIME?: number;

                /**
                 * Cobertura
                 */
                COBERTURA?: number;

                /**
                 * Regional
                 */
                REGIONAL?: string;

                /**
                 * Centralização
                 */
                CENTRALIZACAO?: string;

                /**
                 * Data Cadastro
                 */
                DTCADASTRO?: Date;

                /**
                 * Data Exclusão
                 */
                DTEXCLUSAO?: Date;

                /**
                 * Observação
                 */
                OBS2?: string;

                /**
                 * Prazo mín. pagto(dias)
                 */
                PRAZOMIN?: number;

                /**
                 * Aceita negociar desconto para pagamento antecipado (Permitido apenas após recebimento da mercadoria)
                 */
                DESCPAGTODUP?: string;

                /**
                 * Endereço de cobrança
                 */
                ENDERCOB?: string;

                /**
                 * Bairro
                 */
                BAIRROCOB?: string;

                /**
                 * Município
                 */
                MUNICOB?: string;

                /**
                 * Estado
                 */
                ESTCOB?: string;

                /**
                 * CEP
                 */
                CEPCOB?: string;

                /**
                 * Telefone
                 */
                TELCOB?: string;

                /**
                 * Estratégico  (Para Filtrar Rel. Gerenciais)
                 */
                ESTRATEGICO?: string;

                /**
                 * Observações
                 */
                OBSERVACAO?: string;

                /**
                 * Departamento
                 */
                CODDEPTO?: number;

                /**
                 * Cod.Fornec.Princ
                 */
                CODFORNECPRINC?: number;

                /**
                 * Supervisor/Gerente
                 */
                CONTATOCOM?: string;

                /**
                 * Telefone
                 */
                TELEFONECOM?: string;

                /**
                 * Contato Administrativo
                 */
                CONTATOADM?: string;

                /**
                 * Telefone
                 */
                TELEFONEADM?: string;

                /**
                 * Dia semana atend
                 */
                DIASEMANAATEND?: number;

                /**
                 * Periocidadeatend
                 */
                PERIOCIDADEATEND?: number;

                /**
                 * Dt prox atend
                 */
                DTPROXATEND?: Date;

                /**
                 * Classe venda
                 */
                CLASSEVENDA?: string;

                /**
                 * Classe MC
                 */
                CLASSEMC?: string;

                /**
                 * Classe Estoque
                 */
                CLASSEESTOQUE?: string;

                /**
                 * Classe Compra
                 */
                CLASSECOMPRA?: string;

                /**
                 * E-Mail
                 */
                EMAIL?: string;

                /**
                 * Condições Pagto. 1
                 */
                PRAZO1?: number;

                /**
                 * Condições Pagto. 2
                 */
                PRAZO2?: number;

                /**
                 * Condições Pagto. 3
                 */
                PRAZO3?: number;

                /**
                 * Condições Pagto. 4
                 */
                PRAZO4?: number;

                /**
                 * Condições Pagto. 5
                 */
                PRAZO5?: number;

                /**
                 * Condições Pagto. 6
                 */
                PRAZO6?: number;

                /**
                 * % Desp. financ. (Vendor)
                 */
                PERCDESPFIN?: number;

                /**
                 * % Desc. financ. duplic.
                 */
                PERCDESCFIN?: number;

                /**
                 * Nº Banco
                 */
                NUMBANCODOC?: number;

                /**
                 * Agência
                 */
                NUMAGENCIADOC?: number;

                /**
                 * Conta Corrente
                 */
                NUMCCORRENTEDOC?: string;

                /**
                 * Fantasia
                 */
                FANTASIA?: string;

                /**
                 * Nº Dependentes IRRF:
                 */
                NUMDEPIRRF?: number;

                /**
                 * Vl Dedução para IRRF:
                 */
                VALORDEDUCAOIRRF?: number;

                /**
                 * RG
                 */
                RG?: string;

                /**
                 * Distribuidora
                 */
                CODDISTRIB?: string;

                /**
                 * Valor do frete/KG
                 */
                VLFRETEKG?: number;

                /**
                 * Percoutroscustosfrete
                 */
                PERCOUTROSCUSTOSFRETE?: number;

                /**
                 * Distrib.Exclusivo
                 */
                DISTRIB?: string;

                /**
                 * Insc. entrangeira
                 */
                INSCESTRANGEIRA?: number;

                /**
                 * Indústria local
                 */
                INDUSTRIALOCAL?: string;

                /**
                 * Grupo Campanha
                 */
                GRUPOCAMPANHA?: number;

                /**
                 * Percmaxbonific
                 */
                PERCMAXBONIFIC?: number;

                /**
                 * Percpisred
                 */
                PERCPISRED?: number;

                /**
                 * Fornecedor Suframa
                 */
                SUFRAMA?: string;

                /**
                 * Inscrição do Prod. Rural
                 */
                CODPRODUTORRURAL?: string;

                /**
                 * DvAg
                 */
                DVAG?: string;

                /**
                 * DvCC
                 */
                DVCC?: string;

                /**
                 * Emitir pedido na unidade master
                 */
                TIPOEMBALAGEMPEDIDO?: string;

                /**
                 * Supervisor
                 */
                SUPERVISORVERBA?: string;

                /**
                 * Contato
                 */
                CONTATOVERBA?: string;

                /**
                 * CPF
                 */
                CPFCONTATOVERBA?: string;

                /**
                 * RG
                 */
                RGCONTATOVERBA?: string;

                /**
                 * Data Aniversário
                 */
                REP_DTANIVERSARIO?: Date;

                /**
                 * Contato
                 */
                ADM_CONTATO?: string;

                /**
                 * Data Aniversário
                 */
                ADM_DTANIVERSARIO?: Date;

                /**
                 * Endereço
                 */
                ADM_ENDERECO?: string;

                /**
                 * Bairro
                 */
                ADM_BAIRRO?: string;

                /**
                 * Cidade
                 */
                ADM_CIDADE?: string;

                /**
                 * UF
                 */
                ADM_UF?: string;

                /**
                 * CEP
                 */
                ADM_CEP?: number;

                /**
                 * Contato
                 */
                COM_CONTATO?: string;

                /**
                 * Data Aniversário
                 */
                COM_DTANIVERSARIO?: Date;

                /**
                 * Endereço
                 */
                COM_ENDERECO?: string;

                /**
                 * Bairro
                 */
                COM_BAIRRO?: string;

                /**
                 * Cidade
                 */
                COM_CIDADE?: string;

                /**
                 * UF
                 */
                COM_UF?: string;

                /**
                 * CEP
                 */
                COM_CEP?: number;

                /**
                 * Transporte próprio
                 */
                TRANSPORTEPROPRIO?: string;

                /**
                 * Valor do pedágio
                 */
                VLPEDAGIO?: number;

                /**
                 * % GRIS
                 */
                PERGRIS?: number;

                /**
                 * ICMS sobre taxa minima
                 */
                ICMSSOBRETXMINIMA?: string;

                /**
                 * Peso limite (gatilho)
                 */
                GATILHO?: number;

                /**
                 * Tipo de cálculo de frete
                 */
                TIPOCALCFRETE?: number;

                /**
                 * Taxa à vista
                 */
                TAXA0?: number;

                /**
                 * Taxa 7 dias
                 */
                TAXA7?: number;

                /**
                 * Taxa 14 dias
                 */
                TAXA14?: number;

                /**
                 * Taxa 21 dias
                 */
                TAXA21?: number;

                /**
                 * Taxa 28 dias
                 */
                TAXA28?: number;

                /**
                 * Taxa 35 dias
                 */
                TAXA35?: number;

                /**
                 * Taxa 42 dias
                 */
                TAXA42?: number;

                /**
                 * Dt ult contato cob
                 */
                DTULTCONTATOCOB?: Date;

                /**
                 * Cod func ult contato cob
                 */
                CODFUNCULTCONTATOCOB?: number;

                /**
                 * Dt prox contato cob
                 */
                DTPROXCONTATOCOB?: Date;

                /**
                 * Cód. Municipio/IBGE:
                 */
                CODMUNICIPIO?: number;

                /**
                 * E-Mail
                 */
                COM_EMAIL?: string;

                /**
                 * E-Mail
                 */
                REP_EMAIL?: string;

                /**
                 * E-Mail
                 */
                SUP_EMAIL?: string;

                /**
                 * Data de validade
                 */
                DTVALIDADE?: Date;

                /**
                 * Tipo fornecedor
                 */
                TIPOFORNEC?: string;

                /**
                 * Utiliza descontos para cálculo do IPI
                 */
                UTILIZADESCCALCIPI?: string;

                /**
                 * Utiliza frete calc IPI
                 */
                UTILIZAFRETECALCIPI?: string;

                /**
                 * Vl. mín. pedido compra
                 */
                VLMINPEDCOMPRA?: number;

                /**
                 * Celular
                 */
                SUP_CELULAR?: string;

                /**
                 * Celular
                 */
                COM_CELULAR?: string;

                /**
                 * Deduzir Suframa Crédito ICMS
                 */
                DEDUZIRSUFRAMACALCCREDICM?: string;

                /**
                 * Deduzir Suframa Crédito PIS/COFINS
                 */
                DEDUZIRSUFRAMACALCCREDPIS?: string;

                /**
                 * Considera Outras Desp.(Selo) p/Calc. ICMS
                 */
                UTILIZAOUTRASDESPCALCICMS?: string;

                /**
                 * Deduzir Descontos p/Calc. Suframa
                 */
                CALCSUFRAMASOBREPLIQUIDO?: string;

                /**
                 * Deduzir Suframa Base ST Aliquota Interna
                 */
                DEDUZIRSUFRAMABCSTALIQ1?: string;

                /**
                 * Utiliza Descontos para Cálculo do IPI
                 */
                CALCIPICOMDESC?: string;

                /**
                 * Utiliza Frete CIF para Cálculo do IPI
                 */
                CALCIPICOMFRETENF?: string;

                /**
                 * Soma frete FOB no ST Guia
                 */
                SOMAFRETEFOBNOSTFORANF?: string;

                /**
                 * Tipo de pagamento
                 */
                LOCALIZACAO?: string;

                /**
                 * Considera IPI para cálculo PIS/COFINS
                 */
                CALCULAPISCOFINSCOMIPI?: string;

                /**
                 * Aceita Entrega Antecipada
                 */
                ACEITAENTREGAANCECIP?: string;

                /**
                 * Código da cidade IBGE, onde ao ser preenchido, no momento da gravação do cadastro, será atualizado os campos: Cidade, Cód.Município IBGE, UF e País conforme cadastro de cidade rotina 577.
                 */
                CODCIDADE?: number;

                /**
                 * Considera FRETE para cálculo ICMS
                 */
                UTILIZAFRETECALCICMS?: string;

                /**
                 * Tipo frete
                 */
                TIPOFRETECIFFOB?: string;

                /**
                 * Destaca Selo na Nota Fiscal
                 */
                DESTACASELONF?: string;

                /**
                 * Utilizar percentual de bonitifcação por fornecedor
                 */
                UTILIZAPERCBON?: string;

                /**
                 * Dinheiro
                 */
                PERCBONDIN?: number;

                /**
                 * Mercadoria
                 */
                PERCBONMERC?: number;

                /**
                 * Percentual de comissão
                 */
                PERCCOMISSAO?: number;

                /**
                 * Utilizado na rotina 209 e 1301, caso o valor seja igual a 'S' será utilizado o valor de outras despesas para cálculo de IPI.
                 */
                UTILIZAOUTRASDESPCALCIPI?: string;

                /**
                 * Valor limite NF
                 */
                VLLIMITEFRETEMIN?: number;

                /**
                 * % acréscimo fluvial
                 */
                PERCFLUVIAL?: number;

                /**
                 * Conta lançamento do frete
                 */
                CODCONTALANCFRETE?: number;

                /**
                 * Outras verbas
                 */
                PERCBONOUTRAS?: number;

                /**
                 * Esse campo será utilizada pelas rotinas de pedido de compra, fornecedor e entrada de mercadoria quando esse campo possuir o valor igual a [S] os descontos comerciais serão utilizados Substituição Tributária (ST).
                 */
                UTILIZADESCCALCST?: string;

                /**
                 * Esse campo será utilizada pelas rotinas de pedido de compra, fornecedor e entrada de mercadoria quando esse campo possuir o valor igual a [S] os descontos comerciais serão utilizados ICMS.
                 */
                UTILIZADESCCALCICMS?: string;

                /**
                 * Considera IPI Calc. Base ST
                 */
                CONSIPICALCBASEST?: string;

                /**
                 * Considera IPI Calc. Base Créd Presumido
                 */
                CONSIPICALCBASECREPRES?: string;

                /**
                 * Classe do Fornecedor.
                 */
                CLASSE?: string;

                /**
                 * Indica se é de reabastecimento.
                 */
                EREABASTECIMENTO?: string;

                /**
                 * Indica que transportadora é redespacho.
                 */
                EREDESPACHO?: string;

                /**
                 * Código da Parcela.
                 */
                CODPARCELA?: number;

                /**
                 * Campo de observação do representante.
                 */
                REP_OBS?: string;

                /**
                 * Utiliza Frete FOB para Cálculo do IPI
                 */
                CALCIPICOMFRETEFOB?: string;

                /**
                 * Data da última importação do registro na filial de destino da informação.
                 */
                DTIMPORTINTEGRACAO?: Date;

                /**
                 * Data da última alteração do registro no banco de dados.
                 */
                DTULTALTER?: Date;

                /**
                 * Utilizado no cálculo de Custo da entrada. A entrada busca esse percentual informado no Pedido de Compra, já o Pedido busca esse acréscimo do cadastro produto/filial rotina 238.
                 */
                USAPERCALTERCUSTOENT?: string;

                /**
                 * Campo para armazenar o tipo de pessoa (F-Física ou J-Jurídica).
                 */
                TIPOPESSOA?: string;

                /**
                 * Campo para armazenar alíquota do IRRF.
                 */
                PERCIRRF?: number;

                /**
                 * Campo para armazenar código da conta de despesa para o IRRF.
                 */
                CODCONTAIRRF?: number;

                /**
                 * Campo para armazenar alíquota do ISS.
                 */
                PERCISS?: number;

                /**
                 * Campo para armazenar código da conta de despesa para o ISS.
                 */
                CODCONTAISS?: number;

                /**
                 * Campo para armazenar código da conta de despesa para o CSRF.
                 */
                CODCONTACSRF?: number;

                /**
                 * Campo para armazenar código da conta de despesa para o INSS.
                 */
                CODCONTAINSS?: number;

                /**
                 * Exige redespacho?
                 */
                EXIGEREDESPACHO?: string;

                /**
                 * Indica o valor percentual frete.
                 */
                PERFRETEVALOR?: number;

                /**
                 * Consolidar verba de diferença de preço.
                 */
                CONSOLIDARDIFPRECOVERBA?: string;

                /**
                 * Esse campo será utilizado para calcular o % de pagamento do Funrural para os fornecedores produtores rurais.'CALCFUNRURAL' (rotina 132) estiver marcado como SIM.
                 */
                PERCIMPPRODUTORURAL?: number;

                /**
                 * Número da inscrição municipal.
                 */
                INSCMUNICIP?: string;

                /**
                 * Considera frete FOB para o calculo do ICMS antecipado.
                 */
                USAPERCICMSNAALIQEXTST?: string;

                /**
                 * Considera frete FOB para o calculo do ICMS antecipado.
                 */
                CONSFRETEFOBCALCICMSANTECIP?: string;

                /**
                 * Indica a inscrição estadual para fornecedor substituto tribuário.
                 */
                IEST?: string;

                /**
                 * Indica o código fornecedor ST guia.
                 */
                CODFORNECSTGUIA?: number;

                /**
                 * Indica se utiliza o número de negociação.
                 */
                USANUMNEGOCIACAO?: string;

                /**
                 * Indica o fornecedor isento de ST.
                 */
                ISENTOST?: string;

                /**
                 * Indica o código do usuário do sistema Winthor vinculado ao fornecedor.
                 */
                CODUSUARIOWINTHOR?: number;

                /**
                 * Indica a data da ultima alteração nesta tabela.
                 */
                DTULTALTERSRVPRC?: Date;

                /**
                 * Indica se calcula ST guia alíquota externa.
                 */
                CALCSTGUIAALIQEXT?: string;

                /**
                 * Indica o código da transportadora do frete.
                 */
                CODFORNECFRETE?: number;

                /**
                 * Calcula IPI com base no peso líquido.
                 */
                CALCULARIPIPESOLIQ?: string;

                /**
                 * Indica optante pelo simples nacional.
                 */
                SIMPLESNACIONAL?: string;

                /**
                 * Indica o complemento do endereço.
                 */
                COMPLEMENTOEND?: string;

                /**
                 * Indica o numero do endereço.
                 */
                NUMEROEND?: string;

                /**
                 * Indica o código parcela ST guia.
                 */
                CODPARCELASTGUIA?: number;

                /**
                 * Indica o código nacional atividade economica.
                 */
                CAE?: string;

                /**
                 * Gera crédito diferença de preço.
                 */
                GERACREDDIFPRECO?: string;

                /**
                 * Utiliza outras despesa para calculo do desconto SUFRAMA.
                 */
                UTILIZAOUTDESPCALCSUFRAMA?: string;

                /**
                 * Considerar o ST NF na base de cálculo do PIS/COFINS.
                 */
                CONSSTNFPISCOFINS?: string;

                /**
                 * Código do país do fornecedor.
                 */
                CODPAIS?: number;

                /**
                 * Classifica o tipo do fornecedor comercial.
                 */
                CLASSIFICTIPOFORNEC?: string;

                /**
                 * Informa se a transportadora é autônoma ou não.
                 */
                TRANSPAUTONOMO?: string;

                /**
                 * ID Nextel do Representante do Fornecedor.
                 */
                REP_NEXTELID?: string;

                /**
                 * Percentual de PIS NF serviço.
                 */
                PERCPISNFSERVICO?: number;

                /**
                 * Percentual de COFINS NF serviço.
                 */
                PERCCOFINSNFSERVICO?: number;

                /**
                 * Código conta PIS.
                 */
                CODCONTAPIS?: number;

                /**
                 * Código conta COFINS.
                 */
                CODCONTACOFINS?: number;

                /**
                 * Código do tipo de fornecedor de importação.
                 */
                FORNECIMPORTACAO?: number;

                /**
                 * Peso mínimo que o frete transporta.
                 */
                PESOMINTRANSP?: number;

                /**
                 * Taxa de emissão de conhecimento de transporte.
                 */
                TAXAEMISSAOCT?: number;

                /**
                 * Número do INSS do fornecedor.
                 */
                INSS?: number;

                /**
                 * Campo auxiliar para armazenar o CGC sem formatação.
                 */
                CGCAUX?: string;

                /**
                 * Código de conta utilizado no contábil, para contabilização dos adiantamentos aos fornecedores.
                 */
                CODCONTACONTABADIANTFOR?: number;

                /**
                 * Define se o vendor será calculado sobre o total da Pedido de compra e/ou NF ou por prazo de pagamento
                 */
                CALCDESPFINPRAZOPGTO?: string;

                /**
                 * Define se o valor do Seguro e Outras Despesas vai somar a base de calculo do PIS/COFINS.
                 */
                USAOUTRASDESPSEGUROPISCOFINS?: string;

                /**
                 * Alvará ANVISA / Número Alvará
                 */
                NUMALVARAANVISA?: string;

                /**
                 * Data Validade Alvará ANVISA
                 */
                DTVENCALVARAANVISA?: Date;

                /**
                 * Alvará Funcionamento / Número Alvará
                 */
                NUMALVARAFUNC?: string;

                /**
                 * Alvará Funcionamento / Data  de Vencimento do Alvará
                 */
                DTVENCALVARAFUNC?: Date;

                /**
                 * Alvará Psicotrópico / Número Alvará
                 */
                NUMALVARAPSICO?: string;

                /**
                 * Data Validade Alvará Psicotrópico
                 */
                DTVENCALVARAPSICO?: Date;

                /**
                 * Num CRF
                 */
                CRF?: string;

                /**
                 * Alvará CRF / Data  de Vencimento do Alvará
                 */
                DTVENCCRF?: Date;

                /**
                 * Fornecedor utiliza crédito PIS/COFINS entrada bonificada
                 */
                USACREDPISCOFINSENTBONIFIC?: string;

                /**
                 * Contribuinte ICMS
                 */
                CONTRIBUINTEICMS?: string;

                /**
                 * Recalcula tributação do pedido de compra no momento da entrada NF
                 */
                RECALCTRIBENT?: string;

                /**
                 * Calcula ICMS sobre Vl.Pauta maior valor(Importação).
                 */
                CONSMAIORICMSVLPAUTA?: string;

                /**
                 * BLOQUEADO SEFAZ.
                 */
                BLOQUEIOSEFAZFORNEC?: string;

                /**
                 * DATA BLOQUEIO SEFAZ.
                 */
                DTBLOQUEIOSEFAZFORNEC?: Date;

                /**
                 * PERCENTUAL INSS.
                 */
                PERCINSS?: number;

                /**
                 * PERCENTUAL CSRF.
                 */
                PERCCSRF?: number;

                /**
                 * FRETE CIF CREDITO PRESUMIDO ICMS.
                 */
                DEDFRETECIFCREDPRESICMS?: string;

                /**
                 * IDENTIFICA SE O FORNECEDOR E EMITENTE DE NFE.
                 */
                EMITENFE?: string;

                /**
                 * Atualizar valores de ST da última entrada.
                 */
                ATUALIZASTULTENT?: string;

                /**
                 * Cód. contábil
                 */
                CODCONTAB?: string;

                /**
                 * Campo usado para gravar a quantidade de casas decimais originarios do fornecedor
                 */
                NUMCASASDECREDUCAOICMS?: number;

                /**
                 * Utiliza IPI no calculo de ICMS
                 */
                UTILIZAIPICALCICMS?: string;

                /**
                 * Código da situação tributária de Pis/Cofins para nota fiscal de serviço
                 */
                CODSITTRIBPISCOFINSSERVICO?: number;

                /**
                 * Define qual período da avaliação de venda será utilizado no cálculo da sugestão de compra.
                 */
                AVALIACAOVENDA?: string;

                /**
                 * Apresenta a data em que deve ser realizada a próxima compra no fornecedor.
                 */
                DTPROXCOMPRA?: Date;

                /**
                 * Apresenta qual foi a data da ultima compra realizada no fornecedor.
                 */
                DTULTCOMPRA?: Date;

                /**
                 * Define de quantos em quantos dias serão realizadas compras no fornecedor.
                 */
                PERIODICIDADECOMPRA?: number;

                /**
                 * Qtde dias para avaliação de vendas utilizado no cálculo da sugestão de compras
                 */
                DIASAVALIACAOVENDA?: number;

                /**
                 * Código obtido através de registro junto ao "GS1 Brasil" conforme descreve o Decreto-lei n° 90.595. O GLN também é utilizado, no padrão EDI/EANCOM, como chave na emissão e distribuição do pedido de compra e aviso de despacho, trafegados por meio das VAN´s.
                 */
                CODGLN?: number;

                /**
                 * Informa se o fornecedor é concedente de crédito presumido
                 */
                CONCEDCREDPRES?: string;

                /**
                 * Considera o valor do ST Guia na Base de cálculo do PIS/COFINS.
                 */
                CONSSTGUIAPISCOFINS?: string;

                /**
                 * Define se o Frete FOB é por Fornecedor, onde os valores serão definidos no cadastro do Fornecedor(Auto Peças).
                 */
                USAFRETEFOBPORFORNEC?: string;

                /**
                 * Valor Mínimo do Pedido de Compra de Reposição.
                 */
                VLMINPEDREPOSICAO?: number;

                /**
                 * Define se o pedido de compra bonificado será gerado automaticamente na rotina  220 ao gerar um pedido de compra normal com bonificação.
                 */
                GERAPEDBONIFIC?: string;

                /**
                 * Define a quantidade de dias (padrão), a partir da data de emissão, para calcular o vencimento de novas verbas. Caso o número de dias do parâmetro da 132, 2307, seja maior que o informado aqui, sempre será considerado o número da 132.
                 */
                QTDIASVENCVERBAS?: number;

                /**
                 * Ao selecionar uma das formas de pagamento, no momento de fazer uma devolução de mercadoria a fornecedor, as demais opções ficarão desabilitadas, caso o usuário não tenha permissão de acesso para alterá-la.
                 */
                TIPOFINANCDEVFORNEC?: number;

                /**
                 * CFOP de Adjudicação referente ao imposto destacado na Nota Fiscal de aquisição de entrada relativo ao ICMS, utilizado na Devolução de Fornecedor de acordo o parâmetro código 2847 da rotina 132.
                 */
                CFOPENTADJUD?: number;

                /**
                 * Situação Tributária de Adjudicação referente ao imposto destacado na Nota Fiscal de aquisição de entrada relativo ao ICMS, utilizado na Devolução de Fornecedor de acordo o parâmetro código 2847 da rotina 132.
                 */
                SITTRIBENTADJUD?: string;

                /**
                 * CFOP de Restituição do imposto relativo ao débito de responsabilidade por substituição tributária, utilizado na Devolução de Fornecedor de acordo o parâmetro código 2846 da rotina 132.
                 */
                CFOPRESTITUICAO?: number;

                /**
                 * Situação Tributária de Restituição do imposto relativo ao débito de responsabilidade por substituição tributária, utilizado na Devolução de Fornecedor de acordo o parâmetro código 2846 da rotina 132.
                 */
                SITTRIBRESTITUICAO?: string;

                /**
                 * Caso este parâmetro esteja igual Sim, o valor de Outras Despesas NF + Seguro, serão considerados na base de calculo do ST.
                 */
                UTILIZAOUTDESPNFBASEST?: string;

                /**
                 * Indica se o frete FOB irá compor a base de calculo do ST NF.
                 */
                CONSFRETEFOBBASESTNF?: string;

                /**
                 * Código parcelamento  utilizado na geração do contas a pagar previsto do pedido de compra.
                 */
                CODPARCELAFRETEFOB?: number;

                /**
                 * Código parcelamento  utilizado na geração do contas a pagar previsto do pedido de compra.
                 */
                CODPARCELAOUTDESP?: number;

                /**
                 * Código parcelamento  utilizado na geração do contas a pagar previsto do pedido de compra.
                 */
                CODPARCICMSANTECIP?: number;

                /**
                 * Código parcelamento  utilizado na geração do contas a pagar previsto do pedido de compra.
                 */
                CODPARCELADIFALIQ?: number;

                /**
                 * Campo para armazenar código da conta de despesa para o INSS tomador
                 */
                CODCONTAINSSTOMADOR?: number;

                /**
                 * Campo para armazenar o percentual de despesa para o INSS tomador
                 */
                PERCINSSTOMADOR?: number;

                /**
                 * Essa opção será utilizada na "Devolução de Fornecedor" gerando uma Nota Fiscal de Entrada/Saída para fins de Ressarcimento do imposto relativo ao débito de responsabilidade por substituição tributária dentro da nota fiscal
                 */
                RESSARCIMENTOSTNF?: string;

                /**
                 * Essa opção, será utilizada na Devolução de Fornecedor gerando uma Nota Fiscal de entrada/saída para fins de Ressarcimento do imposto relativo ao débito de responsabilidade por substituição tributária fora da nota fiscal( ST GUIA)
                 */
                RESSARCIMENTOSTGUIA?: string;

                /**
                 * De acordo com essa opção, será gerado na devolução de Fornecedor uma NF de entrada ou saída de adjudicação referente ao imposto de ICMS destacado na Nota Fiscal de aquisição
                 */
                ADJUDICACAO?: string;

                /**
                 * CFOP de Ressarcimento do imposto relativo ao débito de responsabilidade por substituição tributária fora da nota(GUIA), utilizado na Devolução de Fornecedor de acordo o parâmetro código 3104 da rotina 132.
                 */
                CFOPRESSARCIMENTOSTGUIA?: number;

                /**
                 * Situação tributária de restituição do imposto relativo ao débito de responsabilidade por substituição tributária fora da nota(GUIA), utilizado na devolução de fornecedor de acordo o parâmetro código 3104 da rotina 132.
                 */
                SITTRIBUTRESSARCIMENTOSTGUIA?: string;

                /**
                 * Determina se o pedido de compra é do tipo Drawback Suspensão. Essa informação é utilizada na geração do arquivo do SPED Fiscal, rotina 1097.
                 */
                USADRAWBACK?: string;

                /**
                 * Define se os itens de um pedido de compra de importação (Rotina 3010) deverá utilizar o ICMS diferido com alíquota zero
                 */
                UTILIZAICMSDIFZERADO?: string;

                /**
                 * Define se o cálculo do PIS/COFINS será sobre a base do ICMS reduzida ou sobre a base normal
                 */
                CALCPISCOFINSBASERED?: string;

                /**
                 * Campo para armazenar o percentual de despesa para o SEST/SENAT
                 */
                PERCSESTSENAT?: number;

                /**
                 * Campo para armazenar código da conta de despesa para o SEST/SENAT.
                 */
                CODCONTASESTSENAT?: number;

                /**
                 * Quando marcado como "SIM" as rotinas de pedidos de compra e entrada de mercadoria irão considerar as informações de IPI cadastradas na rotina 212.
                 */
                EQUIPINDUSTRIA?: string;

                /**
                 * Indica que o fornecedor é consumidor final
                 */
                CONSUMIDORFINAL?: string;

                /**
                 * Este plano de pagamento será usado no cálculo da parcela do Funrural caso o parâmetro 3761 estiver marcado como SIM
                 */
                CODPARCELAFUNRURAL?: number;

                /**
                 * Considerar o valor da Capatazia para cálculo do ICMS Normal, ST, presumido e Antecipado na importação
                 */
                CONSCAPATAZIAICMS?: string;

                /**
                 * Caso esse parâmetro esteja "Sim", será desconsiderado a opção "Deduzir Suframa Crédito ICMS", para que o calculo seja somente na alíquota externa do ST.
                 */
                DEDUZIRSUFRAMAALIQEXT?: string;

                /**
                 * Se marcado como SIM, será considerado o valor do IPI no calculo do ICMS Antecipado.
                 */
                CONSIPICALCICMSANT?: string;

                /**
                 * Ao acrescentar mais de um e-mail, estes deverão ser separados por ponto e vírgula (;)
                 */
                EMAILNFE?: string;

                /**
                 * Caso este parametro esteja marcado como "Sim" ao realizar movimentações de Credito de Verba de Conta corrente RCA/Fornecedor, o sistema irá lançar o saldo positivo para o Fornecedor respectivo do produto ao inves do Fornecedor 9999
                 */
                CREDITARSALDOESTVERBA?: string;

                /**
                 * Se Revenda-Transportador e com credenciamento na SEFAZ igual a "SIM", deve informar o Nº Credenciamento na SEFAZ para gerar em Inf Complementares da NF-e (Legislação de Goiás). Utilizar caso o campo "Revenda" = "Transportadora(T)"
                 */
                TRANSPCREDENCIADOSEFAZ?: string;

                /**
                 * Número do Credenciamento na SEFAZ. Utilizar quando o campo "Transportador Credenciado na SEFAZ" = "Sim"
                 */
                NUMCREDENCIAMENTOSEFAZ?: string;

                /**
                 * Com essa opção marcada o registro será enviado para o E-Commerce da Unilever
                 */
                USAECOMMERCEUNILEVER?: string;

                /**
                 * Determina a hora da coleta da transportadora
                 */
                HORACOLETA?: number;

                /**
                 * Ao marcar esta opção, o sistema ativará os processos de débito e crédito no conta corrente de Operador Logístico. No Faturamento pelo Módulo 23 serão lançados nos débitos
                 */
                USADEBCREDOPERLOG?: string;

                /**
                 * Dia de Pagamento da Verba de Operador Logístico, geradas pelo processo de Faturamento de Pedidos de OL.
                 */
                DIAPGVERBAOPERLOG?: number;

                /**
                 * Ao marcar esta opção como SIM, quando o desconto da indústria estiver menor que o desconto de referência do OL, o Sistema creditará o conta corrente do fornecedor. Se estiver marcada como NÃO, não creditará.
                 */
                CREDITADESCMENOROPERLOG?: string;

                /**
                 * Define a forma de pagamento utilizado pelo fornecedor.
                 */
                CODCOBSEFAZ?: string;

                /**
                 * Indicativo se o fornecedor é contribuinte da contribuição previdenciária sobre a receita bruta (CPRB)
                 */
                CONTRIBUINTEDOCPRB?: string;

                /**
                 * "Se Marcado como SIM, será considerado o desconto do Suframa no calculo do Diferencial de Alíquota, se marcado como NÃO, o calculo será feito sobre o valor bruto do produto + descontos comerciais."
                 */
                DEDUZIRSUFRAMADIFALIQ?: string;

                /**
                 * Grupo de Fornecedor Licitação
                 */
                CODLICITGRUPOFORNEC?: number;

                /**
                 * Forma de pagamento utilizada na geração do arquivo na rotina 770.
                 */
                FORMAPGTO?: number;

                /**
                 * Indica se o fornecedor tem vinculo com associação desportiva
                 */
                ASSOCIACAODESPORTIVA?: string;

                /**
                 * Este campo será utilizado para ser enviado ao REINF caso o campo Prest. serv. const. civil seja diferente de "0 - Não é obra de construção civil ou não está sujeita a matrícula de obra" na rotina 749, tela de informações do REINF.
                 */
                CODIGONACIONALOBRAS?: string;

                /**
                 * Esta opção define se o fornecedor têm Regime Especial no Estado para os casos de tratamento específico.
                 */
                DETENTORREGESPECIAL?: string;

                /**
                 * Define se ira deduzir o valor do FCP ICMS do valor do FCP ST no pedido de compra e entrada de mercadoria
                 */
                DEDUZIRFCPICMSDOFCPST?: string;

                /**
                 * Caso essa opção marcada no cálculo do ST Guia, o valor de Pauta será considerado como zero.
                 */
                CONSIDERARPAUTAZEROSTGUIA?: string;

                /**
                 * Se marcado como SIM, calcula o crédito do ICMS sobre a base reduzida, caso haja redução, se marcado como NÃO, calcula o crédito de ICMS sobre a base cheia mesmo havendo percentual de redução na base, conforme Decreto 7.799 Estado da Bahia.
                 */
                CALCCREDICMSBASEREDUZIDA?: string;

                /**
                 * Será utilizado para vincular um centro de custo ao cadastro do fornecedor. Essa informação será validada juntamente com os relatórios que serão criados para apuração da margem garantida, rotina 1833.
                 */
                CODCENTROCUSTO?: string;

                /**
                 * Percentual de margem garantida que o fornecedor definiu com a empresa. Essa informação será validada juntamente com os relatórios que serão criados para apuração da margem garantida, rotina 1833.
                 */
                PERCMARGEMGARANTIDA?: number;

                /**
                 * Define que na devolução de produto seja gerado receita de Adjudicação/Ressarcimento.Com esse parâmetro MARCADO,
 o sistema SOMA o total de Adjudicação/Ressarcimento  de ST ao Desconto em Duplicata/Contas a Receber/Verba.
                 */
                GERARRECEITARESTITUICAO?: string;

                /**
                 * Condição Comercial do Canal Autorizador
                 */
                CONDCOMERCAUTORIZMED?: string;

                /**
                 * Quando igual a Sim, será realizado a manifestação de forma automática apresentando a Ciência da operação, após o envio deste evento não será possível mais cancelar a nota fiscal manifestada. Marcar este somente em casos bem específicos.
                 */
                MANIFESTACAOAUTOMATICA?: string;

                /**
                 * Define se será gerado pedido de compra automaticamente baseado no arquivo XML
                 */
                GERAPEDIDOCOMPRAXML?: string;

                /**
                 * Define se a redução da base de ICMS será do tipo PARA o % informado
                 */
                USAREDICMSPARA?: string;

                /**
                 * Define se o ICMS desonerado com motivo 9, será considerado no calculo do produto
                 */
                CONSDESONNOVESUFRAMA?: string;

                /**
                 * Define se será gravado o código de fabrica encontrado no XML na rotina 253, caso o mesmo não esteja gravado
                 */
                GRAVARCODFAB253?: string;

                /**
                 * Define se irá ser utilizado o fator de conversão da rotina 253 e deixará de validar o fator do cadastro do produto.
                 */
                UTILIZAFATOR253?: string;

                /**
                 * Caso o parâmetro esteja gravado igual "S", será processado na rotina 1321 pré-entrada dos xmls baixados pela rotina 1095.
                 */
                IMPORTAXMLAUTOMATICO?: string;

                /**
                 * Caso marcado como SIM, o valor do IPI será desconsiderado da base de calculo do Diferencial Alíquota
                 */
                DEDUZIRIPIBASEDIFALIQ?: string;

                /**
                 * Caso marcado como SIM, o valor do Frete Fob será considerado na base de calculo do Diferencial Alíquota
                 */
                CONSFRETEFOBBASEDIFALIQ?: string;

                /**
                 * Parâmetro Beta (Não utilizar) O fundo multifilial será: (C): alimentado quando a verba for criada. (R): alimentado no momento do recebimento da verba. (A): alimentado pela rotina 1802, quando for arquivado o contrato assinado.
                 */
                ALIMENTAFUNDOMULTIFILIAL?: string;

                /**
                 * (A)Gerar o contas a pagar com base no pedido de compra -
(B)Gerar o contas a pagar com base no XML da nota fiscal de entrada -
(C)Questionar se deseja gerar o contas a pagar na entrada da mercadoria
                 */
                ORIGEMPARCFINANC?: string;

                /**
                 * Parâmetro determina se rebaixa ou não custo da mercadoria na entrada normal com % de bonificação. Funciona com pâmetro 4239 igual a S.
                 */
                APLICAVERBAREBCUSTO?: string;

                /**
                 * Define o valor padrão de frete despacho do fornecedor, para o processo de devolução de fornecedor.
                 */
                TIPOFRETEDESPACHO?: string;

                /**
                 * Define o valor padrão de tipo de vencimento padrão  do fornecedor, para o pedido de compra. Valores:  Faturamento, Data Embarque, Data Entrega, Data Fixa, Emissão Pedido, Data Entrega
                 */
                TIPOVENCIMENTO?: string;

                /**
                 * Forma de tributação da contribuição previdenciária sobre a folha de pagamento ¿ para Produtores Rurais
                 */
                FORMATRIBPRODRURAL?: string;

                /**
                 * Indicativo da aquisição da produção rural
                 */
                INDAQPRODRURAL?: string;

                /**
                 * Informa se o fornecedor é produtor rural
                 */
                PRODUTORRURAL?: string;

                /**
                 * CPF do Produtor Rural para o envio no SPED REINF
                 */
                CPFPRODUTORRURAL?: string;

                /**
                 * Percentual para o cálculo do valor da contribuição previdenciária descontada pelo adquirente de produção de produtor rural pessoa física.
                 */
                PERCCONTRIBPREVDESC?: number;

                /**
                 * Percentual para o cálculo do valor da contribuição do benefício concedido ao adquirente de produção de produtor rural pessoa física.
                 */
                PERCCONTRIBBEMCONC?: number;

                /**
                 * Percentual para o cálculo do valor da contribuição do SENAR pelo adquirente de produção de produtor rural pessoa física.
                 */
                PERCCONTRIBSENAR?: number;

                /**
                 * Codigo do fornecedor que será enviado para a balança de retaguarda
                 */
                CODFORNECBAL?: string;
}
