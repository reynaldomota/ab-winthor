export interface PCMARCA {

                /**
                 * Indica o código da marca.
                 */
                CODMARCA: number;

                /**
                 * Indica o descrição da marca.
                 */
                MARCA?: string;

                /**
                 * Indica se a marca esta ativa ou inativa.
                 */
                ATIVO?: string;

                /**
                 * Campo para vinculo do código AdWords do ecommerce com o Winthor, uso exclusido para operações WEB.
                 */
                CODADWORDS?: string;

                /**
                 * Campo para vinculo do código campanha Lomadee do ecommerce com o Winthor, uso exclusido para operações WEB.
                 */
                CODCAMPLOMADEE?: string;

                /**
                 * Campo para titulo da marca apresentado no ecommerce, uso exclusido para operações WEB.
                 */
                TITULO?: string;

                /**
                 * Data e Hora de Cadastro
                 */
                DTULTALTER?: Date;

                /**
                 * Data e Hora de Cadastro
                 */
                DTCADASTRO?: Date;
}
