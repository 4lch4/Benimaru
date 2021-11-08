import { Command, flags } from '@oclif/command'

export abstract class BaseCommand extends Command {
  static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version({ char: 'v' })
  }
}
