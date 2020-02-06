# Teste teórico

### CSS

1\) Na sua opinião, quais os melhores recursos para inclusão de imagens em um site/aplicação? 
E o que você acha interessante não utilizar?
Justifique levando em consideração boas práticas, estilização e formato de arquivos.
Resposta:
Boas práticas: Caso a imagem faça parte do conteúdo e/ou seja necessária para o entendimento da página, o ideal é que seja utilizada
com a tag ``<img>`` e com os atributos alt e title para que seja interpretada em modo de acessibilidade e indexada pelos mecanismos de busca. Caso a imagem não faça parte do conteúdo ou seja dispensável para o entendimento(esteja apenas para fins estéticos) o ideal é utilizá-la como plano de fundo de uma tag div ou span, para que as ferramentas de acessibilidade não tentem interpretá-la.
Formato de arquivos: O ideal é JPEG 2000, JPEG XR e WebP, pois PNG e JPEG dificultam a compactação.
 

2\) Você conhece algum padrão/metodologia que auxilie a estilização de uma aplicação? 
Explique um pouco através de exemplos;

Conheço o bemcss e o smacss. Mas não estou certo se essa é a pergunta.

3\) Se tratando de aplicações responsivas, quais práticas/recursos você costuma utilizar? 
Tem algum exemplo que você não acha interessante?

Práticas: Pelo processamento de css ocorrer no lado cliente, eu geralmente utilizo o mobile first na escrita do código, pois assim o navegador interpreta primeiro o css da menor resolução e as media query aplicam as regras para telas de resolução maior.
Exemplos que não são interessantes: O componentes de menu hamburger. Ações/interações que dependem do hover do mouse. A má utilização de imagens (muito pesadas ou dispensáveis em um contexto mobile). Ícones sem legenda.



4\) Analisando as tags e estilos abaixo, aponte os principais problemas encontrados e reescreva-os;

**Leve em consideração que as tags abaixo estão no meio de uma página html qualquer**


- HTML:
```
	<div class="lista-grande">
		<h1>Lorem Ipsun Dolor</h1>
			
		<span class="list-item-holder">	
			<ul>
				<li class="item">
					<label class="item__input-radio">
						<input type=radio>
						<span>1 item</span>
					</label>
				</li>
				<li class="item">
					<label  class="item__input-radio item__input-radio--cor-diferente">
						<input type=radio>
						<span>2 item</span>
					</label>
				</li>
				<li class="item" id="ultimo-item">
					<label  class="item__input-radio">
						<input class type=radio>
						<span>3 item</span>
					</label>
				</li>
			</ul>
		</span>
	</div>
  
```


- Estilos:
```
    .lista-grande{
        display: block;
    }

    .lista-grande h1{
        font-size: 18px;
    }

    .list-item-holder .item{
        list-style-type: decimal-leading-zero !important;
        padding: 1rem;
        width: 100%;
    }


    .list-item-holder ul li{
        list-style-type: thai;
    }

    .list-item-holder .item .item__input-radio{
        padding: 25px;
            border: solid 1px orange;
        display: flex;
        border: solid 1px #eadabd;
        background: aliceblue;
    }

    .item__input-radio--cor-diferente{
        border: solid 1px #eadabd;
        background: #a0abb5;
    }


    .item__input-radio--cor-diferente {
        @media (min-width: 480px) {
            background: #a0abb5;
        }
    }
    .item__input-radio--cor-diferente {
        @media (max-width: 480px) {
            background: transparent;
        }

    }

```

```js
// Resposta
Erros: 
Html:
   É importante que os inputs estejam dentro de um formulário
   É importante que exista um for, id e name nos label e inputs radio e que todos os radio tenham o mesmo nome(para evitar que
   sejam selecionadas várias opções)
   O type=radio não possuía aspas. Não é obrigatório mas torna o código menos padrão. O último input possuia o atributo "class" mas sem uma classe informada
 
Css:
   O uso de !important.
   A classe grande deveria estar antes de todos os seletores para evitar que o estilo seja aplicado em outras páginas.
   A classe .lista-grande já é aplicada em uma div que tem o display block por padrão.
   O h1 possuia uma fonte em px, o ideal seria rem pois é possível reajustar essa unidade de medida de acordo com a fonte do
       navegador* (Nas configurações de alguns navegadores é possível ajustar para fonte grande, média(padrão) e pequena).
   O seletor ".list-item-holder ul li" não é aplicado pois o li não tem a propriedade list-style (isso é uma propriedade da lista
       não do item).
   O seletor ".item__input-radio--cor-diferente" não era aplicado pois o seletor ".list-item-holder .item .item__input-radio"
       tinha mais relevância.
   O "item__input-radio--cor-diferente" tem uma duplicidade de background, considerando o mobile first, não seria necessário o
       media query com min-width de 480. Melhor o background transparent como default.
   O @media está dentro do seletor css, o ideal seria ele conter o seletor.
 
```

