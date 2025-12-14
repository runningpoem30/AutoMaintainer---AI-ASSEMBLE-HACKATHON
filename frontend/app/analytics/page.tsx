'use client';

import Link from 'next/link';

export default function AnalyticsPage() {
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
                    <Link href="/timeline" style={{ fontSize: '14px', color: '#6b7280' }}>Timeline</Link>
                    <Link href="/analytics" style={{ fontSize: '14px', color: '#111', fontWeight: '500' }}>Analytics</Link>
                </nav>
            </header>

            {/* Main Content */}
            <main style={{ padding: '48px', maxWidth: '1400px', margin: '0 auto' }}>
                <section style={{ marginBottom: '48px' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>Analytics</h1>
                    <p style={{ fontSize: '16px', color: '#6b7280' }}>Performance metrics and improvement trends</p>
                </section>

                {/* Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
                    <MetricCard label="Success Rate" value="100%" description="PRs merged successfully" />
                    <MetricCard label="Avg Evolution Score" value="87" description="Code quality improvement" />
                    <MetricCard label="Total Improvements" value="1" description="Autonomous PR cycles" />
                </div>

                {/* Score Breakdown */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111', marginBottom: '24px' }}>Score Breakdown</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <ScoreBar label="Documentation" value={90} />
                        <ScoreBar label="Code Quality" value={85} />
                        <ScoreBar label="Maintainability" value={85} />
                        <ScoreBar label="Test Coverage" value={0} description="Not applicable" />
                    </div>
                </div>

                {/* Task Distribution */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111', marginBottom: '16px' }}>Task Distribution</h3>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '14px', backgroundColor: '#dbeafe', color: '#1d4ed8' }}>Documentation: 1</span>
                        <span style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '14px', backgroundColor: '#f3f4f6', color: '#6b7280' }}>Bug Fixes: 0</span>
                        <span style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '14px', backgroundColor: '#f3f4f6', color: '#6b7280' }}>Refactoring: 0</span>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid #e5e7eb', padding: '24px 48px', marginTop: 'auto' }}>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>Built with Kestra • Cline • CodeRabbit • Oumi • Gemini</p>
            </footer>
        </div>
    );
}

function MetricCard({ label, value, description }: { label: string; value: string; description: string }) {
    return (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>{label}</p>
            <p style={{ fontSize: '40px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>{value}</p>
            <p style={{ fontSize: '12px', color: '#9ca3af' }}>{description}</p>
        </div>
    );
}

function ScoreBar({ label, value, description }: { label: string; value: number; description?: string }) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#374151' }}>{label}</span>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>{value > 0 ? `${value}/100` : description}</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${value}%`, backgroundColor: '#111', borderRadius: '4px', transition: 'width 0.3s' }} />
            </div>
        </div>
    );
}
