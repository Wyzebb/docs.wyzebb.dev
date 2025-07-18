# Ping Mode

:::tip[New Feature]
Ping mode is new to PVDC. Feedback would be greatly appreciated!
:::

## What is ping mode?

- Ping mode can be enabled/ disabled for each player.
- When turned on, if the player has a ping above a value (defined in the config below), their view distance will be lowered from their maximum allowed by the value in the config.
- The chunks are **reduced by** and not **set to** specific amounts so the ratio of view distance permissions and chunks set by other players is respected.

## When can it be used?

- Ping mode can be used with or without **[dynamic mode](../modes/dynamic.md)**.
- When used with dynamic mode, ping mode gets its maximum from the maximum allowed from dynamic mode. For more on priority, see **[priority](../getting-started/priority.md)**.

## Default config file

```yaml title="/PlayerViewDistanceController/ping-mode.yml"
enabled: false

# Min and max values ping mode will set a player's view distance to (must be within the boundaries in config.yml)
min: 2
max: 32

interval: 200  # (ticks)

# Ping is checked every interval for players with the mode active and view distance is optimised as follows:
# Players have their view distance reduced by the chunks specified from their max allowed view distance

# Format:
# {PING}: {CHUNKS}

pings:
  150: 1
  300: 2
```