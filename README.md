# sis257_pizza
Descripción del negocio – Pizzería:

La pizzería es un negocio consolidado que lleva más de once años ofreciendo servicios de venta de pizzas a sus clientes. Cuenta con un menú variado que puede ser consultado fácilmente, permitiendo a los clientes seleccionar productos, definir cantidades y elegir la modalidad de atención: consumo en el local, para llevar o entrega a domicilio. Cada producto está acompañado de una galería de imágenes que muestra su presentación, mejorando la experiencia del cliente antes de realizar un pedido.Add commentMore actions

Para optimizar su operatividad, la pizzería ha decidido implementar un sistema automatizado que gestiona múltiples aspectos del negocio. El sistema contempla distintos roles de usuario, a quienes se asignan permisos específicos según sus funciones, garantizando un acceso controlado y seguro. A través de este sistema, se registra cada venta, vinculando los productos seleccionados con el cliente correspondiente y el método de pago utilizado.

Además, se realiza un seguimiento riguroso del inventario de ingredientes, incluyendo insumos clave como queso, salsa y masa, todos los cuales están relacionados con los productos del menú mediante recetas detalladas. El sistema también contempla la gestión de proveedores, quienes suministran los ingredientes esenciales, lo cual permite llevar un control de entradas, precios y fechas de adquisición. Esta funcionalidad garantiza un abastecimiento eficiente y la trazabilidad de los recursos utilizados en la preparación de los alimentos.

Gracias a esta automatización, la pizzería mejora su atención al cliente, optimiza sus procesos internos y mantiene un control preciso de sus operaciones diarias.

# Entidades 
Usuarios (id, nombre, apellido, correo, contraseña, rol)         
Clientes (id, nombre, apellido, telefono, direccion)              
Productos (id, imagen, nombre, descripcion, precio, stock)            
Ventas (id, fecha, total, id_usuario, id_cliente)            
Detalle_Venta(id, id_venta, id_producto, cantidad, precio_unitario, subtotal)          
Ingredientes (id, nombre, cantidad_disponible, unidad_medida)             
Productos_Ingredientes (id_producto, id_ingrediente, cantidad_usada)            
Proveedores (id, nombre, telefono, correo, direccion)               
Proveedor_ingrediente (id_proveedor, id_ingrediente, precio_unitatio, fecha_ultimo_suministro)       

# Descripcion y Cardinalidad
 1. Usuarios

Descripción: Representa a las personas que utilizan el sistema (administradores, cajeros, etc.).
Relaciones:

    Un usuario puede realizar muchas ventas.

    Cardinalidad: 1:N (Usuario → Ventas)

 2. Clientes

Descripción: Clientes que realizan compras en la pizzería. Pueden ser registrados para llevar un historial de compras.
Relaciones:

    Un cliente puede realizar muchas ventas.

    Cardinalidad: 1:N (Cliente → Ventas)

 3. Productos

Descripción: Pizzas, bebidas u otros productos que ofrece la pizzería.
Relaciones:

    Un producto puede estar en muchos detalles de venta.

    Un producto puede estar compuesto por muchos ingredientes.

    Cardinalidades:

        1:N (Producto → Detalle_Venta)

        M:N (Producto ↔ Ingredientes) mediante Productos_Ingredientes

 4. Ventas

Descripción: Registro de cada venta realizada en el sistema.
Relaciones:

    Una venta es realizada por un usuario y puede pertenecer a un cliente.

    Una venta tiene muchos detalles de venta.

    Cardinalidades:

        N:1 (Venta → Usuario)

        N:1 (Venta → Cliente)

        1:N (Venta → Detalle_Venta)

 5. Detalle_Venta

Descripción: Representa los productos vendidos en cada venta (detalle línea por línea).
Relaciones:

    Un detalle de venta pertenece a una venta y está asociado a un producto.

    Cardinalidades:

        N:1 (Detalle_Venta → Venta)

        N:1 (Detalle_Venta → Producto)

 6. Ingredientes

Descripción: Insumos necesarios para preparar los productos (como masa, queso, salsa, etc.).
Relaciones:

    Un ingrediente puede estar en muchos productos.

    Un ingrediente puede ser provisto por muchos proveedores.

    Cardinalidades:

        M:N (Ingrediente ↔ Productos) mediante Productos_Ingredientes

        M:N (Ingrediente ↔ Proveedores) mediante Proveedor_Ingrediente

 7. Proveedores

Descripción: Empresas o personas que suministran ingredientes a la pizzería.
Relaciones:

    Un proveedor puede suministrar muchos ingredientes.

    Cardinalidad: 1:N (Proveedor → Proveedor_Ingrediente)

 8. Productos_Ingredientes

Descripción: Tabla intermedia que define qué ingredientes componen un producto y en qué cantidad.
Relaciones:

    Pertenece a un producto y a un ingrediente.

    Cardinalidad: N:1 (respecto a Producto e Ingrediente)

 9. Proveedor_Ingrediente

Descripción: Tabla intermedia que registra qué proveedor suministra qué ingrediente y a qué precio.
Relaciones:

    Pertenece a un proveedor y a un ingrediente.

    Cardinalidad: N:1 (respecto a Proveedor e Ingrediente)