create database apiusuarios;

use apiusuarios;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL, 
  `telefono` int(11)  DEFAULT NULL,
  `dui` int(50)  DEFAULT NULL,
  PRIMARY KEY(id)
  );
  
describe usuarios;
  
insert into usuarios values(2,'Esau', 'Zelaya', 78654345, 009876609);

select * from usuarios;
