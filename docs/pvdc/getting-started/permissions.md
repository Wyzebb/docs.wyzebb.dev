---
sidebar_position: 4
---

# Permissions

:::danger[Page under construction]
This page may be incomplete and incorrect!
:::

## **Permissions**
- Set your own max view distance: `pvdc.set-self`
- Set the max view distance of other players: `pvdc.set-others`
- Permission-based max view distance via LuckPerms: `pvdc.maxdistance.<chunks>`
- Global view distance: `pvdc.setonline`
- Reload plugin config: `pvdc.reload`
- Get the max view distance of another player: `pvdc.get-others`
- Get your own max view distance: `pvdc.get-self`
- Reset your max view distance to the max (or the max allowed by LuckPerms permissions if installed!): `pvdc.reset-self`
- Reset a player's max view distance to the max (or the max allowed by LuckPerms permissions if installed!): `pvdc.reset-others`
- Bypass any maxdistance permissions assigned to you: `pvdc.bypass-maxdistance`
- Bypass afk checks: `pvdc.bypass-afk`

<br />

- All permissions are granted to ops by default
- `pvdc.get-self` is granted to all players by default

<br />

  pvdc.set-others:
    description: Allows you to change the max view distance of other players
    default: op

  pvdc.set-self:
    description: Allows you to change your own max view distance
    default: op

  pvdc.setonline:
    description: Allows view distance command for all online players
    default: op

  pvdc.reload:
    description: Allows view distance reload command
    default: op

  pvdc.get-others:
    description: Allows you to get the max view distance of other players
    default: op

  pvdc.get-self:
    description: Allows you to get your own max view distance
    default: true

  pvdc.maxdistance:
    description: Allows max view distance to be set via luckperms eg pvdc.maxdistance.3

  pvdc.bypass-maxdistance:
    description: Allows you to bypass any max distances set for you
    default: op

  pvdc.bypass-afk:
    description: Allows you to bypass afk checks
    default: op

  pvdc.reset-self:
    description: Allows you to reset your own saved view distance, so only Luckperms permission values are used
    default: op

  pvdc.reset-others:
    description: Allows you to reset a player's saved view distance, so only Luckperms permission values are used
    default: op

  pvdc.ping-mode-set-self:
    description: Allows you to toggle your ping mode
    default: true

  pvdc.ping-mode-set-others:
    description: Allows you to toggle other player ping modes
    default: op

  pvdc.dynamic-mode-set:
    description: Allows you to toggle dynamic mode for the server
    default: op

  pvdc.dynamic-mode-bypass:
    description: Allows you to bypass dynamic mode changing your view distance
    default: false