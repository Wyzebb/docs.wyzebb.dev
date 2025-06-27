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
chunksPing: 0    # View distance last used by the player when ping mode was on
```