export interface PCPRACA {

                /**
                 * Código
                 */
                CODPRACA: number;

                /**
                 * Praça
                 */
                PRACA?: string;

                /**
                 * Região
                 */
                NUMREGIAO?: number;

                /**
                 * Rota
                 */
                ROTA?: number;

                /**
                 * Sequência na rota
                 */
                SEQROTA?: number;

                /**
                 * População
                 */
                POPULACAO?: number;

                /**
                 * Distância
                 */
                DISTANCIA?: number;

                /**
                 * Situação
                 */
                SITUACAO?: string;

                /**
                 * Data do cadastro
                 */
                DTCADASTRO?: Date;

                /**
                 * CEP inicial
                 */
                CEPINICIAL?: string;

                /**
                 * CEP final
                 */
                CEPFINAL?: string;

                /**
                 * Prioridade de entrega
                 */
                PRIORIDADEENTREGA?: string;
}
