export interface PCPRODFILIAL {

                /**
                 * Código do produto
                 */
                CODPROD: number;

                /**
                 * Código da filial.
                 */
                CODFILIAL?: string;

                /**
                 * Código do comprador vinculado ao produto, utilizado para filtrar produto de acordo o comprador
                 */
                CODCOMPRADOR?: number;

                /**
                 * Identifica se o produto é proíbido para venda(PV)
                 */
                PROIBIDAVENDA?: string;

                /**
                 * Produto fora de linha para compra
                 */
                FORALINHA?: string;

                /**
                 * Identifica se o produto é para revenda
                 */
                REVENDA?: string;

                /**
                 * Tempo de reposição do produto no estoque para calculo da sugestão de compra
                 */
                ESTOQUEIDEAL?: number;

                /**
                 * Multiplo
                 */
                MULTIPLO?: number;

                /**
                 * Verificar Multiplo na Venda.
                 */
                CHECARMULTIPLOVENDABNF?: string;

                /**
                 * Aceita venda do estoque fracionada.
                 */
                ACEITAVENDAFRACAO?: string;

                /**
                 * Qtde mínima Auto-Serviço.
                 */
                QTMINAUTOSERV?: number;

                /**
                 * Quantidade mínima atacado atual, utilizado no tipo de precificação Varejo ou Atacado parametro: 2277 - Tipo de precificação
                 */
                QTMINIMAATACADO?: number;

                /**
                 * Quantidade mínima atacado futuro, utilizado no tipo de precificação Varejo ou Atacado parametro: 2277 - Tipo de precificação
                 */
                QTMINIMAATACADOF?: number;

                /**
                 * Código dispositivo estrutura.
                 */
                CODDISPESTRUTURA?: number;

                /**
                 * Indica o produto ativo na filial.
                 */
                ATIVO?: string;

                /**
                 * Indica se utiliza integracao WMS?.
                 */
                UTILIZAQTDESUPMULTIPLA?: string;

                /**
                 * Indica o Pis/Cofins Retido
                 */
                PISCOFINSRETIDO?: string;

                /**
                 * Indica o % do Pis.
                 */
                PERPIS?: number;

                /**
                 * Indica o % de Cofins.
                 */
                PERCOFINS?: number;

                /**
                 * Informa se o produto fará parte do cálculo do valor de IPI.
                 */
                CALCCREDIPI?: string;

                /**
                 * Classificação de venda ABC do produto
                 */
                CLASSEVENDA?: string;

                /**
                 * Classificação ABC do produto
                 */
                CLASSE?: string;

                /**
                 * Classe Estoque.
                 */
                CLASSEESTOQUE?: string;

                /**
                 * Indica o percentual de desconto retenção.
                 */
                PERDESCRETENCAO?: number;

                /**
                 * Indica se considera ST no custo do produto.
                 */
                CONSIDERASTNFCUSTO?: string;

                /**
                 * Abastece palete
                 */
                ABASTEPALETE?: string;

                /**
                 * Abastepaletecx
                 */
                ABASTEPALETECX?: string;

                /**
                 * Codcaracprod
                 */
                CODCARACPROD?: number;

                /**
                 * Codfuncultalter
                 */
                CODFUNCULTALTER?: number;

                /**
                 * Codrotinaultalter
                 */
                CODROTINAULTALTER?: number;

                /**
                 * Codtipoestruturapul
                 */
                CODTIPOESTRUTURAPUL?: number;

                /**
                 * Fracionado
                 */
                FRACIONADO?: string;

                /**
                 * Lastropal
                 */
                LASTROPAL?: number;

                /**
                 * Nivelmaximoarm
                 */
                NIVELMAXIMOARM?: number;

                /**
                 * Nivelminimoarm
                 */
                NIVELMINIMOARM?: number;

                /**
                 * Normapalete
                 */
                NORMAPALETE?: string;

                /**
                 * Pckrotativo
                 */
                PCKROTATIVO?: string;

                /**
                 * Perctoleranciaval
                 */
                PERCTOLERANCIAVAL?: number;

                /**
                 * Pesopalete
                 */
                PESOPALETE?: number;

