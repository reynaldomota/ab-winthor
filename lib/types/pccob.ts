export interface PCCOB {

                /**
                 * Código
                 */
                CODCOB: string;

                /**
                 * Nome
                 */
                COBRANCA?: string;

                /**
                 * Comissão
                 */
                PAGCOMISSAO?: string;

                /**
                 * Taxa de juros
                 */
                TXJUROS?: number;

                /**
                 * Moeda
                 */
                CODMOEDA?: string;

                /**
                 * Baixar no contas a receber
                 */
                BAIXACXBANCO?: string;

                /**
                 * Nível de venda
                 */
                NIVELVENDA?: number;

                /**
                 * Fluxo de caixa
                 */
                FLUXOCX?: string;

                /**
                 * Coluna fluxo
                 */
                COLUNAFLUXOCX?: number;

                /**
                 * Dias fluxo
                 */
                NUMDIASVENCFLUXOCX?: number;

                /**
                 * Bloqueio automático
                 */
                BLOQAUTOMATICO?: string;

                /**
                 * Nº  de dias para bloqueio automático
                 */
                NUMDIASBLOQAUTOMATIC?: number;

                /**
                 * Exibe no acerto de caixa
                 */
                EXIBIRCXMOT?: string;

                /**
                 * Exibir no faturamento
                 */
                EXIBIRBK?: string;

                /**
                 * Prazo máximo de venda
                 */
                PRAZOMAXIMOVENDA?: number;

                /**
                 * Letra cobrança
                 */
                LETRACOB?: string;

                /**
                 * Boleto bancário
                 */
                BOLETO?: string;

                /**
                 * Cobrança de custódia
                 */
                CUSTODIA?: string;

                /**
                 * Altera no desdobramento
                 */
                PERMITEALTCOBDESD?: string;

                /**
                 * Utilizado em faturamento varejo.
                 */
                VLTARIFA?: number;

                /**
                 * Forma de pagamento ECF
                 */
                CODECF?: string;

                /**
                 * Cartão de crédito
                 */
                CARTAO?: string;

                /**
                 * Observação para nota fiscal
                 */
                OBSNF?: string;

                /**
                 * Nº de dias para liberação de crédito
                 */
                NUMDIASLIBERACAOCREDITO?: number;

                /**
                 * Cliente (bandeira cartão)
                 */
                CODCLICC?: number;

                /**
                 * Prazo (dias)
                 */
                PRAZOCC?: number;

                /**
                 * % Taxa administração
                 */
                PERCTXADMINCC?: number;

                /**
                 * Conta
                 */
                CODCONTACC?: number;

                /**
                 * Cobrança
                 */
                CODCOBCC?: string;

                /**
                 * Envia para força de vendas
                 */
                ENVIACOBRANCAFV?: string;

                /**
                 * Valida limite de crédito ECF
                 */
                VALIDALIMCREDECF?: string;

                /**
                 * Dias carência
                 */
                DIASCARENCIA?: number;

                /**
                 * Código do protesto
                 */
                CODPARAPROTESTO?: string;

                /**
                 * Prazo protesto
                 */
                NUMDIASPROTESTO?: string;

                /**
                 * Utilizado na cobrança magnética, rotina 1504.
                 */
                NUMBANCO?: number;

                /**
                 * Exibe devolução de cliente
                 */
                PERMITEDESCDEVCLI?: string;

                /**
                 * Percentual de Comissão da Cobrança para Motorista, aplicada na 414 - Comissão de Motorista, no Tipo de cálculo distribuição e rota.
                 */
                PERCOMMOT?: number;

                /**
                 * Cobrança broker
                 */
                COBRANCABROKER?: string;

                /**
                 * Valor minimo de venda
                 */
                VLMINPEDIDO?: number;

                /**
                 * Esse parametro é verificada no desdobramento efetuado nas rotinas 1210 e 402,pois será obrigatório informar os dados bancários (Banco, Agência, Conta),se a cobrança do título é de depós. bancário,seguindo o mesmo conceito de cheques
                 */
                DEPOSITOBANCARIO?: string;

                /**
                 * Irá influir na seleção de títulos na apuração de comissão, nas rotinas 1248, 1249 e 1266
                 */
                TIPOCOMISSAO?: string;

                /**
                 * Utilizado no faturamento para encontrar o valor da tarifa bacária relacionado a banco/agencia.
                 */
                CODBANCOTARIFA?: number;

                /**
                 * Ao selecionar a filial será permitido o uso desta cobrança caso a filial de pedido seja igual a filial de cobrança
                 */
                CODFILIAL?: string;

                /**
                 * Exportar auto-serviço
                 */
                EXPORTARECF?: string;

                /**
                 * Operadora
                 */
                CODOPERADORACARTAO?: string;

                /**
                 * Tipo de operação
                 */
                TIPOOPERACAOTEF?: string;
}
