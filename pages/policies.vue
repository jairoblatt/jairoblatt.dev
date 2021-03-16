<template>
  <div class="policies__container">
    <!-- Privacy Policy Start -->
    <h1>Política de privacidade para jairoblatt.dev</h1>
    <p>
      Todas as suas informações pessoais recolhidas, serão usadas para o ajudar
      a tornar a sua visita nesse site o mais produtiva e agradável possível.
    </p>
    <br />
    <p>
      A garantia da confidencialidade dos dados pessoais dos usuários desse site
      é importante para o
      <span class="policies__container-text--highlight">jairoblatt.dev.</span>
    </p>
    <br />
    <p>
      Todas as informações pessoais que usem o
      <span class="policies__container-text--highlight">jairoblatt.dev </span>
      serão tratadas em concordância com a Lei Nº 13.709, de 14 de Agosto de
      2018.
    </p>
    <br />
    <p>
      A informação pessoal recolhida pode incluir o seu nome, e-mail, número de
      telefone e/ou telemóvel, morada, data de nascimento e/ou outros.
    </p>
    <br />
    <p>
      O uso do
      <span class="policies__container-text--highlight">jairoblatt.dev </span>
      pressupõe a aceitação deste acordo de privacidade. O site jairoblatt.dev
      reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo,
      recomendamos que consulte a nossa política de privacidade com regularidade
      de forma a estar sempre atualizado.
    </p>
    <!-- Privacy Policy End -->
    <!-- The Ads Start -->
    <h1 class="pt-5">Os anúncios</h1>
    <p>
      Tal como outros websites, coletamos e utilizamos informação contida nos
      anúncios. A informação contida nos anúncios, inclui o seu endereço IP
      (Internet Protocol), o seu ISP (Internet Service Provider), o browser que
      utilizou ao visitar o nosso website (como o Chrome, Internet Explorer ou o
      Firefox), o tempo da sua visita e que páginas visitou dentro do nosso
      website.
    </p>
    <!-- The Ads End -->
    <!-- Cookie DoubleClick Dart Start -->
    <h1 class="pt-5">Cookie DoubleClick Dart</h1>
    <p>
      O Google, como fornecedor de terceiros, utiliza cookies para exibir
      anúncios no nosso website;
    </p>
    <br />
    <p>
      Com o cookie DART, o Google pode exibir anúncios com base nas visitas que
      o leitor fez a outros websites na Internet;
    </p>
    <br />
    <p>
      Os usuários podem desativar o cookie DART visitando a Política de
      privacidade da rede de conteúdo e dos anúncios do Google.
    </p>
    <!-- Cookie DoubleClick Dart End -->

    <!-- The cookies and web beacons Start -->
    <h1 class="pt-5">Os Cookies e Web Beacons</h1>
    <p>
      Utilizamos cookies para armazenar informação, tais como as suas
      preferências pessoas quando visita o nosso website. Como para por exemplo
      guardar suas preferências de tema quando retornar ao site.
    </p>
    <br />
    <p>
      O Aplicativo usa o Google Analytics, um serviço de análise prestado pelo
      Google, Inc. ("Google"). O Google Analytics utiliza cookies para nos
      ajudar a analisar como os Usuários utilizam o Aplicativo. As informações
      coletadas no cookie sobre o modo como você utiliza o Aplicativo (inclusive
      seu endereço IP) serão transmitidas ao Google e armazenadas por ele em
      servidores nos Estados Unidos. O Google utilizará essas informações com o
      objetivo de avaliar o modo como você utiliza o Aplicativo, criar
      relatórios sobre as atividades no Aplicativo e prestar outros serviços
      relativos às atividades no Aplicativo e ao uso da Internet. O Google
      também pode transferir essas informações a terceiros quando exigido por
      lei ou para que tais terceiros processem as informações em nome e por
      conta do Google. O Google não associará seu endereço IP a qualquer outro
      dado. A utilização pelo Google desses dados é regida pelos Termos de Uso
      do Google Analytics e pela
      <a class="policies__container-text--highlight">
        Política de Privacidade do Google.</a
      >
    </p>
    <br />
    <p>
      Em adição também utilizamos publicidade de terceiros no nosso website para
      suportar os custos de manutenção. Alguns destes publicitários, poderão
      utilizar tecnologias como os cookies e/ou web beacons quando publicitam no
      nosso website, o que fará com que esses publicitários (como o Google
      através do Google AdSense) também recebam a sua informação pessoal, como o
      endereço IP, o seu ISP, o seu browser, etc. Esta função é geralmente
      utilizada para geotargeting (mostrar publicidade de São Paulo apenas aos
      leitores oriundos de São Paulo por ex.) ou apresentar publicidade
      direcionada a um tipo de utilizador (como mostrar publicidade de
      restaurante a um utilizador que visita sites de culinária regularmente,
      por ex.).
    </p>
    <br />
    <p>
      Você detém o poder de desligar os seus cookies, nas opções do seu browser.
      No entanto, isso poderá alterar a forma como interage com o nosso website,
      ou outros websites. Isso poderá afetar ou não permitir que faça logins em
      sites pela internet.
    </p>
    <!-- The cookies and web beacons End -->

    <!-- third-party sites Start -->
    <h1 class="pt-5">Os Cookies e Web Beacons</h1>
    <p>
      Utilizamos cookies para armazenar informação, tais como as suas
      preferências pessoas quando visita o nosso website. Como para por exemplo
      guardar suas preferências de tema quando retornar ao site.
    </p>
    <br />
    <p>
      O
      <span class="policies__container-text--highlight">jairoblatt.dev</span>
      possui conexões para outros sites, que podem conter informações úteis. A
      nossa política de privacidade não é aplicada a sites de terceiros, pelo
      que, caso visite outro site a partir do nosso deverá ler a politica de
      privacidade do mesmo. Política de Privacidade do Google.
    </p>
    <br />
    <p>
      Não nos responsabilizamos pela política de privacidade ou conteúdo
      presente nesses mesmos sites.
    </p>

    <!-- third-party sites End -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  head() {
    return {
      titleTemplate: '%s - ' + this.$t('theFooter.privacyPolicy'),
    };
  },
});
</script>

<style lang="postcss" scoped>
.policies__container {
  @apply 2xl:px-52 xl:px-12 lg:px-28 md:px-16 sm:px-10 my-12 px-5 text-dark-surface;
}

.policies__container h1 {
  @apply font-bold text-3xl my-5;
}

.policies__container-text--highlight {
  @apply text-nuxt-lightgreen font-medium cursor-pointer transition-colors;
}

.policies__container-text--highlight:hover {
  @apply text-nuxt-green transition-colors;
}
</style>
