import pool from "../config/neon";

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                firstName VARCHAR(255) NOT NULL,
                lastName VARCHAR(255) NOT NULL,
                age INT NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `);
    } catch (error) {
        console.error("Error creating tables:", error);
    }
};
export default createTables;