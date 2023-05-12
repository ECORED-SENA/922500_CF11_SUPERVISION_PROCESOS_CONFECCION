<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Modelos gráficos de programación

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7.my-3
        p(data-aos="fade-down") Realizar gráficas de la planeación y del desarrollo de la producción es una herramienta o técnica muy funcional, debido a que permite visualizar el recorrido u hoja de ruta de los lotes programados, de acuerdo con las capacidades de fabricación. Ayuda a efectuar análisis más acertados y eso permite que haya una mejor toma de decisiones.

        p(data-aos="fade-down") Este método gráfico en el que se representa la trazabilidad de la producción ayuda entre otras cosas a encontrar las restricciones que se puedan presentar, y a identificar otros procesos que presentan sensibilización a las variables a que es sometido.
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='')               


    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg8.p-4.brad1(data-aos="flip-down") 
          .row.justify-content-center.align-items-star
            .col-auto
              img.img-a.img-t.beat(src='@/assets/curso/temas/39.svg', alt='')
            .col
              p(data-aos="fade-down").mb-0 Es importante considerar las condiciones de cada proceso productivo y qué elemento o elementos son más relevantes al construir las gráficas, por ejemplo, si es el personal, los horarios de trabajo, las unidades producidas reales, las unidades esperadas, las materias primas o inventarios disponibles, etc. Entre los más utilizados se encuentran el Diagrama de Gantt, de carga y la programación secuencial. 

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Diagrama de Gantt
    p(data-aos="fade-down") Es una herramienta gráfica creada por Henry Laurence Gantt a inicios del Siglo XX, en la que, entre otras cosas, se pueden representar algunas variables que hacen parte del seguimiento de procesos o procedimientos.

    p(data-aos="fade-down").mb-5 Algunas de esas variables son: 
    .bg11.p-3.mb-5(data-aos="flip-down")
      .row.justify-content-center.align-items-start       
        .col-auto
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.svg', alt='')     

        .col
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              p.mb-0 #[b Actividades o procesos:] acciones que contribuyen en la medida que van agregando valor para obtener un producto o un servicio.
            li 
              i.lista-ul__vineta
              p.mb-0 #[b Períodos o unidades de tiempo:] para hacerle seguimiento a un proceso es inevitable no mencionar el factor tiempo, se pueden considerar periodos de acuerdo con las necesidades del proceso (días, semanas, meses).
            li 
              i.lista-ul__vineta
              p.mb-0 #[b Responsable del proceso:] se puede aprovechar esta gráfica para registrar las personas o áreas encargadas de realizar cada una de las actividades.
            li 
              i.lista-ul__vineta
              p.mb-0 #[b Rangos o alcances:] es importante identificar desde dónde y hasta dónde se ejecutan las actividades, y también se pueden registrar en un Diagrama de Gantt.
            li 
              i.lista-ul__vineta
              p.mb-0 #[b Duración de cada actividad:] según las unidades de tiempo que se están considerando en el gráfico.     

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Ejemplo de aplicación del Gráfico de Gantt
                  p(data-aos="fade-down").mb-0 Analice el ejemplo que se muestra en el Anexo_1_ AplicacionDelGraficoDeGantt
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Anexo_1_AplicacionDelGraficoDeGantt.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
          .dot.my-4 
          
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Diagrama de Gantt
                  p(data-aos="fade-down").mb-0 Observe con atención el video “DiagramaDeGantt”, que se encuentra en el material complementario y detalle las generalidades para la construcción de un Diagrama de Gantt.
                .col-sm-auto
                  a.boton.color-primario(href="https://youtu.be/oDFbPhmgqLQ" target="_blank")
                    span Ver video
                    i.fab.fa-youtube 

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 4.2 Diagrama de carga
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.png', alt='')     

      .col-lg-7.my-3 
        p(data-aos="fade-down") Los diagramas de carga o gráficas de balanceos permiten aprovechar de manera coherente todos los recursos disponibles y/o los necesarios. Las líneas de producción deben ser equilibradas, balanceadas y optimizadas, teniendo en cuenta inventarios, personas, maquinaria y características de los productos a fabricar.

        p(data-aos="fade-down") Es necesario en las plantas de producción de manufactura de prendas de vestir y similares saber equilibrar y aprovechar los recursos con que se dispone, para eso se hace un ejercicio de balanceo de cargas, es decir, que todas las operaciones avancen a la misma velocidad

        p(data-aos="fade-down") Para eso es necesario: 

        .bg12.p-4
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              h5.mb-0 Elaborar un listado de operaciones o actividades que se necesitan realizar.
            li 
              i.lista-ul__vineta
              h5.mb-0 Al mismo tiempo colocar las máquinas donde se realizan las operaciones.
            li 
              i.lista-ul__vineta
              h5.mb-0 Listar las máquinas donde se hacen las operaciones.
            li 
              i.lista-ul__vineta
              h5.mb-0 Colocar los estándares o tiempos de ejecución de cada una de las actividades.
            li.mb-0 
              i.lista-ul__vineta
              h5.mb-0 Tener en cuenta con cuántas personas se dispone para la ejecución.                                                    
    p(data-aos="fade-down").mb-5 Después de esto se puede identificar cuál es la operación, la máquina, el tiempo o el recurso de personal que restringe o que determina la velocidad de producción, en muchas ocasiones hay que planear la planta de acuerdo con ese “cuello de botella”. 
    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido.mb-3(data-aos="zoom-in-left")
      h2 4.3 Programación secuencial  

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-7.my-3 
        p(data-aos="fade-down") Los procesos y las actividades que se realizan para ensamblar o manufacturar prendas de vestir se realizan habitualmente en máquinas operadas por personas; sin embargo, se han venido desarrollando avances significativos en esa relación hombre – máquina, y la tecnología se ha incorporado de manera trascendental en esa relación.

        p(data-aos="fade-down") Inicialmente las máquinas convencionales no poseían dispositivos muy sofisticados, con el paso de los años se fueron incorporando componentes electrónicos que permitían que, por medio de una orden computarizada o sistematizada, se integrara con otras acciones, así se fueron eliminando pequeñas acciones y movimientos. Se aprovechó mejor la tecnología y se pudieron planear y ejecutar varias acciones en secuencia de manera automática.

        p(data-aos="fade-down") Al respecto, tenga presente los siguientes aspectos: 
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='') 

    .tarjeta.tarjeta-verde.p-4(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Manejo independiente y secuencial
            p A las máquinas se les daba órdenes independientes, luego se le dieron órdenes secuenciales (encadenadas con otras), y luego una máquina podía interactuar con otra.
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/52.png', alt='')       
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Instruccionalidad
            p Se podría definir entonces que la programación en las máquinas es enviar instrucciones que permiten acciones que siguen a otras en secuencia, por ejemplo, un software de diseño emite instrucciones que permiten que funcione el diseño, y que dos o tres procesos posteriores, también se realicen.
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/53.png', alt='')     
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Desarrollo secuencial
            p Se le llama desarrollo secuencial porque una actividad está encadenada a la otra, de tal manera que el final de una actividad es el inicio de la otra.
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Estructura secuencial
            p La programación secuencial, también llamada estructura secuencial se refiere a la descripción detallada de esa serie de operaciones o actividades que funcionan secuencia tras secuencia, una a una, conservando un orden de ejecución lógico.
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/55.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Visualización
            p Como herramientas para su aprovechamiento se utilizan diagramas de flujo para graficar las operaciones y visualizar la secuencia en que se ven articulando y desarrollando.
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/56.png', alt='')                                                         
      
</template>

<script>
export default {
  name: 'Tema4',
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
