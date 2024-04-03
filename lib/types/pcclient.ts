export interface PCCLIENT {

                /**
                 * Código do Cliente.
                 */
                CODCLI: number;

                /**
                 * Nome do Cliente Pessoa Física ou Razão Social para Pessoa Jurídica.
                 */
                CLIENTE?: string;

                /**
                 * Endereço Cobrança
                 */
                ENDERCOB?: string;

                /**
                 * Bairro
                 */
                BAIRROCOB?: string;

                /**
                 * Telefone Cobrança
                 */
                TELCOB?: string;

                /**
                 * Município
                 */
                MUNICCOB?: string;

                /**
                 * Estado
                 */
                ESTCOB?: string;

                /**
                 * CEP
                 */
                CEPCOB?: string;

                /**
                 * Endereço Comercial
                 */
                ENDERENT?: string;

                /**
                 * Bairro
                 */
                BAIRROENT?: string;

                /**
                 * Telefone Comercial
                 */
                TELENT?: string;

                /**
                 * Município
                 */
                MUNICENT?: string;

                /**
                 * Estado
                 */
                ESTENT?: string;

                /**
                 * CEP
                 */
                CEPENT?: string;

                /**
                 * Digitar o CNPJ para pessoa jurídica e CPF para pessoa Física.
                 */
                CGCENT?: string;

                /**
                 * Informar Inscrição Estadual. Caso não tenha, informar ISENTO.
                 */
                IEENT?: string;

                /**
                 * Data da Última Compra
                 */
                DTULTCOMP?: Date;

                /**
                 * Atividade
                 */
                CODATV1?: number;

                /**
                 * Bloqueio
                 */
                BLOQUEIO?: string;

                /**
                 * Código do RCA
                 */
                CODUSUR1?: number;

                /**
                 * Código do RCA
                 */
                CODUSUR2?: number;

                /**
                 * Fax
                 */
                FAXCLI?: string;

                /**
                 * Limite de crédito
                 */
                LIMCRED?: number;

                /**
                 * Observações gerais
                 */
                OBS?: string;

                /**
                 * Data primeira compra
                 */
                DTPRIMCOMPRA?: Date;

                /**
                 * Cliente Principal
                 */
                CODCLIPRINC?: number;

                /**
                 * Código cobrança
                 */
                CODCOB?: string;

                /**
                 * Exibição de data que cliente foi bloqueado
                 */
                DTBLOQ?: Date;

                /**
                 * Data e Hora de Cadastro
                 */
                DTCADASTRO?: Date;

                /**
                 * Praça
                 */
                CODPRACA?: number;

                /**
                 * Nome fantasia da empresa (Pessoa Jurídica).
                 */
                FANTASIA?: string;

                /**
                 * Emite Duplicata Mercantil
                 */
                EMITEDUP?: string;

                /**
                 * Classificação ABC de Cliente Automática. A informação deste é preenchida na atualização da opção 5 da rotina 506. O calculo é regra fixa da rotina, documento: http://tdn.totvs.com/pages/releaseview.action?pageId=80970966
                 */
                VIP?: string;

                /**
                 * Ponto de Referência
                 */
                PONTOREFER?: string;

                /**
                 * Prédio Próprio
                 */
                PREDIOPROPRIO?: string;

                /**
                 * Data de Início das Atividades
                 */
                INICIOATIV?: Date;

                /**
                 * Data da Última Alteração
                 */
                DTULTALTER?: Date;

                /**
                 * Indica se o cliente é pessoa física ou jurídica.
                 */
                TIPOFJ?: string;

                /**
                 * E-mail
                 */
                EMAIL?: string;

                /**
                 * Data de Exclusão
                 */
                DTEXCLUSAO?: Date;

                /**
                 * Frequência de Visitas
                 */
                FREQVISITA?: number;

                /**
                 * Plano de Pagamento
                 */
                CODPLPAG?: number;

                /**
                 * % Desconto
                 */
                PERDESC?: number;

                /**
                 * Sequência que será utilizada durante as entregas
                 */
                NUMSEQ?: number;

                /**
                 * Acessar Plano de Pagamentos Negociados
                 */
                PLPAGNEG?: string;

                /**
                 * Pais
                 */
                PAISENT?: string;

                /**
                 * Caixa Postal
                 */
                CAIXAPOSTAL?: number;

                /**
                 * CEP Caixa Postal
                 */
                CEPCXPOSTAL?: number;

                /**
                 * Registro na Junta Comercial
                 */
                REGJUNTACOMERCIAL?: string;

                /**
                 * Micro Empresa
                 */
                MICROEMPRESA?: string;

                /**
                 * DDD Internacional
                 */
                DDDINTERNACIONAL?: number;

                /**
                 * Classificação manual de clientes, podendo ser preenchido de A a Z para controles internos em relatórios criados pela rotina 800.
                 */
                CLASSEVENDA?: string;

                /**
                 * Endereço
                 */
                ENDERCOM?: string;

                /**
                 * Bairro
                 */
                BAIRROCOM?: string;

                /**
                 * Município
                 */
                MUNICCOM?: string;

                /**
                 * Estado
                 */
                ESTCOM?: string;

                /**
                 * CEP
                 */
                CEPCOM?: string;

                /**
                 * Telefone
                 */
                TELCOM?: string;

                /**
                 * Fax
                 */
                FAXCOM?: string;

                /**
                 * Número Suframa do Cliente
                 */
                SULFRAMA?: string;

                /**
                 * CACEX
                 */
                CACEX?: string;

                /**
                 * Observações
                 */
                OBSENTREGA1?: string;

                /**
                 * Observações
                 */
                OBSENTREGA2?: string;

                /**
                 * Observações
                 */
                OBSENTREGA3?: string;

                /**
                 * % Desconto Financeiro
                 */
                PERDESCFIN?: number;

                /**
                 * Isento de ICMS
                 */
                ISENTOICMS?: string;

                /**
                 * % Desconto ICMS
                 */
                PERDESCISENTOICMS?: number;

                /**
                 * Insc. Municipal
                 */
                IMENT?: string;

                /**
                 * Filial para emissão de NFs do cliente.
                 */
                CODFILIALNF?: string;

                /**
                 * Isento de Taxa de Boleto
                 */
                ISENTOTXBOLETO?: string;

                /**
                 * Tipo de venda 1
                 */
                CONDVENDA1?: string;

                /**
                 * Tipo de venda 2
                 */
                CONDVENDA2?: string;

                /**
                 * Tipo de venda 3
                 */
                CONDVENDA3?: string;

                /**
                 * Tipo de venda 4
                 */
                CONDVENDA4?: string;

                /**
                 * Tipo de venda 5
                 */
                CONDVENDA5?: string;

                /**
                 * Tipo de venda 6
                 */
                CONDVENDA6?: string;

                /**
                 * Data do Capital Social
                 */
                DTCAPITALSOCIAL?: Date;

                /**
                 * Valor do Capital Social
                 */
                CAPITALSOCIAL?: number;

                /**
                 * Banco nº
                 */
                NUMBANCO1?: number;

                /**
                 * Agência nº
                 */
                NUMAGENCIA1?: number;

                /**
                 * Conta Corrente
                 */
                NUMCCORRENTE1?: string;

                /**
                 * Banco nº
                 */
                NUMBANCO2?: number;

                /**
                 * Agência nº
                 */
                NUMAGENCIA2?: number;

                /**
                 * Conta Corrente
                 */
                NUMCCORRENTE2?: string;

                /**
                 * Funcionário que efetou o cadastro
                 */
                CODFUNCCADASTRO?: number;

                /**
                 * % Comissão
                 */
                PERCOMCLI?: number;

                /**
                 * Digitar o RG para cadastro de pessoa física.
                 */
                RG?: string;

                /**
                 * Orgão Emissor
                 */
                ORGAORG?: string;

                /**
                 * Último Funcinário a alterar o cadastro
                 */
                CODFUNCULTALTER?: number;

                /**
                 * Data da Última Consulta ao Serasa
                 */
                DTULTCONSULTASERASA?: Date;

                /**
                 * Data da Última Consulta ao SCI
                 */
                DTULTCONSULTASCI?: Date;

                /**
                 * Consumidor Final
                 */
                CONSUMIDORFINAL?: string;

                /**
                 * Empresa que Trabalha
                 */
                EMPRESA?: string;

                /**
                 * Endereço
                 */
                ENDEREMPR?: string;

                /**
                 * Município
                 */
                MUNICEMPR?: string;

                /**
                 * Estado
                 */
                ESTEMPR?: string;

                /**
                 * Telefone
                 */
                TELEMPR?: string;

                /**
                 * Cargo
                 */
                CARGO?: string;

                /**
                 * Data de Admissão
                 */
                DTADMISSAO?: Date;

                /**
                 * Valor da Renda Mensal
                 */
                RENDAMENSAL?: number;

                /**
                 * Nome do Cônjuge
                 */
                NOMECONJUGE?: string;

                /**
                 * CPF
                 */
                CPFCONJUGE?: string;

                /**
                 * Empresa que Trabalha
                 */
                EMPRESACONJUGE?: string;

                /**
                 * Endereço
                 */
                ENDERCONJUGE?: string;

                /**
                 * Município
                 */
                MUNICCONJUGE?: string;

                /**
                 * Estado
                 */
                ESTCONJUGE?: string;

                /**
                 * Telefone
                 */
                TELCONJUGE?: string;

                /**
                 * Cargo
                 */
                CARGOCONJUGE?: string;

                /**
                 * Data de Admissão
                 */
                DTADMISSAOCONJUGE?: Date;

                /**
                 * Valor da Renda Mensal
                 */
                RENDAMENSALCONJUGE?: number;

                /**
                 * Valor de Outras Rendas
                 */
                VLOUTRASRENDAS?: number;

                /**
                 * Calcular ST
                 */
                CALCULAST?: string;

                /**
                 * Aceita Cheque de Terceiros?
                 */
                ACEITACHTERCEIROS?: string;

                /**
                 * Este campo indica quando o cliente é tributado com st fonte (PCCLIENT.CLIENTEFONTEST).
                 */
                CLIENTEFONTEST?: string;

                /**
                 * Rating SCI
                 */
                RATINGSCI?: string;

                /**
                 * Lista de Plano de Pagamento (Polibrás)
                 */
                LISTAPLPAG?: string;

                /**
                 * Celular
                 */
                TELCELENT?: string;

                /**
                 * Número da Região do cliente.
                 */
                NUMREGIAOCLI?: number;

                /**
                 * Código EAN para entrega
                 */
                EANENTREGA?: number;

                /**
                 * Código EAN para cobrança
                 */
                EANCOBRANCA?: number;

                /**
                 * Qt. CheckOut
                 */
                QTCHECKOUT?: number;

                /**
                 * Freq. Dia Próx. Visita
                 */
                FREQDIAVISITA?: number;

                /**
                 * Site
                 */
                SITE?: string;

                /**
                 * Tipo de venda 7
                 */
                CONDVENDA7?: string;

                /**
                 * Tipo de venda 8
                 */
                CONDVENDA8?: string;

                /**
                 * Tipo de venda 9
                 */
                CONDVENDA9?: string;

                /**
                 * Tipo de venda 10
                 */
                CONDVENDA10?: string;

                /**
                 * Tipo de venda 11
                 */
                CONDVENDA11?: string;

                /**
                 * Tipo de venda 12
                 */
                CONDVENDA12?: string;

                /**
                 * Tipo de venda 13
                 */
                CONDVENDA13?: string;

                /**
                 * Tipo de venda 14
                 */
                CONDVENDA14?: string;

                /**
                 * Tipo de Custo de Transferência de Venda (Rotina 316)
                 */
                TIPOCUSTOTRANSF?: string;

                /**
                 * % Acréscimo no Custo de Transferência
                 */
                PERACRESTRANSF?: number;

                /**
                 * Funcionário da Última Alteração no Cliente Especial
                 */
                CODFUNCULTALTERCLIESP?: number;

                /**
                 * Data da Última Alteração no Cliente Especial
                 */
                DTULTALTERCLIESP?: Date;

                /**
                 * Utiliza IE Simplificada
                 */
                UTILIZAIESIMPLIFICADA?: string;

                /**
                 * Data de Abertura
                 */
                DTABERTCC1?: Date;

                /**
                 * Data de Abertura
                 */
                DTABERTCC2?: Date;

                /**
                 * Tipo de venda 20
                 */
                CONDVENDA20?: string;

                /**
                 * Cliente Monitorado
                 */
                CLIENTEMONITORADO?: string;

                /**
                 * Alvará Psicotrópicos / Número Alvará
                 */
                NUMALVARA?: string;

                /**
                 * Alvará Psicotrópicos / Data  de Vencimento do Alvará
                 */
                DTVENCALVARA?: Date;

                /**
                 * Indica o tipo da empresa. Se for do tipo MEI porém optante SN(Simples Nacional), deverá ser informado SN para cálculo de tributações e informar "SIM" no campo "Empresa MEI optante pelo no SN", para que seja gravado no XML como MEI.
                 */
                TIPOEMPRESA?: string;

                /**
                 * CNPJ da empresa ou CPF da pessoa responsável por receber a entrega.
                 */
                CGCENTREGA?: string;

                /**
                 * Código do RCA
                 */
                CODUSUR3?: number;

                /**
                 * Data de Vencimento Suframa
                 */
                DTVENCSUFRAMA?: Date;

                /**
                 * Contribuinte
                 */
                CONTRIBUINTE?: string;

                /**
                 * Origem de Preço de Mercadorias Monitoradas e Monitoradas de Alto Custo
                 */
                ORIGEMPRECO?: string;

                /**
                 * Esta opção permite restringir a um cliente a venda fracionada definida no cadastro do produto.
                 */
                ACEITAVENDAFRACAO?: string;

                /**
                 * Emite DAE
                 */
                EMITEDAE?: string;

                /**
                 * Isento de IPI
                 */
                ISENTOIPI?: string;

                /**
                 * Observações Financeiras que serão utilizadas na rotina "PCSIS1203 - Extrato de Cliente"
                 */
                OBSERVACAO?: string;

                /**
                 * Data de Nascimento
                 */
                DTNASC?: Date;

                /**
                 * Filiação Pai
                 */
                FILIACAOPAI?: string;

                /**
                 * Filiação Mãe
                 */
                FILIACAOMAE?: string;

                /**
                 * Data de Nascimento
                 */
                DTNASCCONJ?: Date;

                /**
                 * Filiação (Pai)
                 */
                FILIACAOPAICONJ?: string;

                /**
                 * Filiação (Mãe)
                 */
                FILIACAOMAECONJ?: string;

                /**
                 * RG
                 */
                RGCONJ?: string;

                /**
                 * Órgão Emissor
                 */
                ORGAORGCONJ?: string;

                /**
                 * Código oficial da Cidade IBGE Informada na aba "Dados Cadastrais"
                 */
                CODMUNICIPIO?: number;

                /**
                 * Arquivo SCI
                 */
                INCLUINOARQSCI?: string;

                /**
                 * Observações Gerenciais
                 */
                OBSGERENCIAL1?: string;

                /**
                 * Observações Gerenciais
                 */
                OBSGERENCIAL2?: string;

                /**
                 * Observações Gerenciais
                 */
                OBSGERENCIAL3?: string;

                /**
                 * Tipo de Cliente do ramo de Medicamentos
                 */
                TIPOCLIMED?: string;

                /**
                 * Exportar Dados IMS
                 */
                EXPORTARDADOSIMS?: string;

                /**
                 * Complemento
                 */
                COMPLEMENTOENT?: string;

                /**
                 * Esta opção permite imprimir dados para ressarcimento de substituição tributária na emissão de nota fiscal. (PCCLIENT.RESSARCIMENTOST)
                 */
                RESSARCIMENTOST?: string;

                /**
                 * Utiliza Repasse
                 */
                REPASSE?: string;

                /**
                 * Prazo de Validade
                 */
                PRAZOVALIDADE?: number;

                /**
                 * Diretório para Foto do Cliente:
                 */
                DIRETORIOCLIENTE?: string;

                /**
                 * Alvará Funcionamento / Número Alvará
                 */
                NUMALVARAFUNC?: string;

                /**
                 * Alvará Funcionamento / Data  de Vencimento do Alvará
                 */
                DTVENCALVARAFUNC?: Date;

                /**
                 * Cliente DAN
                 */
                CLIENTEDAN?: string;

                /**
                 * Insc. Est. Sub. Tributário
                 */
                IEST?: string;

                /**
                 * Número TARE
                 */
                NUMTARE?: string;

                /**
                 * Valida máximo venda para Pessoa Física, Isento e Consumidor Final.
                 */
                VALIDAMAXVENDAPF?: string;

                /**
                 * Digito da Agência
                 */
                DIGAGENCIA2?: string;

                /**
                 * Roteiro MasterFoods
                 */
                ROTEIROMASTERFOODS?: string;

                /**
                 * Código da cidade IBGE, onde ao ser preenchido, no momento da gravação do cadastro, será atualizado os campos: Cidade, Cód.Município IBGE, UF e País conforme cadastro de cidade rotina 577.
                 */
                CODCIDADE?: number;

                /**
                 * Tipo de Órgão Público / Estadual
                 */
                ORGAOPUB?: string;

                /**
                 * Estado de emissão
                 */
                UFRG?: string;

                /**
                 * Prazo de Validade minímo do lote / (em dias)
                 */
                PRAZOMAXVALIDADE?: number;

                /**
                 * Validar Multiplo de Venda
                 */
                VALIDARMULTIPLOVENDA?: string;

                /**
                 * Valida máximo venda para Pessoa Física, Isento e Consumidor Final.
                 */
                CLIENTPROTESTO?: string;

                /**
                 * SIGLSDEC
                 */
                SIGLADEC?: string;

                /**
                 * Validar Campanha de Brinde
                 */
                VALIDARCAMPANHABRINDE?: string;

                /**
                 * Motivo de exclusão do cliente
                 */
                MOTIVOEXCLUSAO?: string;

                /**
                 * Utilizado para definir se em Boletos Laser (Rotina 1504) ou em Remessas (Rotina 1501) deverá ser impresso/enviado o CNPJ do Cliente Principal ou do Cliente da Venda.
                 */
                USABKCNPJCODCLIPRINC?: string;

                /**
                 * Aceita Pedido de Troca com Valor Negativo
                 */
                ACEITATROCANEGATIVA?: string;

                /**
                 * Tipo de Desconto de Isenção de ICMS. Na edição de registros: - Se PCCLIENT.PERDESCISENTOICMS > 0 o campo receberá "C". - Se NVL(PCCLIENT.PERDESCISENTOICMS, 0) = 0, o campo receberá "N".
                 */
                TIPODESCISENCAO?: string;

                /**
                 * Suprimido
                 */
                SUPRIMIDO?: string;

                /**
                 * Enviar arquivo ao Serasa
                 */
                ENVIADADOSSERASA?: string;

                /**
                 * Nos casos em que o cliente é tributado com fonte st, este parâmetro permite informar uma alíqTE).
                 */
                USAIVAFONTEDIFERENCIADO?: string;

                /**
                 * Este campo é utilizado para indicar o Iva Fonte para o cliente que tiver um Iva Fonte diferenciado do definido na tributação do produto na região, ou por estado.
                 */
                IVAFONTE?: number;

                /**
                 * Praça
                 */
                CODPRACACOB?: number;

                /**
                 * Transportadora Padrão
                 */
                CODFORNECFRETE?: number;

                /**
                 * Tipo de Órgão Público / Federal
                 */
                ORGAOPUBFEDERAL?: string;

                /**
                 * Exibe Código Histórico
                 */
                CODHIST?: number;

                /**
                 * Com o preenchimento deste campo, durante o faturamento a rotina ignorará a cobrança Boleto selecionada no pedido e irá utilizar a cobrança definida aqui (apenas em pedidos com cobrança Boleto).
                 */
                CODCOBTV1?: string;

                /**
                 * Tipo de Documento
                 */
                TIPODOCUMENTO?: string;

                /**
                 * Isento de Diferença de Aliquotas
                 */
                ISENTODIFALIQUOTAS?: string;

                /**
                 * Caso a opção "Cupom Fiscal" esteja marcada para algumas operações os pedidos receberão condição de venda igual a 3. Caso a opção marcada seja "Nota Fiscal" ou "Ambos" os pedidos receberão condição de venda igual a 1.
                 */
                FRETEDESPACHO?: string;

                /**
                 * CNAE (Código Nacional de Atividade Enconômica)
                 */
                CODCNAE?: string;

                /**
                 * Valor do Frete
                 */
                VLFRETE?: number;

                /**
                 * Valor máximo do pedido para cobrança de frete
                 */
                VLMAXCOBFRETE?: number;

                /**
                 * Rede de Cliente
                 */
                CODREDE?: number;

                /**
                 * Tipo de Custo de Transferência entre Filiais (Rotina 1124)
                 */
                TIPOCUSTOTRANSF_FILIAIS?: string;

                /**
                 * Caso esta opção esteja marcada, durante o faturamento das vendas para o referido cliente não será atualizado o saldo de conta corrente do RCA, somente para vendas que utilizem saldo de conta corrente como desconto financeiro.
                 */
                ATUALIZASALDOCCDESCFIN?: string;

                /**
                 * Observações Gerais
                 */
                OBS_ADIC?: string;

                /**
                 * Nº do Registro para Compra de Mercadoria com Imunidade Tributária
                 */
                NUMREGISTROIMUNE?: string;

                /**
                 * Caso o parâmetro esteja marcado "S" o cliente em questão terá agregado ao % ICMS destacado na nota o percentual definido na rotina 514.
                 */
                PARTICIPAFUNCEP?: string;

                /**
                 * Dias de Atendimento / Domingo
                 */
                ATENDEDOMINGO?: string;

                /**
                 * Dias de Atendimento / Segunda
                 */
                ATENDESEGUNDA?: string;

                /**
                 * Dias de Atendimento / Terça
                 */
                ATENDETERCA?: string;

                /**
                 * Dias de Atendimento / Quarta
                 */
                ATENDEQUARTA?: string;

                /**
                 * Dias de Atendimento / Quinta
                 */
                ATENDEQUINTA?: string;

                /**
                 * Dias de Atendimento / Sexta
                 */
                ATENDESEXTA?: string;

                /**
                 * Dias de Atendimento / Sábado
                 */
                ATENDESABADO?: string;

                /**
                 * Exibe Preço de nota sem desconto
                 */
                EMITEPVENDANFSEMDESC?: string;

                /**
                 * Cliente Utiliza Crédito no Faturamento
                 */
                USACRECLIFAT?: string;

                /**
                 * Área da Loja (m2)
                 */
                AREALOJAM2?: number;

                /**
                 * Permitir Alterar Cobrança de Títulos
                 */
                PERMITEALTERCOBRANCACR?: string;

                /**
                 * Data de Validade do Convênio
                 */
                DTVALIDADECONV?: Date;

                /**
                 * Complemento
                 */
                COMPLEMENTOCOM?: string;

                /**
                 * Número
                 */
                NUMEROCOM?: string;

                /**
                 * Complemento
                 */
                COMPLEMENTOCOB?: string;

                /**
                 * Número
                 */
                NUMEROENT?: string;

                /**
                 * Número
                 */
                NUMEROCOB?: string;

                /**
                 * Informar manualmente o status da consulta retornado pelo sintegra. É preciso ter permissão na rotina 530 para a rotina 302 (permissão número 30).
                 */
                STATUSCONSULTASINTEGRA?: string;

                /**
                 * Data da consulta Informada pelo usuário. Para acessar este campo é preciso permissão através da rotina 530 referente a rotina 302. Permissão número 30.
                 */
                DATACONSULTASINTEGRA?: Date;

                /**
                 * Prazo de Validade minímo do lote / (em %)
                 */
                PERMINVALIDADE?: number;

                /**
                 * Longitude
                 */
                LONGITUDE?: string;

                /**
                 * Latitude
                 */
                LATITUDE?: string;

                /**
                 * Sacado Eletrônico
                 */
                SACADOELETRONICO?: string;

                /**
                 * % Tolerância para Validade de Produto
                 */
                PERCTOLVALIDADEPRODWMS?: number;

                /**
                 * ANVISA
                 */
                ANVISA?: string;

                /**
                 * SUS
                 */
                SUS?: string;

                /**
                 * Tipo do custo  para transferência  filial virtual (via rotina 1419)
                 */
                TIPOCUSTOTRANSF_FILIALVIRTUAL?: string;

                /**
                 * Gerar Crédito na Devolução
                 */
                GERARCREDITODEVCLI?: string;

                /**
                 * Cliente Isento de ISS
                 */
                RETENCAOISS?: string;

                /**
                 * Data e Hora da Última Alteração
                 */
                HORACADASTRO?: Date;

                /**
                 * Utiliza Preço Médio Máximo de Pagamento / Prazo Médio Máximo de Pagamento
                 */
                PRAZOMEDIOPLPAG?: number;

                /**
                 * Utiliza Preço Médio Máximo de Pagamento
                 */
                UTILIZAPRAZOMEDIOPLPAG?: string;

                /**
                 * Alvará SUS / Número Alvará
                 */
                NUMALVARASUS?: string;

                /**
                 * Data vencimento alvará SUS.
                 */
                DTVENCALVARASUS?: Date;

                /**
                 * Aplicar Desconto Simples Nacional
                 */
                SIMPLESNACIONAL?: string;

                /**
                 * Número da zona de visita do cliente
                 */
                ZONA?: number;

                /**
                 * Código do Bairro
                 */
                CODBAIRROENT?: number;

                /**
                 * Código do Bairro
                 */
                CODBAIRROCOM?: number;

                /**
                 * Código do Bairro
                 */
                CODBAIRROCOB?: number;

                /**
                 * Número do Cartão Fidelidade
                 */
                NUMCARTAOFIDELIDADE?: string;

                /**
                 * PIS/COFINS Cumulativo
                 */
                PISCOFINSCUMULATIVO?: string;

                /**
                 * Envia NF-e para e-mail comercial
                 */
                ENVIONFEEMAILCOM?: string;

                /**
                 * Valor Mínimo para gerar contas a receber da ST
                 */
                VLMINIMOST?: number;

                /**
                 * Alvará ANVISA / Data  de Vencimento do Alvará
                 */
                DTVENCALVARAANVISA?: Date;

                /**
                 * Alvará CRF / Data  de Vencimento do Alvará
                 */
                DTVENCCRF?: Date;

                /**
                 * Alvará ANVISA / Número Alvará
                 */
                NUMALVARAANVISA?: string;

                /**
                 * Alvará CRF / Número Alvará
                 */
                NUMCRF?: string;

                /**
                 * Gerar contas à receber separado para ST
                 */
                GERATITULOST?: string;

                /**
                 * Prazo para vencimento de contas à receber de ST (Dias) :
                 */
                PRAZOVENCST?: number;

                /**
                 * caso seja marcado o calculo do desconto financeiro não irá considerar o valor do ST
                 */
                AGREGARVALORSTDESCFIN?: string;

                /**
                 * Não gerar arquivo PDF NF-e
                 */
                ENVIOPDFNFE?: string;

                /**
                 * Código do País
                 */
                CODPAIS?: number;

                /**
                 * Se esta opção estiver marcado, ao digitar um pedido de venda o desconto financeiro cadastrado na rotina 561 será gravado separado do desconto comercial, se não estiver marcado, o % de desconto financeiro será somado junto ao desconto comercial.
                 */
                USADESCFINSEPARADODESCCOM?: string;

                /**
                 * O parâmetro tem como objetido determinar se as notas fiscais eletrônicas do cliente devem utilizar o número de pedido enviado pelo próprio cliente, ou o número do pedido gerado pelo sistema.
                 */
                UTILIZAPEDCLINFE?: string;

                /**
                 * Indica o código da conta contábil para o cliente.
                 */
                CODCONTAB?: string;

                /**
                 * Caminho do diretório do contrato
                 */
                DIRETORIOCONTRATO?: string;

                /**
                 * Data de inicio das vistorias de comodato
                 */
                DTINIVISTORIA?: Date;

                /**
                 * Periodicidade das vistorias de comodato
                 */
                PERIODVISTORIA?: number;

                /**
                 * Data da próxima vistoria de comodato
                 */
                DTPROXVISTORIA?: Date;

                /**
                 * Preço Utilizado na NF-e
                 */
                PRECOUTILIZADONFE?: string;

                /**
                 * Número do CRM
                 */
                NUMCRM?: string;

                /**
                 * Campo que define o número do alvará retinóico
                 */
                NUMALVARARETINOICO?: string;

                /**
                 * Campo que define o data do alvará retinóico
                 */
                DTVENCALVARARETINOICO?: Date;

                /**
                 * Caso esta opção esteja marcada, será habilitado uma opção na rotina 316 para informar se o pedido e para exportação.
                 */
                USAVENDAEXPORTACAO?: string;

                /**
                 * Bloquear geração do arquivo de remessa para o cliente. Nas rotinas 1501, 1505 e 1510. Caso selecionado o sistema não envia o boleto para o banco.
                 */
                BLOQREMCOB?: string;

                /**
                 * Utilizado como gatilho do preço de atacado pela rotina PCAUX2075. Quando cliente marcado como "SIM", os produtos registrados na venda utilizarão diretamento o preço de atacado, independente da quantidade vendida ou minima cadastrada para o produto.
                 */
                CLIATACADO?: string;

                /**
                 * Senha para clientes convênio do varejo
                 */
                SENHACONVECF?: string;

                /**
                 * Não será aplicada a redução referente ao item selecionado. Ex: Não será aplicada redução de ICMS, IPI ou PIS/COFINS. Se for selecionada a opção "Aplica todas Reduções" serão aplicadas todos os % de desconto informados na rotina 514.
                 */
                ISENCAOSUFRAMA?: string;

                /**
                 * Numero do registro do cliente no IBAMA
                 */
                REGISTROIBAMA?: string;

                /**
                 * Data de validade do registro do cliente no IBAMA
                 */
                DTVALIDADEIBAMA?: Date;

                /**
                 * Se este parâmetro estiver marcado, o % de isenção do ICMS informado na rotina 514 será diminuido do preço de tabela do produto.
                 */
                USADESCONTOICMS?: string;

                /**
                 * Código obtido através de registro junto ao "GS1 Brasil" conforme descreve o Decreto-lei n° 90.595. O GLN também é utilizado, no padrão EDI/EANCOM, como chave na emissão e distribuição do pedido de compra e aviso de despacho, trafegados por meio das VAN´s.
                 */
                CODGLN?: number;

                /**
                 * Tipo de Atividade do Cliente
                 */
                TIPOATIVCLI?: string;

                /**
                 * Campo que define o nome do farmacêutico.
                 */
                NOMEFARMACEUTICO?: string;

                /**
                 * Campo que define o número do Alvará Especial.
                 */
                NUMALVARAESPEC?: string;

                /**
                 * Define o tipo de venda "Varejo" "Atacado"
                 */
                TIPOVENDA?: string;

                /**
                 * Define o turno de entrega do pedido do cliente
                 */
                TURNOENTREGA?: string;

                /**
                 * Percentual de desconto ponderado do cliente
                 */
                PERDESMAXPONDERADO?: number;

                /**
                 * Aplica Redução na Base ICMS de Transporte
                 */
                APLICREDBASEICMSTRANSP?: string;

                /**
                 * Ao marcar este campo como "Sim" e o cliente for do estado de "MT" o ST será calculado conforme acordo com o art. 87-J-6 ao art.87-J-16 do RICMS.
                 */
                UTILIZACALCULOSTMT?: string;

                /**
                 * Desconsiderar a validação do cliente junto à sefaz na consulta online da operação de venda.
                 */
                DESCONSVALIDASEFAZ?: string;

                /**
                 * Usa débito e crédito de RCA no momento da venda.
                 */
                USADEBCREDRCA?: string;

                /**
                 * Define se o cliente é orgão público múnicipal em atendimento a  Lei Federal nº 9.718.
                 */
                ORGAOPUBMUNICIPAL?: string;

                /**
                 * Código da cidade IBGE, onde ao ser preenchido, no momento da gravação do cadastro, será atualizado os campos: Cidade, Cód.Município IBGE, UF e País conforme cadastro de cidade rotina 577.
                 */
                CODCIDADECOM?: number;

                /**
                 * Se o cliente deseja ou não receber boletos bancários gerados pela rotina 1504 por e-mail
                 */
                RECEBERBOLETOPOREMAIL?: string;

                /**
                 * Serão faturados pedidos para este cliente somente a partir do dia "X" do mês corrente.
                 */
                DIAFATURAR?: number;

                /**
                 * Plano de pagamento padrão
                 */
                NILPLPAGSOBREPOEPLPAGDISTRIB?: string;

                /**
                 * Data da ultima alteração da 1203
                 */
                DTULTALTER1203?: Date;

                /**
                 * Código do funcionario que realizou a ultima alteração na 1203
                 */
                CODFUNCULTALTER1203?: number;

                /**
                 * Define que o cliente esta no processo de CRM
                 */
                CLICRM?: string;

                /**
                 * Se o cliente participa da Farmácia Popular.
                 */
                PARTICIPAFARMACIAPOPULAR?: string;

                /**
                 * Define se o custo utlizado nas transferências (TV10) será lido no cadastro do produto.
                 */
                TV10USACUSTOPRODUTO?: string;

                /**
                 * Define se o cliente utiliza seguro ou não
                 */
                USASEGURO?: string;

                /**
                 * Define o tipo de seguro: Valor(V) ou Percentual(P)
                 */
                TIPOSEGURO?: string;

                /**
                 * Possui Regime Especial Isenção ST Fonte
                 */
                USAREGIMEESPISENSTFONTE?: string;

                /**
                 * Indica qual tipo de notificação no TGI será utilizado com o cliente
                 */
                NOTIFICACAOTGI?: string;

                /**
                 * Endereço no qual será utilizado para envio de email de cobrança
                 */
                EMAILCOB?: string;

                /**
                 * Ao emitir o mapa de separação do WMS (1752) será alterado o pedido caso o peso do estoque seja diferente do pedido.
                 */
                VALPESOVARMAPAWMS?: string;

                /**
                 * Define se este cliente permite que seus pedidos sejam agrupados.
                 */
                PERMITEAGRUPAMENTO?: string;

                /**
                 * Bloquear Cliente por Inatividade. Considerando a data da última compra com relação ao parâmetro na 132 (1402 - Bloquear automaticamente clientes inativos a mais de X dias).
                 */
                BLOQUEIOINATIVIDADE?: string;

                /**
                 * Indica se para o cliente, será aplicado a taxa de dificuldade de entrega
                 */
                UTILIZATXDIFENTREGA?: string;

                /**
                 * Indica se o cliente é isento da taxa de entrega
                 */
                ISENTOTXENTREGA?: string;

                /**
                 * Define se o cliente é participante do Rio Log.
                 */
                RIOLOG?: string;

                /**
                 * Campo para definir se haverá vendas locais para cliente estrangeiro
                 */
                VENDALOCESTRANG?: string;

                /**
                 * Campo para cadastro da Documentação de cliente, caso o mesmo seja Estrangeiro
                 */
                IDENTIFICESTRANG?: string;

                /**
                 * Define se o cliente irá validar o percentual de limite de bonificação manual (TV5) amarrado a um TV1.
                 */
                VALIDARLIMBONIFIC?: string;

                /**
                 * Define qual o preço que será utilizado no momento da digitação do pedido de venda tipo 13(TV13)
                 */
                TIPOCUSTOMANIF?: string;

                /**
                 * Informar até qual dia do mês é permitido faturar para aquele cliente.
                 */
                DIALIMITFATU?: number;

                /**
                 * Forçar cadastro do cliente como pessoa física. Independente de ser contribuinte ou não.
                 */
                FORCECLIPF?: string;

                /**
                 * Forçar cadastro do cliente como pessoa jurídica. Independente de ser contribuinte ou não.
                 */
                FORCACLIPJ?: string;

                /**
                 * Indica o código do CNES(Cadastro Nacional de Estabelecimentos de Saúde)
                 */
                CODCNES?: string;

                /**
                 * Caso esteja como Sim(S), no momento da venda, será utilizado o % de CMV Diferenciado da rotina 514
                 */
                USACMVDIFERENCIADO?: string;

                /**
                 * Informa se o cliente esta apto ou não a comprar no e-commerce da Unilever
                 */
                SITUACAOECOMMERCEUNILEVER?: string;

                /**
                 * Permitir agrupar títulos automaticamente e depois gerar parcelamento conforme plano de pagamento na rotina 1228
                 */
                PERMITIRAGRUPARTITULO?: string;

                /**
                 * Campo utilizado para informar a quantidade de dias de protesto na geração da remessa
                 */
                NUMDIASPROTESTO?: number;

                /**
                 * Define a regra a geração da data da próxima visita caso o sistemas esteja definido para restringir a geração de rotas para os dias que não seja útil. Antecipada, Prorrogada, Cancelada
                 */
                TIPODIAUTILROTA?: string;

                /**
                 * Define se o cliente pode usar Cheque Moradia como forma de pagamento na Rotina 316.
                 */
                PAGCHEQUEMORADIA?: string;

                /**
                 * Código de identificação da rota de inservível
                 */
                CODROTAINSERVIVEL?: number;

                /**
                 * Esse prazo para devolução de carcaças de baterias, expresso em dias corridos, será utilizado para validar as devoluções de Carcaça de Baterias que estão em aberto ou vencidas
                 */
                PRAZOENTREGACARCACA?: number;

                /**
                 * Informa o código do RCA que será  o vendedor das vendas de origem do e-commerce
                 */
                CODUSURECOMMERCE?: number;

                /**
                 * Caso esteja marcado, no momento da geração do arquivo de importação com o Path Find, a rotina irá exportar também os pedidos montados
                 */
                ACEITAPEDMONTPATHFIND?: string;

                /**
                 * Caso esteja marcado como (S)im, na 336 será permitido incluir produtos de forma automática de acordo com compoas realizadas anteriormente.
                 */
                ACEITAINSERIRPRODUTOAUT?: string;

                /**
                 * Define se o cliente é cozinha industrial
                 */
                COZINHAINDUSTRIAL?: string;

                /**
                 * Caso seja informado "SIM" será obrigatório informar um pedido TV1 para pedidos TV5. Caso seja informado "NÃO", não será obrigatório informar TV1 para pedidos TV5
                 */
                TV1OBRIGATORIOTV5?: string;

                /**
                 * Informe neste campo se este cliente tem incidencia de CPRB (Contribuição Previdenciária sobre a Receita Bruta).
                 */
                INCIDENCIACPRB?: string;

                /**
                 * Indica o percentual de redução da base de ICMS. Os valores informados aqui irão sobreescrever os valores da rotina 514 - Cadastro de Tributação de Venda
                 */
                PERCREDICMS?: number;

                /**
                 * Define o percentual a ser utilizado no cálculo para o caso de frete autônomo
                 */
                PERCFRETEAUTON?: number;

                /**
                 * Num. CRF
                 */
                CRF?: string;

                /**
                 * Código da classe de visibilidade DMS - Unilever
                 */
                CODCLASSE_DMS?: string;

                /**
                 * Cliente exclusivo DMS - Unilever
                 */
                CLIEXCLUSIVO_DMS?: string;

                /**
                 * Código do grupo econômico DMS - Unilever
                 */
                CODGRUPO_DMS?: string;

                /**
                 * Código do canal DMS - Unilever
                 */
                CODCANAL_DMS?: string;

                /**
                 * Código de segmentação DMS - Unilever
                 */
                CODSEGMENTACAO_DMS?: string;

                /**
                 * Código do tipo de negocio DMS - Unilever
                 */
                CODTIPONEGOCIO_DMS?: string;

                /**
                 * Enviar cadastro para integração DMS - Unilever
                 */
                ENVIARCADINTEGRA_DMS?: string;

                /**
                 * Código de holding DMS - Unilever
                 */
                CODHOLDIN_DMS?: string;

                /**
                 * Código de bandeira DMS - Unilever
                 */
                CODBANDEIRA_DMS?: string;

                /**
                 * Frequência de visita DMS - Unilever
                 */
                FREQVISITA_DMS?: string;

                /**
                 * Código do tipo de venda DMS - Unilever
                 */
                CODTIPOVENDA_DMS?: string;

                /**
                 * Caso esteja marcado como sim, no momento do envio dos lotes à SEFAZ, o tipo empresa do cliente MEI será indicado como cliente simples nacional no XML da nota fiscal.
                 */
                CLIMEIOPTANTESN?: string;

                /**
                 * Desconto aplicado sobre o preço de tabela quando na tributação estiver configurado o campo 'Benefício Fiscal'
                 */
                POSSUIBENFFISCAL?: string;

                /**
                 * Possui Regime Especial Isenção Redução ICMS
                 */
                USAREGIMEESPISENREDICMS?: string;

                /**
                 * Nome/Razão Social do Recebedor da mercadoria
                 */
                RAZAORECEBEDORENDENT?: string;

                /**
                 * CEP do Recebedor da mercadoria
                 */
                CEPRECEBEDORENDENT?: number;

                /**
                 * Inscrição estadual do Recebedor da mercadoria
                 */
                IERECEBEDORENDENT?: number;

                /**
                 * Telefone do Recebedor da mercadoria
                 */
                FONERECEBEDORENDENT?: number;

                /**
                 * Código do pais do Recebedor da mercadoria
                 */
                CODPAISRECEBEDORENDENT?: number;

                /**
                 * E-mail do Recebedor da mercadoria
                 */
                EMAILRECEBEDORENDENT?: string;

                /**
                 * Quantidades de dias máximo/limite para vencimento do produto a ser utilizado na separação
                 */
                QTDIASAVENCERPRODUTO?: number;

                /**
                 * Código da Condição Comercial (Indústria)
                 */
                CODCONDCOMERCIAL?: string;

                /**
                 * Código do Grupo Comercial
                 */
                CODGRUPOCOMERCIALMED?: number;

                /**
                 * Código do motivo de encerramento DMS - Unilever
                 */
                CODMOTIVO_DMS?: string;

                /**
                 * Dígito da Agência
                 */
                DIGAGENCIA1?: string;

                /**
                 * Caso esteja selecionado Não o valor do IPI será desconsiderado na base de cálculo do ICMS e caso esteja selecionado Sim o valor do IPI será somado na base de cálculo do ICMS independente se o cliente estiver definido como CONSUMIDOR FINAL = Sim ou Não
                 */
                AGREGARIPIBASEICMS?: string;

                /**
                 * Ao acrescentar mais de um e-mail, estes deverão ser separados por ponto e vírgula (;)
                 */
                EMAILNFE?: string;

                /**
                 * Ao marcar, você está indicando ao Winthor que foi realizada solicitação de um limite adicional para este cliente na plataforma do Mais Negócios
                 */
                CLIENTEMAISNEGOCIOS?: string;

                /**
                 * Data da última consulta do cliente dentro da plataforma Mais Negócio
                 */
                DATAHORACONSULTAMAISNEGOCIOS?: Date;

                /**
                 * Quantidade de dias para gerar a nova data de vencimento do limite de crédito ao alterar via rotina 1203
                 */
                QTDIASVENCLIMCRED?: number;

                /**
                 * Permite Venda a Prazo Mais Negócios
                 */
                PERMITEFATURARAPRAZOMAISNEG?: string;

                /**
                 * Limite Liberado Venda Mais Negócios
                 */
                LIMITELIBERADOMAISNEG?: number;

                /**
                 * Staus do cliente dentro da plataforma Mais Negócios
                 */
                STATUSMAISNEG?: string;

                /**
                 * Retenção de Imp.Renda,referente a desconto financeiro em títulos de Órgãos Públicos,gerados a partir da rotina 1207, baixa individual. Caso estiver marcado como 'Não', não será calculado dito imposto e também não será permitido informar na baixa do título
                 */
                RETECAOIRORGPUB?: string;

                /**
                 * Retenção de Cont.Social,referente a desconto financeiro em títulos de Órgãos Públicos,gerados a partir da rotina 1207, baixa individual.Caso estiver marcado como 'Não',não será calculado dito imposto e também não será permitido informar na baixa do título
                 */
                RETECAOCSORGPUB?: string;

                /**
                 * Retenção de PIS, referente a desconto financeiro em títulos de Órgãos Públicos, gerados a partir da rotina 1207, baixa individual. Caso estiver marcado como 'Não', não será calculado dito imposto e também não será permitido informar na baixa do título.
                 */
                RETECAOPISORGPUB?: string;

                /**
                 * Retenção de COFINS, referente a desconto financeiro em títulos de Órgãos Públicos, gerados a partir da rotina 1207, baixa individual. Caso estiver marcado como 'Não', não será calculado dito imposto e também não será permitido informar na baixa do título.
                 */
                RETECAOCOFINSORGPUB?: string;

                /**
                 * Retenção de ICMS, referente a desconto financeiro em títulos de Órgãos Públicos, gerados a partir da rotina 1207, baixa individual. Caso estiver marcado como 'Não', não será calculado dito imposto e também não será permitido informar na baixa do título.
                 */
                RETECAOICMSSTORGPUB?: string;

                /**
                 * Retenção de Outras Deduções, ref.a desconto financeiro em títulos de Órgãos Públicos, gerados a partir da rotina 1207,baixa individual.Caso estiver marcado como 'Não', não será calculado dito imposto e também não será permitido informar na baixa do título
                 */
                RETECAOOUTDEDORGPUB?: string;

                /**
                 * Quando selecionado como "Sim" e a flag "Órgão Público Federal (ORGAOPUBFEDERAL = SIM)" estiver igual a "Sim", será gerado o Grupo RetTrib (vRetPIS, vRetCOFINS, vRetCSLL, vBCIRRF, vIRRF) no XML.
                 */
                GERAGRPRETTRIB?: string;

                /**
                 * Dígito da Agência
                 */
                DIGAGENCIA1?: string;

                /**
                 * Ao acrescentar mais de um e-mail, estes deverão ser separados por ponto e vírgula (;)
                 */
                EMAILNFE?: string;

                /**
                 * Quantidade de dias para gerar a nova data de vencimento do limite de crédito ao alterar via rotina 1203
                 */
                QTDIASVENCLIMCRED?: number;
}
