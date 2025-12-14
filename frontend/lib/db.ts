/**
 * Database connection for frontend
 */
import { Pool } from 'pg';

// Create PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

// Test connection on startup
pool.on('error', (err: Error) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

export async function query(text: string, params?: any[]) {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Database query executed', { text, duration, rows: res.rowCount });
    return res;
}

export async function getClient() {
    const client = await pool.connect();
    return client;
}

export default pool;
