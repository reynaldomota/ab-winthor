export interface PCCATEGORIA {

                /**
                 * Cod. Seção
                 */
                CODSEC: number;

                /**
                 * Código
                 */
                CODCATEGORIA?: number;

                /**
                 * Categoria
                 */
                CATEGORIA?: string;

                /**
                 * Identifica se o produto será enviado ao e-commerce
                 */
                ENVIAECOMMERCE?: string;

                /**
                 * Data Ultima Alteracao
                 */
                DTULTALTER?: Date;

                /**
                 * Data e Hora de Cadastro
                 */
                DTCADASTRO?: Date;
}
