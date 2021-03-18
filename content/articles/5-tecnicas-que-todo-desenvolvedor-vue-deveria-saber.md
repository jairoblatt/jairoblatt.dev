---
title: '5 ténicas que todo desenvolvedor Vue deveria saber'
description: 'Nesse artigo listarei as 5 ténicas que acredito que todo desenvolvedor Vue deveria saber, são 5 técnicas bastate útils para
se utilizar no dia a dia desenvolvendo com Vue.'
imgUrl: '5-tecnicas-que-todo-desenvolvedor.png'
date: '17 de março, 2021'
tags:
  - Vue 2
  - Dicas
  - Técnicas
---

## 1. Componentes Funcionais

Componentes funcionais são aqueles componentes que não necessitam de estado, são conhecidos como ["stateless"](https://vuejs.org/v2/guide/render-function.html#Functional-Components), normalmente são componentes na aplicação
que possuim apenas a função de leitura de propriedades, por isso não precisam sofrer com a sobrecarga de reatividade! Isso faz com que o componente se
torne muito mais leve do que componentes comuns, mas não se engane ele ainda pode sofrer mutações baseadas nas propriedades renderizadas!

Para definir uma componente funcional é bem simples, basta ativar a opção `functional: true` no contexto de renderização.

Exemplo de componente comum:

```vue
<template>
  <div class="blog-item">
    <div class="item__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
```

Mesmo componente porém agora sendo funcional

```vue
<template functional>
  <div class="blog-item">
    <div class="item__title">{{ props.title }}</div>
  </div>
</template>
```

## 2. Validação de propriedades

Quando se trabalha em projetos de médio a grande porte é muito difícil se lembrar como exatamente aquela propriedade deveria se comportar, isso
pode te trazer muita dor de cabeça e um gasto desnecessário de tempo, pois, além de servir como documentação para seu componente a validação de
propriedade também pode te ajudar a identificar e previnir possíveis erros.

É uma boa prática e deveria se tornar algo comum no seu desenvolvimento com Vue. Então, para evitar dor de cabeça com seus componentes no futuro
[apenas valide suas propriedades.](https://vuejs.org/v2/style-guide/#Prop-definitions-essential)

Ausência de validação 😞:

```vue{}[VBtn.vue]
<script>
export default {
  props: ['btnSize']
};
</script>
```

Validação ruim 🙄:

```vue{}[VBtn.vue]
<script>
export default {
  props: {
    btnSize:String
  }
};
</script>
```

Ótima Validação 😁:

```vue{}[VBtn.vue]
<script>
export default {
  props: {
    btnSize: {
      type: String,
      default: "md",
      validator: v => ["sm", "md", "lg", "xl"].includes(v),
    },
  },
};
</script>
```

Com poucos segundos qualquer desenvolvedor Vue sabe que a propriedade `btn-size` do tipo `string` têm o valor padrão definido como `'md'` pode receber os valores
`'sm', 'md', 'lg', 'xl'`. Percebe quantas informações você consegue transmitir apenas validando uma propriedade?!

## 3. Seletores profundos

Quando precisar alterar o estilo do componente filho porém deseja que essa alteração seja válida
apenas no escopo do componente pai, nesse caso você pode recorrer aos [seletores profundos](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors)

Esse truque é muito útil, principalmente para estilização de componentes de terceiros, onde normalmente não se têm muito
controle sobre a estilização;

Sem Sass, utilize '>>>'

```vue
<style scoped>
>>> .blog-item .item__title {
  background: green;
}
</style>
```

Com Sass, utilize '::v-dep'

```vue
<style lang="sass" scoped>
::v-dep .blog-item .item__title {
  background: green;
}
</style>
```

## 4. Ciclo de vida dos componentes

O mais comum de se ver quando o componente filho precisa "avisar" o componente pai que sua instância foi criada/montada/atualizada/destruída
é provavelmente emitir um evento apartir dos ganchos de ciclo de vida do componente filho.

Exemplo, algo parecido com isso, certo?

```vue{ }[blogItem.vue]
<script>
export default {
 '...',
  created() {
    this.$emit("isCreated");
  },
};
</script>
```

```vue{ }[Blog.vue]
<template>
  <BlogItem @isCreated="handlerBlogItems" />
</template>

<script>
export default {
 ...
  methods: {
    handlerBlogItems() {
      console.log("Foi criado");
    },
  },
};
</script>
```

Porém existe uma maneira mais elegante e simples de se chegar ao mesmo resultado, utilizando recursos que o próprio vue disponibiliza.

Para cada ciclo de vida do componente é emitido com sigo um evento, que pode ser capturado no componente pai através do `@hook:ciclo-de-vida`;

O mesmo exemplo acima, porém utilizando esse recurso:

```vue {}[Blog.vue]
<template>
  <BlogItems @hook:created="handlerBlogItems" />
</template>

<script>
export default {
 ...
  methods: {
    handlerBlogItems() {
      console.log("Foi criado");
    },
  },
};
</script>
```

## 5. Re-renderização de componentes

Em alguns casos é preciso força uma

Você poderia usar a diretiva `v-if` para fazer isso, certo?
Certo, mas existe uma maneira mais elegante e menos custosa para sua aplicação.

A maneira correta para se re-renderizar um componete é o vinculando ao atributo `key`, basicamento essa atributo funciona com um norte para Vue,
É a partir do `key` que o Vue sabe quando atualizar, remover ou se precisa criar um novo componente ou elemento.

Ou seja para re-renderizar um componente basta que alteremos o valor da sua chave, assim o Vue sabe que precisa descartar o componente com a chave antiga e criar
um componente com a nova chave.

```vue{}[Blog.vue]
<template>
  <div class="blog__container">
    <button @click="componentKey = 'dark-mode'">Re-renderizar</button>
    <BlogItem :key="componentKey" />
  </div>
</template>

<script>
import BlogItem from "./components/BlogItem";

export default {
  components: {
    BlogItem,
  },

  data: () => ({
    componentKey: "light-mode",
  }),
};
</script>
```

No exemplo acima veja que ao clicar no botão o valor vinculado a chave do componente `BlogItem` vai ser alterado, nesse momento o Vue sabe que precisa descartar esse componente
e criar um novo.
