CREATE DEFINER=`root`@`localhost` PROCEDURE `usuariosAddorEdit`(
IN _id INT,
IN _name VARCHAR(50),
IN _apellido VARCHAR(50),
IN _telefono INT(11),
IN _dui INT(50)
)
BEGIN
	IF _id = 0 THEN
		INSERT INTO usuarios (name, apellido, telefono, dui)
        VALUES (_name, _apellido, _telefono, _dui);
        
        SET _id = LAST_INSERT_ID();
	ELSE 
		UPDATE usuarios
        SET 
        name = _name,
        apellido = _apellido,
        telefono = _telefono,
        dui = _dui
        WHERE id = _id;
	END IF;
    
    SELECT _id AS 'id';

END