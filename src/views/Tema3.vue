<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Plan de requerimiento de materiales (MRP)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')               
      .col-lg-7.my-3
        p(data-aos="fade-down") Así como el #[i Material Requirements Planning] - MRP ayuda a determinar fechas de entrega de pedidos de acuerdo con ciertas variables, el plan de requerimiento de materiales (MRP) se utiliza para ayudar a lograr que el movimiento de materiales e insumos lleguen en las cantidades correctas y en el tiempo apropiado.

        p(data-aos="fade-down") La información que traen las fichas técnicas en relación con los materiales, insumos y características de producción son el insumo principal para que en compañía de una orden de producción (OP) se establezcan las cantidades de los recursos necesarios para la elaboración de un lote, por ejemplo, de prendas de vestir.   
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          h5(data-aos="fade-down") Sistema de producción
          p(data-aos="fade-down").mb-0 Un sistema de producción es un conjunto de actividades y/o personas que interactúan de manera organizada, buscando los mismos objetivos y para eso se debe tener una excelente comunicación y avanzar a la misma velocidad.        

    p(data-aos="fade-down").mb-5 A continuación, se muestra el Sistema MRP, en la línea superior los elementos que se requieren en las entradas del proceso:
               
    .bg2.p-3.mb-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center       
        .col-lg-auto.mb-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='')     

        .col
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              | El listado de materiales.
            li 
              i.lista-ul__vineta
              | El PMP y el registro de inventarios.
            li 
              i.lista-ul__vineta
              | Luego, en la línea media se tiene el sistema MRP que procesa esa información y emite como salida del proceso información de varios niveles de datos de materiales, de insumos y de movimiento de inventarios.   

    p(data-aos="fade-down").mb-5 Observe con atención la siguiente figura y detalle el sistema MRP:

    .row.justify-content-center.align-items-center          
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Sistema MRP 
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='Esquema que expone el funcionamiento y organización del sistema MRP o plan de requerimiento de materiales, así: Fase de entradas, relacionada directamente con el plan maestro de listas de materiales, el programa maestro de producción y los registros de inventarios. Fase de proceso, que implementa directamente el sistema MRP. Fase de salidas, relacionada directamente con los informes primarios, informes secundarios y los datos de transacciones de inventario.') 
        figcaption Nota. Adaptado de Suarez, (s.f.)    

    p(data-aos="fade-down").my-5 De este modo, este sistema debe velar porque los costos sean los correctos y no excederse en gastos. Debido a un manejo inadecuado de la manera como se relacionan los materiales, las personas, los procesos y los clientes; las empresas pueden tener sobrecostos en sus operaciones, lo que significa: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left")
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              p.mb-0 #[b Tener que aumentar el precio de venta:] en un mundo competitivo y globalizado una organización no debe dejar que fluctúe sin control el precio de venta.

            li 
              i.lista-ul__vineta
              p.mb-0 #[b Disminuir la rentabilidad:] el recurso de las utilidades es el que amortigua financieramente a la empresa en las épocas difíciles, si se reduce la organización queda expuesta y vulnerable ante cualquier adversidad, y eso no es recomendable, no se puede correr ese riesgo.

            li.mb-0 
              i.lista-ul__vineta
              p.mb-0 #[b No despachar a tiempo o despachar incompleto:] definitivamente los clientes son la parte más importante de las organizaciones, no se les puede atender fallando. Hay que hacer todos los ejercicios disponibles para siempre cumplir con la promesa de valor, a veces no es fácil tomar un pedido para que se malogre o se entregue con dificultades. 
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')  

    .row.justify-content-center.align-items-center.bg3.mb-5
      .col-lg-4.p-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/38.png')     
      .col-lg-8(data-aos="fade-down") 
        .p-4 
          h5(data-aos="fade-down") Sistema MRP
          p(data-aos="fade-down").mb-0 El MRP es una herramienta que ayuda a que la información esté en el momento y en el departamento indicado de forma que se aprovechan mejor los recursos y así se satisface mejor al cliente. Se podría decir que es un sistema de planificación de la producción que, en términos generales, ayuda a planear y controlar la cadena de suministros. Si esta tarea se realiza adecuadamente los productos y servicios llegarán al cliente cumpliendo especificaciones de tiempo y calidad, logrando un nivel de satisfacción alto y, por ende, se logrará el éxito en la gestión administrativa y de producción. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Historia de los sistemas MRP                
                  p(data-aos="fade-down").mb-0 Realice un recorrido por la historia de los sistemas del plan de requerimiento de materiales, a través del siguiente video “Historia de los sistemas MRP”, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-primario(href="https://youtu.be/NPu8lvBmjP4" target="_blank")
                    span Ver video
                    i.fab.fa-youtube           
                     
    h4(data-aos="fade-down").t1 Funciones del plan de requerimiento de materiales (MRP)           

    p(data-aos="fade-down").mb-3 Son funciones del plan de requerimiento de materiales las siguientes:

    .row.justify-content-center.text-center  
      .col-lg-3.my-3(data-aos="fade-left")
        .bg7.p-3.h-100.brad1.j.py-4
          p(data-aos="fade-down").mb-0 Coordina las actividades necesarias para desarrollar el proyecto, es decir, las comunica y las relaciona.   
      .col-lg-3.my-3(data-aos="fade-left")
        .bg7.p-3.h-100.brad1.j.py-4
          p(data-aos="fade-down").mb-0 Ayuda a establecer las cantidades de materiales e insumos necesarios.
      .col-lg-3.my-3(data-aos="fade-right")
        .bg7.p-3.h-100.brad1.j.py-4
          p(data-aos="fade-down").mb-0 Con la información de los tiempos de fabricación, ayuda a determinar la necesidad de mano de obra directa.   
      .col-lg-3.my-3(data-aos="fade-right")
        .bg7.p-3.h-100.brad1.j.py-4
          p(data-aos="fade-down").mb-0 Con la ayuda de documentos como fichas técnicas, controla los inventarios iniciales y finales.  
      .col-lg-3.my-3(data-aos="fade-left")
        .bg7.p-3.h-100.brad1.j.py-5
          p(data-aos="fade-down").mb-0 Contribuye a definir fechas de entrega.   
      .col-lg-3.my-3(data-aos="fade-left")
        .bg7.p-3.h-100.brad1.j.py-5
          p(data-aos="fade-down").mb-0 Ayuda a que la eficiencia aumente.
      .col-lg-3.my-3(data-aos="fade-right")
        .bg7.p-3.h-100.brad1.j.py-5
          p(data-aos="fade-down").mb-0 La gestión de los pedidos mejora.   
      .col-lg-3.my-3(data-aos="fade-right")
        .bg7.p-3.h-100.brad1.j.py-5
          p(data-aos="fade-down").mb-0 La información siempre estará actualizada.

    p(data-aos="fade-down").my-5 En la actualidad la cuarta revolución industrial, la inteligencia artificial y el Internet de las cosas, hacen parte de todas las actividades, así la planificación de los recursos empresariales no es ajena a esto, y por eso se han desarrollado gran cantidad de software que satisfacen la necesidad de un MRP; claro está que en la herramienta Excel también se pueden diseñar e implementar MRP.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg8.p-4.brad1(data-aos="flip-down") 
          .row.justify-content-center.align-items-star
            .col-lg-auto.mb-3
              img.img-a.img-t.beat(src='@/assets/curso/temas/39.svg', alt='')
            .col
              p(data-aos="fade-down").mb-0 De esta manera, todos los procedimientos que antes se realizaban manualmente para planificar los recursos y las actividades necesarias para desarrollar un proyecto, ahora se pueden hacer por intermedio de programas informáticos, a los cuales hay que ingresar la información necesaria para que funcione, como datos de proveedores y clientes, tiempos de fabricación, costos, materias primas, consumos y fechas proyectadas; de esta forma el programa relaciona esa información para que a su vez emita informes que permiten tomar las mejores decisiones.

    p(data-aos="fade-down").mb-5 Conociendo la fundamentación de lo que es un MRP, es posible construir uno, siguiendo los siguientes pasos:
    .bg10
      .pt-3
      h5(data-aos="fade-down").mb-3 Pasos para la construcción del RMP 

      .row.justify-content-center.text-center 
        .col-lg.col-md-6.mb-3
          .tarjeta.tarjeta-avatar.h-100
            img.img-w1(src='@/assets/curso/temas/41.svg' alt='AvatarTop')
            .tarjeta.bg9.ts.h-100
              .p-4
                h4 Productos y materiales           
                p.mb-0 Conocer los productos y los materiales que lo componen, igual los proveedores y los consumos por unidad, esta última información viene en la ficha técnica. 
        .col-lg.col-md-6.mb-3
          .tarjeta.tarjeta-avatar.h-100
            img.img-w1(src='@/assets/curso/temas/42.svg' alt='AvatarTop')
            .tarjeta.bg9.ts.h-100
              .p-4
                h4 Plan maestro           
                p.mb-0 Se requiere que ya esté elaborado el plan maestro de producción (PMP), de lo contrario construir uno. Con la información obtenida de este se tiene en cuenta la cantidad de unidades y en qué tiempo se puede comenzar. 
        .col-lg.col-md-6.mb-3
          .tarjeta.tarjeta-avatar.h-100
            img.img-w1(src='@/assets/curso/temas/43.svg' alt='AvatarTop')
            .tarjeta.bg9.ts.h-100
              .p-4
                h4 Actualización de registros           
                p.mb-0 Actualizar los registros de inventarios de todos los insumos y materiales de la compañía, al inicio, en proceso y al finalizar. 
        .col-lg.col-md-6.mb-3
          .tarjeta.tarjeta-avatar.h-100
            img.img-w1(src='@/assets/curso/temas/44.svg' alt='AvatarTop')
            .tarjeta.bg9.ts.h-100
              .p-4
                h4 Información completa           
                p.mb-0 Ingresar todos los datos anteriores en un software diseñado para poder consultar todos los movimientos, estados y cálculos de medidas. 
        .col-lg.col-md-6.mb-3
          .tarjeta.tarjeta-avatar.h-100
            img.img-w1(src='@/assets/curso/temas/45.svg' alt='AvatarTop')
            .tarjeta.bg9.ts.h-100
              .p-4
                h4 Necesidades           
                p.mb-0 Determinar las necesidades de recursos necesarios para la fabricación del lote o proyecto.         
</template>

<script>
export default {
  name: 'Tema3',
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
