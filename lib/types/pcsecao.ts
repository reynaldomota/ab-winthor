export interface PCSECAO {

                /**
                 * Código
                 */
                CODSEC: number;

                /**
                 * Descrição
                 */
                DESCRICAO?: string;

                /**
                 * Cód. Departamento
                 */
                CODEPTO?: number;

                /**
                 * Quantidade máxima
                 */
                QTMAX?: number;

                /**
                 * Tipo de seção
                 */
                TIPO?: string;

                /**
                 * Cadastrar dados referente a linha do fornecedor
                 */
                LINHA?: string;

                /**
                 * Identifica se o produto será enviado ao e-commerce
                 */
                ENVIAECOMMERCE?: string;

                /**
                 * Data ultima alteração
                 */
                DTULTALTER?: Date;

                /**
                 * Data e Hora de Cadastro
                 */
                DTCADASTRO?: Date;
}
