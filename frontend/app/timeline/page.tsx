'use client';

import Link from 'next/link';

export default function TimelinePage() {
    const runs = [
        {
            id: '1',
            timestamp: new Date().toISOString(),
            task: 'Update read.md documentation',
            status: 'success',
            score: 87,
            pr: {
                number: 3,
                url: 'https://github.com/runningpoem30/serverless-graphql/pull/3'
            }
        }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'Inter, sans-serif' }}>
            {/* Header */}
            <header style={{ borderBottom: '1px solid #e5e7eb', padding: '16px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', background: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>A</span>
                    </div>
                    <span style={{ fontSize: '18px', fontWeight: '600', color: '#111' }}>AutoMaintainer</span>
                </div>
                <nav style={{ display: 'flex', gap: '32px' }}>
                    <Link href="/" style={{ fontSize: '14px', color: '#6b7280' }}>Dashboard</Link>
                    <Link href="/timeline" style={{ fontSize: '14px', color: '#111', fontWeight: '500' }}>Timeline</Link>
                    <Link href="/analytics" style={{ fontSize: '14px', color: '#6b7280' }}>Analytics</Link>
                </nav>
            </header>

            {/* Main Content */}
            <main style={{ padding: '48px', maxWidth: '1400px', margin: '0 auto' }}>
                <section style={{ marginBottom: '48px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>Run Timeline</h1>
                    <p style={{ fontSize: '16px', color: '#6b7280' }}>History of all autonomous improvement cycles</p>
                </section>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {runs.map((run) => (
                        <div key={run.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111', marginBottom: '8px' }}>{run.task}</h3>
                                    <p style={{ fontSize: '14px', color: '#6b7280' }}>{new Date(run.timestamp).toLocaleString()}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', backgroundColor: '#dcfce7', color: '#166534' }}>
                                        {run.status}
                                    </span>
                                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#111' }}>Score: {run.score}/100</span>
                                </div>
                            </div>
                            {run.pr && (
                                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f3f4f6' }}>
                                    <a href={run.pr.url} target="_blank" style={{ fontSize: '14px', color: '#2563eb' }}>
                                        View PR #{run.pr.number} on GitHub →
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid #e5e7eb', padding: '24px 48px', marginTop: 'auto' }}>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>Built with Kestra • Cline • CodeRabbit • Oumi • Gemini</p>
            </footer>
        </div>
    );
}
