INSERT INTO autores values 
  (1, 'Esteban Wladimir', 'Martinez'),
  (2, 'Susana', 'Pacheco'),
  (3, 'Camila', 'Ponce'),
  (4, 'Enrique', 'Mejia'),
  (5, 'John ', 'Carter');

INSERT INTO categorias values 
  (1, 'Científicos'),
  (2, 'Literatura'),
  (3, 'De viaje'),
  (4, 'Historia'),
  (5, 'Programación');

INSERT INTO editoriales values 
  (1, 'Edelvives', 'Argentina'),
  (2, 'Ediciones Bromera', 'España'),
  (3, 'Ediciones Cal y Canto', 'Chile'),
  (4, 'Ediciones de la U', 'México'),
  (5, 'Ediciones Paraninfo', 'España');

INSERT INTO `documentos_digitales` (`COD_DOCUMENTO`, `ID_AUTORES`, `ID_CATEGORIAS`, `ID_EDITORIALES`, `TITULO`, `ANO`, `img`) VALUES
(1, 1, 1, 1,'Cien años de soledad', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrfG9erdRPTby2s_aOikKJ6pYSP1AuYB-pg&usqp=CAU'),
(2, 1, 1, 1,'El señor de los anillos', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqtAqL99rJv8XaVaKXMWPOvb4FjxAXxXdtA&usqp=CAU'),
(3, 1, 1, 1,'1984, de George Orwell', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8YQH_gU_B8Z_sP4WSjvkIxiWpdp_sqeeAwQ&usqp=CAU'),
(4, 1, 1, 1,'Un mundo feliz', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiO2MNr268vPLv3m5Z8wU4e2qQ4L21s0qoA&usqp=CAU'),
(5, 1, 1, 1,'Orgullo y prejuicio,', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pFou0S3PBtiQC0yUFl2W6YXhj7IdvH4OKA&usqp=CAU'),
(6, 2, 2, 2,'Crimen y castigo', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPY_qPixSOLhauBaf7gf_BaJFdwMdmQpYwEA&usqp=CAU'),
(7, 2, 2, 2,'Lolita, de Vladimir Nabokov', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADj2_HylqWBAm8DqbyH_1xZT9Co0QXOlcoA&usqp=CAU'),
(8, 2, 2, 2,'Ulises, de James Joyce', '2018', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LkCoK4bjNVqTRINWnjak72WC1W_8ELwrCQ&usqp=CAU'),
(9, 2, 2, 2,'Madame Bovary', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezi3PSR-wayoR5EByxGZODxc5PqzDgMY9YA&usqp=CAU'),
(10, 2, 2, 2,'En busca del tiempo perdido', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScfrLwr5EmIlQ6DbC0Tf8mPhoNDinhy7_lQ&usqp=CAU'),
(11, 3, 3, 3,'Don Quijote de la Mancha', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xDfFyH1O0OX5hd9pQe4nlbq0wWJo708YSg&usqp=CAU'),
(12, 3, 3, 3,'El retrato de Dorian Gray', '2021', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DrjKk30qq8F8-FcJl7NXuNaS8qOo2YNZUQ&usqp=CAU'),
(13, 3, 3, 3,'Ana Karenina', '2019', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzOOXOY-v76fO3Cm2qkirrtbRf1Fb32UsyA&usqp=CAU'),
(14, 4, 4, 4,'El Principito', '2020', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgi9YT_MBGusQvYxTWg21cIecRfuwArjLxQ&usqp=CAU'),
(15, 4, 4, 4,'El proceso', '2022', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCJqW7US78bl1z7Ms7e4HzsZQuCly7CU9Ag&usqp=CAU');

ALTER TABLE documentos_digitales
ADD img varchar(255);