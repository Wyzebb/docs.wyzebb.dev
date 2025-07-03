# AFK System

:::tip[New Feature]
The afkOnJoin option is a new feature
:::

### How to Use
- After an amount of time (defined in **[config.yml](../config/config.yml.md)**), a player will be considered AFK and their view distance will be restricted.
- Restriction view distance and the time taken for a player considered to be AFK are configurable.
- The bypass permission `pvdc.bypass-afk` can be used to stop a player's view distance being restricted when AFK.
- Players in spectator mode can bypass AFK checks (configurable)

- `afkOnJoin` sets players to AFK immediately when they join until they first move.
- `zero-chunks-afk` stops AFK players seeing ANYTHING. It will look like they are in a void world. This will not work in all server setups! Use with caution as it is not supported by the Paper API.

### Use Cases
- This stop AFK players loading more chunk and entity data than they need and making the server lag.
- This could also be used to combat automatic farm AFKing.
- The `afkOnJoin` option could even be used to combat bots.

### AFK Config Default Options

```yaml title="/PlayerViewDistanceController/config.yml"
# If chunks loaded will be limited for AFK players
afk-chunk-limiter: true

# Whether players should be set to the afk limit on join until they first move
afkOnJoin: false

# After how many seconds a player will be considered AFK
afkTime: 60

# The view distance of an AFK player
afkChunks: 2

# Whether players in spectator mode bypass AFK checks
spectators-can-afk: true

# Use with caution: this is not fully supported by the paper api and may cause visual glitches
zero-chunks-afk: false
```