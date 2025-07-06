# Messages and Languages


## Language System
- PVDC supports multiple languages and can easily be switched between them. The default is en_US.
- There is a `/lang` folder in the pvdc config folder containing the three default languages, `English`, `Russian` and `Chinese`.
- The language in use can be changed on line 1 in **[config.yml](./config.yml.md)**.
- You can customise almost all messages from the plugin!
- I cannot translate the messages due to software laws, so only those fluent can translate them. Due to this, any new messages in updates will be in English, even in Russian and Chinese files, until a pull request is made to fix them.

## Creating your own Language File
- You can easily create your own language files using the English keys and then custom values. Put this file in the `/lang` folder and set your language to be used in **[config.yml](./config.yml.md)**.
- It would be great if you made a **[pull request](https://github.com/Wyzebb/PlayerViewDistanceController/pulls) so the language can be included in future updates. Thanks!

## Default en_US
```yaml title="/PlayerViewDistanceController/lang/en_US.yml"
messages:
  join: "Your maximum view distance is currently set to {chunks} chunks"

  not-max: "Your view distance is set to {chunks}. Use /pvdc <chunks> to alter this to a max of {maxChunks} for this world! Use /pvdc reset to max your view distance globally."

  no-permission: "You do not have permission to execute this command!"

  incorrect-args: "Incorrect arguments - Use /pvdc help for help"

  afk: "You're AFK, so your view distance has been restricted to {chunks} chunks!"
  afk-return: "Your view distance has returned to normal!"

  chunks-too-high: "You are only permitted to set your view distance to a maximum of {chunks} chunks!"

  self-view-distance-change: "You changed your maximum view distance to {chunks} chunks"

  # The message displayed for the command sender when they change someone else's maximum view distance
  sender-view-distance-change: "{target-player}'s maximum view distance was changed to {chunks} chunks"

  # The message displayed for a player when their maximum view distance has been changed
  target-view-distance-change: "Your maximum view distance has been changed to {chunks} chunks"

  reset: "You reset {target-player}'s saved view distance!"
  self-reset: "You reset your saved view distance!"

  all-online-change: "The maximum view distance of all online players has been set to {chunks} chunks"

  view-distance-get: "{target-player}'s maximum view distance is currently set to {chunks} chunks"
  self-view-distance-get: "Your maximum view distance is currently set to {chunks} chunks"

  ping-mode-change-self: "You turned {mode} ping mode!"
  ping-mode-change-others: "The player's ping mode is now {mode}!"
  ping-mode-change: "Your ping mode is now {mode}!"
  ping-optimised: "Your view distance has been optimised for ping!"
  ping-info: "Ping mode is turned {mode} for you!"
  ping-mode-disabled: "Ping mode is disabled on this server!"

  dynamic-mode-change: "Dynamic mode is now {mode}!"
  dynamic-info: "Dynamic mode is turned {mode}!"
  dynamic-mode-reduced: "Your view distance has been reduced due to dynamic mode!"

  not-player: "You must be a player to do this!"
  not-offline-cmd: "This command does not currently support offline players!"

  no-keys-ping: "There are missing config keys for ping mode. Please contact the server admin!"
  no-keys-dynamic: "There are missing config keys for dynamic mode. Please contact the server admin!"


commands:
  get: "Displays a player's max view distance"
  help: "Displays the plugin's help message"
  reset: "Resets a player's max view distance"
  set: "Set your own max view distance or the max view distance of another player"
  setonline: "Sets the max view distance of all online players"
  ping: "Toggles ping mode"
  dynamic: "Toggles dynamic mode"
```