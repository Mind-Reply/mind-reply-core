from pathlib import Path
import json, datetime, hashlib, sys
ROOT = Path(__file__).resolve().parents[2]
APPROVED = ROOT / "clean-mindreply-content" / "approved"
APPROVED.mkdir(parents=True, exist_ok=True)
src = Path(sys.argv[1]) if len(sys.argv) > 1 else None
if not src or not src.exists():
    raise SystemExit("Provide a valid input file path")
raw = src.read_text(encoding="utf-8", errors="ignore")
clean = " ".join(raw.split())
receipt = {
    "timestamp": datetime.datetime.utcnow().isoformat() + "Z",
    "hash": hashlib.sha256(clean.encode("utf-8")).hexdigest(),
    "summary": clean[:300],
    "length": len(clean),
    "status": "approved_candidate"
}
out = APPROVED / (src.stem + ".json")
out.write_text(json.dumps(receipt, indent=2), encoding="utf-8")
print(out)
