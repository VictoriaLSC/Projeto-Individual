drop database maternidade;
create database maternidade;
use maternidade;

-- Tabela do cadastro
CREATE TABLE usuarios (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    dtRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- tabela dos perfis de mãe do quiz
CREATE TABLE perfil (
idPerfil INT PRIMARY KEY auto_increment,
perfil VARCHAR(15),
descricao VARCHAR(250)
);

-- Tabela do resultado do quiz
CREATE TABLE resultado_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fkPerfil INT,
    FOREIGN KEY (fkPerfil) REFERENCES perfil(idPerfil),
    data_resultado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(idUsuario)
);

-- Tabela do mural de relatos
CREATE TABLE relato (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao TEXT,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(idUsuario)
);

select * from usuarios;
select * from relato;
select * from perfil;
SELECT COUNT(*) AS total FROM resultado_quiz;
select * from resultado_quiz;


INSERT INTO perfil VALUES
(default, 'Racional','Você é uma mãe racional! Toma decisões com base em lógica e planejamento. Gosta de organização, clareza e previsibilidade no cuidado com seu filho'),
(default,'Emocional','Você é uma mãe emocional! Conecta-se profundamente com o seu filho e prioriza o afeto. Suas decisões partem do coração, e seu amor é sua bússola.'),
(default,'Colaborativa','Você é uma mãe colaborativa! Valoriza trocas, conselhos e acredita que a maternidade é mais leve quando é compartilhada. Você não tem medo de pedir ajuda.'),
(default,'Ansiosa','Você é uma mãe ansiosa. Se preocupa com cada detalhe, se cobra muito e muitas vezes sente medo de errar. Mas tudo isso vem do amor profundo que sente.'),
(default,'Equilibrada','Você mostra traços de vários perfis e se adapta conforme a situação. Um retrato real da maternidade, com momentos de razão, emoção, apoio e dúvidas.');


-- Perfil de mãe predominante
SELECT count(perfil), perfil from resultado_quiz join perfil on fkPerfil = idPerfil group by perfil;

-- Perfil de mãe registrado de cada usuária
SELECT fk_usuario as idUsuario, nome, fkPerfil as idPerfil, perfil, descricao FROM resultado_quiz
JOIN usuarios ON fk_usuario = idUsuario
JOIN perfil ON fkPerfil = idPerfil;


-- Cálculo da faixa etária das usuárias 
SELECT
  CASE
    WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) <= 24 THEN 'Até 24 anos'
    WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) BETWEEN 25 AND 34 THEN '25 a 34 anos'
    WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) BETWEEN 35 AND 44 THEN '35 a 44 anos'
    ELSE '45+ anos'
  END AS faixa_etaria,
  COUNT(*) AS quantidade
FROM usuarios u
GROUP BY faixa_etaria;

SELECT * FROM usuarios WHERE idUsuario = 4;
 
 -- Total de usuários cadastrados
 SELECT COUNT(*) AS totalUsuarios
        FROM usuarios;

-- Total de relatos publicados 
  SELECT COUNT(*) AS totalRelatos
        FROM relato;

SELECT 
	r.id AS idRelato,
	r.titulo,
	r.descricao,
	r.fk_usuario,
	u.idUsuario AS idUsuario,
	u.nome,
	u.email,
	u.senha
	FROM relato r INNER JOIN usuarios u ON r.fk_usuario = u.idUsuario; 
                
-- Perfil predominante do resultado do quiz
SELECT count(perfil) AS quantidade, perfil from resultado_quiz join perfil on fkPerfil = idPerfil group by perfil;

-- 
SELECT perfil, COUNT(fkPerfil) AS total
FROM resultado_quiz
JOIN perfil ON fkPerfil = idPerfil
GROUP BY perfil
ORDER BY total DESC
LIMIT 1;

CREATE VIEW view_perfil AS 
SELECT perfil, COUNT(fkPerfil) AS total
FROM resultado_quiz
JOIN perfil ON fkPerfil = idPerfil
GROUP BY perfil
ORDER BY total DESC
LIMIT 1;

select perfil from view_perfil;

SELECT
    CASE
        WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) <= 24 THEN 'Até 24 anos'
        WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) BETWEEN 25 AND 34 THEN '25 a 34 anos'
        WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) BETWEEN 35 AND 44 THEN '35 a 44 anos'
        ELSE '45+ anos'
    END AS faixa_etaria,
    COUNT(*) AS quantidade
    FROM usuarios u
    GROUP BY faixa_etaria;
    
       SELECT count(perfil) AS quantidade, perfil from resultado_quiz join perfil on fkPerfil = idPerfil group by perfil;