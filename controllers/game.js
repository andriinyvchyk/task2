const Config = require('../config/db');
const mysql = require('mysql2');

exports.game_add = (req, res) => {
    const { name, description, rating } = req.body
    const sql = 'INSERT INTO game_table(name, description, rating) VALUES(?,?,0)';

    Config.connection.query(sql, [name, description], function (err, results) {
        if (err) res.status(500).json(err);
        res.status(201).json(results)
    });
}
exports.game_update = (req, res) => {
    const { id, name, description, rating } = req.body
    const sql = `UPDATE game_table SET name=?, description=?, rating=? WHERE id=?`;

    Config.connection.query(sql, [name, description, rating, id], function (err, data) {
        if (err) res.status(500).json(err);
        res.status(201).json(data)
    });
}
exports.game_delete = (req, res) => {
    const { id } = req.body
    const sql = "DELETE FROM game_table WHERE id=?"

    Config.connection.query(sql, [id], function (err, data) {
        if (err) res.status(500).json(err);
        res.status(201).json(data)
    });
}
exports.books = (req, res) => {
    const filter = req.query.filter
    const sql = `SELECT * FROM game_table WHERE name=?`;
    Config.connection.query(sql, [filter], function (err, result) {
        if (err) res.status(500).json(err);
        res.status(201).json(result)
    });
}
exports.books_id = (req, res) => {
    const filter = req.params.id
    const sql = `SELECT * FROM game_table WHERE id=?`;
    Config.connection.query(sql, [filter], function (err, result) {
        if (err) res.status(500).json(err);
        res.status(201).json(result)
    });
}