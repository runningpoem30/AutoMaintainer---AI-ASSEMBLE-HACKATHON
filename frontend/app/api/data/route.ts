import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        // Get system statistics
        const statsResult = await query('SELECT * FROM system_stats');
        const stats = statsResult.rows[0] || {
            total_runs: 0,
            total_prs: 0,
            merged_prs: 0,
            avg_evolution_score: 0,
            avg_code_quality: 0,
            avg_test_coverage: 0,
            best_score: 0,
            worst_score: 0,
        };

        // Get recent runs
        const runsResult = await query(`
      SELECT * FROM run_overview
      ORDER BY run_timestamp DESC
      LIMIT 50
    `);

        // Get score trend
        const trendResult = await query(`
      SELECT 
        DATE(ar.run_timestamp) as date,
        AVG(e.evolution_score) as avg_score,
        COUNT(*) as runs_count
      FROM agent_runs ar
      LEFT JOIN pull_requests pr ON ar.id = pr.run_id
      LEFT JOIN evaluations e ON pr.id = e.pr_id
      WHERE ar.status = 'success'
      GROUP BY DATE(ar.run_timestamp)
      ORDER BY date DESC
      LIMIT 30
    `);

        // Get task type distribution
        const taskTypesResult = await query(`
      SELECT 
        task_selected->>'task_type' as task_type,
        COUNT(*) as count
      FROM agent_runs
      WHERE status = 'success'
      GROUP BY task_selected->>'task_type'
    `);

        return NextResponse.json({
            stats,
            recent_runs: runsResult.rows,
            score_trend: trendResult.rows,
            task_distribution: taskTypesResult.rows,
        });
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch data', details: error.message },
            { status: 500 }
        );
    }
}
