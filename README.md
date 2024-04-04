# AB-WINTHOR

  Utilitários do Winthor para [node](http://nodejs.org).
  
  [![pub package](https://badgen.net/npm/v/ab-winthor)](https://www.npmjs.com/package/ab-winthor)
  [![pub package](https://badgen.net/npm/types/ab-winthor)](https://www.npmjs.com/package/ab-winthor)


```ts
import { Types as Winthor } from 'ab-winthor'

const cliente: Winthor.PCCLIENT = {
  CODCLI: 2,
  NOME: 'John Doe',
  ...
}
```

## Instalação

Este é um módulo [Node.js](https://nodejs.org/en/) disponível através do [npm registry](https://www.npmjs.com/).

Se for um projeto novo, certifique-se de criar um arquivo `package.json` primeiro através do comando [`npm init`](https://docs.npmjs.com/creating-a-package-json-file).

A instalação é feita utilizando 
[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install ab-winthor
```

## Recursos (em desenvolvimento)

Esse pacote está em desenvolvimento. Estamos trabalhando para deixá-lo o mais completo possível. No momento, contém:

### Tipagem

* PCBAIRRO
* PCCATEGORIA
* PCCIDADE
* PCCLIENT
* PCBANCO
* PCCOB
* PCCONTA
* PCCONTATO
* PCEMPR
* PCESTADO
* PCFILIAL
* PCFORNEC
* PCMARCA
* PCPAIS
* PCPEDC (em desenvolvimento)
* PCPEDI (em desenvolvimento)
* PCPRODFILIAL
* PCPRODUT
* PCSECAO
* PCTRIBUT