                /**
                 * Prazoval
                 */
                PRAZOVAL?: number;

                /**
                 * Qtpulmaoregulador
                 */
                QTPULMAOREGULADOR?: number;

                /**
                 * Restricaoblocado
                 */
                RESTRICAOBLOCADO?: number;

                /**
                 * Tipocarga
                 */
                TIPOCARGA?: number;

                /**
                 * Tipopalpul
                 */
                TIPOPALPUL?: number;

                /**
                 * Determina o tipo de produto e que pode ser usado na ordenação da separação, mapa impresso ou rádio frequência.
                 */
                TIPOPROD?: number;

                /**
                 * Usapulmaoregulador
                 */
                USAPULMAOREGULADOR?: string;

                /**
                 * Qttotpal
                 */
                QTTOTPAL?: number;

                /**
                 * Alturapal
                 */
                ALTURAPAL?: number;

                /**
                 * Indica o estoque do produto por série.
                 */
                ESTOQUEPORSERIE?: string;

                /**
                 * Utilizado para informar se irá controlar número de série na expedição.
                 */
                USANUMEROSERIE?: string;

                /**
                 * Indica o percentual de tolerância de corte.
                 */
                PERCTOLERANCIACORTE?: number;

                /**
                 * Gera ICMS livro fiscal
                 */
                GERAICMSLIVROFISCAL?: string;

                /**
                 * Gera ICMS livro fiscal entrada
                 */
                GERAICMSLIVROFISCALENT?: string;

                /**
                 * Gera livro fiscal de devolução a fornecedor.
                 */
                GERAICMSLIVROFISCALDEVFORNEC?: string;

                /**
                 * % Comissão Representante de venda
                 */
                PCOMREP1?: number;

                /**
                 * % Comissão Interno de venda
                 */
                PCOMINT1?: number;

                /**
                 * % Comissão Externo de venda
                 */
                PCOMEXT1?: number;

                /**
                 * Indica a geração ou não de nova caixa.
                 */
                NOVACAIXAFLOWRACK?: string;

                /**
                 * Indica o código da situação tributária refêrente ao PIS/COFINS.
                 */
                CODSITTRIBPISCOFINS?: number;

                /**
                 * Indica se controla validade do produto.
                 */
                CONTROLEDEVALIDADE?: string;

                /**
                 * Exceção para tributação de entrada por NCM / Figura tributária ou Produto / Figura tributária
                 */
                CODFIGURA?: number;

                /**
                 * Alíquota Vig.de ICMS para operações Internas.
                 */
                PERCALIQVIGINT?: number;

                /**
                 * Quantidade máxima pedido venda
                 */
                QTMAXPEDVENDA?: number;

                /**
                 * % Acréscimo Custo
                 */
                PERCALTERCUSTOENT?: number;

                /**
                 * Percentual máximo de variação do preço de compra
                 */
                PERCMAXVARPVENDA?: number;

                /**
                 * Define o critério de arredondamento da  quantidade de entrada no estoque nas entradas efetuadas na Unidade Master. Validação efetuada nos pedidos de compras e na entrada da mercadoria em conjunto com o parametro Aceita venda fração = "Não".
                 */
                TIPOARREDUNIDMASTER?: string;

                /**
                 * Quantidade mínima de estoque para fazer reposição de estoque nas lojas
                 */
                ESTOQUEMIN?: number;

                /**
                 * Tipo de calculo do estoque mínimo para fazer reposição de estoque nas lojas
                 */
                TIPOESTOQUEMINIMO?: string;

                /**
                 * Tipo de calculo do estoque mínimo para fazer reposição de estoque nas lojas
                 */
                TIPOESTOQUEMAXIMO?: string;

                /**
                 * Sub-Classe do Produto. Será calculada pela rotina 506 de acordo com os parâmetros informados no cadastro da filial.
                 */
                SUBCLASSE?: string;

                /**
                 * Percentual que define cálculo de arredondamento para reposição do estoque de lojas.
                 */
                PERCARREDONDA?: number;

                /**
                 * Tipo que define como será o cálculo da sugestão de reposição para o produto
                 */
                TIPOSUGESTAO?: string;

