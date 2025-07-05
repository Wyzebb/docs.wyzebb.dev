---
sidebar_position: 5
---

# Priority System

:::info[Edge Cases]
There are lots of edge cases in the priority system, so if you see something not working as expected, please let me know on **[Discord](https://discord.gg/akbd8EPSgr)** or **[GitHub Issues](https://github.com/Wyzebb/PlayerViewDistanceController/issues)**
:::

The priority system is at the core of how PVDC works. The diagram below should help you understand the order of priority for the plugin when deciding what view distance to set. Every value is clamped between the minimum and maximum values in **[config.yml](../config/config.yml.md)**.



```mermaid
---
title: "View Distance Priority Flow"
config:
    look: handDrawn
---
graph TD;
    A(Default distance) --> B(Bedrock default distance)
    B --> C(LuckPerms max distance values)
    C --> D(Amounts set by others if not disabling values of 0 or -1)
    D --> E(Ping mode if enabled and not 0)
    E --> F(Dynamic mode if enabled reduces chunks)
    F --> G(If player AFK, view distance is temporarily changed)
```

#### **These diagrams may help, but don't include AFK, dynamic mode and ping mode**
![JOIN](https://i.ibb.co/hVx5hCk/Join-dec-tree.png)
![COMMAND](https://i.ibb.co/gw0LnYc/Main-dec-tree.png)