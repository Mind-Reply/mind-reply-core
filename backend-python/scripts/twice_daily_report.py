from pathlib import Path
import json, datetime
ROOT = Path(__file__).resolve().parents[2]
OUTDIR = ROOT / "backend-python" / "reports"
OUTDIR.mkdir(parents=True, exist_ok=True)
out = OUTDIR / ("report-" + datetime.datetime.utcnow().strftime("%Y%m%d-%H%M%S") + ".json")
payload = {"timestamp": datetime.datetime.utcnow().isoformat() + "Z", "summary": "Twice-daily report placeholder", "status": "ready_for_slack_email"}
out.write_text(json.dumps(payload, indent=2), encoding="utf-8")
print(out)
