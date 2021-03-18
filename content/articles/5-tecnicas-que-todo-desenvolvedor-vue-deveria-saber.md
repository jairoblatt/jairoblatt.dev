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

## 2. Seletores profundos

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

## 3. Ciclo de vida dos componentes

O mais comum de se ver quando o componente filho precisa "avisar" o componente pai que sua instância foi criada/montada/atualizada/destruída
é provavelmente emitir um evento apartir dos ganchos de ciclo de vida do componente filho.

Exemplo, algo parecido com isso, certo?

```vue{ }[blogItems.vue]
<script>
export default {
 '...',
  created() {
    this.$emit("isCreated");
  },
};
</script>

<template>
  <BlogItems @isCreated="handlerBlogItems" />
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