```html
<div class="lista-grande">
    <h1>Lorem Ipsun Dolor</h1>
        
    <form name="" class="list-item-holder">	
        <ul>
            <li class="item">
                <label for="item1" class="item__input-radio">
                    <input id="item1" name="itens" type="radio">
                    <span>1 item</span>
                </label>
            </li>
            <li class="item">
                <label for="item2" class="item__input-radio item__input-radio--cor-diferente">
                    <input id="item2" name="itens" type="radio">
                    <span>2 item</span>
                </label>
            </li>
            <li class="item" id="ultimo-item">
                <label for="item3"  class="item__input-radio">
                    <input id="item3" name="itens" type="radio">
                    <span>3 item</span>
                </label>
            </li>
        </ul>
    </form>
</div>
```

```css
    div.lista-grande h1{
        font-size: 1.125rem;
    }

    div.lista-grande .list-item-holder .item{
        list-style-type: decimal-leading-zero;
        padding: 1rem;
        width: 100%;
    }

    div.lista-grande .list-item-holder .item .item__input-radio{
        padding: 1.5625rem;
        border: solid 1px orange;
        display: flex;
        border: solid 1px #eadabd;
        background: aliceblue;
    }

    div.lista-grande .list-item-holder .item .item__input-radio.item__input-radio--cor-diferente{
        border: solid 1px #eadabd;
        background: transparent;
    }

    @media (min-width: 30rem) {
        div.lista-grande .list-item-holder .item .item__input-radio.item__input-radio--cor-diferente {
            background: #a0abb5;
        }
    }

```

5\) Analisando os estilos em `Nesting` do código abaixo, descreva, caso exista, os problemas gerados e as possíveis soluções;

```
    .form-holder {
        width: 100%;
        margin-bottom: 25px;

        .form-item {
            .item-name,
            .item-lastname,
            .item-genre,
            .item-email,
            .item-document-type,
            .item-document-number,
            .item-expiration-date,
            .item-country {
                input, select, textarea {
                    border: none;
                    padding: none;
                    box-shadow: none !important;

                    &.error{
                    background: red;
                    }
                }
                input[disabled], select[disabled], input[readonly], select[readonly] {
                    background-color: #FFF;
                }
            }
            
        }
    }

```

```js
// Resposta
Problemas gerados:
Em "input, select, textarea" vai gerar um css errado de um many-to-many, similar ao fazer um "join" no banco de dados sem um "on",
basicamente uma interseção de todos os itens de um conjunto com todos os itens do outro outro.
Para o input disabled, não é necessário informar dentro de um input-alguma-coisa. Apenas no form-item seria gerado menos css e
uma aplicação equivalente.
A solução seria não especificar o item-alguma-coisa(item-name, item-lastname...) ou agrupar os nesting de acordo com o tipo.
Exemplo:
.form-holder {
    width: 100%;
    margin-bottom: 25px;

    .form-item {
        input[disabled], select[disabled], input[readonly], select[readonly] {
            background-color: #FFF;
        }
        .item-name,
        .item-lastname,
        .item-email,
        .item-document-number,
        .item-expiration-date
        { 
            input {
                border: none;
                padding: none;
                box-shadow: none !important;

                &.error{
                background: red;
                }
            }
        }
        .item-genre,
        .item-document-type,
        .item-country {
            select {
                border: none;
                padding: none;
                box-shadow: none !important;

                &.error{
                background: red;
                }
            }
        }
        
    }
}

```



---


### Javascript

1\) Cite dois recursos do javascript para o tratamento de processamentos assíncronos e explique as diferenças entre eles.

```js
// Resposta
Async/Await e Callback. A diferença é que o async/await não precisa de retornar uma função com os resultados, o callback espera uma
 função com o resultado do processamento.
```




