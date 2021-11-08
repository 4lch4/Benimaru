import { flags } from '@oclif/command'
import { BaseCommand, ConfigFileUtil } from '../lib'

export default class Connect extends BaseCommand {
  static description = 'describe the command here'

  static flags = {
    ...BaseCommand.flags,
    host: flags.enum({
      options: ['']
    })
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Connect)
    const util = new ConfigFileUtil({

    })

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/jisodl0/Development/alcha/cli/benimaru/src/commands/connect.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
