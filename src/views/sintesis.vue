<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p(data-aos="fade-down").mb-5 Aquí finaliza el estudio de las temáticas de este componente formativo. En este punto, haga un análisis de la estructura que se muestra enseguida. Además, haga un repaso de los temas que considere necesarios. #[b ¡Adelante!]

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(data-aos="zoom-in")(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de este componente formativo que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave, estudiados. Tema principal: Plan maestro de producción; este abarca temas integradores: plan maestro, elaboración del plan maestro, plan de requerimiento de materiales, modelos gráficos de programación, plan agregado de producción, vinculación de software de producción y planeación de la producción")
      .col-lg-auto.mb-3
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
