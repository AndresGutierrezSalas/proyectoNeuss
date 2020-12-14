# ProyectoINFO248 

~~~bash
$ sudo mysql
> CREATE DATABASE neuss_dev;
> CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';
> GRANT ALL ON neuss_dev.* TO 'admin'@'admin';
~~~