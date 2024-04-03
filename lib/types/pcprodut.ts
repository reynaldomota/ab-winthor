export interface PCPRODUT {

                /**
                 * Código identificador do produto
                 */
                CODPROD: number;

                /**
                 * Descrição do produto
                 */
                DESCRICAO?: string;

                /**
                 * Unidade da embalagem de venda do produto
                 */
                EMBALAGEM?: string;

                /**
                 * Unidade de venda (controle do estoque)
                 */
                UNIDADE?: string;

                /**
                 * Indica Peso Líquido do produto
                 */
                PESOLIQ?: number;

                /**
                 * Indica Peso Bruto do produto
                 */
                PESOBRUTO?: number;

                /**
                 * Código do departamento vinculado ao produto, cadastro rotina 513
                 */
                CODEPTO?: number;

                /**
                 * Código da Seção vinculado ao produto cadastro, rotina 571
                 */
                CODSEC?: number;

                /**
                 * % Vendedor interno
                 */
                PCOMINT1?: number;

                /**
                 * Quantidade de dias para reposição do produto no estoque, utilizado para calculo da sugestão de compra
                 */
                TEMREPOS?: number;

                /**
                 * Quantidade unitária na embalagem de venda
                 */
                QTUNIT?: number;

                /**
                 * Observação:
                 */
                OBS?: string;

                /**
                 * % Representante
                 */
                PCOMREP1?: number;

                /**
                 * % Vendedor externo
                 */
                PCOMEXT1?: number;

                /**
                 * Código do fornecedor vinculado ao produto, cadastro rotina 202
                 */
                CODFORNEC?: number;

                /**
                 * Data do cadastro do produto
                 */
                DTCADASTRO?: Date;

                /**
                 * Indica o volume do produto M³
                 */
                VOLUME?: number;

                /**
                 * Indica qual é o código de barras do produto na unidade de venda.
                 */
                CODAUXILIAR?: number;

                /**
                 * Classe produto
                 */
                CLASSE?: string;

                /**
                 * É o número de embalagens (unidades) masters que formam a base do palete.
                 */
                LASTROPAL?: number;

                /**
                 * É o número de latros que formam a altura máxima permitida da carga no palete, ou seja, este número é limitado pela altura e peso máximos do palete.
                 */
                ALTURAPAL?: number;

                /**
                 * É a norma de paletização (lastro x camada), ou seja, o total de embalagens (unidades) masters que formam o palete.
                 */
                QTTOTPAL?: number;

                /**
                 * Prazo validade(dias)
                 */
                PRAZOVAL?: number;

                /**
                 * Quantas unidade de compra vem na unidade de venda?
                 */
                QTUNITCX?: number;

                /**
                 * Define se o produto é para revenda.
                 */
                REVENDA?: string;

                /**
                 * Define se o produto é importado utilizado no módulo de importação.
                 */
                IMPORTADO?: string;

                /**
                 * FOLHAROSTO
                 */
                FOLHAROSTO?: string;

                /**
                 * Data Exclusão
                 */
                DTEXCLUSAO?: Date;

                /**
                 * Endereçamento do produto, módulo são considerados depósitos dentro do sistema
                 */
                MODULO?: number;

                /**
                 * Endereçamento do produto. Indica a Rua do produtos. Rua são considerados os corredores de movimentação.
                 */
                RUA?: number;

                /**
                 * Endereçamento do produto. Indica o Apartamento do produto. Apartamentos são considerados os andares dos paletes.
                 */
                APTO?: number;

                /**
                 * Dt. Últ. Alt. Comercial.
                 */
                DTULTALTCOM?: Date;

                /**
                 * Campanha(excluido)
                 */
                CAMPANHA?: string;

                /**
                 * Define se o produto é master(mesmo código de produto) ou filho(código diferente)
                 */
                CODPRODPRINC?: number;

                /**
                 * Define se o produto está fora de linha para compra
                 */
                OBS2?: string;

                /**
                 * Percentual IPI utilizado na entrada da mercadoria
                 */
                PERCIPI?: number;

                /**
                 * Unidade de compra junto ao fornecedor
                 */
                UNIDADEMASTER?: string;

                /**
                 * CORREDOR
                 */
                CORREDOR?: string;

                /**
                 * Largura do produto na norma palete.
                 */
                LARGURAM3?: number;

                /**
                 * Altura do produto na norma palete.
                 */
                ALTURAM3?: number;

                /**
                 * Comprimento do produto na norma palete.
                 */
                COMPRIMENTOM3?: number;

                /**
                 * Tipo de restição para venda e separação de mercadoria.
                 */
                TIPORESTRICAO?: string;

                /**
                 * Quantidade total pallete orçado.
                 */
                QTTOTPALFRAC?: number;

                /**
                 * Dv
                 */
                DV?: number;

                /**
                 * Clase venda do produto.
                 */
                CLASSEVENDA?: string;

                /**
                 * Classe margem do produto
                 */
                CLASSEMC?: string;

                /**
                 * Classe estoque
                 */
                CLASSEESTOQUE?: string;

                /**
                 * Classe compra
                 */
                CLASSECOMPRA?: string;

                /**
                 * Percentual de ICMS utilizado na entrada da mercadoria
                 */
                PERICM?: number;

                /**
                 * Total de desconto dentro da NF concedidos
                 */
                PERCDESC?: number;

                /**
                 * Vl.Pauta
                 */
                PERCST?: number;

                /**
                 * Percentual de bonificação em mercadoria utilizado nos pedidos de compra
                 */
                PERCBON?: number;

                /**
                 * Percentual de frete CIF concedido na NF entrada
                 */
                PERCFRETE?: number;

                /**
                 * Moeda
                 */
                MOEDA?: string;

                /**
                 * Data Conv.Dolar
                 */
                DTDOLAR?: string;

                /**
                 * Descrição 1
                 */
                DESCRICAO1?: string;

                /**
                 * Descrição 2
                 */
                DESCRICAO2?: string;

                /**
                 * Descrição 3
                 */
                DESCRICAO3?: string;

                /**
                 * Descrição 4
                 */
                DESCRICAO4?: string;

                /**
                 * Classificação fiscal(Tare DF)
                 */
                CLASSIFICFISCAL?: string;

                /**
                 * Preço de compra cadastrado pelo usuário(rotinas 2032 ou 240) ou atualizado pela condições comerciais do pedido de compra.
                 */
                CUSTOREP?: number;

                /**
                 * Data da ultima atualização do custo reposição da fabrica.
                 */
                DTULTALTCUSTOREP?: Date;

                /**
                 * Nomenclatura Comum do Mercosul que posiciona a mercadoria para efeitos tributação.
                 */
                NBM?: string;

                /**
                 * Código do produto utilizado pelo fornecedor destacado na NF de entrada.
                 */
                CODFAB?: string;

                /**
                 * TRIBFEDERAL
                 */
                TRIBFEDERAL?: string;

                /**
                 * PERCIPIVENDA
                 */
                PERCIPIVENDA?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC1?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC2?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC3?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC4?: number;

                /**
                 * Percentual de ICMS antecipado utilizado na entrada da mercadoria
                 */
                PERICMSANTECIPADO?: number;

                /**
                 * CODPRODSIMILAR
                 */
                CODPRODSIMILAR?: number;

                /**
                 * Código da Categoria vinculado ao produto, cadastro rotina 549
                 */
                CODCATEGORIA?: number;

                /**
                 * Código da Sub-Categoria vinculado ao produto, cadastro rotina 569
                 */
                CODSUBCATEGORIA?: number;

                /**
                 * Vincula o produto somente a uma filial, caso seja nulo(ESC), esse produto será utilizado em todas as filiais.
                 */
                CODFILIAL?: string;

                /**
                 * Indica se o calculo de receita de descarga será por peso ou volume
                 */
                TIPODESCARGA?: string;

                /**
                 * Status
                 */
                STATUS?: string;

                /**
                 * Percentual outras despesas dentro da NF entrada
                 */
                PERCOUTRASDESP?: number;

                /**
                 * Percentual de frete FOB concedido na NF entrada
                 */
                PERCFRETEFOB?: number;

                /**
                 * Percentual de ST utilizado na entrada da mercadoria
                 */
                PERCDESPADICIONAL?: number;

                /**
                 * PERCDESPFIN
                 */
                PERCDESPFIN?: number;

                /**
                 * Percentual de bonificação em mercadoria utilizado nos pedidos de compra
                 */
                VLBONIFIC?: number;

                /**
                 * Preço fixo
                 */
                PRECOFIXO?: string;

                /**
                 * Define se o PIS/COFINS Retido na fonte.
                 */
                PISCOFINSRETIDO?: string;

                /**
                 * Percentual comissão motorista.
                 */
                PERCCOMMOT?: number;

                /**
                 * Percentual IVA ressarcimento.
                 */
                IVARESSARC?: number;

                /**
                 * Percentual ICMS ressarcimento.
                 */
                ICMSRESSARC?: number;

                /**
                 * Indica se a descarga do produto será Caixa ou Fardo
                 */
                TIPOVOLUMEDESCARGA?: string;

                /**
                 * COMISSAOFIXA
                 */
                COMISSAOFIXA?: string;

                /**
                 * Utiliza classificação arroz
                 */
                USACLASSIFICACAO?: string;

                /**
                 * PERCIVAICMANTECIP
                 */
                PERCIVAICMANTECIP?: number;

                /**
                 * PERCALIQINTICMANTECIP
                 */
                PERCALIQINTICMANTECIP?: number;

                /**
                 * PERCALIQEXTICMANTECIP
                 */
                PERCALIQEXTICMANTECIP?: number;

                /**
                 * Percentual alíquota reduzida de ICMS utilizado na entrada da mercadoria
                 */
                PERCICMRED?: number;

                /**
                 * Percentual de IVA para calculo do ST utilizado na entrada da mercadoria
                 */
                PERCIVA?: number;

                /**
                 * Percentual alíquota interna(ICMS da NF entrada)  para calculo do ST utilizado na entrada da mercadoria
                 */
                PERCALIQINT?: number;

                /**
                 * Percentual alíquota externa(venda dentro do estado)  para calculo do ST utilizado na entrada da mercadoria
                 */
                PERCALIQEXT?: number;

                /**
                 * Indica qual é o código de barras do produto na unidade master.
                 */
                CODAUXILIAR2?: number;

                /**
                 * VENDADIRETA
                 */
                VENDADIRETA?: string;

                /**
                 * Passa livre
                 */
                PASSELIVRE?: string;

                /**
                 * MODULO2
                 */
                MODULO2?: number;

                /**
                 * RUA2
                 */
                RUA2?: number;

                /**
                 * NUMERO2
                 */
                NUMERO2?: number;

                /**
                 * APTO2
                 */
                APTO2?: number;

                /**
                 * Cód.Passe fiscal
                 */
                CODPASSEFISCAL?: number;

                /**
                 * Campo específico para integração
                 */
                TIPOALTURAPALETE?: number;

                /**
                 * Nº Lote
                 */
                NUMLOTE?: string;

                /**
                 * Dt.Vencimento
                 */
                DTVENC?: Date;

                /**
                 * Indenização
                 */
                PERINDENIZ?: number;

                /**
                 * Percentual de PIS utilizado na entrada da mercadoria
                 */
                PERPIS?: number;

                /**
                 * Indica qual é o múltiplo do produto, não poderá realizar operações se a quantidade não for multipla ao informado nesse campo
                 */
                MULTIPLO?: number;

                /**
                 * VLVENDATEMP
                 */
                VLVENDATEMP?: number;

                /**
                 * Tipo de mercadoria
                 */
                TIPOMERC?: string;

                /**
                 * Norma Fornec.
                 */
                NORMAFORNECEDOR?: string;

                /**
                 * TIPOCALCST
                 */
                TIPOCALCST?: string;

                /**
                 * PERICMFRETE
                 */
                PERICMFRETE?: number;

                /**
                 * LOTEMINCOMPRA
                 */
                LOTEMINCOMPRA?: number;

                /**
                 * TIPOSUGCOMPRA
                 */
                TIPOSUGCOMPRA?: string;

                /**
                 * LOTEINCCOMPRA
                 */
                LOTEINCCOMPRA?: number;

                /**
                 * LOTEPRODUCAO
                 */
                LOTEPRODUCAO?: number;

                /**
                 * AUTORIZATIPO4
                 */
                AUTORIZATIPO4?: string;

                /**
                 * Aceita venda fracionada
                 */
                ACEITAVENDAFRACAO?: string;

                /**
                 * Código do usuário que cadastrou o produto
                 */
                CODFUNCCADASTRO?: number;

                /**
                 * Código do usuário que fez a última alteração no cadastro
                 */
                CODFUNCULTALTER?: number;

                /**
                 * CODFISCAL
                 */
                CODFISCAL?: number;

                /**
                 * SITTRIBUT
                 */
                SITTRIBUT?: string;

                /**
                 * % Margem mínima de venda
                 */
                MARGEMMIN?: number;

                /**
                 * FLAGS
                 */
                FLAGS?: string;

                /**
                 * FLAG0
                 */
                FLAG0?: string;

                /**
                 * FLAG1
                 */
                FLAG1?: string;

                /**
                 * FLAG2
                 */
                FLAG2?: string;

                /**
                 * LARGURAARM
                 */
                LARGURAARM?: number;

                /**
                 * COMPRIMENTOARM
                 */
                COMPRIMENTOARM?: number;

                /**
                 * ALTURAARM
                 */
                ALTURAARM?: number;

                /**
                 * VOLUMEARM
                 */
                VOLUMEARM?: number;

                /**
                 * CAMAPAPAL
                 */
                CAMAPAPAL?: number;

                /**
                 * Produto miudeza
                 */
                TIPOPROD?: number;

                /**
                 * TIPOPAL
                 */
                TIPOPAL?: number;

                /**
                 * TIPOARM
                 */
                TIPOARM?: number;

                /**
                 * CAPACIDADEPICKING
                 */
                CAPACIDADEPICKING?: number;

                /**
                 * CODCARACPROD
                 */
                CODCARACPROD?: number;

                /**
                 * CODTIPOESTRUTURA
                 */
                CODTIPOESTRUTURA?: number;

                /**
                 * RESTRICAOBLOCADO
                 */
                RESTRICAOBLOCADO?: number;

                /**
                 * Ponto de reposição
                 */
                PONTOREPOSICAO?: number;

                /**
                 * TIPOPALPUL
                 */
                TIPOPALPUL?: number;

                /**
                 * CODTIPOESTRUTURAPUL
                 */
                CODTIPOESTRUTURAPUL?: number;

                /**
                 * Define se o produto é o principal (mesmo código de produto) ou filho(código diferente)
                 */
                CODPRODMASTER?: number;

                /**
                 * QTUNITCT
                 */
                QTUNITCT?: number;

                /**
                 * RUACT
                 */
                RUACT?: number;

                /**
                 * NUMEROCT
                 */
                NUMEROCT?: number;

                /**
                 * APTOCT
                 */
                APTOCT?: number;

                /**
                 * MODULOCT
                 */
                MODULOCT?: number;

                /**
                 * Endereçamento do produto. Indica a Rua do produtos. Rua são considerados os corredores de movimentação.
                 */
                RUACX?: number;

                /**
                 * Endereçamento do produto. Indica o Apartamento do produto. Apartamentos são considerados os andares dos paletes.
                 */
                APTOCX?: number;

                /**
                 * Endereçamento do produto, módulo são considerados depósitos dentro do sistema
                 */
                MODULOCX?: number;

                /**
                 * UNIDADECT
                 */
                UNIDADECT?: string;

                /**
                 * Valor de pauta para calculo do ST utilizado na entrada da mercadoria
                 */
                VLPAUTA?: number;

                /**
                 * Informar valor da pauta do IPI na tabela PCPRODUT.
                 */
                VLPAUTAIPI?: number;

                /**
                 * Unidade da embalagem de Master do produto
                 */
                EMBALAGEMMASTER?: string;

                /**
                 * EMBALAGEMCT
                 */
                EMBALAGEMCT?: string;

                /**
                 * NUMDIASMAXVENDA
                 */
                NUMDIASMAXVENDA?: number;

                /**
                 * USAALIQCREDICMSDIFER
                 */
                USAALIQCREDICMSDIFER?: string;

                /**
                 * PERCALIQCREDICMSDIFEREST
                 */
                PERCALIQCREDICMSDIFEREST?: number;

                /**
                 * PERCALIQCREDICMSDIFERINTER
                 */
                PERCALIQCREDICMSDIFERINTER?: number;

                /**
                 * Psicotrópico
                 */
                PSICOTROPICO?: string;

                /**
                 * indica qual é a linha que o produto pertence cadastro rotina 559.
                 */
                CODLINHAPROD?: number;

                /**
                 * Preço de compra futuro, cadastrado e atualizado pela rotina 240.
                 */
                CUSTOREPTAB?: number;

                /**
                 * Preço máximo comsumidor atual
                 */
                PRECOMAXCONSUM?: number;

                /**
                 * Preço máximo comsumidor futuro
                 */
                PRECOMAXCONSUMTAB?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC5?: number;

                /**
                 * Indica que o produto pertence a uma determinada lista para a realização de inventários rotativos constantes.
                 */
                NUMLISTAINVENTROT?: number;

                /**
                 * Indica qual é a sequência do item na lista que está informado para o produto no linventário
                 */
                NUMSEQINVENTROT?: number;

                /**
                 * MEDICAMENTOHOSPITALAR
                 */
                MEDICAMENTOHOSPITALAR?: string;

                /**
                 * % Bonificação de Venda
                 */
                PERCBONIFICVENDA?: number;

                /**
                 * PRINCIPIOATIVO
                 */
                PRINCIPIOATIVO?: string;

                /**
                 * Tipo Trib. Medicamento
                 */
                TIPOTRIBUTMEDIC?: string;

                /**
                 * DEPOSITO
                 */
                DEPOSITO?: number;

                /**
                 * PREDIO
                 */
                PREDIO?: number;

                /**
                 * NIVEL
                 */
                NIVEL?: number;

                /**
                 * CODEQUIPE
                 */
                CODEQUIPE?: number;

                /**
                 * A Superintendência da Zona Franca de Manaus (Suframa) é uma autarquia vinculada ao Ministério do Desenvolvimento, Indústria e Comércio Exterior que administra a Zona Franca de Manaus - ZFM.
                 */
                PERCSUFRAMA?: number;

                /**
                 * Exportação para balança
                 */
                EXPORTABALANCA?: string;

                /**
                 * Código informação nutricional
                 */
                CODINFNUTRI?: number;

                /**
                 * SOMENTETV3
                 */
                SOMENTETV3?: string;

                /**
                 * PCOMTLMKT
                 */
                PCOMTLMKT?: number;

                /**
                 * Sequência
                 */
                SEQTABPRECO?: number;

                /**
                 * QTPONTOPEDIDO
                 */
                QTPONTOPEDIDO?: number;

                /**
                 * QTMINPRODUZIR
                 */
                QTMINPRODUZIR?: number;

                /**
                 * PRAZOMEDIOPRODUCAO
                 */
                PRAZOMEDIOPRODUCAO?: number;

                /**
                 * NOMECOMERCIAL
                 */
                NOMECOMERCIAL?: string;

                /**
                 * Fração de separação
                 */
                FRACAOSEPARACAO?: number;

                /**
                 * FATORTRANSF
                 */
                FATORTRANSF?: number;

                /**
                 * TAMANHOLOTEFAB
                 */
                TAMANHOLOTEFAB?: number;

                /**
                 * VELOCIDADEESP
                 */
                VELOCIDADEESP?: number;

                /**
                 * VELOCIDADEOPERACIONAL
                 */
                VELOCIDADEOPERACIONAL?: number;

                /**
                 * EFICIENCIAOPERACIONAL
                 */
                EFICIENCIAOPERACIONAL?: number;

                /**
                 * CODFILIALPRODUTORA
                 */
                CODFILIALPRODUTORA?: string;

                /**
                 * FATORUNFARM
                 */
                FATORUNFARM?: number;

                /**
                 * VOLUMEREC
                 */
                VOLUMEREC?: number;

                /**
                 * PRAZO
                 */
                PRAZO?: number;

                /**
                 * PRAZOENTR
                 */
                PRAZOENTR?: number;

                /**
                 * Indica o principio ativo do produto, geralmente medicamentos.
                 */
                CODPRINCIPATIVO?: number;

                /**
                 * Cód. Produto Sintegra
                 */
                CODPRODSINTEGRA?: string;

                /**
                 * TIPORESTRICAOMED
                 */
                TIPORESTRICAOMED?: string;

                /**
                 * Informações técnicas
                 */
                INFORMACOESTECNICAS?: string;

                /**
                 * Usa frete especial
                 */
                FRETEESPECIAL?: string;

                /**
                 * Indica o caminho para que as demais rotinas localizem a imagem salva do produto.
                 */
                DIRFOTOPROD?: string;

                /**
                 * CUSTOREPMC
                 */
                CUSTOREPMC?: number;

                /**
                 * TIPOMP
                 */
                TIPOMP?: string;

                /**
                 * Indica o peso bruto da embalagem master
                 */
                PESOBRUTOMASTER?: number;

                /**
                 * PESOLIQMASTER
                 */
                PESOLIQMASTER?: number;

                /**
                 * PCKROTATIVO
                 */
                PCKROTATIVO?: string;

                /**
                 * PRAZOEXPURGO
                 */
                PRAZOEXPURGO?: number;

                /**
                 * NUMULTEXPURGO
                 */
                NUMULTEXPURGO?: number;

                /**
                 * DTULTEXPURGO
                 */
                DTULTEXPURGO?: Date;

                /**
                 * DTPROXEXPURGO
                 */
                DTPROXEXPURGO?: Date;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC6?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC7?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC8?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC9?: number;

                /**
                 * Desconto comercial concedido pelo fornecedor dentro da NF
                 */
                PERCDESC10?: number;

                /**
                 * Número original
                 */
                NUMORIGINAL?: string;

                /**
                 * DEPOSITOCX
                 */
                DEPOSITOCX?: number;

                /**
                 * PREDIOCX
                 */
                PREDIOCX?: number;

                /**
                 * NIVELCX
                 */
                NIVELCX?: number;

                /**
                 * PONTOREPOSICAOCX
                 */
                PONTOREPOSICAOCX?: number;

                /**
                 * CAPACIDADEPICKINGCX
                 */
                CAPACIDADEPICKINGCX?: number;

                /**
                 * DENOMINACAOCOMUNBRASILEIRA
                 */
                DENOMINACAOCOMUNBRASILEIRA?: string;

                /**
                 * PERCTOLERANCIAVAL
                 */
                PERCTOLERANCIAVAL?: number;

                /**
                 * Descrição 5
                 */
                DESCRICAO5?: string;

                /**
                 * Descrição 6
                 */
                DESCRICAO6?: string;

                /**
                 * Descrição 7
                 */
                DESCRICAO7?: string;

                /**
                 * CUSTOPROXIMACOMPRA
                 */
                CUSTOPROXIMACOMPRA?: number;

                /**
                 * Indica o código da distribuição, utilizado para determinar se a separação será por Pedido ou por Rua
                 */
                CODDISTRIB?: string;

                /**
                 * ABASTEPALETE
                 */
                ABASTEPALETE?: string;

                /**
                 * ABASTEPALETECX
                 */
                ABASTEPALETECX?: string;

                /**
                 * Fracionado
                 */
                FRACIONADO?: string;

                /**
                 * MEDCODFUNCLIBVENDA
                 */
                MEDCODFUNCLIBVENDA?: number;

                /**
                 * MEDDTLIBVENDA
                 */
                MEDDTLIBVENDA?: Date;

                /**
                 * CODNESTLETERCEIROS
                 */
                CODNESTLETERCEIROS?: string;

                /**
                 * FATORCONVERSAONESTLE
                 */
                FATORCONVERSAONESTLE?: number;

                /**
                 * Indica o percentual negociado na venda.
                 */
                PERCVENDA?: number;

                /**
                 * CONFAZ
                 */
                CONFAZ?: string;

                /**
                 * MULTIPLO2
                 */
                MULTIPLO2?: number;

                /**
                 * ANVISANUMREGMED
                 */
                ANVISANUMREGMED?: string;

                /**
                 * ANVISAQTEMBALAGEM
                 */
                ANVISAQTEMBALAGEM?: number;

                /**
                 * ANVISAFORMAFARM
                 */
                ANVISAFORMAFARM?: string;

                /**
                 * ANVISAVIAADM
                 */
                ANVISAVIAADM?: string;

                /**
                 * ANVISACLASTERAPEUTICA
                 */
                ANVISACLASTERAPEUTICA?: string;

                /**
                 * ANVISAUSOCONTINUO
                 */
                ANVISAUSOCONTINUO?: string;

                /**
                 * ANVISACAPINSTAL
                 */
                ANVISACAPINSTAL?: number;

                /**
                 * ANVISACONCEN
                 */
                ANVISACONCEN?: number;

                /**
                 * ANVISAUNDOSAG
                 */
                ANVISAUNDOSAG?: string;

                /**
                 * ANVISANUMPRINCAT
                 */
                ANVISANUMPRINCAT?: number;

                /**
                 * ANVISADESCPRINCAT1
                 */
                ANVISADESCPRINCAT1?: string;

                /**
                 * ANVISADESCPRINCAT2
                 */
                ANVISADESCPRINCAT2?: string;

                /**
                 * ANVISADESCPRINCAT3
                 */
                ANVISADESCPRINCAT3?: string;

                /**
                 * ANVISADESCPRINCAT4
                 */
                ANVISADESCPRINCAT4?: string;

                /**
                 * ANVISACOEFTEC
                 */
                ANVISACOEFTEC?: string;

                /**
                 * ANVISAUNCOEFTEC
                 */
                ANVISAUNCOEFTEC?: string;

                /**
                 * País de origem do produto
                 */
                PAISORIGEM?: string;

                /**
                 * TIPOEMBALAGEMNESTLE
                 */
                TIPOEMBALAGEMNESTLE?: number;

                /**
                 * CODENDERECOAP
                 */
                CODENDERECOAP?: number;

                /**
                 * CODENDERECOCX
                 */
                CODENDERECOCX?: number;

                /**
                 * CUSTOREPZFM
                 */
                CUSTOREPZFM?: number;

                /**
                 * CUSTOREPZFMTAB
                 */
                CUSTOREPZFMTAB?: number;

                /**
                 * PRECOMAXCONSUMZFM
                 */
                PRECOMAXCONSUMZFM?: number;

                /**
                 * PRECOMAXCONSUMZFMTAB
                 */
                PRECOMAXCONSUMZFMTAB?: number;

                /**
                 * MEXIVA
                 */
                MEXIVA?: number;

                /**
                 * MEXIEPS
                 */
                MEXIEPS?: number;

                /**
                 * MEXFPGC
                 */
                MEXFPGC?: number;

                /**
                 * USACROSS
                 */
                USACROSS?: string;

                /**
                 * Define se o produto tem controle de estoque no WMS(módulo 17).
                 */
                USAWMS?: string;

                /**
                 * CODGENEROFISCAL
                 */
                CODGENEROFISCAL?: number;

                /**
                 * QTMAXGONDULA
                 */
                QTMAXGONDULA?: number;

                /**
                 * QTMINGONDULA
                 */
                QTMINGONDULA?: number;

                /**
                 * Produto com vasilhame
                 */
                UTILIZARVASILHAME?: string;

                /**
                 * Indica qual é o código do produto que é vasilhame do que está sendo editado ou pesquisado
                 */
                CODVASILHAME?: number;

                /**
                 * NUMSEQATU
                 */
                NUMSEQATU?: number;

                /**
                 * TIPOEMBALAGE
                 */
                TIPOEMBALAGE?: string;

                /**
                 * TIPOCARGA
                 */
                TIPOCARGA?: number;

                /**
                 * ALIQAVULSADARE
                 */
                ALIQAVULSADARE?: number;

                /**
                 * PERCBASEREDENT
                 */
                PERCBASEREDENT?: number;

                /**
                 * VLIPIPORKG
                 */
                VLIPIPORKG?: number;

                /**
                 * TIPOPISCOFINSRETIDO
                 */
                TIPOPISCOFINSRETIDO?: number;

                /**
                 * ESPECIFICOATIVIDADEPR
                 */
                ESPECIFICOATIVIDADEPR?: string;

                /**
                 * Codrotinaultalter
                 */
                CODROTINAULTALTER?: number;

                /**
                 * COMISSAOPORLUCRATIVIDADE
                 */
                COMISSAOPORLUCRATIVIDADE?: string;

                /**
                 * VLIPIPESO
                 */
                VLIPIPESO?: number;

                /**
                 * Define se o produto utiliza Comissão Padrão ou Comissão por Lucratividade.
                 */
                TIPOCOMISSAO?: string;

                /**
                 * Indica se o produto é frios, padrão ou Rolos (Fios)
                 */
                TIPOESTOQUE?: string;

                /**
                 * Indica o peso médio de uma peça de produtos do tipo frios
                 */
                PESOPECA?: number;

                /**
                 * Define se o produto tem restrição 'N' (Normal) ou 'C' (Congelado).
                 */
                RESTRICAOTRANSP?: string;

                /**
                 * Campo de ligação com o Prazo de Entrega (PCPRAZO), que será usado para cálculo da data de entrega do item do pedido de compra.
                 */
                CODPRAZOENT?: string;

                /**
                 * Na rotina 203, pasta Armazenagem, receberá a metragem do produto.
                 */
                QTMETROS?: number;

                /**
                 * Pesopalete
                 */
                PESOPALETE?: number;

                /**
                 * Codenderecoal
                 */
                CODENDERECOAL?: number;

                /**
                 * Indica se haverá validação de lote.
                 */
                VALIDARLOTE?: string;

                /**
                 * Grade
                 */
                CODGRADE?: number;

                /**
                 * Cor
                 */
                CODCOR?: number;

                /**
                 * Tamanho da grade
                 */
                COLUNAGRADE?: number;

                /**
                 * Indica se o produto é isento ou não do registro no Ministério da Saúde.
                 */
                ISENTOREGMS?: string;

                /**
                 * Registro do produto no Ministério da Saúde.
                 */
                REGMS?: string;

                /**
                 * Código Fiscal utilizado nas Entradas Bonificadas.
                 */
                CODFISCALBONIFIC?: number;

                /**
                 * Código Fiscal utilizado nas Entradas de Simples Remessas.
                 */
                CODFISCALSR?: number;

                /**
                 * Preco de Compra anterior a atualização.
                 */
                CUSTOREPANT?: number;

                /**
                 * Indica se o controle de estoque do produto será realizado por lotes ou não (Parâmetro impacta diretamento no processo de expedição e faturamento do produto).
                 */
                ESTOQUEPORLOTE?: string;

                /**
                 * Prox.nº lote
                 */
                PROXNUMLOTE?: number;

                /**
                 * Informa se será permitido recebimento de mercadoria abaixo da data de validade informado pelo usuário
                 */
                CONTROLAVALIDADEDOLOTE?: string;

                /**
                 * Prefixo lote
                 */
                PREFIXOLOTE?: string;

                /**
                 * Prazo Médio de Venda. O Produto não poderá ser vendido quando o Prazo Médio é maior que o informado.
                 */
                PRAZOMEDIOVENDA?: number;

                /**
                 * Indica o percentual de crédito ICMS presumido para o produto.
                 */
                PERCCREDICMPRESUMIDO?: number;

                /**
                 * Pontoreposicaoal
                 */
                PONTOREPOSICAOAL?: number;

                /**
                 * Indica capacidade de picking
                 */
                CAPACIDADEPICKINGAL?: number;

                /**
                 * Tiponorma
                 */
                TIPONORMA?: string;

                /**
                 * Recminarm
                 */
                RECMINARM?: number;

                /**
                 * Será utilizado para Redução da Base de Cálculo de Substituição Tributária na Entrada.
                 */
                REDBASEIVA?: number;

                /**
                 * Será utilizado para Redução da Base de Cálculo da Aliquota Externa ref a substituição Tributária na Entrada.
                 */
                REDBASEALIQEXT?: number;

                /**
                 * QTMINIMAATACADO
                 */
                QTMINIMAATACADO?: number;

                /**
                 * QTMINIMAATACADOF
                 */
                QTMINIMAATACADOF?: number;

                /**
                 * Indica se para o produto deverá ter ou não conciliação de importação.
                 */
                CONCILIAIMPORTACAO?: string;

                /**
                 * Percentual de bonificação em mercadoria utilizado nos pedidos de compra
                 */
                PERCBONOUTRAS?: number;

                /**
                 * PERCIMPORTACAO
                 */
                PERCIMPORTACAO?: number;

                /**
                 * PERCOFINSIMP
                 */
                PERCOFINSIMP?: number;

                /**
                 * PERPISIMP
                 */
                PERPISIMP?: number;

                /**
                 * Valor da Mão de Obra ao montar o Produto.
                 */
                VLMAODEOBRA?: number;

                /**
                 * PCOMPROF1
                 */
                PCOMPROF1?: number;

                /**
                 * Indica o código dos risco previamente cadatrado na rotina 235
                 */
                CODRISCO?: string;

                /**
                 * Indica o código do acondicionamento previamente cadatrado na rotina 235
                 */
                CODACONDICIONAMENTO?: string;

                /**
                 * Incica se o produto será conferido nas rotina de checkout ou se passarão como conferidos
                 */
                CONFERENOCHECKOUT?: string;

                /**
                 * VLCALORICO
                 */
                VLCALORICO?: string;

                /**
                 * PROTEINA
                 */
                PROTEINA?: string;

                /**
                 * LIPIDEO
                 */
                LIPIDEO?: string;

                /**
                 * UMIDADE
                 */
                UMIDADE?: string;

                /**
                 * COL95
                 */
                COL95?: string;

                /**
                 * SALMONELA
                 */
                SALMONELA?: string;

                /**
                 * BOLORESLEVEDURAS
                 */
                BOLORESLEVEDURAS?: string;

                /**
                 * ESTFAUREAUS
                 */
                ESTFAUREAUS?: string;

                /**
                 * MOFADO
                 */
                MOFADO?: string;

                /**
                 * TOTDEFEITO
                 */
                TOTDEFEITO?: string;

                /**
                 * Código de Agrupamento de Mapa de Separação, utilizado na rotina 203.
                 */
                CODAGRUPMAPASEP?: string;

                /**
                 * Percentual de perda para rendimento de um Kg
                 */
                PERCPERDAKG?: number;

                /**
                 * Indica se o produto será aproveitado crédito ICMS na entrada.
                 */
                APROVEITACREDICMS?: string;

                /**
                 * APROVEITACREDPISCOFINS
                 */
                APROVEITACREDPISCOFINS?: string;

                /**
                 * Custo de precificação por fornecedor, calculado a partir do preço de tabela do fornecedor informado pelo usuário.
                 */
                CUSTOFORNEC?: number;

                /**
                 * Percentual de desconto a ser aplicado sobre o cálculo do ICMS.
                 */
                PERCDESCICMS?: number;

                /**
                 * Percentual de acréscimo a ser aplicado sobre o custo de precificação por fornecedor.
                 */
                PERCACRES?: number;

                /**
                 * Preço de tabela do fornecedor, este preço é disponibilizado através de tabela de preços do fornecedor..
                 */
                PTABELAFORNEC?: number;

                /**
                 * Checar múltiplo em vendas bonificadas. Verifica obrigatoriedade de venda em quantidades múltiplas no caso de pedido de venda bonificado/troca (tps. 5, 6, 11 e 12).
                 */
                CHECARMULTIPLOVENDABNF?: string;

                /**
                 * Campo do tipo numérico de tamanho 18, com 6 casas decimais, com valor default 0 obrigatório.
                 */
                VLICMSANTECIPADO?: number;

                /**
                 * Indica a classe para comissionamento do produto.
                 */
                CLASSECOMISSAO?: string;

                /**
                 * Fracaocipa
                 */
                FRACAOCIPA?: number;

                /**
                 * Descontos de Análise.
                 */
                ANALISEDESC?: string;

                /**
                 * Volume / Peso e Medida.
                 */
                VOLPESMED?: string;

                /**
                 * Pesquisa de PH.
                 */
                PH?: string;

                /**
                 * Pesquisa de Densidade.
                 */
                DENSIDADE?: string;

                /**
                 * Pesquisa de Doseamento.
                 */
                DOSEAMENTO?: string;

                /**
                 * Contaminação Microbiana.
                 */
                CONTMICROBIANA?: string;

                /**
                 * Identificação da Análise.
                 */
                IDENTIFICACAO?: string;

                /**
                 * Pesquisa de Impurezas.
                 */
                IMPUREZA?: string;

                /**
                 * Pesquisa de Friabilidade.
                 */
                FRIABILIDADE?: string;

                /**
                 * Pesquisa de Desintegração.
                 */
                DESINTEGRACAO?: string;

                /**
                 * Pesquisa de Dissolução.
                 */
                DISSOLUCAO?: string;

                /**
                 * Pesquisa de Uniformidade.
                 */
                UNIFORMIDADE?: string;

                /**
                 * Diretório da Assinatura.
                 */
                DIRASSINATURA?: string;

                /**
                 * Versão da Análise.
                 */
                VERSANALISE?: number;

                /**
                 * Contloganalise
                 */
                CONTLOGANALISE?: number;

                /**
                 * Pesquisa de Patógenos.
                 */
                PESQPATOGENOS?: string;

                /**
                 * Usapulmaoregulador
                 */
                USAPULMAOREGULADOR?: string;

                /**
                 * Qtpulmaoregulador
                 */
                QTPULMAOREGULADOR?: number;

                /**
                 * Codenderecopa
                 */
                CODENDERECOPA?: number;

                /**
                 * Capacidadepa
                 */
                CAPACIDADEPA?: number;

                /**
                 * Pontoreposicaopa
                 */
                PONTOREPOSICAOPA?: number;

                /**
                 * Indica o código da embalagem.
                 */
                CODPRODEMBALAGEM?: number;

                /**
                 * Considerar ICMS Atencipado no Custo.
                 */
                CONSIDERARICMSANTECIPCUSTO?: string;

                /**
                 * Percentual de COFINS utilizado na entrada da mercadoria
                 */
                PERCOFINS?: number;

                /**
                 * Indica o percentual de crédito ICMS.
                 */
                PERCREDICMS?: number;

                /**
                 * Data da última importação do registro na filial de destino da informação.
                 */
                DTIMPORTINTEGRACAO?: Date;

                /**
                 * Dt. Últ. Alteração
                 */
                DTULTALTER?: Date;

                /**
                 * CAMPO DE ANALISE DE UMIDADE DA AMOSTRA.
                 */
                UMIDADEANALISE?: string;

                /**
                 * Indica o percentual de diferença no kg de produtos frios.
                 */
                PERCDIFERENCAKGFRIO?: number;

                /**
                 * Indica a redução base BCR.
                 */
                REDBASEALIQEXTBCR?: number;

                /**
                 * Indica à aliquota externa BCR.
                 */
                PERCALIQEXTBCR?: number;

                /**
                 * Indica á aliquota interna BCR.
                 */
                PERCALIQINTBCR?: number;

                /**
                 * Indica o valor adicional base BCR.
                 */
                VLADICIONALBCSTBCR?: number;

                /**
                 * Indica valor pauta BCR.
                 */
                VLPAUTABCR?: number;

                /**
                 * Indica redução base IVA BCR.
                 */
                REDBASEIVABCR?: number;

                /**
                 * Indica o % IVA BCR.
                 */
                PERCIVABCR?: number;

                /**
                 * Calcular Custo com Crédito de IPI (Compra).
                 */
                CALCCREDIPI?: string;

                /**
                 * Informa se envia para o força de vendas.
                 */
                ENVIARFORCAVENDAS?: string;

                /**
                 * Informa os dados técnicos do produto.
                 */
                DADOSTECNICOS?: string;

                /**
                 * Indica o código fiscal de entrada por transferência.
                 */
                CODFISCALENTTRANSF?: number;

                /**
                 * Indica o % prazo minimo vencimento produto.
                 */
                PRAZOMINVALIDADE?: number;

                /**
                 * Indica o % prazo máximo vencimento produto.
                 */
                PRAZOMAXVALIDADE?: number;

                /**
                 * Indica se utiliza preço máximo consumidor.
                 */
                UTILIZAPRECOMAXCONSUMIDOR?: string;

                /**
                 * Indica o percentual do imposto do produtor rural.
                 */
                PERCIMPPRODUTORURAL?: number;

                /**
                 * Indica que este produto vai ficar em destaque(fonte em negrito) na ficha técnica rotina 227
                 */
                DESTAQUEFICHATECNICA?: string;

                /**
                 * Indica o numero da página.
                 */
                NUMPAG?: number;

                /**
                 * Indica a letra da página.
                 */
                LETRAPAGINA?: string;

                /**
                 * Indica o numero da linha.
                 */
                SEQPAGINA?: number;

                /**
                 * Indica o número da ONU do produto quimico.
                 */
                CODONU?: string;

                /**
                 * Indica a natureza do produto.
                 */
                NATUREZAPRODUTO?: string;

                /**
                 * .
                 */
                DATAVOCOLLECT?: Date;

                /**
                 * Percentual de crédito de ICMS sobre o valor Frete FOB, utilizado no calculo do ST
                 */
                PERCICMSFRETEFOBST?: number;

                /**
                 * Percentual de crédito de ICMS sobre o valor Frete FOB, utilizado no calculo do STBCR
                 */
                PERCICMSFRETEFOBSTBCR?: number;

                /**
                 * Indica o % do IPI venda futuro.
                 */
                PERCIPIVENDATAB?: number;

                /**
                 * Indica a pauta IPI venda.
                 */
                VLPAUTAIPIVENDA?: number;

                /**
                 * Indica a pauta IPI venda futuro.
                 */
                VLPAUTAIPIVENDATAB?: number;

                /**
                 * Indica o IPI/KG venda.
                 */
                VLIPIPORKGVENDA?: number;

                /**
                 * Indica o IPI/KG venda futuro.
                 */
                VLIPIPORKGVENDATAB?: number;

                /**
                 * Imune de Tributação.
                 */
                IMUNETRIB?: string;

                /**
                 * Código do formato do papel.
                 */
                CODFORMATOPAPEL?: number;

                /**
                 * Gramatura do papel.
                 */
                GRAMATURA?: number;

                /**
                 * Código da unidade de medida utilizada na Nota Fiscal.
                 */
                CODUNIDMEDIDANF?: number;

                /**
                 * Fator de conversão do peso.
                 */
                FATORCONVERSAOKG?: number;

                /**
                 * Descrição do produto para sistema DIF-PAPEL IMUNE.
                 */
                DESCPAPEL?: string;

                /**
                 * Indica o código fiscal compra produto consignação.
                 */
                CODFISCALCONSIGFAT?: number;

                /**
                 * Indica o percentual de diferença de alíquota.
                 */
                PERCDIFALIQUOTAS?: number;

                /**
                 * Indica o valor da diferença de alíquota.
                 */
                VLDIFALIQUOTAS?: number;

                /**
                 * Indica se o peso e variável.
                 */
                PESOVARIAVEL?: string;

                /**
                 * Indica o valor de pauta ICMS.
                 */
                VLPAUTAICMS?: number;

                /**
                 * Indica o valor adicional da base ST.
                 */
                VLADICIONALBCST?: number;

                /**
                 * Indica que o produto será comprado em consignação.
                 */
                COMPRACONSIGNADO?: string;

                /**
                 * Indica o código fiscal para produto consignado.
                 */
                CODFISCALCONSIG?: number;

                /**
                 * Indica o prazo de garantia do produto.
                 */
                PRAZOGARANTIA?: number;

                /**
                 * Indica a quantidade máxima para separação por pedido.
                 */
                QTDEMAXSEPARPEDIDO?: number;

                /**
                 * Indica o percentual de despesa fora da nota.
                 */
                PERCDESPFORANF?: number;

                /**
                 * Indica o prazo máximo para indenização ou troca.
                 */
                PRAZOMAXINDENIZACAO?: number;

                /**
                 * Indica o código da filial retira padrão.
                 */
                CODFILIALRETIRA?: string;

                /**
                 * Código da Marca vinculado ao produto, cadastro rotina 564
                 */
                CODMARCA?: number;

                /**
                 * Indica o peso da embalagem.
                 */
                PESOEMBALAGEM?: number;

                /**
                 * Exibir o doseamento do produto.
                 */
                EX_DOSEAMENTO?: string;

                /**
                 * Exibir impureza do produto.
                 */
                EX_IMPUREZA?: string;

                /**
                 * Indica do produto.
                 */
                MARCA?: string;

                /**
                 * Indica se controla o número de série.
                 */
                CONTROLANUMSERIA?: string;

                /**
                 * Indica o preço de tabela do serviço.
                 */
                PVENDA?: number;

                /**
                 * Indica a data da ultima alteração nesta tabela.
                 */
                DTULTALTERSRVPRC?: Date;

                /**
                 * Indica se exibe unidade do produto.
                 */
                EX_UMIDADE?: string;

                /**
                 * Indica se exibe col 95º.
                 */
                EX_COL95?: string;

                /**
                 * Indica se exibe salmonela.
                 */
                EX_SALMONELA?: string;

                /**
                 * Indica se exibe bolores e leveduras.
                 */
                EX_BOLORESLEVEDURAS?: string;

                /**
                 * Indica se exibe estafilococos aureas.
                 */
                EX_ESTFAUREAUS?: string;

                /**
                 * Indica se exibe mofado.
                 */
                EX_MOFADO?: string;

                /**
                 * Indica se exibe total de defeitos.
                 */
                EX_TOTDEFEITO?: string;

                /**
                 * Indica se exibe valor calorico.
                 */
                EX_VLCALORICO?: string;

                /**
                 * Indica se exibe proteina.
                 */
                EX_PROTEINA?: string;

                /**
                 * Indica se exibe lipídeos.
                 */
                EX_LIPIDEO?: string;

                /**
                 * Indica se exibe volume e peso médio.
                 */
                EX_VOLPESMED?: string;

                /**
                 * Indica se exibe descrição da análise.
                 */
                EX_ANALISEDESC?: string;

                /**
                 * Indica se exibe uniformidades.
                 */
                EX_UNIFORMIDADE?: string;

                /**
                 * Indica se exibe dissolução.
                 */
                EX_DISSOLUCAO?: string;

                /**
                 * Indica se exibe desintegração.
                 */
                EX_DESINTEGRACAO?: string;

                /**
                 * Indica se exibe friabilidade.
                 */
                EX_FRIABILIDADE?: string;

                /**
                 * Indica se exibe identificação.
                 */
                EX_IDENTIFICACAO?: string;

                /**
                 * Indica se exibe pesquisa de patogenos.
                 */
                EX_PESQPATOGENOS?: string;

                /**
                 * Indica se exibe contaminação microbiana.
                 */
                EX_CONTMICROBIANA?: string;

                /**
                 * Indica se exibe densidade.
                 */
                EX_DENSIDADE?: string;

                /**
                 * Indica se exibe PH.
                 */
                EX_PH?: string;

                /**
                 * Indica a unidades por embalagem.
                 */
                UNDPOREMBALAGEM?: number;

                /**
                 * Indica o percentual do ICMS diferido.
                 */
                PERCICMSDIFERIDO?: number;

                /**
                 * Numero de dias mínimo de validade.
                 */
                NUMDIASVALIDADEMIN?: number;

                /**
                 * Define se a precificação vai utilizar a cotação moeda estrangeira do dia para precificar.
                 */
                PRECIFICESTRANGEIRA?: string;

                /**
                 * Indica o percentual de seguro.
                 */
                PERCSEGURO?: number;

                /**
                 * Indica o percentual outras despesa na NF.
                 */
                PERCDESPDENTRONF?: number;

                /**
                 * Indica a quantidade máxima para separação por pedido.
                 */
                QTDMAXSEPARARPEDIDO?: number;

                /**
                 * Produto pertencente ao FUNDAP, legislação do Espirito Santos para impressão de livros fiscais.
                 */
                FUNDAPIANO?: string;

                /**
                 * Percentual do desconto de ICMS Difererido.
                 */
                PERCDESCICMSDIF?: number;

                /**
                 * Código do produto para geração DNF.
                 */
                CODPRODDNF?: number;

                /**
                 * Capacidade volumétrica para geração DNF.
                 */
                CAPVOLDNF?: number;

                /**
                 * Fator de conversão a aplicar sobre a unidade de venda para geração DNF.
                 */
                FATORCONVDNF?: number;

                /**
                 * Percentual da alíquota externa para calculo do ST Guia.
                 */
                PERCALIQEXTGUIA?: number;

                /**
                 * Código do produto relevante.
                 */
                CODPRODRELEV?: number;

                /**
                 * Data alteração custo fornecedor.
                 */
                DTALTCUSTOFORNEC?: Date;

                /**
                 * Verifica-se se o produto terá controle ou não de numeração de patrimônio.
                 */
                CONTROLAPATRIMONIO?: string;

                /**
                 * Base PIS/COFINS litragem.
                 */
                BASEPISCOFINSLITRAGEM?: number;

                /**
                 * Valor PIS/COFINS litragem.
                 */
                VALORPISLITRAGEM?: number;

                /**
                 * Valor PIS/COFINS litragem.
                 */
                VALORCOFINSLITRAGEM?: number;

                /**
                 * Percentual de PIS retido venda.
                 */
                PISRETIDO?: number;

                /**
                 * Percentual de COFINS retido venda.
                 */
                COFINSRETIDO?: number;

                /**
                 * Percentual de IR retido venda.
                 */
                IRRETIDO?: number;

                /**
                 * Percentual de CSLL retido venda.
                 */
                CSLLRETIDO?: number;

                /**
                 * Essa informação é utilizado pelo módulo fiscal do WinThor para identificar as exceções da TIPI - Tabela de incidência do IPI, do produto.
                 */
                EXTIPI?: string;

                /**
                 * Código do produto na Anvisa.
                 */
                ANVISA?: string;

                /**
                 * Código do produto no Simpro.
                 */
                SIMPRO?: string;

                /**
                 * Valor interno para Integração APLIC.
                 */
                VLRAPLICINT?: number;

                /**
                 * Nome do produto para e-commerce
                 */
                NOMEECOMMERCE?: string;

                /**
                 * Título do produto para e-commerce
                 */
                TITULOECOMMERCE?: string;

                /**
                 * Subtitulo do produto para e-commerce
                 */
                SUBTITULOECOMMERCE?: string;

                /**
                 * Diretório de imagens para e-commerce
                 */
                DIRETORIOFOTOS?: string;

                /**
                 * Código + exceção do NCM
                 */
                CODNCMEX?: string;

                /**
                 * Apresenta o padrão de código de barras GTIN
                 */
                GTINCODAUXILIAR?: number;

                /**
                 * Apresenta o padrão de código de barras GTIN
                 */
                GTINCODAUXILIAR2?: number;

                /**
                 * Apresenta a litragem do produto
                 */
                LITRAGEM?: number;

                /**
                 * Indica se o custo de precificação do produto será definido por produto
                 */
                SUGVENDA?: number;

                /**
                 * Valor de frete FOB por kg
                 */
                VLFRETEPORKG?: number;

                /**
                 * Código da figura tributária para cálculo do PIS/COFINS
                 */
                CODTRIBPISCOFINS?: number;

                /**
                 * Percentual de MVA Original para cálculo do MVA ajustado
                 */
                PERCMVAORIG?: number;

                /**
                 * Código MD-5
                 */
                ASSINATURA?: string;

                /**
                 * Aplicar redução base IVA preço liquido
                 */
                APLICREDBASEIVAPLIQ?: string;

                /**
                 * Aplicar redução base IVA preço liquido BCR
                 */
                APLICREDBASEIVAPLIQBCR?: string;

                /**
                 * Data de início do controle de validade por lote.
                 */
                DTINICONTLOTE?: Date;

                /**
                 * Contempla Fluxo de Produtos
                 */
                CLASSEFLOW?: string;

                /**
                 * Concentração do Produto
                 */
                CONCENTRACAO?: number;

                /**
                 * Valor do IPI
                 */
                VLIPI?: number;

                /**
                 * SITUAÇÃO TRIBUTARIA DEVOLUÇÃO FORNECEDOR
                 */
                SITTRIBUTDEVFORNEC?: string;

                /**
                 * CFOP DEVOLUÇÃO FORNECEDOR
                 */
                CODFISCALDEVFORNEC?: number;

                /**
                 * PRAZO MÁXIMO VENDA
                 */
                PRAZOMAXVENDA?: number;

                /**
                 * Categoria de Produtos.
                 */
                CATERGORIA?: string;

                /**
                 * Código da linha de produção.
                 */
                CODLINHA?: number;

                /**
                 * Percentual de quebra permitido.
                 */
                PERCQUEBRAPRODUCAO?: number;

                /**
                 * Permite programar produção.
                 */
                PERMITEPRODUCAO?: string;

                /**
                 * Código da Linha de Produto.
                 */
                LINHAPROD?: number;

                /**
                 * Quantidade a produzir.
                 */
                QTPRODUZIR?: number;

                /**
                 * Aplica %IVA sobre a Pauta ST..
                 */
                APLICPERCIVAPAUTA?: string;

                /**
                 * Indica se faz parte de inventário parcial.
                 */
                INVENTARIOPARCIAL?: string;

                /**
                 * Código da tabela / Litragem
                 */
                CODTABLIT?: string;

                /**
                 * Código do grupo da tabela / Litragem
                 */
                CODGRULIT?: string;

                /**
                 * Campo numérico para o usuario informar o Codigo da linha de prazo
                 */
                CODLINHAPRAZO?: number;

                /**
                 * Campo que define o tipo de Medicamento.
                 */
                TIPOMEDICAMENTO?: string;

                /**
                 * Campo que define se o grupo será Ético ou Genérico
                 */
                GRUPOFATURAMENTO?: string;

                /**
                 * Fator de conversão a ser utilizado na NF-e
                 */
                FATORCONVTRIB?: number;

                /**
                 * Unidade a ser utilizada na NF-e
                 */
                UNIDADETRIB?: string;

                /**
                 * Enviar itens de manutenção de veículo no produto myFrota.
                 */
                MYFROTA?: string;

                /**
                 * Define se o produto possui licença de importação, esse processo é utilizado na rotina "3010 - Gerenciar Importação".
                 */
                USALICENCAIMPORTACAO?: string;

                /**
                 * Essa informação será utilizada nos botões aumentar e diminuir a quantidade pedida para compra do produto na rotina de pedido de compra de auto-peças.
                 */
                MULTIPLOCOMPRAS?: number;

                /**
                 * Número do Registro no Ministério da Saúde
                 */
                REGISTROMSMED?: string;

                /**
                 * Quantidade mínima utilizado para validar quantidade pedida de compra
                 */
                QTMINSUGCOMPRA?: number;

                /**
                 * Este campo tem por objetivo definir se as informações técnicas serão enviadas no arquivo XML da NF-e ou não
                 */
                ENVIAINFTECNICANFE?: string;

                /**
                 * Informa se o produto é controlado pelo IBAMA, se for, só será permitido vender para cliente que tenha registro no IBAMA.
                 */
                CONTROLADOIBAMA?: string;

                /**
                 * Este campo tem por objetivo definir se o  produto pertence a Cesta Basica conforme as  legislações estaduais
                 */
                CESTABASICALEGIS?: string;

                /**
                 * Caso esteja preenchido, será considerado como "Código do produto" na geração da NF-e e nos demais arquivos fiscais. Geralmente é informado o cód.do produto do sistema anterior. Ele deverá ser único e não poderá ser repetido.
                 */
                CODINTERNO?: string;

                /**
                 * Identifica se o produto utiliza controle de selo IPI
                 */
                UTILIZASELO?: string;

                /**
                 * Campo que define se o produto será do tipo retinoico sim ou não.
                 */
                RETINOICO?: string;

                /**
                 * Código ANP utilizado em combustiveis.
                 */
                ANP?: number;

                /**
                 * Identificador do código do fornecedor do produto
                 */
                CODPRODFORNEC?: number;

                /**
                 * Define se o produto deve: devolver, não devolver ou calcular a sucata.
                 */
                STATUSSUCATA?: number;

                /**
                 * Tipo de Custo de Transferência de Venda (Rotina 2316 e 2312 entre Filiais Tipo 1 - CD)
                 */
                TIPOCUSTOTRANSF?: string;

                /**
                 * Classe Terapêutica na ANVISA
                 */
                CODCLASSETERAPEUTSNGPC?: number;

                /**
                 * Uso Prolongado na ANVISA
                 */
                USOPROLONGADOSNGPC?: string;

                /**
                 * Informar o valor da TARA por Peça
                 */
                VALORTARAPORPECA?: number;

                /**
                 * A TARA do produto por Peça
                 */
                TARAPORPECA?: number;

                /**
                 * Produto da Farmácia Popular
                 */
                FARMACIAPOPULAR?: string;

                /**
                 * Percentual de  benefício PRODEIC utilizado no relatório do PRODEIC da rotina 1031
                 */
                PERCPRODEIC?: number;

                /**
                 * Código do produto antes de utilizar o cadastro de produto do Winthor
                 */
                CODPRODANTUTICAD?: string;

                /**
                 * Data início do Código do produto antes de utilizar o cadastro de produto do Winthor
                 */
                DTINICODPRODANTUTICAD?: Date;

                /**
                 * Data da primeira Movimentação do novo código do produto no Winthor
                 */
                DTPRIMOVNOVCODPROD?: Date;

                /**
                 * Código da Sub-Marca, cadastro rotina 3326
                 */
                CODSUBMARCA?: number;

                /**
                 * Altura do Produto
                 */
                ALTURA?: number;

                /**
                 * Altura Total do Produto.
                 */
                ALTURATOTAL?: number;

                /**
                 * Diâmetro interno do produto.
                 */
                DIAMETROINTERNO?: number;

                /**
                 * 
                 */
                DIAMETROEXTERNO?: number;

                /**
                 * Quando um pedido de venda possuir um produto onde este campo tenha valor maior que zero, somente será permitido seu faturamento caso existam "X" dias úteis CONSECUTIVOS disponíveis a partir da data de faturamento.
                 */
                DIASCONSECENT?: number;

                /**
                 * Número de Registro do Agrotóxico no MAPA
                 */
                NUMREGAGRMAP?: string;

                /**
                 * Código de Identificação da Embalagem
                 */
                IDEMBALAGEM?: number;

                /**
                 * Tamanho Peça
                 */
                TAMANHOPECA?: number;

                /**
                 * Menor peso que o produto pode assumir.
                 */
                PESOMINIMO?: number;

                /**
                 * Maior peso que o produto pode assumir.
                 */
                PESOMAXIMO?: number;

                /**
                 * Normapalete
                 */
                NORMAPALETE?: string;

                /**
                 * Descrição do produto antes de utilizar o cadastro de produto do Winthor
                 */
                DSCPRODANTUTICAD?: string;

                /**
                 * Data final de utilização do código do produto antes de utilizar o cadastro de produto do Winthor
                 */
                DTFINUTICODPRODANTUTICAD?: Date;

                /**
                 * Código do cadastro de destaques importação rotina 3006.
                 */
                IDDESTAQUE?: string;

                /**
                 * Define se o produto utiliza indução de lote
                 */
                INDUZLOTE?: string;

                /**
                 * "Esta informação poderá ser usada como filtro da pesquisa de inclusão dos produtos no pedido máster, assim se o usuário desejar, ele poderá criar um pedido máster para cada tipo de embarque.
                 */
                TIPOEMBARQUEIMP?: string;

                /**
                 * Código do Sal do Medicamento
                 */
                CODSALMED?: number;

                /**
                 * Forma de Esterilização do Produto
                 */
                FORMAESTERILIZACAO?: string;

                /**
                 * Apresenta o padrão de código de barras GTIN Tributável
                 */
                GTINCODAUXILIARTRIB?: number;

                /**
                 * Indica qual é o código de barras do produto na menor unidade
                 */
                CODAUXILIARTRIB?: number;

                /**
                 * Usado somente no processo de importação (rotina 3010). Indica o peso líquido do produto na DI (Declaração de Importação). Caso esteja preenchido, será utilizado no rateio por peso. Caso contrário, o rateio é com base no peso líquido do produto.
                 */
                PESOLIQDI?: number;

                /**
                 * Refere-se ao registro da peça, realizado no cadastro de peças
                 */
                REGISTROPECA?: string;

                /**
                 * Identifica se o produto será enviado ao e-commerce
                 */
                ENVIAECOMMERCE?: string;

                /**
                 * Caso esteja marcado como sim(S), no momento do cálculo do ST, será verificado no ramo de atividade do cliente, se irá calcular o ST.
                 */
                VERIFCRAMOATIVCALCST?: string;

                /**
                 * Esse campo será usado no SPED Fiscal para informar que o produto está no estoque mas é de outra empresa. Os produtos definidos como "Sim" serão gerados com código 2 no campo 7 do registro H010
                 */
                COMODATO?: string;

                /**
                 * Define se o produto utiliza engradado na venda.
                 */
                PRODUSAENGRADADO?: string;

                /**
                 * Indica qual é o engradado utilizado para o produto na venda.
                 */
                CODPRODENGRADADO?: number;

                /**
                 * Indica o valor de conversão entre o produto vendido e o engradado.
                 */
                FATCONVPRODENGRAD?: number;

                /**
                 * Defini se o produto pode ser utilizado em pedidos broker do condvenda = 5
                 */
                PERMITIRBROKERTV5?: string;

                /**
                 * Este campo é usado pela rotina 3010 para tratar o rateio do antidumping, quando "NÃO", o valor do antidumping será rateado no produto. Caso esteja "Sim", este produto não fará parte do rateio.
                 */
                ANTIDUMPING?: string;

                /**
                 * Este campo será preenchido sempre que houver uma alteração no cadastro do produto pela rotina 203
                 */
                DTULTALTCAD?: Date;

                /**
                 * Este campo será preenchido sempre que houver uma alteração no cadastro do produto pela rotina 203
                 */
                CODFUNCULTALTCAD?: number;

                /**
                 * Usar CAP (Coeficiente de Adequação de Preços)
                 */
                LICITUSARCAP?: string;

                /**
                 * Percentual de Desoneração do CAP
                 */
                LICITPERCDESONERACAP?: number;

                /**
                 * Convênio de Isenção de ICMS
                 */
                LICITCONVENIOISENCAOICMS?: string;

                /**
                 * Com essa opção marcada o registro será enviado para o E-Commerce da Unilever
                 */
                USAECOMMERCEUNILEVER?: string;

                /**
                 * Usar Desoneração de ICMS
                 */
                LICITUSARDESONERAICM?: string;

                /**
                 * Percentual de Desoneração de ICMS
                 */
                LICITPERCDESONERAICM?: number;

                /**
                 * Utilizado na entrada de mercadoria para rateio do frete FOB
                 */
                PESOBRUTOFRETE?: number;

                /**
                 * Tipo da embalagem de venda no e-commerce da Unilever
                 */
                EMBVENDAECOMMERCEUNILEVER?: string;

                /**
                 * Identifica o produto como inservível
                 */
                ACEITATROCAINSERVIVEL?: string;

                /**
                 * Código de identificação de inservível
                 */
                CODINSERVIVEL?: number;

                /**
                 * Identifica carcaça de bateria
                 */
                CARCACABATERIA?: string;

                /**
                 * Define se deve atualizar o Preço de Fábrica do Produto ao digitar o Pedido de Compra.
                 */
                UTILIZAPRECOFABRICA?: string;

                /**
                 * Caso marcado como Isento do pagamento da TCIF, não será gerado pagamento da TCIF nas entradas de mercadoria, caso todos os itens da entrada seja Isento, conforme definido na Medida Provisória nº 757, de 19 de dezembro de 2016
                 */
                ISENTOTCIF?: string;

                /**
                 * Unidade tributável do exterior a ser utilizada na NF-e
                 */
                UNIDADETRIBEX?: string;

                /**
                 * Fator de conversão do exterior a ser utilizado na NF-e
                 */
                FATORCONVTRIBEX?: number;

                /**
                 * A descrição do produto ANP passa a ser obrigatória a partir da NF-e 4.0. Este campo gravado na movimentação e gravado no XML da NF-e.
                 */
                DESCANP?: string;

                /**
                 * Bloquear nos Acordos de Parceria. Produtos marcados como SIM não estarão disponíveis para inclusão no Acordo de Parceria, nem pontuarão nos Acordos.
                 */
                BLOQUEIOACORDOPARCERIA?: string;

                /**
                 * Este campo determina se o produto utiliza Código de Agregação conforme IN RFB 1432 de 2012 e suas alterações para atendimento da Nota Técnica NF-e 4.0.Será habilitado apenas se o produto utilizar controle de lote
                 */
                CODAGREGACAO?: string;

                /**
                 * Este campo determina se o produto utiliza Código de Agregação conforme IN RFB 1432 de 2012 e suas alterações para atendimento da Nota Técnica NF-e 4.0.Será habilitado apenas se o produto utilizar controle de lote
                 */
                USACODAGREGACAO?: string;

                /**
                 * Define se o produto é isento de ST para clientes cozinha industrial
                 */
                ISENTOSTCOZINHAINDUSTRIAL?: string;

                /**
                 * Indica o princípio ativo secundário do produto.
                 */
                CODPRINCIPATIVO2?: number;

                /**
                 * Informar o percentual do GLP derivado de petroleo no produto.
                 */
                PGLP?: number;

                /**
                 * Informar o percentual do GLP derivado de petroleo no produto.
                 */
                PGNN?: number;

                /**
                 * Informar o percentual do GLP derivado de petroleo no produto.
                 */
                PGNI?: number;

                /**
                 * Deve ser informado neste campo o valor por quilograma sem ICMS.
                 */
                VPART?: number;

                /**
                 * Fator de conversão utilizado pelo processo da bionexo
                 */
                FATORCONVERSAOBIONEXO?: number;

                /**
                 * Define unidade padrão a ser utilizada na inclusão do item nas rotina 316 - 336
                 */
                UNIDADEPADRAO?: string;

                /**
                 * Tipo de integração com a indústria que  o produto está vinculado.
                 */
                TIPOINTEGRACAOB2B?: number;

                /**
                 * Gramatura do item do Edital
                 */
                GRAMATURALICIT?: number;

                /**
                 * Informação de código de isenção para registro da Anvisa
                 */
                CODMOTISENCAOANVISA?: string;

                /**
                 * Codigo da sazonalidade, vinculado ao produto, cadastro rotina 2345.
                 */
                CODSAZONALIDADEMED?: number;

                /**
                 * Campo para vinculo do código AdWords do ecommerce com o Winthor, uso exclusido para operações WEB.
                 */
                CODADWORDS?: string;

                /**
                 * Campo para informar se será exibido produtos sem estoque no ecommerce, uso exclusido para operações WEB.
                 */
                EXIBESEMESTOQUEECOMMERCE?: string;

                /**
                 * Campo para informar URLdo produto no ecommerce, uso exclusido para operações WEB.
                 */
                LINKID?: string;

                /**
                 * Campo para vinculo do código campanha Lomadee do ecommerce com o Winthor, uso exclusido para operações WEB.
                 */
                CODCAMPLOMADEE?: string;

                /**
                 * Define na devolução de item com controle de equipamento o status seja USADO. Caso MARCADO, na remessa de comodato aparecerá campo para preenchimento do código de localização da conservadora que permiti selecionar o status DMS.
                 */
                UTILIZAINTEGRACAOKIBON?: string;

                /**
                 * Dica do parâmetro: Em virtude da NT 001/2020 versão 1.10 que alterou a estrutura de layout do XML do MDF-e será necessário que em cada produto seja gravado nas movimentações a predominância do produto transportado.
                 */
                PREDOMINANCIA?: string;

                /**
                 * Endereçamento do produto. Indica o Número do produto. Números são considerados Intervalos, geralmente o espaço de um palete é um número.
                 */
                NUMERO?: number;

                /**
                 * Endereçamento do produto. Indica o Número do produto. Números são considerados Intervalos, geralmente o espaço de um palete é um número.
                 */
                NUMEROCX?: number;

                /**
                 * Alíquota que será calcula o valor do TCIF. Caso não informado será considerado 1.5%.
                 */
                ALIQUOTATCIF?: number;

                /**
                 * PMPF - Preço máximo pessoa física
                 */
                PMPFMEDICAMENTO?: number;

                /**
                 * Preço de fábrica
                 */
                PRECOFABRICA?: number;

                /**
                 * Preenchimento do grupo "obsItem", de uso livre do Contribuinte para identificação do campo
                 */
                OBSCONTXCAMPO?: string;

                /**
                 * Preenchimento do grupo "obsItem" no XML, de uso livre do Contribuinte para conteúdo
                 */
                OBSCONTXTEXTO?: string;

                /**
                 * Preenchimento do grupo "obsItem" no XML, de uso livre do Fisco para identificação do campo
                 */
                OBSFISCOXCAMPO?: string;

                /**
                 * Preenchimento do grupo "obsItem" no XML, de uso livre do Fisco para conteúdo
                 */
                OBSFISCOXTEXTO?: string;

                /**
                 * Identifica se o Produto Participa do Convênio de Isenção de ICMS. Utilizado na definição da Alíquota do Preço Fábrica e PMC por UF na Rotina 2301.
                 */
                CONVENIOISENCAOICMSMED?: string;
}
