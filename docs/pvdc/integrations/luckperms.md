---
sidebar_position: 1
---

# LuckPerms

PVDC hooks into LuckPerms for permissions. It is not required but extends the functionality and is recommended!

### Node Changes
- PVDC detects LuckPerms node changes and will recalculate view distance for potentially affected players when a `pvdc` node is changed, added, removed or a user is promoted or demoted.

### World Context
- PVDC now takes LuckPerms world context into account when calculating view distance. View distances for specific worlds will always be preferred over general nodes.
- You can enable/ disable VD recalculation on world change by changing `recalculate-vd-on-world-change` in **[config.yml](../pvdc/config/config.yml.md)**.

Learn about available permission nodes **[here](../usage/permissions.md)**!