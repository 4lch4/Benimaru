@4lch4/benimaru
===============

A CLI utility to help with connecting/managing my tech infrastructure.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@4lch4/benimaru.svg)](https://npmjs.org/package/@4lch4/benimaru)
[![Downloads/week](https://img.shields.io/npm/dw/@4lch4/benimaru.svg)](https://npmjs.org/package/@4lch4/benimaru)
[![License](https://img.shields.io/npm/l/@4lch4/benimaru.svg)](https://github.com/4lch4/benimaru/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @4lch4/benimaru
$ benimaru COMMAND
running command...
$ benimaru (-v|--version|version)
@4lch4/benimaru/0.0.0 darwin-arm64 node-v16.6.1
$ benimaru --help [COMMAND]
USAGE
  $ benimaru COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`benimaru autocomplete [SHELL]`](#benimaru-autocomplete-shell)
* [`benimaru commands`](#benimaru-commands)
* [`benimaru connect [FILE]`](#benimaru-connect-file)
* [`benimaru hello [FILE]`](#benimaru-hello-file)
* [`benimaru help [COMMAND]`](#benimaru-help-command)

## `benimaru autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ benimaru autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ benimaru autocomplete
  $ benimaru autocomplete bash
  $ benimaru autocomplete zsh
  $ benimaru autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `benimaru commands`

list all the commands

```
USAGE
  $ benimaru commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_

## `benimaru connect [FILE]`

describe the command here

```
USAGE
  $ benimaru connect [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

## `benimaru hello [FILE]`

describe the command here

```
USAGE
  $ benimaru hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ benimaru hello
  hello world from ./src/hello.ts!
```

## `benimaru help [COMMAND]`

display help for benimaru

```
USAGE
  $ benimaru help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
