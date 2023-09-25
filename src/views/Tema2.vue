<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Elaboración del plan maestro de producción (PMP)

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-7.my-3
        p(data-aos="fade-down") Inicialmente, es importante que se conozca las variables que intervienen en la construcción del PMP; los productos, las referencias, los clientes, la capacidad instalada, la cantidad que se fabrica de cada lote, las políticas de programación de producción y la utilización del talento humano. Todo lo anterior, sirve para proponer un plan realista, ajustado a la cantidad de productos y clientes que se tiene.

        p(data-aos="fade-down") Sobre la elaboración del plan maestro de producción, es importante tener en cuenta:
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')     

    .row.justify-content-center.align-items-center          
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Aspectos clave del plan maestro de producción
        .tabla-a.color-acento-contenido.mb-5
          table
            thead.bgh
              tr
                th.text-center Borrador/bosquejo
                th.text-center Revisión/verificación
                th.text-center Recalcular/ajustes

            tbody
              tr
                td.p-4 Es importante hacer un borrador al principio en el que se plasme la relación producción vs. número de clientes, de acuerdo con su capacidad de demanda, por ejemplo, hay empresas donde muy pocos clientes acaparan más de la mitad del porcentaje de la producción, de acuerdo con eso la empresa planeará más recursos para esos clientes. 
                td.p-4 Hay que revisar proceso por proceso y verificar que los tiempos de fabricación asignados sean los correctos, de lo contrario el plan estará mal calculado. 
                td.p-4 Si por algún motivo la planta está sobrecargada y los plazos corren riesgo de no cumplirse, entonces se deberá recalcular y tomar acciones que permitan cumplir con las fechas (aumento de empleados o aumento de horarios) y adicionalmente revisar las prioridades.

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 2.1 Estudio de caso del plan maestro de producción 

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-7.my-3
        p(data-aos="fade-down") Afiance su compresión, siguiendo atentamente el siguiente caso:

        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Una empresa que trabaja de lunes a viernes con turnos de 8 horas tiene una capacidad de producción de 400 piezas semanales, su política de manejo de inventarios es mantener en stock 100 unidades como mínimo. Con antelación de 8 semanas ya conoce los pedidos y, con la entrega adecuada de insumos y materias primas, los proveedores entregan con muy buen tiempo de antelación sus pedidos. 
        p(data-aos="fade-down") En la semana 1 tiene un inventario de 100 unidades.          
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')  
        
    .tabla-a.color-acento-contenido.mb-5
      table.text-center
        thead.bgh
          tr
            td.text-bold.w-80 Periodo 
            th S1  
            th S2    
            th S3
            th S4 
            th S5 
            th S6 
            th S7 
            th S8 
            th S9 
            th S10 
            th S11 
            th S12 

        tbody
          tr
            td.text-bold.bgh1.w-80 Inventario inicial
            td 100                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td    
          tr
            td.text-bold.bgh1.w-80 Plan de producción
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td 
          tr
            td.text-bold.bgh1.w-80 Pedidos                                
            td 400                                
            td 450                               
            td 500                               
            td 400                            
            td 350                               
            td 600                               
            td 650                               
            td 600                               
            td 500                               
            td 400                               
            td 400                               
            td 350
          tr
            td.text-bold.bgh1.w-80 Inventario final
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td                                
            td 

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-8.my-3
        .bg5.brad1.p-4.mb-3(data-aos="flip-down")
          p.mb-0(data-aos="fade-down") Se puede observar que hay semanas en que los pedidos superan la capacidad de producción que es de 400 unidades. Es esta una de las razones que hizo que la organización realizara un plan maestro de producción (PMP).
        .bg5.brad1.p-4.mb-3(data-aos="flip-down")
          p.mb-0(data-aos="fade-down") Hay que considerar que el inventario inicial de un período es igual al inventario final del período anterior, a excepción del primer período que se toma; esa información la dieron en la bodega: 100 unidades.
        .bg5.brad1.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down") Teniendo los datos de los pedidos y de los inventarios, se calculará las necesidades de producción, período por período, así: 
          h5.text-center.mb-0(data-aos="fade-down") Inventario inicial (período actual) = Inventario final (periodo anterior)
        .bg5.brad1.p-4(data-aos="flip-down")
          p(data-aos="fade-down") Ahora, el inventario final, lo que queda al terminar el período, es igual al inventario inicial más las unidades producidas menos los pedidos.                              
          h5.text-center.mb-0(data-aos="fade-down") Inventario final = inventario inicial + unidades producidas - pedidos                             
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')                

    p(data-aos="fade-down").mb-5 Teniendo en cuenta que la capacidad de producción de esta empresa es de 400 unidades se continúa con el registro a partir de la fórmula de inventario final:

    .tabla-a.color-acento-contenido.mb-5
      table.text-center
        thead.bgh
          tr
            td.text-bold.w-80 Periodo 
            th S1  
            th S2    
            th S3
            th S4 
            th S5 
            th S6 
            th S7 
            th S8 
            th S9 
            th S10 
            th S11 
            th S12 

        tbody
          tr
            td.text-bold.bgh1.w-80 Inventario inicial
            td 100                                
            td 100                               
            td 50                               
            td -50                              
            td -50                               
            td 0                            
            td -200                             
            td -450                               
            td -650                               
            td -750                           
            td -750                               
            td -750   
          tr
            td.text-bold.bgh1.w-80 (+) Plan de producción
            td 400                               
            td 400                               
            td 400                               
            td 400                               
            td 400                               
            td 400                               
            td 400                               
            td 400                               
            td 400                               
            td 400                               
            td 400                               
            td 400
          tr
            td.text-bold.bgh1.w-80 (-) Pedidos                            
            td 400                                
            td 450                               
            td 500                               
            td 400                            
            td 350                               
            td 600                               
            td 650                               
            td 600                               
            td 500                               
            td 400                               
            td 400                               
            td 350
          tr
            td.text-bold.bgh1.w-80 (=) Inventario final
            td 100                               
            td 50                               
            td -50                               
            td -50                               
            td 0                               
            td -200                               
            td -450                               
            td -650                               
            td -750                               
            td -750                               
            td -750                               
            td -700  
    p(data-aos="fade-down") Se puede observar que al inicio se satisface la demanda, pero luego aparecen cifras negativas.
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-8.my-3
        .bg5.brad1.p-4.mb-3(data-aos="flip-down")
          p.mb-0(data-aos="fade-down") Esta es una de las justificaciones para elaborar un PMP, ayuda a identificar con antelación las dificultades que se pueden presentar e invita a realizar acciones de mejora. Para este caso, después de la semana 2 se comienza a ampliar los horarios y se consiguen más operarios de manera temporal para lograr satisfacer la demanda. Así se incrementa la producción semanal a 500 unidades desde la semana 2 hasta la semana 10, después en las semanas 11 y 12 las cifras que arroja el plan permiten regresar a la producción normal.                           
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')  
    p(data-aos="fade-down").mb-5 De acuerdo con eso el plan de producción queda de la siguiente manera:

    .tabla-a.color-acento-contenido.mb-5
      table.text-center
        thead.bgh
          tr
            td.text-bold.w-80 Periodo 
            th S1  
            th S2    
            th S3
            th S4 
            th S5 
            th S6 
            th S7 
            th S8 
            th S9 
            th S10 
            th S11 
            th S12 

        tbody
          tr
            td.text-bold.bgh1.w-80 Inventario inicial
            td 100                                
            td 100                               
            td 150                               
            td 150                               
            td 250                               
            td 400                               
            td 300                               
            td 150                               
            td 50                               
            td 50                               
            td 150                               
            td 150   
          tr
            td.text-bold.bgh1.w-80 (+) Plan de producción
            td 400                               
            td 500                               
            td 500                               
            td 500                               
            td 500                               
            td 500                               
            td 500                               
            td 500                               
            td 500                               
            td 500                               
            td 400                               
            td 400
          tr
            td.text-bold.bgh1.w-80 (-) Pedidos                                
            td 400                                
            td 450                               
            td 500                               
            td 400                            
            td 350                               
            td 600                               
            td 650                               
            td 600                               
            td 500                               
            td 400                               
            td 400                               
            td 350
          tr
            td.text-bold.bgh1.w-80 (=) Inventario final
            td 100                               
            td 150                               
            td 150                               
            td 250                               
            td 400                               
            td 300                               
            td 150                               
            td 50                               
            td 50                               
            td 150                               
            td 150                               
            td 200

    p(data-aos="fade-down") Si la demanda, de manera habitual sigue siendo superior a la capacidad de producción, se tendrá que aumentar la capacidad de producción, ya no de manera temporal, sino permanentemente.

    p(data-aos="fade-down").mb-5 En este punto se puede concluir que, para diseñar un plan maestro de producción (PMP), es importante contar con la siguiente información e identificar su procedencia:


    SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/24.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Inventario inicial                
            p.mb-0 Es importante saber cuántas unidades se tienen en inventario antes de iniciar para visualizar en la línea de horizonte, el número de unidades a producir y en qué fechas es posible tenerlas disponibles.   
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/25.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Inventario final        
            p.mb-0 Después de analizar un período y realizar los movimientos necesarios, como por ejemplo producir y despachar unidades, queda un inventario final, que al mismo tiempo es el inventario inicial del siguiente período. 
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/26.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Pronósticos de demanda o presupuestos de venta  
            p.mb-0 Son las cantidades por producto que se estima vender en determinado período, se calculan con datos históricos o estudios de mercadeo, entre otros.  
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/27.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Pedidos  
            p.mb-0 Después de haber negociado con los clientes se establecen las cifras o cantidades de los pedidos en firme, es ahí donde el PMP toma su importancia, ya que ayuda a definir las fechas en que se pueden entregar los pedidos, si esas fechas no son satisfactorias se toman acciones de mejora. 
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/28.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Cantidad de unidades por lote  
            p.mb-0 En las organizaciones de acuerdo con los insumos y las materias primas que utilizan, la manera y las fechas en que los reciben determinan sus niveles de inventario. También se tiene en cuenta los productos de mayor demanda para determinar políticas en la cantidad de unidades que van a manejar por lote. 
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/29.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Períodos a constatar o visualizar  
            p.mb-0 Cuando se van a realizar cálculos de producción mediante herramientas como el PMP es importante definir cuál es el rango de tiempo que se va a atender, para esta metodología se tienen rangos cortos de tiempo, como semanas, quincenas o meses. 
      .tarjeta.tarjeta-avatar.h-100
        img.img-w(src='@/assets/curso/temas/30.svg' alt='AvatarTop')

        .tarjeta.bg1.ts.h-100
          .p-4
            h4 Capacidad instalada  
            p No es posible hacer un PMP sin datos de la capacidad de producción, para eso se necesitan datos del número de colaboradores, las horas de trabajo y el tiempo estándar de fabricación de cada producto. 

            h5.mb-0 Capacidad instalada (C.I.) = (Número de operarios * horas de trabajo) / estándar de la prenda   

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Tipos o métodos de producción  

    p(data-aos="fade-down") Las maneras o metodologías de fabricación de productos son determinantes a la hora de realizar un plan maestro de producción PMP o MRP, los métodos determinan las cantidades por lote y el manejo que se le da a los materiales y los inventarios.                    
    p(data-aos="fade-down").mb-5 Los tipos de proceso productivo en una empresa son los siguientes:

    .row.justify-content-center       
      .col-lg-6.my-2.d-none.d-lg-block  
        .bg6.brad1.h-100             
          .row.justify-content-center.align-items-center
            .col-lg-4.p-0
              img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/31.png')     
            .col-lg-8(data-aos="fade-down") 
              .p-4
                h5(data-aos="fade-down") Producción por lotes
                p(data-aos="fade-down").mb-0 Proceso que fabrica continuamente una cantidad pequeña de productos con características similares. Se identifican por medio de referencias, códigos o figuras que diferencian cada lote con respecto a otro.  
      .col-lg-6.my-2.d-none.d-lg-block  
        .bg6.brad1.h-100
          .row.justify-content-center.align-items-center
            .col-lg-4.p-0
              img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/32.png')     
            .col-lg-8(data-aos="fade-down") 
              .p-4
                h5(data-aos="fade-down") Producción por trabajo o bajo pedido 
                p(data-aos="fade-down").mb-0 Proceso que fabrica solo un producto o referencia a la vez, por lo que cada producto tiene especificaciones diferentes. Se realiza toda la secuencia para ese pedido: asentar documento, órdenes de compra y de producción, fabricación y terminación.          
                         
       
      .col-lg-6.my-2.d-none.d-lg-block  
        .bg6.brad1.h-100             
          .row.justify-content-center.align-items-center
            .col-lg-4.p-0
              img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/33.png')     
            .col-lg-8(data-aos="fade-down") 
              .p-4.j2
                h5(data-aos="fade-down") Producción en masa
                p(data-aos="fade-down").mb-0 Es la manera que se utiliza para fabricar grandes cantidades, usualmente, del mismo producto, se acostumbra un gran nivel de automatización en las metodologías y en los equipos que se emplean.
      .col-lg-6.my-2.d-none.d-lg-block  
        .bg6.brad1.h-100
          .row.justify-content-center.align-items-center
            .col-lg-4.p-0
              img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/34.png')     
            .col-lg-8(data-aos="fade-down") 
              .p-4
                h5(data-aos="fade-down") Producción continua o de flujo continuo
                p(data-aos="fade-down").mb-0 Se caracteriza por la frecuencia, la fluidez y la repetición de sus operaciones, la estandarización es un elemento importante en este tipo de producción. Se manufacturan muchas cantidades de unidades. Debe cumplir condiciones de productos, materias primas y maquinarias que permitan trabajar 24/7 generalmente.           
    .row.justify-content-center        
      .col-md-6.col-sm-12.my-2.d-block.d-lg-none
        img(data-aos="zoom-in")(src='@/assets/curso/temas/31_1.png')
        .bg6.p-4.long1     
          h5(data-aos="fade-down") Producción por lotes
          p(data-aos="fade-down").mb-0 Proceso que fabrica continuamente una cantidad pequeña de productos con características similares. Se identifican por medio de referencias, códigos o figuras que diferencian cada lote con respecto a otro.  
      .col-md-6.col-sm-12.my-2.d-block.d-lg-none
        img(data-aos="zoom-in")(src='@/assets/curso/temas/32_1.png')
        .bg6.p-4.long1     
          h5(data-aos="fade-down") Producción por trabajo o bajo pedido 
          p(data-aos="fade-down").mb-0 Proceso que fabrica solo un producto o referencia a la vez, por lo que cada producto tiene especificaciones diferentes. Se realiza toda la secuencia para ese pedido: asentar documento, órdenes de compra y de producción, fabricación y terminación.   
      .col-md-6.col-sm-12.my-2.d-block.d-lg-none
        img(data-aos="zoom-in")(src='@/assets/curso/temas/33_1.png')
        .bg6.p-4.long1     
          h5(data-aos="fade-down") Producción en masa
          p(data-aos="fade-down").mb-0 Es la manera que se utiliza para fabricar grandes cantidades, usualmente, del mismo producto, se acostumbra un gran nivel de automatización en las metodologías y en los equipos que se emplean.
      .col-md-6.col-sm-12.my-2.d-block.d-lg-none
        img(data-aos="zoom-in")(src='@/assets/curso/temas/34_1.png')
        .bg6.p-4.long1     
          h5(data-aos="fade-down") Producción continua o de flujo continuo
          p(data-aos="fade-down").mb-0 Se caracteriza por la frecuencia, la fluidez y la repetición de sus operaciones, la estandarización es un elemento importante en este tipo de producción. Se manufacturan muchas cantidades de unidades. Debe cumplir condiciones de productos, materias primas y maquinarias que permitan trabajar 24/7 generalmente.                  

</template>

<script>
export default {
  name: 'Tema2',
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
