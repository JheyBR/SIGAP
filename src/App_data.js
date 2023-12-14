  import ImgTodo from './icons/StaticIcons/ToDoSt.PNG';
  import ImgPedidos from './icons/StaticIcons/carritoSt.PNG';


  const defaulttitlecards =[
    /*https://www.flaticon.es/iconos-animados-mas-descargados*/
    {titlecard: 'Tareas por Hacer', subtitlecard:'Agregar, Modificar', iconcard:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', linkcard: '/todos', iconStcard: ImgTodo},
    {titlecard: 'Mis Pedidos', subtitlecard:'Ingresar de Pedidos', iconcard:'https://cdn-icons-gif.flaticon.com/6172/6172531.gif', linkcard: '/costumer', iconStcard: ImgPedidos},
    {titlecard: 'Reporte Entregas', subtitlecard:'Reporte de entregas de Repartidores', iconcard:'https://cdn-icons-gif.flaticon.com/7994/7994402.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=1687187175', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Lista de Clientes', subtitlecard:'Agregar, Modificar, Buscar', iconcard:'https://cdn-icons-gif.flaticon.com/7211/7211817.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=571983718', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Facturación', subtitlecard:'Crear Facturas', iconcard:'https://cdn-icons-gif.flaticon.com/8716/8716613.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=654922707', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Control Inventario', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/6416/6416382.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=1621482757', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Proveedores', subtitlecard:'Agregar, Modificar, Buscar', iconcard:'https://cdn-icons-gif.flaticon.com/7308/7308542.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=1448267864', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Honorarios', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/7994/7994320.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=2123880579', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Gastos', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/7994/7994412.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=993158531', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Ingresos', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/7994/7994388.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=1540683588', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Cuentas por Pagar', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/7994/7994387.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=1228979757', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Flujos de Caja', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/7994/7994399.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=1383026527', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Analisis Financiero', subtitlecard:'Buscar', iconcard:'https://cdn-icons-gif.flaticon.com/8121/8121322.gif', linkcard: 'https://docs.google.com/spreadsheets/d/1YISjWzCQvT-Cj7nLLo1qhwPoNXJ3Z5SX8ksWQJ6Mv_k/edit#gid=1767452784', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Planta Y Produccion', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/8722/8722413.gif', linkcard: '/pages/ToDoList', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Administracion', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/6172/6172521.gif', linkcard: '/pages/ToDoList', iconStcard: './icons/StaticIcons/Todo.png'},
    {titlecard: 'Servicio al Cliente', subtitlecard:'Buscar, Registrar', iconcard:'https://cdn-icons-gif.flaticon.com/6416/6416402.gif', linkcard: '/pages/ToDoList', iconStcard: './icons/StaticIcons/Todo.png'}
  ] 

  const defaulttitleleftbarra =[
    /*https://www.flaticon.es/iconos-animados-mas-descargados*/
    {leftoption: 'Dashboard', iconleft: 'https://cdn-icons-gif.flaticon.com/8722/8722555.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    {leftoption: 'Registrar Usuario', iconleft: 'https://cdn-icons-gif.flaticon.com/7931/7931421.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    {leftoption: 'Lista de Usuarios', iconleft: 'https://cdn-icons-gif.flaticon.com/8722/8722446.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    {leftoption: 'Configuración', iconleft: 'https://cdn-icons-gif.flaticon.com/8121/8121259.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    {leftoption: 'Enviar Correo', iconleft: 'https://cdn-icons-gif.flaticon.com/8717/8717939.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    {leftoption: 'Notas Internas', iconleft: 'https://cdn-icons-gif.flaticon.com/8716/8716822.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    {leftoption: 'Imprimir Archivo', iconleft: 'https://cdn-icons-gif.flaticon.com/8797/8797821.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    {leftoption: 'Cambiar Contraseña', iconleft: 'https://cdn-icons-gif.flaticon.com/6569/6569157.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    {leftoption: 'Salir de SIGAP', iconleft: 'https://cdn-icons-gif.flaticon.com/7740/7740910.gif', linkleft: '/*',iconSTleft: './icons/StaticIcons/Todo.png'},
    
  ] 
  export { defaulttitlecards, defaulttitleleftbarra};
  
  const defaulListToDo =[ 
    {titleToDo: 'Revisar el PH en Enrtrada de Agua y Tanques', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Revisar Ph y Cloro en Llaves 1, 2, llenado de botellon y Bolsas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Hacer retrolavado de Arena, Zeolita y Carbon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Hacer lavado de Microfiltros', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Dos ciclos de ozono en cada jornada', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Hacer los arreglos de botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Lavar estibas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Dejar seco el area de Produccion', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false },
    {titleToDo: 'Vaciar el agua de Saniger en la maquina de Botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Dejar todas las pacas en Bodega', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'NO dejar Botellones Vacios', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false}
  ] 

  /* Lista original
  const defaulListToDo =[ 
    {titleToDo: 'Revisar el PH en Enrtrada de Agua y Tanques', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Revisar Ph y Cloro en Llaves 1, 2, llenado de botellon y Bolsas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Hacer retrolavado de Arena, Zeolita y Carbon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Hacer lavado de Microfiltros', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Dos ciclos de ozono en cada jornada', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Hacer los arreglos de botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Lavar estibas', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false},
    {titleToDo: 'Dejar seco el area de Produccion', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false },
    {titleToDo: 'Vaciar el agua de Saniger en la maquina de Botellon', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'Dejar todas las pacas en Bodega', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: true},
    {titleToDo: 'NO dejar Botellones Vacios', checkToDo:'Agregar, Modificar', stateToDo:'https://cdn-icons-gif.flaticon.com/8722/8722697.gif', completed: false}
  ] */

  export {defaulListToDo }; 

