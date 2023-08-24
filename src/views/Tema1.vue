<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Plan maestro
      
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-8.my-3
        p(data-aos="fade-down") Dimensionar las actividades y los recursos necesarios para poder sacar adelante los proyectos es un primer gran paso para las personas responsables de la producción: producir unidades rápido, de muy buena calidad, al menor costo y en el mejor de los ambientes es el gran objetivo de las empresas manufactureras.      
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 #[b Plan maestro de Producción (PMP)] es el nombre que se le da a una de las herramientas que se utiliza para calcular la producción, la elaboración o la manufactura de bienes o servicios, mediante el suministro de información que tenga que ver con cuáles, cuántos, cuándo, entre otros datos relacionados con el producto final. Permite determinar para cada producto la cantidad que debe ser fabricada en periodos de tiempo, año, mes, semana; también ayuda a definir factores como precio, tiempo, turnos, salarios, materias primas, insumos, entre otros.  
        p(data-aos="fade-down") Sobre el plan maestro, tenga presentes aspectos como:                   
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')     
 
    SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/1.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Ajustes 
            p.mb-0 Este plan debe ser ajustado en cada proceso de producción, teniendo en cuenta los recursos con que cuenta la fábrica y las necesidades de los clientes.   
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/2.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Productos y tiempos 
            p.mb-0 Define la cantidad de productos terminados y el período de tiempo de entrega, para relacionar estos datos con la solicitud de los pedidos y poder de alguna manera anticipar posibles errores en la coherencia que debe existir entre ventas y producción. 
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/3.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 #[i Master Production Schedule] 
            p.mb-0 El plan maestro de producción (PMP) también es conocido como MPS por sus siglas en inglés #[i Master Production Schedule], consiste en la planeación a nivel operativo, se encarga de revisar los pronósticos del mercado y los pedidos que se hayan producido   
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/4.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Requisitos claves 
            p.mb-0 Es necesario para esta función determinar los niveles de inventario y la capacidad instalada para que se puedan desarrollar los planes maestros de producción.
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/5.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Optimización de la producción 
            p.mb-0 Es una herramienta que permite optimizar la producción, especialmente de las empresas manufactureras. Con la tecnología, un plan bien elaborado ayuda a la planificación de cualquier fábrica, señalando qué, cuánto y en qué fecha fabricar determinadas cantidades de productos.   
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/6.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Características del plan maestro de producción (PMP) 
            p.mb-0 Estos planes maestros tienen unas características importantes, ya que son la estructura y el soporte del negocio de la fabricación, sirven para pronosticar la relación entre la demanda y su suministro, además de saber cuándo se necesita aumentar o disminuir la producción, manteniendo el compromiso con los clientes potenciales de la empresa.                                    
    p(data-aos="fade-down").mb-5 Las características principales que se manejan en un PMP son:
    .bg2.p-3.mb-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center       
        .col-lg-auto.mb-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')     

        .col
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              | Tiene un enfoque prospectivo, ya que está basado en el plan agregado de producción.
            li 
              i.lista-ul__vineta
              | Debe incluir la programación maestra de producción, el control de capacidades y la planificación a largo plazo.
            li 
              i.lista-ul__vineta
              | Es integral y holístico, maneja toda la información de las diferentes áreas de la empresa.
            li.mb-0 
              i.lista-ul__vineta
              | Se puede manejar en tiempo real o simulado, por la proyección que realiza permite determinar qué ocurriría si se produjeran ciertos cambios en las circunstancias de partida.         
    p(data-aos="fade-down").mb-5 Existen varios elementos importantes que caracterizan el PMP, a saber:

    TabsA.color-acento-botones.mb-5(data-aos="fade-left")
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Horizonte de tiempo de<br> planificación")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 El plan se convierte en una línea de tiempo o gráfica que permite visualizar en un periodo y de manera anticipada, cuál es el recorrido, desarrollo de los proyectos y planes de producción. No abarca períodos de tiempo muy largos, habitualmente toma solo 8 o 10 semanas. Para representarlo se puede utilizar un Diagrama de Gantt y se complementa con información de los pedidos, los presupuestos y los datos de los inventarios iniciales y finales.    
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Pronóstico de demanda")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Un PMP es muy importante porque permite estimar la cantidad de ventas de determinados productos en determinados períodos de tiempo y a su vez, relacionarlos con la capacidad de producción. Se puede trabajar con datos históricos o estudios de mercadeo, entre otros. 
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Pedidos de los clientes")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Una cosa es presupuestar o pronosticar las cantidades que se van a despachar y otra son los pedidos reales que van llegando, es importante saber distinguir ambas cifras para poder elaborar un buen PMP. Los pedidos reales son los que se tienen por escrito, consignados en un talonario, en una base de datos o en un #[i software] diseñado para ese propósito. 
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Cantidad de los lotes de<br> producción")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Estas cifras se determinan de acuerdo con las políticas de la organización que algunas veces se basan en la consecución de las materias primas, los sistemas de producción, los cortes de demanda, las restricciones de maquinarias o procesos, o la disponibilidad de mano de obra. 
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Capacidad instalada")
        .row.justify-content-center.align-items-center
          .col-12
            p.mb-0 Tiene que ver con el número de operarios, el horario de las jornadas de trabajo y la cantidad de tiempo que se gasta en la manufactura o elaboración de ese producto (estándar). Es imposible construir un PMP sin tener información de la capacidad instalada y de todos los elementos que la componen. Solo así se puede hacer una promesa de fecha de entrega.   

    h4.mb-4(data-aos="fade-down") Requerimientos para el plan maestro de producción 
    .row.justify-content-center.align-items-center.bg3.mb-5
      .col-lg-8(data-aos="fade-down") 
        p(data-aos="fade-down").mb-0.p-4 Se podría definir el término producción como el conjunto de actividades que agrega valor al proceso para obtener un bien o un servicio, por ejemplo, un rollo de tela solo no es mucho, si se le dibuja un molde, se corta, luego se estampan las piezas, después se confeccionan o ensamblan, posteriormente se lavan o tiñen, se pulen, se doblan, etc., a medida que se realiza cada actividad, esta le va agregando valor y la va enriqueciendo, hasta finalizar en una prenda de vestir.   
      .col-lg-4.p-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/9.png')                                                                 
    p(data-aos="fade-down") Entonces, planear la producción es lograr anticiparse a las situaciones posibles que se puedan presentar en el futuro, tomar decisiones frente a esas situaciones con la ayuda de la información hace parte de una muy buena planeación. Elementos, recursos, actividades, cálculos, mano de obra directa (MOD), documentos, hacen parte de toda esta cadena de abastecimiento o aprovisionamiento y son los elementos que utiliza el PMP para poder emitir datos.

    p(data-aos="fade-down").mb-5 Los requerimientos para elaborar un PMP, hacen referencia a:  

    .row.justify-content-center.align-items-center          
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Requerimientos para elaboración de un PMP
        .tabla-a.color-acento-contenido.mb-5
          table
            thead.bgh
              tr
                th.text-center.tbright Información
                th.text-center Elaboración

            tbody
              tr
                td.p-4 La información necesaria para realizar los cálculos que permiten identificar fechas y cantidades de entrega, para saber si cumplen con las expectativas de los clientes y si no para replantearlas y lograr niveles de satisfacción altos. 
                td.p-4 Para elaborar el PMP se requiere de información que se obtiene al formular y responder preguntas como: #[b ¿qué se hace?, ¿cuánto se pretende hacer?, ¿realmente cuánto piden?, ¿cada cuánto se hace?, ¿en qué cantidades se hace?, ¿cuántas personas lo hacen? y ¿en cuántos turnos se hace?] 

    p(data-aos="fade-down").mb-5 Preste atención a los pasos que deben seguirse en la elaboración del plan de producción, los cuales son: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg4.p-5.brad(data-aos="fade-left")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/10.svg', alt='pasos que deben seguirse en la elaboración del plan de producción')

          .tarjeta.color-secundario.p-3(x="20%" y="15%" numero="1")
            .h5 Estimación o pronóstico de la demanda de productos  
            p.mb-0 También denominado presupuesto de ventas, hace referencia a las cantidades que se esperan comercializar.                
          .tarjeta.color-secundario.p-3(x="20%" y="35%" numero="2")
            .h5 Plan maestro de producción – PMP  
            p.mb-0 Estimar cantidades, fechas, productos o referencias.        
          .tarjeta.color-secundario.p-3(x="59%" y="35%" numero="3")
            .h5 Número de unidades 
            p.mb-0 Número de unidades que se pueden producir de acuerdo con el número de personas incorporadas al proceso, minutos instalados u horario de trabajo y turnos, y tiempo requerido para la fabricación del producto (estándar). Para aumentarla, inicialmente lo recomendable es no contratar más personal, ni aumentar el horario de trabajo, sino revisar el método de hacer las cosas.   
          .tarjeta.color-secundario.p-3(x="20%" y="55%" numero="4")
            .h5 Planeación de requerimiento de materiales (MRP)  
            p.mb-0 Calcular los materiales e insumos necesarios para desarrollar los proyectos.            
          .tarjeta.color-secundario.p-3(x="20%" y="72.5%" numero="5")
            .h5 Origen de la orden de producción 
            p.mb-0 Del MRP se originan la orden de producción, el plan de materiales y de compras.        
          .tarjeta.color-secundario.p-3(x="25.5%" y="88%" numero="6")
            .h5 Control de plantas 
            p.mb-0 Hacer seguimiento para verificar el cumplimiento de los planes elaborados.

    h4(data-aos="fade-down").t1.mb-5 Resultados y beneficios del Plan Maestro de Producción   
  
    p(data-aos="fade-down") En cuanto a los resultados del plan maestro de producción, su elaboración correcta ayuda a interpretar, visualizar y establecer:

    .row
      .col-12
        LineaTiempoE.color-acento-contenido
          .row(titulo="1")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/11.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Volumen de producción a procesar
              p.mb-0 Ayuda a obtener de manera muy acertada las cantidades de productos a elaborar. 
          .row(titulo="2")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/12.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Fechas límites de entregas
              p.mb-0 Además de saber las cantidades, el PMP también ayuda a definir las fechas de entrega, de acuerdo con los recursos disponibles. 
          .row(titulo="3")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/13.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Información actual de los inventarios
              p.mb-0 Cuando se tiene la información anterior se pueden establecer las cantidades actuales que se tiene en el inventario disponible o las cantidades necesarias, esto ayuda a tomar decisiones acertadas en ese aspecto. 
          .row(titulo="4")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/14.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Capacidad disponible
              p.mb-0 Si se conoce las capacidades de producción (capacidad instalada) y las cantidades demandadas (pedidos) se pueden establecer fechas de entrega más acertadas o se pueden tomar acciones para aumentar la capacidad de producción. 
          .row(titulo="5")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/15.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Fórmula de capacidad disponible
              p.mb-0 Recuerde: #[b pedidos vs. capacidad instalada = capacidad disponible] 
          .row(titulo="6")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/16.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Mejor acompañamiento a la producción
              p.mb-0 Cuando se dimensionan los procesos de fabricación, las cantidades y las fechas y se comparan con los presupuestos de demandas y pedidos, se pueden visualizar fácilmente todas las actividades y se pueden tomar acciones de mejora más oportunas. 
          .row(titulo="7")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/17.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Mejor aprovechamiento de los recursos
              p.mb-0 A veces se requiere dar prioridades a ciertos pedidos, mediante un PMP se puede identificar fortalezas y/o restricciones, y de esa manera utilizar a favor esas condiciones. 
          .row(titulo="8")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/18.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Medición de los desempeños
              p.mb-0 De acuerdo con los despachos esperados y los reales se pueden medir eficiencias en el proceso. 
          .row(titulo="9")(data-aos="fade-left")
            .col-lg-2.mb-3.mb-lg-0
              img.img-t(src='@/assets/curso/temas/19.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Cálculo de costos
              p.mb-0 El PMP proporciona datos que ayudan a calcular la utilización de recursos, por ende, de costos y, finalmente sirve hasta para fijar precios de venta. 

</template>
<script>
export default {
  name: 'Tema1',
  components: {},
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
