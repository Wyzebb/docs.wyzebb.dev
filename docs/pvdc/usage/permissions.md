---
sidebar_position: 4
---

# Permissions

:::warning[Version permission changes]
Some permissions have changed, so please check **[the migration guides](../migrating/_category_.json)** for nodes you should change
:::

## Default Permissions

All permissions are granted to ops by default, except:
- `pvdc.dynamic-mode-bypass` is off for all so ops new to the plugin can test it.
- `pvdc.get-self` is granted to all players by default


## Permission Nodes

### Setting
- Set your own view distance: `pvdc.set-self`
- Set the view distance of other players: `pvdc.set-others`
- Set view distance of all online players: `pvdc.setonline`

### Getting
- Get your own view distance: `pvdc.get-self`
- Get the view distance of another player: `pvdc.get-others`

### Setting Max View Distance
`Using this permission node means if players have permission to change their view distances, they can only do so in keeping with this limit`
- Permission-based max view distance via LuckPerms: `pvdc.maxdistance.<chunks>`
- Bypass any maxdistance permissions assigned to you: `pvdc.bypass-maxdistance`

### Setting Max View Distance
- Reset your view distance data including ping mode being turned off and view distance set to the max (or the max allowed by LuckPerms permissions if installed!): `pvdc.reset-self`
- Reset another player's view distance data including ping mode being turned off and view distance set to the max (or the max allowed by LuckPerms permissions if installed!): `pvdc.reset-others`

### Dynamic Mode
- Toggle dynamic mode for the server: `pvdc.dynamic-mode-set`
- Bypass dynamic mode changing your view distance: `pvdc.dynamic-mode-bypass`

### Ping Mode
- Toggle your ping mode: `pvdc.ping-mode-set-self`
- Toggle other player ping modes: `pvdc.ping-mode-set-others`

### AFK Bypass
- Bypass afk checks: `pvdc.bypass-afk`