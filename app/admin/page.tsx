export default function Admin() {
  return (
    <div style={{background:"#000",color:"#0f0",height:"100vh",padding:"40px",fontFamily:"monospace"}}>
      <h1>MindReply Control Room</h1>
      <p>System online.</p>
      <ul>
        <li><a href="/api/admin/status" style={{color:"#0f0"}}>PM2 Status</a></li>
        <li><a href="/api/admin/docker" style={{color:"#0f0"}}>Docker Status</a></li>
      </ul>
    </div>
  );
}
