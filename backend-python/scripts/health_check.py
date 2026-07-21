from pathlib import Path
import json, datetime
ROOT = Path(__file__).resolve().parents[2]
CLEAN = ROOT / "clean-mindreply-content"
OUT = ROOT / "backend-python" / "reports" / "health-report.json"
data = {
    "timestamp": datetime.datetime.utcnow().isoformat() + "Z",
    "incoming": (CLEAN / "incoming").exists(),
    "approved": (CLEAN / "approved").exists(),
    "rejected": (CLEAN / "rejected").exists(),
    "published": (CLEAN / "published").exists(),
    "drafts": (CLEAN / "drafts").exists(),
}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(data, indent=2), encoding="utf-8")
print(OUT)
