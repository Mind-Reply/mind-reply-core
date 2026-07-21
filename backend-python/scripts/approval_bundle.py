from pathlib import Path
import json, datetime
ROOT = Path(__file__).resolve().parents[2]
APPROVED = ROOT / "clean-mindreply-content" / "approved"
REJECTED = ROOT / "clean-mindreply-content" / "rejected"
OUT = ROOT / "backend-python" / "reports" / "approval-batch.json"
items = []
for folder, label in [(APPROVED, "approved"), (REJECTED, "rejected")]:
    if folder.exists():
        for f in folder.glob("*.json"):
            items.append({"file": f.name, "folder": label})
report = {"timestamp": datetime.datetime.utcnow().isoformat() + "Z", "count": len(items), "items": items}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
print(OUT)
