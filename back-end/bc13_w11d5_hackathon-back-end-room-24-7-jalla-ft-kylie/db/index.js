import pg from "pg";

const { Pool } = pg

const databaseURL = process.env.POSTGRES_CONNECTION_URL;

export const pool = new Pool({
    connectionString: databaseURL
});

export default function query(text, params, callback) {
    return pool.query(text, params, callback);
}