---
sidebar_position: 3
---

# Commands

:::tip[New to PVDC]
Some commands now support offline players and autocomplete reflects this!
:::

### `/pvdc`
- **Aliases:** `vd`, `viewdistance`
- `<>` indicates a required parameter
- `[]` indicates an optional parameter
## Commands
#### - `/pvdc set <chunks> [player]`
- Sets the maximum view distance of yourself or another player (online or offline!)
- You can do `/pvdc <chunks>` as a shortcut for yourself

#### - `/pvdc get [player]`
- Get your own or another player's (online or offline!) max view distance, excluding AFK and performance mode effects

#### - `/pvdc reset [player]`
- Resets a player's view distance data and sets them to the max (or the max allowed by LuckPerms permissions if installed!).This works with online and offline players. Ping mode data is also reset and set to false

#### - `/pvdc dynamic [on/off/info]`
- Toggles the server-wide **[dynamic mode](../modes/dynamic.md)**

#### - `/pvdc ping [on/off/info] [player]`
- Toggles **[ping mode](../modes/ping.md)** for a specific player

#### - `/pvdc setonline <chunks>`
- Sets the maximum view distance of all online players

#### - `/pvdc help`
- Displays the plugin help message

#### **[Why was `/pvdc reload` removed?](../faqs/reload_cmd.md)**