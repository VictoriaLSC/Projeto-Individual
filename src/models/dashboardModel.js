var database = require("../database/config")


function contarUsuarios() {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalUsuarios
        FROM usuarios;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function contarRelatos() {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalRelatos
        FROM relato;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function perfilMaisComum() {
    var instrucaoSql = `
   select perfil from view_perfil;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// GRÁFICOS
function perfilMaisComumPorFaixa() {
    var instrucaoSql = `
        SELECT
        CASE
            WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) <= 24 THEN 'Até 24 anos'
            WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) BETWEEN 25 AND 34 THEN '25 a 34 anos'
            WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) BETWEEN 35 AND 44 THEN '35 a 44 anos'
            ELSE '45+ anos'
        END AS faixa_etaria,
        p.perfil,
        COUNT(*) AS quantidade
        FROM resultado_quiz rq
        JOIN usuarios u ON rq.fk_usuario = u.idUsuario
        JOIN perfil p ON rq.fkPerfil = p.idPerfil
        GROUP BY faixa_etaria, p.perfil
        ORDER BY faixa_etaria, quantidade DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quantidadePorPerfil() {
    var instrucaoSql = `
       SELECT count(perfil) AS quantidade, perfil from resultado_quiz join perfil on fkPerfil = idPerfil group by perfil;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    contarUsuarios,
    contarRelatos,
    perfilMaisComum,
    perfilMaisComumPorFaixa,
    quantidadePorPerfil

};
