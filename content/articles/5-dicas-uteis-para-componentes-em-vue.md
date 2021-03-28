---
title: '5 dicas para desenvolver bons componentes em Vue'
description: 'Nesse pequeno artigo listarei 5 dicas e truques que acredito serem bastante úteis para o desenvolvimento de bons componentes com Vue 2.'
imgUrl: '5-tecnicas-que-todo-desenvolvedor.png'
date: '28 de março, 2021'
tags:
  - Vue 2
  - Componentes
  - Dicas
  - Técnicas
---

## 1. Utilize componentes funcionais

Componentes funcionais são componentes que não necessitam de estado, são conhecidos como "stateless", normalmente possuem apenas a função de leitura de propriedades, transforma-los em componentes funcionais é a forma de evitar sua exposição a sobrecarga de reatividade desnecessária.

Por não serem efetivamente reativos isso os torna mais leve que componentes "comuns", mas não se engane, pois eles ainda sofrem mutações baseadas nas propriedades renderizadas.

É simples definir um componente funcional no Vue, basta ativar a opção `functional: true`.

Componente comum:

```vue{}[BlogItem.vue]
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

Componente funcional:

```vue{}[BlogItem.vue]
<template functional>
  <div class="blog-item">
    <div class="item__title">{{ props.title }}</div>
  </div>
</template>
```

Leia mais:

- https://vue-loader.vuejs.org/guide/functional.html
- https://www.digitalocean.com/community/tutorials/vuejs-functional-components

## 2. Valide suas propriedades

Quando trabalhamos em grandes projetos se torna muito difícil se lembrar como exatamente aquela propriedade deveria se comportar e quais são exatamente os tipos de dados que deveria receber, isso
pode te trazer muita dor de cabeça e um gasto desnecessário de tempo tentando descobrir.

Temos uma solução bem simples para isso, além de servir como documentação para seu componente a validação de
propriedade também te ajuda a identificar e previnir possíveis erros. É uma boa prática e deveria se tornar algo comum no seu desenvolvimento com Vue.

Alguns exemplos de validação:

Ausência de validação 😞:

```vue{}[VBtn.vue]
<script>
export default {
  props: ['btnSize']
};
</script>
```

A única informações que temos é que o componente recebe uma propriedade com nome de `btn-size`.

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

Bom, agora sabemos que a propriedade `btn-size` é do tipo `string`, melhorou um pouco.

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

Com poucos segundos qualquer desenvolvedor Vue sabe que a propriedade `btn-size` do tipo `string` têm o valor padrão definido como `'md'` podendo receber os valores
`'sm', 'md', 'lg', 'xl'`. Percebe quantas informações você consegue transmitir apenas validando uma propriedade da forma correta?!

## 3. Seletores profundos

Quando precisar alterar o estilo do componente filho porém deseja que essa alteração seja válida
apenas no escopo do componente pai, nesse caso você pode recorrer aos [seletores profundos](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors).

Uma forma muito útil, principalmente para comoponentes de terceios, onde normalmente não se têm muito controle sobre sua estilização.

Sem Sass, utilize `>>>`

```vue
<style scoped>
>>> .blog-item .item__title {
  background: green;
}
</style>
```

Com Sass, utilize `::v-dep`

```vue
<style lang="sass" scoped>
::v-dep .blog-item .item__title {
  background: green;
}
</style>
```

## 4. Aproveite os eventos dos ciclos de vida dos componentes

Algo comum de se ver por aí, quando o componente precisa avisar o componente pai que sua instância foi criada/montada/atualizada/destruída
É, provavelmente, emitir um evento manualmente apartir dos ganchos de ciclo de vida do componente filho.

Algo parecido com isso, certo?

```vue{ }[blogItem.vue]
<script>
export default {
  created() {
    this.$emit("isCreated");
  },
};
</script>
```

```vue{ }[Blog.vue]
<template>
  <BlogItem @is-created="blogItemsHandler" />
</template>

<script>
export default {
  methods: {
    blogItemsHandler() {
      console.log("Foi criado");
    },
  },
};
</script>
```

Porém, existe uma maneira mais elegante e simples para isso,
para cada ciclo de vida do componente é emitido com sigo automaticamente um evento, que pode ser capturado no componente pai através do `@hook:`

O exemplo acima utilizando esse recurso:

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

## 5. Re-renderização da forma correta

Existe algumas maneiras para se re-renderizar um componente em Vue, por exemplo, você poderia usar a diretiva `v-if`, certo?
É...Certo, mas existe uma maneira mais adequada e menos custosa.

A maneira correta para se re-renderizar um componete é o vinculando ao atributo `key`, basicamento essa atributo funciona com um bússola para Vue,
É a partir do `key` que o Vue sabe quando atualizar, remover ou se precisa criar um novo componente ou elemento.

Ou seja, para re-renderizar um componente basta que alteremos o valor da sua chave, assim o Vue sabe que precisa descartar o componente com a chave antiga e criar
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

Leia mais:

- https://michaelnthiessen.com/understanding-the-key-attribute
- https://vuejs.org/v2/guide/conditional.html#Controlling-Reusable-Elements-with-key
