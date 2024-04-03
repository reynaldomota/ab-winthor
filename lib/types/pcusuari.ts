export interface PCUSUARI {

                /**
                 * Código
                 */
                CODUSUR: number;

                /**
                 * Nome
                 */
                NOME?: string;

                /**
                 * Senha
                 */
                SENHA?: string;

                /**
                 * Tipo de venda
                 */
                TIPOVEND?: string;

                /**
                 * %Comissão VV
                 */
                PERCENT?: number;

                /**
                 * % Comissão VP
                 */
                PERCENT2?: number;

                /**
                 * Endereço
                 */
                ENDERECO?: string;

                /**
                 * Cidade
                 */
                CIDADE?: string;

                /**
                 * Estado
                 */
                ESTADO?: string;

                /**
                 * CEP
                 */
                CEP?: string;

                /**
                 * Telefone 1
                 */
                TELEFONE1?: string;

                /**
                 * Telefone 2
                 */
                TELEFONE2?: string;

                /**
                 * CPF
                 */
                CPF?: string;

                /**
                 * CI
                 */
                CI?: string;

                /**
                 * Fax
                 */
                FAX?: string;

                /**
                 * Bairro
                 */
                BIP?: string;

                /**
                 * Mensagem 1
                 */
                MENS1?: string;

                /**
                 * Mensagem 2
                 */
                MENS2?: string;

                /**
                 * Mensagem 3
                 */
                MENS3?: string;

                /**
                 * Mensagem 4
                 */
                MENS4?: string;

                /**
                 * Bloqueio
                 */
                BLOQUEIO?: string;

                /**
                 * Data de início
                 */
                DTINICIO?: Date;

                /**
                 * Data de fim
                 */
                DTTERMINO?: Date;

                /**
                 * Motivo
                 */
                MOTIVO?: string;

                /**
                 * Data de nascimento
                 */
                DTNASC?: Date;

                /**
                 * Firma
                 */
                FIRMA?: string;

                /**
                 * CNPJ
                 */
                CGC?: string;

                /**
                 * Bairro
                 */
                BAIRRO?: string;

                /**
                 * Supervisor
                 */
                CODSUPERVISOR?: number;

                /**
                 * Cônjuge
                 */
                CONJUGE?: string;

                /**
                 * Data de nasc. do cônjuge
                 */
                DTNASCONJUGE?: Date;

                /**
                 * Tipo de firma
                 */
                TIPOFIRMA?: string;

                /**
                 * Numdep
                 */
                NUMDEP?: number;

                /**
                 * Dtultvenda
                 */
                DTULTVENDA?: Date;

                /**
                 * Data de Entrega
                 */
                DTENTREGADOC?: Date;

                /**
                 * Codcomocliente
                 */
                CODCOMOCLIENTE?: number;

                /**
                 * Ccorrente
                 */
                CCORRENTE?: string;

                /**
                 * E-Mail
                 */
                EMAIL?: string;

                /**
                 * Data de Informat.
                 */
                DTINFORMATIZA?: Date;

                /**
                 * Num.Série Equip.
                 */
                NUMSERIEEQUIP?: number;

                /**
                 * Numeração de pedidos usada pelo sistema. Não pode se repetir. Dois RCA´s não podem ter mesmo número de pedido. A numeração do pedido é iniciada pelo código do RCA. Formato: RRRRNNNNNN - RRRR é o código do RCA, NNNNNN - é a numeração do pedido.
                 */
                PROXNUMPED?: number;

                /**
                 * Ultnumped
                 */
                ULTNUMPED?: number;

                /**
                 * Banco
                 */
                NUMBANCO?: number;

                /**
                 * Agência
                 */
                NUMAGENCIA?: number;

                /**
                 * Dv agência
                 */
                NUMDVAGENCIA?: string;

                /**
                 * Conta corrente
                 */
                NUMCCORRENTE?: number;

                /**
                 * Dv conta corrente
                 */
                NUMDVCCORRENTE?: string;

                /**
                 * Dtultalteracao
                 */
                DTULTALTERACAO?: Date;

                /**
                 * Dtexclusao
                 */
                DTEXCLUSAO?: Date;

                /**
                 * Vendedorqk
                 */
                VENDEDORQK?: string;

                /**
                 * Código Equipe
                 */
                CODEQUIPE?: number;

                /**
                 * Permeta
                 */
                PERMETA?: number;

                /**
                 * Filial
                 */
                CODFILIAL?: string;

                /**
                 * Observação 1
                 */
                OBS1?: string;

                /**
                 * Observação 2
                 */
                OBS2?: string;

                /**
                 * Esta numeração marca a seqüência de pedidos do próprio RCA. Geralmente esta numeração controla a numeração de pedidos no palm do RCA. Esta numeração indica se certo pedido do Palm já foi incluído no WinThor.
                 */
                PROXNUMPEDFORCA?: number;

                /**
                 * Bloqueia Comissão?
                 */
                BLOQCOMIS?: string;

                /**
                 * Obsbloq
                 */
                OBSBLOQ?: string;

                /**
                 * Valor corrente
                 */
                VLCORRENTE?: number;

                /**
                 * Valor limite de crédito
                 */
                VLLIMCRED?: number;

                /**
                 * Numconselho
                 */
                NUMCONSELHO?: string;

                /**
                 * Inss
                 */
                INSS?: number;

                /**
                 * Vlvendaprev
                 */
                VLVENDAPREV?: number;

                /**
                 * Coddistrib
                 */
                CODDISTRIB?: string;

                /**
                 * Data Limite de Entrega
                 */
                DTLIMENTREGADOC?: Date;

                /**
                 * Máscara preposto
                 */
                MASKPREPOSTO?: string;

                /**
                 * Exportadados
                 */
                EXPORTADADOS?: string;

                /**
                 * Num.Série Equip. 2
                 */
                NUMSERIEEQUIP2?: string;

                /**
                 * Últ. Pag. Conselho
                 */
                DTULTPAGCONSELHO?: Date;

                /**
                 * Inscmunicipal
                 */
                INSCMUNICIPAL?: string;

                /**
                 * Praças 1
                 */
                PRACA1?: string;

                /**
                 * Praças 2
                 */
                PRACA2?: string;

                /**
                 * Endereço
                 */
                ENDERECO2?: string;

                /**
                 * Perdescmax
                 */
                PERDESCMAX?: number;

                /**
                 * E-Mail2
                 */
                EMAIL2?: string;

                /**
                 * Bloqvendatlmk
                 */
                BLOQVENDATLMK?: string;

                /**
                 * Área de Atuação
                 */
                AREAATUACAO?: string;

                /**
                 * Valor venda mín. por pedido
                 */
                VLVENDAMINPED?: number;

                /**
                 * Percmetadepto
                 */
                PERCMETADEPTO?: number;

                /**
                 * Tipo de comissão
                 */
                TIPOCOMISSAO?: string;

                /**
                 * Usa Déb. Crédito RCA? (esp. FV)
                 */
                USADEBCREDRCA?: string;

                /**
                 * Percacrescimovenda
                 */
                PERCACRESCIMOVENDA?: number;

                /**
                 * Banco Poup.
                 */
                NUMBANCOPOUP?: number;

                /**
                 * C.Cor.Poupança
                 */
                NUMCCORRENTEPOUP?: number;

                /**
                 * Agência Poup.
                 */
                NUMAGENCIAPOUP?: number;

                /**
                 * Dv conta corrente poupança
                 */
                NUMDVCCORRENTEPOUP?: string;

                /**
                 * Dv agência poupança
                 */
                NUMDVAGENCIAPOUP?: string;

                /**
                 * Horainiconexaopalm
                 */
                HORAINICONEXAOPALM?: number;

                /**
                 * Minutoiniconexaopalm
                 */
                MINUTOINICONEXAOPALM?: number;

                /**
                 * Horafimconexaopalm
                 */
                HORAFIMCONEXAOPALM?: number;

                /**
                 * Minutofimconexaopalm
                 */
                MINUTOFIMCONEXAOPALM?: number;

                /**
                 * Numeração de clientes cadastrados pelo Palm do RCA. Em alguns forças de vendas este número poderá se repetir em outros RCA´s. Formato: RRRNNN - RRR é o código do RCA, NNN é a numeração do cliente no palm do RCA
                 */
                PROXCODCLIPALM?: number;

                /**
                 * Qtitenspedprev
                 */
                QTITENSPEDPREV?: number;

                /**
                 * Qtpedprev
                 */
                QTPEDPREV?: number;

                /**
                 * Telefone Provedor
                 */
                TELPROVEDOR?: string;

                /**
                 * Senha POP
                 */
                SENHAPOP?: string;

                /**
                 * Usuário POP
                 */
                USURPOP?: string;

                /**
                 * Servidor SMTP
                 */
                SERVSMTP?: string;

                /**
                 * Servidor POP
                 */
                SERVPOP?: string;

                /**
                 * Usuário Dialup
                 */
                USURDIALUP?: string;

                /**
                 * Senha Dialup
                 */
                SENHADIALUP?: string;

                /**
                 * % Acréscimo Venda
                 */
                PERCACRESFV?: number;

                /**
                 * Rotamasterfoods
                 */
                ROTAMASTERFOODS?: string;

                /**
                 * Numeração de pedidos usada pelo sistema. Não pode se repetir. Dois RCA´s não podem ter mesmo número de pedido. A numeração do pedido é iniciada pelo código do RCA. Formato: RRRRNNNNNN - RRRR - é o código do RCA, NNNNNN - é a numeração do pedido.
                 */
                NUMPEDECF?: number;

                /**
                 * Usuário Login
                 */
                USURLOGIN?: string;

                /**
                 * Senha Login
                 */
                SENHALOGIN?: string;

                /**
                 * Diretório do Vendedor
                 */
                USURDIRFV?: string;

                /**
                 * Diretório de Recepção
                 */
                DIRRECEPCAOFTP?: string;

                /**
                 * Diretório de Envio
                 */
                DIRENVIOFTP?: string;

                /**
                 * Servidor
                 */
                SERVFTP?: string;

                /**
                 * Usuário
                 */
                USURFTP?: string;

                /**
                 * Senha
                 */
                SENHAFTP?: string;

                /**
                 * Permetametro
                 */
                PERMETAMETRO?: number;

                /**
                 * Esta numeração marca a seqüência de pedidos do próprio RCA.Geralmente esta numeração controla a numeração de pedidos no palm do RCA.No WinThor, esta numeração serve para indicar se certopedido do palm já foi incluído no WinThor.
                 */
                PROXNUMPEDWEB?: number;

                /**
                 * Codoperacao
                 */
                CODOPERACAO?: string;

                /**
                 * Tipo de pessoa
                 */
                TIPOPESSOA?: string;

                /**
                 * Indica se o RCA poderá receber adiantamentode comissão através da rotina 1266.
                 */
                PERMITEADIANTCOMISSAO?: string;

                /**
                 * Indica o índice a ser gravado no lançamentode Contas a Pagar do Fechamento da Comissão (através do rotina 1268).
                 */
                INDICECPFECHCOMISSAO?: string;

                /**
                 * % Máx.Acréscimo
                 */
                PERMAXVENDA?: number;

                /**
                 * Indica o montante doo total da comissão na venda que cabe a este RCA (uso na PCSIS1248, opção de comissão RCA/Operador)
                 */
                INDICERATEIOCOMISSAO?: number;

                /**
                 * Esta opção faz com que na digitação do pedido de venda (PCSIS316), ao abrir um pedido para este RCA, o mesmo seja trocado pelo RCA do operador logado na rotina, se o mesmo estiver indicado no cadastro de usuários (PCSIS528).
                 */
                USARRCAOPERADOR?: string;

                /**
                 * Numclipos
                 */
                NUMCLIPOS?: number;
}
