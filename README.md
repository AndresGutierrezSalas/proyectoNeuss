# ProyectoINFO248 

## Crear usuario admin

~~~bash
$ sudo mysql
> CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';
> GRANT ALL ON neuss.* TO 'admin'@'localhost';
~~~

## Cargar BBDD

~~~bash
$ cd server/database
$ sudo mysql
> SOURCE db.sql
~~~