                /**
                 * Quantidade máxima de estoque para fazer reposição de estoque nas lojas
                 */
                ESTOQUEMAX?: number;

                /**
                 * Define se o produto em questão será gerado na carga enviada para o Força de vendas
                 */
                ENVIARFORCAVENDAS?: string;

                /**
                 * Qtde Mínima para compra
                 */
                QTMINSUGCOMPRA?: number;

                /**
                 * Essa informação será utilizada nos botões aumentar e diminuir a quantidade pedida para compra do produto na rotina de pedido de compra de auto-peças.
                 */
                MULTIPLOCOMPRAS?: number;

                /**
                 * Código de origem da mercadoria para geração da situação tributária
                 */
                ORIGMERCTRIB?: string;

                /**
                 * Indica se o produto faz parte de regime especial.
                 */
                REGIMEESPECIAL?: string;

                /**
                 * Código de tributação da Sefaz, criado inicialmente para atender a DIA-AM.
                 */
                CODTRIBSEFAZ?: string;

                /**
                 * Quando marcado este parâmetro pelo menos uma das informações para o processo da FCI será obrigatória.
                 */
                CONTROLARFCI?: string;

                /**
                 * Indica se o produto possui ICMS Diferido
                 */
                ICMSDIFERIDO?: string;

                /**
                 * Quando marcado como sim o produto esta sujeito a desoneração
                 */
                SUJDESONERACAO?: string;

                /**
                 * Código da atividade utilizado na desoneracao, esse código sera utilizado para replicação dos dados na rotina 1000
                 */
                CNAEDESONERACAO?: string;

                /**
                 * Percentual de Desoneração
                 */
                PERCDESONERACAO?: number;

                /**
                 * Regulamento de ICMS do Estado de São Paulo a ser utilizado nas transferência via 1124.
                 */
                PROTOCOLOICMS1785?: string;

                /**
                 * Data início do Código do produto antes de utilizar o cadastro de produto do Winthor.
                 */
                DTINICODPRODANTUTICAD?: Date;

                /**
                 * Data da primeira Movimentação do novo código do produto no Winthor
                 */
                DTPRIMOVNOVCODPROD?: Date;

                /**
                 * Código do produto antes de utilizar o cadastro de produto do Winthor
                 */
                CODPRODANTUTICAD?: string;

                /**
                 * Descrição do produto antes de utilizar o cadastro de produto do Winthor
                 */
                DSCPRODANTUTICAD?: string;

                /**
                 * Informa quantos números de séries são vinculados a uma unidade do produto.
                 */
                NUMEROSSERIECONTROLADOS?: number;

                /**
                 * Indica que o produto controla número de série.
                 */
                CONTROLANUMSERIE?: string;

                /**
                 * Define o tipo de descarga que será utilizado para agendamento de pedidos de compra na rotina 255 de acordo o parâmetro da rotina 132 código 2982.
                 */
                TIPOESTAGENDA?: string;

                /**
                 * Data final de utilização do Código do produto antes de utilizar o cadastro de produto do Winthor
                 */
                DTFINUTICODPRODANTUTICAD?: Date;

                /**
                 * Define valor a ser impresso no DANFe. BRUTO sera impresso o desconto concedido na venda e no valor total o valor do produto diminuindo o desconto. LIQUIDO será impresso o valor liquido.
                 */
                PRECOUTILIZADONFE?: string;

                /**
                 * Alíquota Vig.de ICMS para operações Externas.
                 */
                PERCALIQVIGEXT?: number;

                /**
                 * Define qual será a filial retira dos brindes contemplados automaticamente no ato da venda.
                 */
                CODFILIALRETIRABRINDE?: string;

                /**
                 * Percentual utilizado na geração do SPED Fiscal (Rot.1097) para o registro C197. Ajuste de documentos fiscais, da aba Minas Gerais.
                 */
                PERCARGAEFETIVA?: number;

                /**
                 * Margem de lucratividade mínima para permitir a venda deste produto.
                 */
                PERCMARGEMMIN?: number;

                /**
                 * Define se irá calcular IPI para o produto na filial
                 */
                CALCULAIPI?: string;

