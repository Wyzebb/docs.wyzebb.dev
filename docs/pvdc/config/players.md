# Players Folder

:::info
This is where the plugin saves view distance data for players
:::

### A Sample File
- You can change the values in these files, but it is easier to use commands.
- You should only change them here if the player is offline, as otherwise the values will be overwritten.

```yaml title="/PlayerViewDistanceController/players/PLAYERUUID.yml"
chunks: 12    # View distance changed by the player themselves
chunksOthers: 7    # View distance changed by other players or the setonline command
pingMode: false    # Whether ping mode is turned on for the player
```

:::note
chunksPing was removed the update after it was added as it wasn't needed. If your player files have this value, it will not do any harm.