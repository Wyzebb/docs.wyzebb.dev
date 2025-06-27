---
sidebar_position: 1
---

# Simulation Distance

**TLDR**: if it is not in a player's view distance, it is not ticked.

- This plugin does not directly interact with simulation distance. However, simulation distance it is affected by view distance.

- Simulation distance is the radius around a player in which entities, blocks and fluids are ticked. It is independent from view distance, apart from the fact that it is **capped by view distance**.

- This means, for example, that farms outside the view distance will not be ticked.