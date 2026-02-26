const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(process.env.DB_PATH,(err) => {
    if(err){
        console.log(err.message)
    }else{
        console.log("Database Connected")
    }
})

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS blogs(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            content TEXT,
            author TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )   
    `)
})

module.exports = db;