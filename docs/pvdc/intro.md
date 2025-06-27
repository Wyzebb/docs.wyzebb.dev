---
sidebar_position: 1
---

# Introduction

![Banner](https://i.ibb.co/p1fVk8s/Banner-min.webp)
<p>
    <a style={{paddingRight: 0.5 + 'em'}} href="https://docs.wyzebb.dev/docs/pvdc/intro"><img alt="generic" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/documentation/generic_vector.svg" /></a>
    <a style={{paddingRight: 0.5 + 'em'}} href="https://modrinth.com/plugin/pvdc"><img alt="modrinth" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/available/modrinth_vector.svg" /></a>
    <a style={{paddingRight: 0.5 + 'em'}} href="https://github.com/sponsors/Wyzebb"><img alt="ghsponsors-singular" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/donate/ghsponsors-singular_64h.png" /></a>
    <a style={{paddingRight: 0.5 + 'em'}} href="https://ko-fi.com/wyzebb"><img alt="kofi-plural" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/donate/kofi-plural_vector.svg" /></a>
    <a style={{paddingRight: 0.5 + 'em'}} href="https://discord.gg/akbd8EPSgr"><img alt="discord-plural" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/social/discord-plural_vector.svg" /></a>
</p>

**Player View Distance Controller (PVDC)** is a lightweight yet powerful Paper plugin that gives full control over view distance. It boosts performance and offers extensive customisation, including permissions, automatic performance modes, AFK handling, and more. With support for LuckPerms, GeyserMC, and PlaceholderAPI, it integrates smoothly into any server.

## **Key Features**
- **Per-player control**: Each player has their own max view distance, which can be set and saved individually by themselves or by another player.
- **Global control**: Easily set the max view distance of all online players.
- **MSPT‑based dynamic mode**: Automatically reduce view distance when MSPT increases, helping to stabilise performance.
- **Ping‑based adjustments**: Automatically reduce view distance for players with high ping to improve client performance.
- **AFK view restriction**: AFK players can have their view distances restricted while AFK to reduce unnecessary chunk loading and ticking. Learn about how **[simulation distance is affected by this plugin here](./faqs/sim_distance.md)**.
- **LuckPerms integration**: There are many permissions available and max view distances can be set for groups or individual players via Luckperms (LuckPerms is not required).
- **Saves data persistently**: Automatically sets max view distances when players connect to the server.
- **Bedrock support**: Players connecting via GeyserMC are fully supported and **[bedrock players can have custom default values](../pvdc/config/config.yml.md)**.
- **Very lightweight**: The plugin is very light and can even greatly improve performance as the server may have to send less chunk data to players! Entities, blocks and fluids outside view distance are also not ticked, improving performance (see **[simulation distance info](./faqs/sim_distance.md)**).
- **Multi-language support**: All messages are customisable and you can even add your own languages. **[Learn about this system here](../pvdc/config/lang.md)**.
- **PlaceHolderAPI support**: The plugin contains an internal expansion with **[some useful placeholders](../pvdc/hooks/placeholderAPI.md)**.
- **Console support**: Most commands can be executed from the console.