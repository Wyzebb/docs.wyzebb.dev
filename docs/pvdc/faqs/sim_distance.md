---
sidebar_position: 1
---

# Simulation Distance

## What is Simulation Distance?
### [From the Minecraft Wiki](https://minecraft.fandom.com/wiki/Simulation_distance)
> Simulation distance defines a square region of chunks around the player where entities are ticked. Using distance of 6 for instance, entities may move normally within a 13×13 chunk column around the player chunk. One more chunk out, within a one-chunk-thick square frame surrounding this region, redstone may run, fluid may flow, and crops may grow (subject to normal chunk ticking rules). Beyond that nothing moves or changes.

## So why's it important?
- By default, changing view distance in this plugin also changes simulation distance to be the same. You can change this with the `sync-simulation-distance` option in **[config.yml](../config/config.yml.md)**.

- If you set this to false, simulation distance will always be whatever it is set to in your `server.properties` file, regardless of view distance.

- Entities, more complex redstone circuits and fluids will not be ticked if they are not in the simulation distance around the player.