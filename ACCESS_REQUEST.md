# Access Request

## Missing access
- Write access for the remaining in-scope repositories listed in the production prompt.
- Visibility into current deployment hosts, DNS, analytics, billing, and workflow systems for those repositories.
- Any secret-store or environment access needed to verify whether credentials exist and must be rotated.
- Build and smoke-test execution access for the non-MindReply deployment surfaces.

## Why this is needed
The current evidence only confirms write access and current state for `Mind-Reply/MindReply`. The rest of the repo fleet and production surfaces cannot be classified or cleaned safely without direct access and repository-level evidence.

## Minimum permission required
- Read access to all in-scope repositories.
- Write access to create a cleanup branch and open pull requests where needed.
- Read access to CI, deployment, and workflow logs.
- Read access to DNS and hosting status.
- Read access to secret inventory metadata only; no secret values required.

## Owner action required
Grant the missing repository, deployment, and log access so the inventory and cleanup pass can continue with proof.

## Can work continue without it?
Yes, but only on the currently accessible MindReply repository and only for documentation or cleanup items that can be verified from repository evidence.