2\) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique. (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```js
    function doSomething() {
        return new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
    }

    function doSomethingElse() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }

    somePromise()
        .then(() => {
            doSomething()
            doSomethingElse()
        })
        .then(() => {
            console.log('finished')
        })

```

```
// Resposta
Vai demorar o tempo de retorno de somePromisse, visto que as funções doSomething e doSomethingElse não estão bloqueando a Thread pois não estão encadeando "then"s.
```




3\) O que o código a seguir imprime? (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```	js
	somePromise()
	    .then(() => {
		    throw new Error('uh oh!')
	    }, err => {
		    console.log(err.message)
	    })
	    .then(() => {
		    console.log('ok now!')
	    })

```

```js
// Resposta
Não imprime pois o then() retorna uma excessão, mas não é tratada por nenhum catch.
```



4\) Melhore a função a seguir:

```
	function getTransactions() {
	    return $q((resolve, reject) => {
		$http.get(BASE_URL + '/api/transacoes')
		    .then(response => {
		        if (!response.data.error) {
		            const transactions = response.data

		            var _transactions = []

		            for (var i in transactions) {
		                if (transactions[i].realizada)  {
		                    _transactions.push({
		                        id: transactions[i].id,
		                        value: transactions[i].valor,
		                        type: transactions[i].valor < 0 ? 'transference' : 'deposit',
		                    })
		                }
		            }

		            resolve(_transactions)
		        } else {
		            reject(response.data.error)
		        }
		    })
		    .catch(e => reject(e))
	    })
    }

```


```js
// Resposta
function getTransactions() {
    return $q((resolve, reject) => {
    $http.get(BASE_URL + '/api/transacoes')
        .then(response => {
            if (response.data.error) {
                reject(response.data.error)
            } else {
                const transactions = response.data

                const _transactions = transactions.filter(transaction => transaction.realizada)
                    .map(transaction => {
                        return {
                            id: transaction.id,
                            value: transaction.valor,
                            type: transaction.valor < 0 ? 'transference' : 'deposit',
                        }
                    })
                resolve(_transactions)
            }
        })
        .catch(e => reject(e))
    })
}
```



5\) Dado um array de objetos, no qual cada objeto representa uma pessoa e possui as propriedades `name` e `age`, por exemplo:
```
    [
        { name: 'Rick Sanchez', age: 70 } ,
        { name: 'Morty Smith', age: 14 }
    ]

```

Crie funções para:
1. Retornar uma o array ordenado alfabeticamente pelos nomes;
2. Fazer o somatório das idades;
3. Verificar se alguma pessoa tem a idade maior que 50 (espera-se um retorno booleano).
4. Verificar se todas pessoas tem a idade menor que 20 (espera-se um retorno booleano).
5. Remover o primeiro nome de todas as pessoas.
6. Dado um determinado nome, retornar o primeiro objeto que corresponda a este nome.

*Obs.: As funções criadas devem atender arrays de qualquer tamanho.*


```js
// Resposta
const lista = [
    { name: 'Rick Sanchez', age: 70 } ,
    { name: 'Morty Smith', age: 14 }
]

function ordernarPorNome(lista) {
    return lista.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
}


function somatorioIdades(lista) {
    const totalis = lista.reduce((total, item) => total + item.age, 0)
    return totalis;
}

function temPessoasCom50Mais(lista) {
    return lista.some(pessoa => pessoa.age > 50)
}


function saoTodasPessoas20Menos(lista) {
    return !lista.some(pessoa => pessoa.age >= 20)
}

function removerPrimeiroNome(lista) {
    return lista.map(pessoa => {
        return {...pessoa, name: pessoa.name.split(' ')[1]}
    })
}

function encontrarPessoaPorNome(nome, lista) {
    return lista.find(pessoa => pessoa.name === nome)
}

```



6\)Dado o seguinte trecho de código:

```
	const getDiscountTicket = (ticket, discount) => {
		const discountTicket = { ...ticket };
  		discountTicket.prices.vip = discountTicket.prices.vip * discount;
		discountTicket.prices.stands = discountTicket.prices.stands * discount;
		return discountTicket;
	}

	const regularTicket = { band: 'Metallica', city: 'Belo Horizonte', prices: { vip: 800, stands: 600 } }
	const discountTicket = getDiscountTicket(regularTicket, 0.5);

	console.log('discountTicket: ', discountTicket.prices);
	console.log('regularTicket: ', regularTicket.prices);

```
Explique o porquê dos preços estarem com o mesmo valor. E o que precisa ser alterado para que os preços sejam diferentes?


