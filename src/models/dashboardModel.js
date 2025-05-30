function totalUsuarios() {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalUsuarios
        FROM usuarios;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function totalRelatos() {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalRelatos
        FROM relato;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function perfilMaisComum() {
    var instrucaoSql = `
        SELECT perfil, COUNT(*) AS quantidade
        FROM resultado_quiz
        GROUP BY perfil
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function perfilPorFaixaEtaria() {
    var instrucaoSql = `
        SELECT 
            CASE
                WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) <= 24 THEN 'Até 24 anos'
                WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) BETWEEN 25 AND 34 THEN '25 a 34 anos'
                WHEN TIMESTAMPDIFF(YEAR, u.data_nascimento, CURDATE()) BETWEEN 35 AND 44 THEN '35 a 44 anos'
                ELSE '45+ anos'
            END AS faixa_etaria,
            perfil,
            COUNT(*) AS quantidade
        FROM resultado_quiz rq
        JOIN usuarios u ON rq.fk_usuario = u.idUsuario
        GROUP BY faixa_etaria, perfil;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    totalUsuarios,
    totalRelatos,
    perfilMaisComum,
    perfilPorFaixaEtaria
};
