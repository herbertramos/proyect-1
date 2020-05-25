//Crear una función que calcule el número de contagiados en la primera semana de cuarentena
let covi = [
    {
      total: [1+2+10+30+40+50+100],
      semana: 1,
    },
    {
      total: [120+145+100+120+341+230+230],
      semana: 2,
    },
    {
      total: [300+180+120+450+20+350+230],
      semana: 3,
    },
    {
      total: [235+456+134+564+234+123+563],
      semana: 4
    },{
      total: [340+240+230+235+456+134+564],
      semana: 5
    },
    {
      total: [234+123+562+340+240+300+300],
      semana: 6
    },
    {
      total: [400+700+100+210+120+478+453],
      semana: 7
      },
      {
      total: [111+129+930+230+333+434+567],
      semana: 8
      },
      {
      total: [234+134+123+454+132+343+345],
      semana: 9
      },
      {
      total: [865+233+456+785+134+657+214],
      semana: 10
      },];
      let totalSemanal = covi.filter(function (contagiados) {
      return contagiados.semana == 5;
      });
      console.log("el peru avanza",totalSemanal)

//Crear una función que obtenga el promedio de contagiados por día
let cov = [
    1,2,10,30,40,50,100,120,145,100,
    120,341,230,230,300,180,120,450,120,350,
    230,235,456,134,564,234,123,563,340,240,
    230,235,456,134,564,234,123,562,340,240,
    300,300,400,700,100,210,120,478,453,111,
    129,930,230,333,434,567,234,134,123,454,
    132,343,345,865,233,456,785,134,657,214
    ];
let promedio = 0.1 ;
let poblacion = 100;
let porcentaje = cov.map((enfermos) => enfermos * promedio / poblacion);
console.log("porcentaje",porcentaje);

//Crear una función que devuelva el número del día en que hubieron la mayor cantidad de contagiados

let cov = [
    1,2,10,30,40,50,100,120,145,100,
    120,341,230,230,300,180,120,450,120,350,
    230,235,456,134,564,234,123,563,340,240,
    230,235,456,134,564,234,123,562,340,240,
    300,300,400,700,100,210,120,478,453,111,
    129,930,230,333,434,567,234,134,123,454,
    132,343,345,865,233,456,785,134,657,214
    ];
    console.log(Math.max.apply(null, cov));

//Calcular el total de contagiados durante toda la cuarentena
cov = [
    1,2,10,30,40,50,100,120,145,100,
    120,341,230,230,300,180,120,450,120,350,
    230,235,456,134,564,234,123,563,340,240,
    230,235,456,134,564,234,123,562,340,240,
    300,300,400,700,100,210,120,478,453,111,
    129,930,230,333,434,567,234,134,123,454,
    132,343,345,865,233,456,785,134,657,214
    ]

    let total = cov.reduce((enfermos, acumular) => acumular + enfermos);
    console.log("totalde contagiados",total); 