```js
// Resposta
O discountTicket da função está referenciando ao objeto ticket recebido como parâmetro na memória, então ao alterar a propriedade 
dentro da função, também é alterado fora. O que precisa ser alterado é declara o discountTicket interno como um objeto com as
propriedades de prices com vip e stands vazios/zerados e realizar a conta com os valores do objeto recebido.

    const discountTicket = {prices: { vip: 0, stands: 0 }};
    discountTicket.prices.vip = ticket.prices.vip * discount;
    discountTicket.prices.stands = ticket.prices.stands * discount;
    
```

---


### AngularJs

1\) Explique os tipos de Data Binding no AngularJS; 

```js
// Resposta
'@': Recebe um texto para a diretiva/componente
'&': Recebe uma função a ser executada de fora do componente/diretiva
'=': Recebe um objeto que realiza um two-way data biding

```

2\) Liste quais são os Dispatchers e Listeners que existem no AngularJs, as diferenças entre eles, vantagens e desvantagens no uso dos mesmos;

```js
// Resposta
Dispatchers: 
$emit: Emite um evento para quem chamou o componente/diretiva/controller.
Vantagem: Escopo definido.
Desavantagem: Necessário encadeamento de vários $emit para passar para outros escopos além do que chamou o componente.

$broadcast: Emite um evento que pode ser executado por qualquer controller/componente/diretiva da aplicação. (Se em $rootScope)
Vantagem: Comunicação entre componentes/diretivas que estão em escopos diferentes é facilitada.
Desvantagem: Difícil controlar quem emite ou recebe o evento.

```

3\) O que são e como funcionam os lifecycles no AngularJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
// Resposta

```

4\) Qual recurso angularJs pode ser usado para aumentar a performance de campos de formulários que realizam algum processamento ao alterar o texto?

```js
// Resposta
```

5\) Dado o `Nesting` de componentes abaixo, indique a melhor forma do componente `<fourth-component>` se comunicar com `<first-component>`;

```
	<first-component>
		<second-component>
			<third-component>
				<fourth-component>
				</fourth-component>
			</third-component>
		</second-component>
	</first-component>

```

```js
// Resposta
```
---

### React

1\) Cite tipos de componentes que existem no ReactJs e a melhor forma de utilização de cada um.

```js
// Resposta
Stateless Components: Componentes sem estado. Ideal para a reenderização de código.
Basic Component: Componente com estado e com manipulação do lifecycle. Ideal quando obtem interações do usuário.
```

2\) O que são e como funcionam os lifecycles no ReactJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```
// Resposta
São funções que permitem a manipulação/acesso ao estado do compnente durante sua "montagem"/renderização/"desmontagem".
Os lifecycles funcionam através da chamada dessas funções, com seus parametros padrões. 
O `componentDidMount()` pode ser usado para executar uma função que altere o estado após componente ser montado (finalizado o processamento
    necessário para a reenderização). Ou o `componentWillUnmount` para remover alguma coisa do estado global antes do componente for
    removido.

```

3\) Atualmente nosso sistema possui um componente chamado Button que possui a seguinte estrutura:

```js
    import React from 'react';
    import styled from 'styled-components';

    const ButtonLayout = styled.button`
    cursor: pointer;
    color: '#FFF';
    background-color: '#707070';
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .45rem 2.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover{
        background-color: ${props => props.backgroundColor + 'cc'};
    }
    `;

    const Button = (props) => {
    const { label, onClick = () => { }, type = 'button' } = props;
    return (
        <React.Fragment>
        <ButtonLayout type={type} onClick={onClick}>{label}</ButtonLayout>
        </React.Fragment>
    );
    };

    export default Button;
```

Atualmente, os nossos botões podem variar na cor, texto e ação que é executada ao ser clicado. 
No entanto, para uma nova atividade, foi solicitado seja criado um botão que contém também um ícone. 
O que você pode fazer para criar um botão que atenda essa demanda?


```js
// Resposta
Adicionado uma prop de ícone, com um ícone texto padrão e que preferencialmente receba uma classe da biblioteca de ícones do projeto.

const { label, onClick = () => { }, type = 'button', icon = 'fa fa-check' } = props;
    return (
        <React.Fragment>
        <ButtonLayout type={type} onClick={onClick}>{label} <i className={icon}></i></ButtonLayout>
        </React.Fragment>
    );
};

```