                /**
                 * Percentual utilizado nos relatório de saída e entrada devolução com Tratamento Tributário Diferenciado (TTD) da rotina 1031 aba Minas Gerais.
                 */
                PERCCARGEFETIV?: number;

                /**
                 * Preço máximo consumidor
                 */
                PRECOMAXCONSUM?: number;

                /**
                 * Opção para não enviar o CEST nos casos em que o produto não se enquadrar nas situações descritas na legislação Estadual
                 */
                DESCONSIDERARCEST?: string;

                /**
                 * Definido como "SIM" e pamâmetro 3889 da rotina 132 como "SIM" é obrigatória a conferencia do item no PDV
                 */
                CONFPEDPDV?: string;

                /**
                 * CNPJ do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante
                 */
                CNPJFABRICANTE?: string;

                /**
                 * Indicador de Produção em escala relevante, conforme Cláusula 23 do Convenio ICMS 52/2017; S - Produzido em Escala Relevante; N - Produzido em Escala NÃO Relevante
                 */
                INDESCALARELEVANTE?: string;

                /**
                 * Nome do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante
                 */
                FABRICANTE?: string;

                /**
                 * Percentual que será acrescido na base de calculo da IPI nas operações de transferência (316 TV10/ 1124).
                 */
                PERACRESBASEIPI?: number;

                /**
                 * Este campo estabelecerá a prioridade necessária deste produto junto ao DANFE, produtos descritos como Zero (0) não entraram junto a prioridade, deverá ser estabelecido com três casas produto a produto.
                 */
                CODCADPRIORIDADE?: number;

                /**
                 * Informa o código da filial retira do produto, ao informar este campo, será desconsiderado o valor do campo na tabela de produto (rotina 203)
                 */
                CODFILIALRETIRA?: string;

                /**
                 * Peso bruto do produto
                 */
                PESOBRUTOMASTER?: number;

                /**
                 * Peso da peça do produto
                 */
                PESOPECA?: number;

                /**
                 * Esse parametro determina se o crédito presumido é aplicável ao produto Sim (S) ou Não (N).
                 */
                PERMITECREDITOPRESUMIDO?: string;

                /**
                 * "Caso o parâmetro esteja marcado como ¿S¿ a rotina deverá permitir informar apenas o QRCODE, não permitir informar o código de barras EAN ou DUN. Caso o parâmetro esteja como ¿N¿ pode ser informado qualquer código de barra"
                 */
                USAIDENTIFICADORUNICO?: string;

                /**
                 * Campo para informar se será o produtos  será enviado para o ecommerce, uso exclusido para operações WEB.
                 */
                ENVIAPRODUTOECOMMERCE?: string;

                /**
                 * Este campo tem por finalidade auxiliar os clientes em virada que não possuem a efetiva entrada da mercadoria para o processo de regime especial, todo processo deverá ser gerado manualmente.
                 */
                CHAVENATURAL?: string;

                /**
                 * PMPF - Preço máximo pessoa física
                 */
                PMPFMEDICAMENTO?: number;

                /**
                 * Preço de fábrica
                 */
                PRECOFABRICA?: number;

                /**
                 * Esse campo irá definir o grupo de produtos que irá receber uma série específica criado na 535
                 */
                CODGRUPOSEQNFE?: number;

                /**
                 * A mensagem inserida nesse campo será gerada no xml/danfe na tag infADprod para atender legislação.
                 */
                INFTECNICA?: string;

                /**
                 * Considera IPI para cálculo PIS/COFINS por Produto/Filial
                 */
                CALCULAPISCOFINSCOMIPI?: string;

                /**
                 * Alíquota Vigente do "Fundo de Combate a Pobreza" para uso nas obrigações Fiscais.
                 */
                PERCFCP?: number;

                /**
                 * Produto sujeito ao Fundo de Combate à Pobreza
                 */
                SUJFCP?: string;

                /**
                 * Considerar o II e IPI suspensos como outras despesas em vendas interestaduais nas quais o cliente não esteja enquadrado no regime do SUFRAMA (MERCOSUL/GMC/RES. N° 16/21). Exclusivo para o módulo 41.
                 */
                CONSIMPSUSPOUTDESP?: string;
}
