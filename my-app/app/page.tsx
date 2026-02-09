'use client'

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Frontend running - Ready to test APIs!");

  async function checkBackend() {
    setStatus("Checking backend health...");
    try {
      const res = await fetch('/api/health');
      const data = await res.json();
      setStatus(`✅ Backend healthy: ${data.message} (${new Date(data.timestamp).toLocaleTimeString()})`);
    } catch (error: any) {
      setStatus(`❌ Error: ${error.message}`);
    }
  }

  async function testApi() {
    setStatus("Testing API endpoint...");
    try {
      const res = await fetch('/api/test');
      const data = await res.json();
      setStatus(`✅ Test API: ${data.status} - ${data.api} (${new Date(data.time).toLocaleTimeString()})`);
    } catch (error: any) {
      setStatus(`❌ Error: ${error.message}`);
    }
  }

  return (
    <div style={{ 
      fontFamily: "system-ui, -apple-system, sans-serif", 
      padding: "24px", 
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6"
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1rem', 
        color: '#0070f3',
        background: 'linear-gradient(90deg, #0070f3, #00a8ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        🚀 AI Summary App
      </h1>
      
      <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>
        API endpoints are working! Test the backend connectivity.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button 
          onClick={checkBackend}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: '600',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          🩺 Check Backend Health
        </button>

        <button 
          onClick={testApi}
          style={{
            backgroundColor: '#10b981',
            color: 'white',
            fontWeight: '600',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0da271'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
        >
          🔧 Test API Endpoint
        </button>
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#f8fafc', 
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ marginBottom: '10px', color: '#1e293b' }}>Status:</h3>
        <p style={{ 
          padding: '12px', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '1px solid #cbd5e1',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          {status}
        </p>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '12px' }}>
        <h3 style={{ marginBottom: '15px', color: '#0369a1' }}>✅ System Status</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#10b981', marginRight: '8px' }}>✓</span>
            <strong>Frontend:</strong> Next.js 14.0.4 running
          </li>
          <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#10b981', marginRight: '8px' }}>✓</span>
            <strong>API Routes:</strong> /api/health, /api/test
          </li>
          <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#f59e0b', marginRight: '8px' }}>→</span>
            <strong>Next Step:</strong> Deploy to Vercel
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '30px', fontSize: '14px', color: '#64748b' }}>
        <p>Test the endpoints directly:</p>
        <code style={{ 
          display: 'block', 
          padding: '8px', 
          backgroundColor: '#1e293b', 
          color: '#e2e8f0', 
          borderRadius: '6px',
          marginBottom: '5px',
          fontFamily: 'monospace'
        }}>
          curl http://localhost:3000/api/health
        </code>
        <code style={{ 
          display: 'block', 
          padding: '8px', 
          backgroundColor: '#1e293b', 
          color: '#e2e8f0', 
          borderRadius: '6px',
          fontFamily: 'monospace'
        }}>
          curl http://localhost:3000/api/test
        </code>
      </div>
    </div>
  );
}
