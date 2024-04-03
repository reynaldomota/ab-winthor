export interface PCCONTA {

                /**
                 * Código da conta
                 */
                CODCONTA: number;

                /**
                 * Nome da conta
                 */
                CONTA?: string;

                /**
                 * Código do grupo
                 */
                GRUPOCONTA?: number;

                /**
                 * Código da conta master
                 */
                CODCONTAMASTER?: number;

                /**
                 * Tipo de conta
                 */
                TIPO?: string;

                /**
                 * Conta de investimento?
                 */
                INVESTIMENTO?: string;

                /**
                 * Bonificação?
                 */
                BONIFIC?: string;

                /**
                 * Utilize a rotina 755 para informar para o valor orçado do mês
                 */
                VLORCAMES?: number;

                /**
                 * Tipo fixa/variável
                 */
                FIXAVARIAVEL?: string;

                /**
                 * Gerar provisão de lançamento contábil?
                 */
                GERAPROVLANCCONTAB?: string;

                /**
                 * Conta de contra-partida
                 */
                CODCONTACONTRAPARTIDA?: number;

                /**
                 * Conta contábil
                 */
                CONTACONTABIL?: string;
}
