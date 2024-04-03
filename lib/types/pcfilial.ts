export interface PCFILIAL {

                /**
                 * Código
                 */
                CODIGO: string;

                /**
                 * Razão social
                 */
                RAZAOSOCIAL?: string;

                /**
                 * Endereço
                 */
                ENDERECO?: string;

                /**
                 * Cidade
                 */
                CIDADE?: string;

                /**
                 * UF
                 */
                UF?: string;

                /**
                 * CEP
                 */
                CEP?: string;

                /**
                 * Telefone
                 */
                TELEFONE?: string;

                /**
                 * CNPJ
                 */
                CGC?: string;

                /**
                 * Código da filial como cliente
                 */
                CODCLI?: number;

                /**
                 * Código da filial como fornecedor
                 */
                CODFORNEC?: number;

                /**
                 * Próximo Nº de nota fiscal
                 */
                PROXNUMNOTA?: number;

                /**
                 * Razão social
                 */
                RAZAOTRANSP?: string;

                /**
                 * CNPJ
                 */
                CGCTRANSP?: string;

                /**
                 * Inscrição estadual
                 */
                IETRANSP?: string;

                /**
                 * Endereço
                 */
                ENDTRANSP?: string;

                /**
                 * Cidade
                 */
                CIDADETRANSP?: string;

                /**
                 * UF
                 */
                UFTRANSP?: string;

                /**
                 * Bairro
                 */
                BAIRRO?: string;

                /**
                 * Contato
                 */
                CONTATO?: string;

                /**
                 * Inscrição estadual
                 */
                IE?: string;

                /**
                 * Taxa 0
                 */
                TAXA0?: number;

                /**
                 * Taxa 7
                 */
                TAXA7?: number;

                /**
                 * Taxa 14
                 */
                TAXA14?: number;

                /**
                 * Taxa 21
                 */
                TAXA21?: number;

                /**
                 * Taxa 28
                 */
                TAXA28?: number;

                /**
                 * Taxa 35
                 */
                TAXA35?: number;

                /**
                 * Taxa 42
                 */
                TAXA42?: number;

                /**
                 * Venda
                 */
                CODDOCNF?: number;

                /**
                 * Devolução de cliente
                 */
                CODDOCDEVOL?: number;

                /**
                 * Simples remessa
                 */
                CODDOCSR?: number;

                /**
                 * Mensagem NF
                 */
                MENSNF?: string;

                /**
                 * Próximo Nº nota dev.cliente
                 */
                PROXNUMNFDEVCLI?: number;

                /**
                 * AIDF
                 */
                NUMIDF?: string;

                /**
                 * Campo exclusivo para varejo
                 */
                PROXNUMNOTAD?: number;

                /**
                 * Indústria
                 */
                INDUSTRIA?: string;

                /**
                 * Nº
                 */
                NUMERO2?: string;

                /**
                 * Código  EAN emissor de fatura
                 */
                EANEMISSOR?: number;

                /**
                 * Transferência
                 */
                CODDOCTRANSF?: number;

                /**
                 * Filial produção
                 */
                CODFILIALPRODUCAO?: string;

                /**
                 * Utiliza filial retira
                 */
                USAESTOQUEDEPFECHADO?: string;

                /**
                 * Código grupo
                 */
                CODGRUPO?: string;

                /**
                 * Utilizar sequencia Nº NF devolução cliente
                 */
                USANUMNFDEVCLI?: string;

                /**
                 * Devolução fornecedor
                 */
                CODDOCDEVFORNEC?: number;

                /**
                 * Auto servico
                 */
                AUTOSERVICO?: string;

                /**
                 * Código atividade econômica
                 */
                CAE?: string;

                /**
                 * Entrada de mercadoria
                 */
                CODDOCENTRADAMERC?: number;

                /**
                 * % Frete conhecimento
                 */
                PERFRETECONHEC?: number;

                /**
                 * Limpar base de calculos de entradas
                 */
                LIMPARBASECALCENTRADA?: string;

                /**
                 * Usa WMS
                 */
                USAWMS?: string;

                /**
                 * Órgãos públicos tem isenção de ICMS para produtos de alto custo
                 */
                OPISENTOSICMSALTOCUSTO?: string;

                /**
                 * Alíquota estadual p/ despesas acessórias(PCFILIAL.ALIQICMOUTRASDESP),esta definição só pode ser feita na filial quando o parâmetro Utilizar alíquota e CFOP de despesas acessórias definido em (PCCONSUM.TIPOALIQOUTRASDESP),estiver como "F - Filial".
                 */
                ALIQICMOUTRASDESP?: number;

                /**
                 * Alíquota interestadual p/desp.acessórias(PCFILIAL.ALIQICMINTEROUTRASDESP). Só pode ser feita na filial quando o parâm. "Utilizar Alíquota e CFOP de desp. acessórias definido em:"(PCCONSUM.TIPOALIQOUTRASDESP)", estiver como "F-Filial"
                 */
                ALIQICMINTEROUTRASDESP?: number;

                /**
                 * Código fiscal estadual p/ despesas acessórias (PCFILIAL.CODFISCALOUTRASDESP). Só pode ser feita na filial quando o parâmetro "Utiliza alíquota e CFOP de despesas acessórias definido em" (PCCONSUM.TIPOALIQOUTRASDESP), estiver como "F - Filial"
                 */
                CODFISCALOUTRASDESP?: number;

                /**
                 * Cód Fiscal Estadual p/ Desp. Acessórias (PCFILIAL.CODFISCALINTEROUTRASDESP). Só pode ser feita na filial quando o parâmetro "Utilizar Alíquota e CFOP de Despesas acessórias definido em "(PCCONSUM.TIPOALIQOUTRASDESP), estiver como "F -Filial"
                 */
                CODFISCALINTEROUTRASDESP?: number;

                /**
                 * Aceita vendas sem estoque
                 */
                ACEITAVENDASEMEST?: string;

                /**
                 * Calcular custo com crédito ICMS
                 */
                CALCCREDICMS?: string;

                /**
                 * Calcular custo com crédito de PIS/COFINS
                 */
                CALCCREDPISCOFINS?: string;

                /**
                 * Nº região
                 */
                NUMREGIAOPADRAO?: number;

                /**
                 * % Venda PF
                 */
                PERVENDAPF?: number;

                /**
                 * Area de venda (m²)
                 */
                AREAVENDA?: number;

                /**
                 * Alíquota interestadual p/ despesas acessórias (PCFILIAL.ALIQICMINTEROUTRASDESP), só pode ser feita na filial quando o parâmetro "Utilizar alíquota e CFOP de despesas acessórias definido em "(PCCONSUM.TIPOALIQOUTRASDESP),estiver como "F-Filial"
                 */
                CODFISCALDEVOUTRASDESP?: number;

                /**
                 * Código fiscal estadual p/despesas acessórias (PCFILIAL.CODFISCALINTEROUTRASDESP).Só pode ser feita na filial quando o parâm."Utilizar alíquota e CFOP de desp. acessórias definido em:"(PCCONSUM.TIPOALIQOUTRASDESP),estiver como "F-Filial"
                 */
                CODFISCALINTERDEVOUTRASDESP?: number;

                /**
                 * Nº de dias para o vencimento de contas a pagar e receber do frete
                 */
                NUMDIASVENCFRETE?: number;

                /**
                 * Calcular custo com crédito IPI (compra)
                 */
                CALCCREDIPI?: string;

                /**
                 * Nº contrato correio
                 */
                NUMCONTRATOCORREIO?: number;

                /**
                 * Cidade IBGE
                 */
                CODMUN?: number;

                /**
                 * UF IBGE
                 */
                CODESTADO?: number;

                /**
                 * Código do pais, seguindo o código internacional de DDI Por exemplo: Brasil: 55; México: 52; Alemanha: 49; etc...
                 */
                CODPAIS?: number;

                /**
                 * Pais
                 */
                NOMEPAIS?: string;

                /**
                 * Fax
                 */
                FAX?: string;

                /**
                 * Email
                 */
                EMAIL?: string;

                /**
                 * Valor boleto bancário
                 */
                VLTARIFA?: number;

                /**
                 * Valor minimo venda para tarifa boleto bancário
                 */
                VLMINTARIFABANC?: number;

                /**
                 * Valor máximo venda para tarifa boleto bancário
                 */
                VLMAXTARIFABANC?: number;

                /**
                 * Somar boleto bancário na NF
                 */
                SOMATARIFABANCDUPLIC?: string;

                /**
                 * Complementar
                 */
                CODDOCNFC?: number;

                /**
                 * Produto por etapa
                 */
                PRODPORETAPA?: string;

                /**
                 * Próximo Nº orçamento
                 */
                PROXNUMORC?: number;

                /**
                 * Atacadista
                 */
                ATACADISTA?: string;

                /**
                 * Este parâmetro é utilizado nas rotinas ( 209 e 1301)
                 */
                PERMITECREDICMCOMST?: string;

                /**
                 * Calcular custo contábil com crédito ICMS
                 */
                CALCCREDICMCUSTOCONT?: string;

                /**
                 * Calcular custo contábil com crédito PIS/COFINS
                 */
                CALCCREDPISCUSTOCONT?: string;

                /**
                 * Usa endereço filial para o consumidor final do auto-serviço
                 */
                USAENDERECOFILIAL?: string;

                /**
                 * Nome de fantasia
                 */
                FANTASIA?: string;

                /**
                 * Alíquota interestadual p/ despesas acessórias(PCFILIAL.ALIQICMINTEROUTRASDESP), só pode ser feita na filial quando o parâmetro Utilizar alíquota e CFOP de despesas acessórias definido em (PCCONSUM.TIPOALIQOUTRASDESP), estiver como "F - Filial"
                 */
                PERCDESPADM?: number;

                /**
                 * NF Venda (PCFILIAL.PROXNUMNOTA) NF Dev.Cliente (PCFILIAL.PROXNUMNOTADEVCLI)
                 */
                TIPONUMNFENTRADA?: string;

                /**
                 * Este parâmetro é utilizado nas rotinas 316, 336, 382 e força de vendas
                 */
                PERMITIRVENDAINTERESTADUALPF?: string;

                /**
                 * Este parâmetro é utilizado nas rotinas 316, 336, 382 e força de vendas
                 */
                PERMITIRVENDAESTADUALPFCOMIE?: string;

                /**
                 * Este parâmetro é utilizado nas rotinas 316, 336, 382 e força de vendas
                 */
                PERMITIRVENDAESTADUALPFSEMIE?: string;

                /**
                 * Criar embalagem ao cadastrar produto
                 */
                INCLUIRITEMPCEMBALAGEM?: string;

                /**
                 * Alíquota frete estadual
                 */
                ALIQUOTAFRETEEST?: number;

                /**
                 * Broker
                 */
                BROKER?: string;

                /**
                 * Tipo broker
                 */
                TIPOBROKER?: string;

                /**
                 * Próximo Nº controle de orçamentos
                 */
                PROXNUMEROORCAMENTO?: number;

                /**
                 * %Red. Base ICMS Desp.Acessórias  (PCFILIAL.PERBASEREDOUTRASDESP)
                 */
                PERBASEREDOUTRASDESP?: number;

                /**
                 * Este parâmetro caso esteja marcado, irá afetar a rotina 1301 quando for fazer calculo de custo, caso esteja marcado a rotina 1301 irá considerar o % de Pis/Cofins sobre o valor de frete com isso irá afetar o valor do custo exeto o custo contábil.
                 */
                CALCREDPISFRETE?: string;

                /**
                 * Este parâmetro caso esteja marcado, irá afetar a rotina 1301 quando for fazer calculo de custo, caso esteja marcado a rotina 1301 irá considerar o % de Pis/Cofins sobre o valor de frete com isso irá afetar somente o valor do custo contábil
                 */
                CALCREDPISFRETECONT?: string;

                /**
                 * Gerar Nº mapa por
                 */
                TIPONUMMAPA?: string;

                /**
                 * Este parâmetro é utilizado pelo faturamento de vendas e indica se a base de cálculo de ICMS para despesas acessórias será reduzida ou não para clientes pessoas físicas e isentos,caso o sistema esteja parametrizado para considerar isentos como PF.
                 */
                UTILIZAPERCBASEREDOUTRASDESPPF?: string;

                /**
                 * Exigir emissão de mapa de separação na venda balcão
                 */
                EXIGIREMISSAOMAPABALCAO?: string;

                /**
                 * Coddocss
                 */
                CODDOCSS?: number;

                /**
                 * Campo exclusivo para varejo
                 */
                PROXNUMENTMEX?: number;

                /**
                 * Próximo  Nº NUS
                 */
                PROXNSU?: number;

                /**
                 * Campo para indicar se será o não gerado o NSU (número sequencial único) para todas as notas fiscais emitidas (entradas ou saidas). O número será sequencial. Esta informação é referente  a legislação específica para Santa Catarina.
                 */
                GERARNSU?: string;

                /**
                 * Caso este campo seja marcado, após a montagem da carga, conferência e faturamento, será exibida tela para o usuário selecionar a localização do veículo da carga
                 */
                USACONTROLELOCALIZACAOVEICULO?: string;

                /**
                 * Este parâmetro caso esteja marcado, irá afetar a rotina 1301 quando for fazer calculo de custo, caso esteja marcado a rotina 1301 irá considerar o % de Pis/Cofins sobre o valor de frete com isso irá afetar somente o valor do custo contábil
                 */
                CONSIDERARICMSANTECIPCUSTO?: string;

                /**
                 * % Acréscimo no custo de entrada
                 */
                PERCALTERCUSTOENT?: number;

                /**
                 * Próximo número de transação para geração de conhecimento de frete
                 */
                PROXNUMTRANSCONHEC?: number;

                /**
                 * Este numerador é usado para movimentação de saldo Caixa/Banco para vales do ECF (PCAUX2075) quando usado servidor intermediário (PCSIS2016).
                 */
                PROXNUMCONHEC?: number;

                /**
                 * (PCFILIAL.CALCULARCOMISSAOPVENDA1)
                 */
                CALCULARCOMISSAOPVENDA1?: string;

                /**
                 * Usa distribuição
                 */
                USADISTRIB?: string;

                /**
                 * Agregar IPI somente no valor contábil na geração do livro fiscal.Este campo é utilizado no store procedure na geração do livros fiscais.
                 */
                IPISOMENTEVLCONT?: string;

                /**
                 * Esta conta será utilizada nos lançamentos de receita ou despesa realizados durante o processo de entrada de notas fiscais de importação (rotina 3002)
                 */
                CODCONTAENTIMPORTACAO?: number;

                /**
                 * Valida valor máximo de isenção de ST para pessoas físicas
                 */
                VALIDAVLMAXISENCAOSTPF?: string;

                /**
                 * Valor máximo para isenção de ST para pessoas físicas
                 */
                VLMAXISENCAOSTPF?: number;

                /**
                 * Criado novo parâmetro por filial para indicar o uso de venda por embalagem nos programas de venda (3316,336,382).Este parâmetro tem a mesma funcionalidade do parâmetro de sistema (PCCONSUM.UTILIZAVENDAPOREMBALAGEM).
                 */
                UTILIZAVENDAPOREMBALAGEM?: string;

                /**
                 * Criado novo parâmetro por filial para indicar o preço de venda pela embalagem(2015) nos programas de venda(2075,316,336,382).Este parâmetro tem a mesma funcionalidade do parâmetro de sistema (PCCONSUM.PRECOPOREMBALAGEM).
                 */
                PRECOPOREMBALAGEM?: string;

                /**
                 * Valida endereço de picking no pedido de compra
                 */
                VALIDAENDPICKINGPEDCOMPRA?: string;

                /**
                 * Este parâmetro indica o uso de servidor intermediário no auto-serviço (PCSIS2016).
                 */
                USASERVINTERMEDIARIO?: string;

                /**
                 * Este parâmetro indica se será utilizada numeração difetenciada paras as notas
                 */
                USANUMNOTAECF?: string;

                /**
                 * Este numerador de transação de venda é usado para as vendas ECF (PCAUX2075) e para a emissão de nota fiscal espelho (PCSIS1443/PCSIS2018) quando usado servidor intermediário (PCSIS2016).
                 */
                PROXNUMNOTAECF?: number;

                /**
                 * Este numerador de transação de venda é usado para as vendas ECF (PCAUX2075) e para a emissão de Nota fiscal espelho (PCSIS1443 / CPSIS2018) quando usado servidor intermediário.
                 */
                PROXNUMTRANSVENDAECF?: number;

                /**
                 * Este numerador de carregamento é usado para as vendas ECF (PCAUX2075) quando usado servidor intermediário(PCSIS2016).
                 */
                PROXNUMCARECF?: number;

                /**
                 * Este numerador é usado para movimentação de saldo Caixa/Banco para vales do ECF (PCAUX2075) quando usado servidor intermediário (PCSIS2016).
                 */
                PROXNUMTRANSECF?: number;

                /**
                 * Atenção! A funcionalidade deste campo é obter na rotina 2075 o preço de venda
                 */
                USAPRECOETIQPRODPESADO?: string;

                /**
                 * NF de serviço
                 */
                CODDOCSE?: number;

                /**
                 * Utiliza o processo de Nota fiscal eletrônica
                 */
                UTILIZANFE?: string;

                /**
                 * Nº de série da NF-e
                 */
                SERIENFE?: string;

                /**
                 * Nº de série da NF-e SCAN
                 */
                SERIENFESCAN?: string;

                /**
                 * Tipo de impressão do DANF-e opções (retrato, paisagem)
                 */
                TIPODANFE?: string;

                /**
                 * Incluir frete e outras despesas na base de ST
                 */
                INCLUIFRETEOUTRASDESPBASEST?: string;

                /**
                 * Código da conta onde será creditado o valor referente ao acréscimo de contrato aplicado na entrada de mercadoria.
                 */
                CODCONTAPERCACRESCENT?: number;

                /**
                 * Este parâmetro é utilizado pela rotina 201 para precificar automaticamente os preços varejo/atacado
                 */
                PRECIFICAAUTOMATICO?: string;

                /**
                 * Este parâmetro é utilizado na rotina 201, precificando automaticamente o preço de atacado ou varejo multiplicando pelo indice preço
                 */
                TIPOPRECIFICACAO?: string;

                /**
                 * Destacar impostos na venda manifesto TV14
                 */
                DESTACARIMPOSTOSVENDATV14?: string;

                /**
                 * Ao marcar este parâmetro, as NF que possuam o mesmo carregamento, cliente, vencimento e cobrança não será acrescentado ao valor total da NF o valor da tarifa bancária, sendo esta acrescentada no momento do desdobramento ou agrupamento dos títulos
                 */
                PERMITEAGRUPARBOLETOS?: string;

                /**
                 * Bloqueia estoque na entrada de devolução de cliente
                 */
                BLOQDEVCLI?: string;

                /**
                 * Ao habilitar este campo, ao faturar pedidos cujos produtos possuam vasilhames
                 */
                GERARPEDCONSIGNACAOVASILHAME?: string;

                /**
                 * Caso a opção 2- Por Sobreposição seja selecionada, a ordem de avaliação das comissões será baseada conforme cadastro da 584
                 */
                TIPOAVALIACAOCOMISSAO?: number;

                /**
                 * Caso esta opção seja selecionada,  as comissões que estejam com valor igual a zero também serão utilizadas para a avaliação da comissão.
                 */
                CONSIDERARCOMISSAOZERO?: string;

                /**
                 * Indica se deve lançar o valor do frete referente ao peso das mercadorias automaticamente no faturamento
                 */
                LANCARFRETEPESOAUTFAT?: string;

                /**
                 * Indica se bloqueia o desdobramento de títulos, onde os emitentes dos pedidos (PCPEDC.CODEMITENTE) são diferentes. Se estiver marcado, bloqueia (isto é, impede o desdobramento).Se estiver desmarcado, libera (opção default).
                 */
                BLOQDESDEMITENTEDIF?: string;

                /**
                 * Devolução de fornecedor somente com avaria
                 */
                DEVFORNECESTOQUEAVARIA?: string;

                /**
                 * Caso esta opção esteja marcada será permitido alterar pedidos que não tenham sido enviados para o WMS ou que tenham sido enviados e liberados pelo WMS
                 */
                ALTERAPEDIDORETORNADOWMS?: string;

                /**
                 * Caso esta opção esteja marcada a rotina de montagem de carga passará a exibir os pedidos que utilizam integração WMS
                 */
                CANCELAPEDIDORETORNADOWMS?: string;

                /**
                 * Caso esta opção esteja marcada será permitido cancelar notas fiscais de entrada
                 */
                CANCELANFENTRADACOMWMS?: string;

                /**
                 * Caso esta opção esteja marcada será permitido cancelar notas fiscais que não tenham sido enviadas para o WMS ou que tenham sido enviadas e liberadas pelo WMS
                 */
                CANCELANFDEVCLICOMWMS?: string;

                /**
                 * Caso esta opção esteja marcada será permitido cancelar notas fiscais de venda
                 */
                CANCELANFVENDACOMWMS?: string;

                /**
                 * Integradora WMS
                 */
                INTEGRADORAWMS?: number;

                /**
                 * Usuario banco de dados WMS
                 */
                USUARIOBANCODADOSWMS?: string;

                /**
                 * Senha
                 */
                SENHABANCODADOSWMS?: string;

                /**
                 * Nome do banco de dados WMS
                 */
                NOMEBANCODADOSWMS?: string;

                /**
                 * Consolidar dados históricos (PCDTPROD)
                 */
                CONSOLIDADADOS504?: string;

                /**
                 * Gerar histórico de estoque (PCHISTEST)
                 */
                GERARPCHISTEST?: string;

                /**
                 * Indice a ser aplicado na transferência
                 */
                INDICECUSTOTRANSF?: number;

                /**
                 * Bloquear estoque na transferência
                 */
                BLOQESTOQUETRANSF?: string;

                /**
                 * Atualizar dados da ultima entrada na transferência
                 */
                ATUALIZACUSTOULTENTRANSF?: string;

                /**
                 * Ponderar custos de acordo com o valor da nota fiscal
                 */
                PONDCUSNOTATRANSF?: string;

                /**
                 * Estes campos serão utilizados para calcular e exibir na ordem de separação (rotina 940) o tempo estimado por produto e por volume, além de um tempo inicial de separação
                 */
                PROXNUMOS?: number;

                /**
                 * Caso esta opção esteja marcada, na entrada de mercadoria importada a digitação da opção marcada será opcional
                 */
                CODFISCALOPCIONALNFIMPORTACAO?: string;

                /**
                 * Caso qualquer uma destas opções esteja marcada, na entrada de mercadoria importada a digitação da opção marcada será opcionalda será opcional
                 */
                SITTRIBUTOPCIONALNFIMPORTACAO?: string;

                /**
                 * Peso limite
                 */
                PESOLIMITEOS?: number;

                /**
                 * Número de série da NF-e
                 */
                QTDMAXITENSOS?: number;

                /**
                 * Caso a quantidade de unidades máster por módulo seja menor que a quantidade mínima informada, será utilizado o endereço secundário do produto (rotina 940)
                 */
                QTDMINITENSMODULOOS?: number;

                /**
                 * Estes campos serão utilizados para calcular e exibir na ordem de separação (rotina 940) o tempo estimado por produto e por volume, além de um tempo inicial de separação
                 */
                TEMPOSEPPRODOS?: number;

                /**
                 * Estes campos serão utilizados para calcular e exibir na ordem de separação (rotina 940) o tempo estimado por produto e por volume, além de um tempo inicial de separação
                 */
                TEMPOSEPCAIXAOS?: number;

                /**
                 * Estes campos serão utilizados para calcular e exibir na ordem de separação (rotina 940) o tempo estimado por produto e por volume, além de um tempo inicial de separação
                 */
                TEMPOSEPINICIALOS?: number;

                /**
                 * Destacar impostos na venda manifesto TV13
                 */
                DESTACARIMPOSTOSVENDATV13?: string;

                /**
                 * Caso esta opção esteja marcada a rotina de montagem de carga passará a exibir os pedidos que utilizam integração WMS
                 */
                MONTACARGAWINTHOR?: string;

                /**
                 * Forma de cálculo de frete
                 */
                TIPOFRETEAUTO?: string;

                /**
                 * Bloquear pedidos com valor abaixo do mínimo
                 */
                BLOQUEARPEDIDOSABAIXOVLMINIMO?: string;

                /**
                 * Usa integração WMS
                 */
                USAINTEGRACAOWMS?: string;

                /**
                 * Ao habilitar esta opção, o cálculo do estoque disponível dos produtos nas rotinas de venda passará a considerar a quantidade mínima de estoque para Auto-Serviço (cadastrada por produto).
                 */
                CALCESTDISPCOMQTMINAUTOSERV?: string;

                /**
                 * Ao marcar esta opção, indica que será aceito o uso de descontos com base no valor total do pedido de venda
                 */
                USAPOLITICADESCVALOR?: string;

                /**
                 * Ao marcar esta opção, indica que na digitação do pedido de venda, caso o usuário tenha permissão para venda assistida, deverá ser informado o tipo de entrefa do produto (Retira Posterior ou Entrega).
                 */
                UTILIZAVENDAASSISTIDA?: string;

                /**
                 * Código conta entrega futura
                 */
                CODCONTAVENDAENTREGAFUT?: number;

                /**
                 * Esse campo somente estrá disponível para edição se o campo "Auto-Serviço" estiver habilitado
                 */
                VALIDARENDAPANHAAUTOSERVICO?: string;

                /**
                 * Usa dias úteis por filial
                 */
                USADIAUTILFILIAL?: string;

                /**
                 * Reduzir o ICMS próprio na transferência
                 */
                REDUZIRICMSPROPRIOTRANSF?: string;

                /**
                 * Não gerar crédito de ICMS na entrada de transferência
                 */
                NAOGERARCREDITOENTRADATRANSF?: string;

                /**
                 * Esta opção será utilizada, para impedir a geração no livro fiscal de saídas, das vendas efetuadas fora do estabelecimento, apresentando o intervalo de numeração das mesmas, no campo de observação, da nota fiscal de remessa para venda fora do estabelecime
                 */
                IMPEDETIPO14_LIVROFISCAL?: string;

                /**
                 * Realizar corte automático no retorno do pedido de venda
                 */
                CORTEAUTOMATICOPEDVENDAWMS?: string;

                /**
                 * Será permitido importar no caixa de auto-serviço (rotina 2075) somente pedidos pendentes cuja data de emissão somado ao
                 */
                PRAZOMAXIMPPEDPENDECF?: number;

                /**
                 * Usa consulta de cheque
                 */
                USACONSULTACHEQUE?: string;

                /**
                 * US-Usuário e Senha cadastrados na rotina 528 ( digitar manualmente)        CS-Cartão e Senha Randônica cadastrada na rotina     CT-Cartão ( grava automaticamente a senha randônica cadastrada na rotina 528)
                 */
                TIPOIDENTIFICACAOECF?: string;

                /**
                 * Considerar na montagem do produto (rotinas 1122) o giro da mercadoria, para os itens utilizados na montagem do produto acabado (matéria-prima).
                 */
                CONSIDERAMONTAGEMGIROMERC?: string;

                /**
                 * Codcontacredfornec
                 */
                CODCONTACREDFORNEC?: number;

                /**
                 * Este parâmetro será utilizado pela rotina 316 e na 336, a fim de que sejam gerados pedidos pendentes a partir dos itens faltantes.
                 */
                GERAPEDIDOCOMITENSSEMEST?: string;

                /**
                 * Este parâmetro indica se nas vendas do auto-serviço desta filial será aplicado % de acréscimo no preço de varejo para clientes não contribuintes
                 */
                APLICAPERCVARNAOCONTRIB?: string;

                /**
                 * Este parâmetro indica se nas vendas do auto-serviço desta filial será aplicado % de acréscimo no preço de atacado para clientes não contribuintes
                 */
                APLICAPERCATACNAOCONTRIB?: string;

                /**
                 * Este parâmetro habilita a filial para emitir notas fiscais com numeração diferenciada por origem de venda (telemarketing e balcão).
                 */
                UTILIZAORIGEMVENDANF?: string;

                /**
                 * Este parâmetro habilita a filial a emitir notas fiscais com séries distintas por origem de venda (telemarketing e balcão).
                 */
                ORIGEMVENDANF?: string;

                /**
                 * Próximo número de nota fiscal por origem de venda
                 */
                PROXNUMNOTAORIGVENDA?: number;

                /**
                 * Selecionar o layout deverá ser utilizado para a emissão da nota fiscal por origem de venda.
                 */
                CODDOCORIGEMNF?: number;

                /**
                 * Lançar crédito de cliente pendente
                 */
                CLICREPENDENTE?: string;

                /**
                 * Quantidade múltipla Inicial
                 */
                QTMULTIPLAINICIALECF?: number;

                /**
                 * Tipo de montagem
                 */
                TIPOMONTAGEM?: string;

                /**
                 * Calcular IPI na venda
                 */
                CALCULARIPIVENDA?: string;
}
