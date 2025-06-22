---
sidebar_position: 1
---

# Overview

![Banner](https://i.ibb.co/p1fVk8s/Banner-min.webp)
<p>
  <a href="https://github.com/Wyzebb/PlayerViewDistanceController"><img alt="github" height="56"
        src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/github_vector.svg" /></a>
  <a href="https://ko-fi.com/wyzebb"><img alt="kofi-singular" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/donate/kofi-singular_vector.svg" /></a>
  <a href="https://discord.gg/akbd8EPSgr"><img alt="discord-plural" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/social/discord-plural_vector.svg" /></a>
</p>

Player View Distance Controller (PVDC) is a lightweight yet powerful plugin that allows server admins to have complete control over their player's view distances. This is essential for every server as it enhances server and client performance and allows for complete customisation of every feature. The plugin can automatically adjust each player’s view distance in real-time based on their ping, server MSPT, AFK status and more. With full support for LuckPerms, GeyserMC bedrock clients and PlaceholderAPI, it offers seamless integration into any modern server setup. PVDC provides fine-grained control and extensive customization through easy-to-use config files. The plugin now has dynamic MSPT-based view distance scaling and ping-based adjustments, making your server smarter, faster and more stable - all without you lifting a finger!

<br/><br/>
The customisability of the plugin can make it a little confusing, so please refer to the documentation and flow diagrams and join the Discord if you need help!
<br/><br/>

## **Key Features**
- **Per-player control**: Each player has their own max view distance, which can be set and saved individually by them or by another player (if they have the permissions to do so).
- **Global control**: Easily set the max view distance of all online players.
- **Saves data persistently**: Automatically restores player view distances when they connect to the server, even across restarts.
- **LuckPerms integration**: Max view distances can be set for groups or individual players via Luckperms (LuckPerms is not required).
- **AFK view restriction**: AFK players can have their views restricted until they next move to improve server performance. This can be completely customised or disabled in the config.
- **Highly configurable**: Control most features and messages in the plugin (default configs at the bottom of this page!)
- **Bedrock support**: Full bedrock support and bedrock players can have custom default values.
- **Very lightweight**: The plugin does not use much CPU or RAM at all and can even greatly improve performance as the server may have to send less chunk data to players!
- **Update checker**: As of v2.0.0, an update checker is built-in.
- **Multi-language support**: All messages are customisable and you can even add your own language by creating a file in the 'lang' folder and referencing that file in config.yml. If you wish, you could make a pull request with any more languages so the plugin can ship with them in the future. The plugin currently ships with English, Russian and Chinese.
- **PlaceHolderAPI support**: Placeholders are now built in to see if players are AFK and to see a player's current max view distance.
- **Full console support**: All commands can be executed from the console.
- **MSPT‑based dynamic scaling**: Automatically reduce view distance when server tick time rises, helping to stabilize performance.
- **Ping‑based adjustments**: Lower view distance for high-latency players to improve chunk loading and reduce rubberbanding.
- **Enhanced configuration options**: Customise MSPT and ping thresholds, scaling curves, world-specific behavior, and transition smoothness.

<br/>
