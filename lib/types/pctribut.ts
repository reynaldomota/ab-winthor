export interface PCTRIBUT {

                /**
                 * Código
                 */
                CODST: number;

                /**
                 * Iva
                 */
                IVA?: number;

                /**
                 * 1
                 */
                ALIQICMS1?: number;

                /**
                 * 4
                 */
                ALIQICMS2?: number;

                /**
                 * % IVA Subst.Tributária
                 */
                IVATAB?: number;

                /**
                 * Aliq. Icms 1 (Interna)
                 */
                ALIQICMS1TAB?: number;

                /**
                 * Aliq. Icms 2 (Externa)
                 */
                ALIQICMS2TAB?: number;

                /**
                 * % Desc. Tabela
                 */
                PERDESTAB?: number;

                /**
                 * % Desc. Custo
                 */
                PERDESCCUSTO?: number;

                /**
                 * 8
                 */
                PAUTA?: number;

                /**
                 * Vl. Pauta
                 */
                PAUTATAB?: number;

                /**
                 * Situação Tributária Pessoa Juridica
                 */
                SITTRIBUT?: string;

                /**
                 * Indicest
                 */
                INDICEST?: number;

                /**
                 * % ICMS NF
                 */
                CODICM?: number;

                /**
                 * % Impostos CMV
                 */
                CODICMTAB?: number;

                /**
                 * % Base Red. ICMS
                 */
                PERCBASERED?: number;

                /**
                 * Descrição
                 */
                MENSAGEM?: string;

                /**
                 * Codicmantecipado
                 */
                CODICMANTECIPADO?: number;

                /**
                 * Pessoa juridica - mensagem 1
                 */
                OBS?: string;

                /**
                 * Calcbcicmsnf
                 */
                CALCBCICMSNF?: string;

                /**
                 * CodFiscal Venda Estadual
                 */
                CODFISCAL?: number;

                /**
                 * CodFiscal Venda Interestadual
                 */
                CODFISCALINTER?: number;

                /**
                 * % ICMS Transferencia
                 */
                CODICMTRANSF?: number;

                /**
                 * Sittributtransf
                 */
                SITTRIBUTTRANSF?: string;

                /**
                 * Calcsttransf
                 */
                CALCSTTRANSF?: string;

                /**
                 * % IVA Transferencia
                 */
                IVATRANSF?: number;

                /**
                 * Valor Pauta Transferencia
                 */
                PAUTATRANSF?: number;

                /**
                 * Aliq. ICMS Transf 1 (interna)
                 */
                ALIQICMS1TRANSF?: number;

                /**
                 * Aliq. ICMS Transf 2 (externa)
                 */
                ALIQICMS2TRANSF?: number;

                /**
                 * % ICMS PF
                 */
                CODICMPF?: number;

                /**
                 * % ICMS Prod. Rural
                 */
                CODICMPRODRURAL?: number;

                /**
                 * Codicmconsumidor
                 */
                CODICMCONSUMIDOR?: number;

                /**
                 * % Acrésc. P. Física
                 */
                PERACRESCISMOPF?: number;

                /**
                 * Código de ECF
                 */
                CODECF?: string;

                /**
                 * CodFiscal Pessoa Fisica Estadual
                 */
                CODFISCALPF?: number;

                /**
                 * CodFiscal Pessoa Fisica Interestadual
                 */
                CODFISCALINTERPF?: number;

                /**
                 * CodFiscal Dev. de Cliente Estadual
                 */
                CODFISCALDEVCLI?: number;

                /**
                 * CodFiscal Dev. de Cliente Interestadual
                 */
                CODFISCALDEVCLIINTER?: number;

                /**
                 * CodFiscal Transferência (rot 316) Estadual
                 */
                CODFISCALTRANSF?: number;

                /**
                 * CodFiscal Transferência (rot 316) Interestadual
                 */
                CODFISCALTRANSFINTER?: number;

                /**
                 * CodFiscal Bonificação Estadual
                 */
                CODFISCALBONIFIC?: number;

                /**
                 * CodFiscal Bonificação Interestadual
                 */
                CODFISCALBONIFICINTER?: number;

                /**
                 * CodFiscal Dev. de Client. Bonific. Estadual
                 */
                CODFISCALDEVCLIBONIFIC?: number;

                /**
                 * CodFiscal Dev. de Client. Bonific. Interestadual
                 */
                CODFISCALDEVCLIBONIFICINTER?: number;

                /**
                 * CodFiscal Dev. Manifesto Estadual
                 */
                CODFISCALDEVCLIPRONTAENT?: number;

                /**
                 * CodFiscal Dev. Manifesto Interestadual
                 */
                CODFISCALDEVCLIPRONTAENTINTER?: number;

                /**
                 * CodFiscal Manifesto Estadual
                 */
                CODFISCALPRONTAENT?: number;

                /**
                 * CodFiscal Manifesto Interestadual
                 */
                CODFISCALPRONTAENTINTER?: number;

                /**
                 * % IVA Fonte
                 */
                IVAFONTE?: number;

                /**
                 * Aliq. Icms 1 Fonte
                 */
                ALIQICMS1FONTE?: number;

                /**
                 * Aliq. Icms 2 Fonte
                 */
                ALIQICMS2FONTE?: number;

                /**
                 * Pessoa física - mensagem 1
                 */
                OBSPF?: string;

                /**
                 * Calc. da Base Red.ICMS da Transferência
                 */
                CALCBASEREDICMSTRANSF?: string;

                /**
                 * % Desc. Suframa
                 */
                PERDESCSUFRAMA?: number;

                /**
                 * Sittributtransfent
                 */
                SITTRIBUTTRANSFENT?: string;

                /**
                 * % Base Rec. ICMS Transferencia Entrada
                 */
                PERBASEREDTRANSFENT?: number;

                /**
                 * CodFiscal Venda Internacional
                 */
                CODFISCALINTERNASC?: number;

                /**
                 * CodFiscal Pessoa Fisica Internacional
                 */
                CODFISCALINTERNASCPF?: number;

                /**
                 * CodFiscal Dev. de Cliente Internacional
                 */
                CODFISCALDEVCLIINTERNASC?: number;

                /**
                 * CodFiscal Transferência (rot 316) Internacional
                 */
                CODFISCALTRANSFINTERNASC?: number;

                /**
                 * CodFiscal Bonificação Internacional
                 */
                CODFISCALBONIFICINTERNASC?: number;

                /**
                 * CodFiscal Dev. de Client. Bonific. Internacional
                 */
                CODFISCALDEVCLIBONINTERNASC?: number;

                /**
                 * CodFiscal Dev. Manifesto Internacional
                 */
                CODFISCALDEVCLIPROENTINTERNASC?: number;

                /**
                 * CodFiscal Manifesto Internacional
                 */
                CODFISCALPRONTAENTINTERNASC?: number;

                /**
                 * Situação tributária pessoa física
                 */
                SITTRIBUTPF?: string;

                /**
                 * % Desc. ICMS Isenção
                 */
                PERDESCICMISENCAO?: number;

                /**
                 * Codfuncultalter
                 */
                CODFUNCULTALTER?: number;

                /**
                 * Dtultalter
                 */
                DTULTALTER?: Date;

                /**
                 * CodFiscal Venda Consignada Estadual
                 */
                CODFISCALVENDACONSIG?: number;

                /**
                 * CodFiscal Venda Consignada Interestadual
                 */
                CODFISCALVENDACONSIGINTER?: number;

                /**
                 * CodFiscal Venda Consignada Internacional
                 */
                CODFISCALVENDACONSIGINTERNASC?: number;

                /**
                 * Transferência
                 */
                OBSTRANSF?: string;

                /**
                 * CodFiscal Venda Ent. Futura Estadual
                 */
                CODFISCALVENDAENTFUT?: number;

                /**
                 * CodFiscal Venda Ent. Futura Interestadual
                 */
                CODFISCALVENDAENTFUTINTER?: number;

                /**
                 * CodFiscal Simples Entrega Futura Estadual
                 */
                CODFISCALSIMPENTFUT?: number;

                /**
                 * CodFiscal Simples Entrega Futura Interestadual
                 */
                CODFISCALSIMPENTFUTINTER?: number;

                /**
                 * CodFiscal Venda Merc. Consignada Estadual
                 */
                CODFISCALMERCCONSIG?: number;

                /**
                 * CodFiscal Venda Merc. Consignada Interestadual
                 */
                CODFISCALMERCCONSIGINTER?: number;

                /**
                 * CodFiscal Venda Merc. Consignada Internacional
                 */
                CODFISCALMERCCONSIGINTERNASC?: number;

                /**
                 * % Base Red. ICMS Consumidor Final
                 */
                PERCBASEREDCONSUMIDOR?: number;

                /**
                 * Pessoa jurídica - mensagem 2
                 */
                OBS2?: string;

                /**
                 * Pessoa física - mensagem 2
                 */
                OBSPF2?: string;

                /**
                 * % Base Red. ICMS NRPA
                 */
                PERBASEREDNRPA?: number;

                /**
                 * Situação tributária NRPA
                 */
                SITTRIBUTNRPA?: string;

                /**
                 * Codicmnrpa
                 */
                CODICMNRPA?: number;

                /**
                 * Codicmtabnrpa
                 */
                CODICMTABNRPA?: number;

                /**
                 * Peracrescimonrpa
                 */
                PERACRESCIMONRPA?: number;

                /**
                 * CodFiscal Dev. Transf.
                 */
                CODFISCALDEVTRANSF?: number;

                /**
                 * CodFiscal Dev. Transf. Interestadual
                 */
                CODFISCALDEVTRANSFINTER?: number;

                /**
                 * Usa % Base Red. p/ Pessoa Física
                 */
                UTILIZAPERCBASEREDPF?: string;

                /**
                 * Usaredbaseicmsfontest
                 */
                USAREDBASEICMSFONTEST?: string;

                /**
                 * Aplica Acrésc. de PF p/ PJ Isenta?
                 */
                APLICAACRESCPJISENTA?: string;

                /**
                 * Tipocalculognre
                 */
                TIPOCALCULOGNRE?: string;

                /**
                 * Tipo de Cálculo GNRE
                 */
                TIPOCALCULOGNRETAB?: string;

                /**
                 * % Red. Base Cálc. ST
                 */
                PERCBASEREDST?: number;

                /**
                 * % Red. Base Cálc. ST Fonte
                 */
                PERCBASEREDSTFONTE?: number;

                /**
                 * % Red. Base Calc. ST
                 */
                PERCBASEREDSTTRANSF?: number;

                /**
                 * CodFiscal Venda de Manifesto Estadual
                 */
                CODFISCALVENDAPRONTAENT?: number;

                /**
                 * CodFiscal Venda de Manifesto Interestadual
                 */
                CODFISCALVENDAPRONTAENTINTER?: number;

                /**
                 * % Aliquota ISS
                 */
                ALIQISS?: number;

                /**
                 * CodFiscal Dev. Merc. Consig. Estadual
                 */
                CODFISCALDEVMERCCONSIG?: number;

                /**
                 * CodFiscal Dev. Merc. Consig. Interestadual
                 */
                CODFISCALDEVMERCCONSIGINTER?: number;

                /**
                 * Perdescrepasse
                 */
                PERDESCREPASSE?: number;

                /**
                 * % Impostos CMV PF
                 */
                CODICMTABPF?: number;

                /**
                 * CodFiscal Venda p/ Isento ST Estadual
                 */
                CODFISCALISENTOST?: number;

                /**
                 * CodFiscal Venda p/ Isento ST Interestadual
                 */
                CODFISCALISENTOSTINTER?: number;

                /**
                 * CodFiscal Venda p/ Isento ST Internacional
                 */
                CODFISCALISENTOSTINTERNASC?: number;

                /**
                 * Situação tributária isento ST
                 */
                SITTRIBUTISENTOST?: string;

                /**
                 * % acréscimo base ICMS estadual para pessoa física
                 */
                PERCACRESCBASEPFEST?: number;

                /**
                 * CodFiscal Dev. Cli. Isento ST Estadual
                 */
                CODFISCALDEVISENTOST?: number;

                /**
                 * CodFiscal Dev. Cli. Isento ST Interestadual
                 */
                CODFISCALDEVISENTOSTINTER?: number;

                /**
                 * CodFiscal Dev. Cli. Isento ST Internacional
                 */
                CODFISCALDEVISENTOSTINTERNASC?: number;

                /**
                 * Usapercbaseredhosp
                 */
                USAPERCBASEREDHOSP?: string;

                /**
                 * Usapercbaseredfarma
                 */
                USAPERCBASEREDFARMA?: string;

                /**
                 * Usapercbaseredopf
                 */
                USAPERCBASEREDOPF?: string;

                /**
                 * Usapercbaseredope
                 */
                USAPERCBASEREDOPE?: string;

                /**
                 * Usapercbaseredopm
                 */
                USAPERCBASEREDOPM?: string;

                /**
                 * Usapercbaseredassoc
                 */
                USAPERCBASEREDASSOC?: string;

                /**
                 * Usapercbasereddist
                 */
                USAPERCBASEREDDIST?: string;

                /**
                 * Perdescpissuframa
                 */
                PERDESCPISSUFRAMA?: number;

                /**
                 * Usapercbaseredmedico
                 */
                USAPERCBASEREDMEDICO?: string;

                /**
                 * Numseqatu
                 */
                NUMSEQATU?: number;

                /**
                 * CFOP de Entrada Estadual
                 */
                CODFISCALTRANSFENT?: number;

                /**
                 * CFOP de Entrada Interestadual
                 */
                CODFISCALTRANSFENTINTER?: number;

                /**
                 * Utilizar Valor da Última Entrada como Base ST (Decreto Nº 40.016/2006 RJ.)
                 */
                USAVALORULTENTBASEST?: string;

                /**
                 * CodFiscal Troca de Mercadoria Estadual
                 */
                CODFISCALTROCA?: number;

                /**
                 * CodFiscal Troca de Mercadoria Interestadual
                 */
                CODFISCALTROCAINTER?: number;

                /**
                 * CodFiscal Troca de Mercadoria Internacional
                 */
                CODFISCALTROCAINTERNASC?: number;

                /**
                 * CodFiscal Simples Remessa Estadual
                 */
                CODFISCALSRESTSR?: number;

                /**
                 * CodFiscal Simples Remessa Interestadual
                 */
                CODFISCALSRINTE?: number;

                /**
                 * CodFiscal Simples Remessa Internacional
                 */
                CODFISCALSREXT?: number;

                /**
                 * % aliquota de ST saída para uso em redução
                 */
                ALIQSTSAIDA?: number;

                /**
                 * % aliquota de ST saída pessoa física para uso em redução
                 */
                ALIQSTSAIDAPF?: number;

                /**
                 * Percivamex
                 */
                PERCIVAMEX?: number;

                /**
                 * NRPA - mensagem 1
                 */
                MENSAGEMNRPA?: string;

                /**
                 * Percbasecalcrepasse
                 */
                PERCBASECALCREPASSE?: number;

                /**
                 * % Base Rec. ICMS Transferencia Saida
                 */
                PERCBASEREDTRANFSAID?: number;

                /**
                 * % Desc. ICMS reduz base de ICMS?
                 */
                DESCICMSREDUZBASEICMS?: string;

                /**
                 * Percagregadorst
                 */
                PERCAGREGADORST?: number;

                /**
                 * % pauta ICMS estadual para contribuinte
                 */
                PERPAUTAICMS?: number;

                /**
                 * % pauta ICMS interestadual para contribuinte
                 */
                PERPAUTAICMSINTER?: number;

                /**
                 * % redução base ICMS estadual com pauta adicional
                 */
                PERCBASEREDADICIONAL?: number;

                /**
                 * % redução base ICMS interestadual com pauta adicional
                 */
                PERCBASEREDADICIONALINTER?: number;

                /**
                 * Usacfopbnfparabrinde
                 */
                USACFOPBNFPARABRINDE?: string;

                /**
                 * % Desc. Custo Transferencia
                 */
                PERDESCCUSTOTRANSF?: number;

                /**
                 * Efetuar Pagamento no Nome do Cliente
                 */
                PAGTONOMEDOCLIENTE?: string;

                /**
                 * Utilizar Valor da Última Entrada para o Cálculo do ICMS a ser Reduzido do Valor do ST.
                 */
                USAVALORULTENTBASEST2?: string;

                /**
                 * Observação GNRE
                 */
                OBSTRIBUT_GNRE?: string;

                /**
                 * Mostrar Preço sem St na Venda
                 */
                MOSTRARPVENDASEMST?: string;

                /**
                 * Percdifaliquotas
                 */
                PERCDIFALIQUOTAS?: number;

                /**
                 * Obssuframa
                 */
                OBSSUFRAMA?: string;

                /**
                 * CodFiscal Transferência (1124) Estadual
                 */
                CODFISCALTRANSFF?: number;

                /**
                 * CodFiscal Transferência (1124) Interestadual
                 */
                CODFISCALTRANSFFINTER?: number;

                /**
                 * CodFiscal Transferência (1124) Internacional
                 */
                CODFISCALTRANSFFINTERNASC?: number;

                /**
                 * CFOP Ent. Devolução de Transferência Interestadual
                 */
                CODFISCALDEVTRANSFENTINTER?: number;

                /**
                 * CFOP Ent. Devolução de Transferência Estadual
                 */
                CODFISCALDEVTRANSFENT?: number;

                /**
                 * Calcular ICMS situação tributária 060
                 */
                CALCULARICMSSITTRIBUT060?: string;

                /**
                 * CFOP Transf. Operador Logístico Entrada
                 */
                CODFISCALBROKERENT?: number;

                /**
                 * CFOP Transf. Operador Logístico Saída
                 */
                CODFISCALBROKERSAID?: number;

                /**
                 * CFOP Dev. Transf. Operador Logístico Entrada
                 */
                CODFISCALBROKERDEVENT?: number;

                /**
                 * CFOP Dev. Transf. Operador Logístico Saída
                 */
                CODFISCALBROKERDEVSAID?: number;
}
