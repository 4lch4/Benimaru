import { readdir, readFile } from 'fs-extra'
import { resolve } from 'path'

async function findInclude(content: string): Promise<string | boolean> {
  for (const line of content.split('\n')) {
    if (line.toLowerCase().startsWith('include')) {
      return line
    }
  }

  return false
}

/** A utility class for interacting with SSH Config files. */
export class ConfigFileUtil {
  configFiles: string[] = []

  /**
   * Instantiate a new ConfigFileUtil class with the given path to the root
   * SSH Config file. If the file contains an Include statement then the other
   * files will be read and added as well.
   *
   * @param rootConfig The path to the SSH Config file.
   */
  constructor(private rootConfig: string) {}

  async init() {
    try {
      const rootConfig = await readFile(this.rootConfig, 'UTF-8')
      const hasInclude = await findInclude(rootConfig)

      if (typeof hasInclude === 'string') {
        const tmp = await readdir(
          resolve(hasInclude.substring(hasInclude.indexOf(' ') + 1))
        )

        console.log(tmp)
      }

      // this.configFiles = configFiles.filter(file => file.endsWith('.conf'))
      // this.configFiles.push(this.rootConfig)
    } catch (error) {
      return { error }
    }
  }
}

const cfgUtil = new ConfigFileUtil('/Users/jisodl0/.ssh/config')
cfgUtil.init().then(console.log).catch(console.error)
