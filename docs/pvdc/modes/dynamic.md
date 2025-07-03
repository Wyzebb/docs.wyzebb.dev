# Dynamic Mode

:::tip[New Feature]
Dynamic mode is new to PVDC. Feedback would be greatly appreciated!
:::

## What is dynamic mode?

- Dynamic mode is a server-wide mode that optimises view distance of all players (except those who bypass with `pvdc.dynamic-mode-bypass`).
- It does it based on server MSPT and you can define the MSPT thresholds and how much view distances are reduced by in the config file `dynamic-mode.yml`.
- The chunks are **reduced by** and not **set to** specific amounts so the ratio of view distance permissions and chunks set by other players is respected.

## When can it be used?

- Dynamic mode can be used with or without **[ping mode](./ping.md)**.
- It is recommended that you use it and is only not enabled by default to avoid confusion for new users.

## Default config file for dynamic mode

```yaml title="/PlayerViewDistanceController/dynamic-mode.yml"
# Whether dynamic mode is activated on the server (ping mode enabled key does not work in the same way)
enabled: false

# Min and max view distances when using dynamic mode (must be within the global boundaries defined in config.yml)
min: 2
max: 32

interval: 1200  # (ticks)

# MSPT is checked every interval and view distance is optimised as follows:
# All players have their view distance reduced by the chunks specified from their max allowed view distance
# Permission node 'pvdc.dynamic-mode-bypass' bypasses this.

# Format:
# {MSPT}: {CHUNKS}

mspt:
  45: 1
  50: 2
  55: 4
```