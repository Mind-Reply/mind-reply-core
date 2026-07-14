# Guardian Scan Report

Generated: 2026-07-10T02:13:37.024038+00:00
Config file: `guardian-config.yml`
YAML config loaded: `True`

- High findings: 12
- Medium findings: 7
- Info findings: 1
- Total findings: 20

## Decision

**BLOCK PRODUCTION** until high findings are reviewed.

## Skipped Control Files

- `guardian-config.yml`
- `guardian-report.json`
- `guardian-report.md`
- `scripts/guardian_scan.py`

## Findings

- **MEDIUM** `.env.example` — `possible_secret_assignment: Credential-like text found. Review before production.
- **INFO** `.env.example` — `placeholder: Placeholder/default value found.
- **HIGH** `CLOUDFLARE_DEPLOYMENT_COMPLETE.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **HIGH** `COMPLETE_DELIVERABLES.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **HIGH** `COMPLETE_SYSTEM_SUMMARY.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **MEDIUM** `COMPLETE_SYSTEM_SUMMARY.md` — `placeholder: Placeholder/default value found.
- **HIGH** `DELIVERABLES.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **MEDIUM** `DEPLOYMENT.md` — `placeholder: Placeholder/default value found.
- **HIGH** `docker-compose.yml` — `possible_secret_assignment: Credential-like text found. Review before production.
- **HIGH** `QUICKSTART.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **MEDIUM** `QUICKSTART.md` — `placeholder: Placeholder/default value found.
- **MEDIUM** `QUICKSTART.md` — `dangerous_command: Dangerous command text found: docker compose down -v
- **HIGH** `README.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **MEDIUM** `README.md` — `placeholder: Placeholder/default value found.
- **HIGH** `SOCIAL_DEPLOYMENT_PARALLEL.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **HIGH** `START_HERE.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **MEDIUM** `START_HERE.md` — `placeholder: Placeholder/default value found.
- **HIGH** `STRATEGY_APPLIED.md` — `possible_secret_assignment: Credential-like text found. Review before production.
- **HIGH** `server/index-enhanced.js` — `possible_secret_assignment: Credential-like text found. Review before production.
- **HIGH** `server/index.js` — `possible_secret_assignment: Credential-like text found. Review before production.