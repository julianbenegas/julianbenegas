import fs from 'fs'
import path from 'path'

// todo
// read /pages/ and check on each if it has tagMeta
// If it's a tag, read /pages/[tag] and check if it has eventMeta
// Pass all events in an array, and all tags in an array as well.
// Done!

const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/
const DIR = path?.join(process.cwd(), './pages/events/')
const files =
  fs?.readdirSync && fs.readdirSync(DIR)?.filter(file => file.endsWith('.mdx'))

export default () => {
  if (!files) return []
  return files
    .map(file => {
      const name = path.join(DIR, file)
      const contents = fs.readFileSync(name, 'utf8')
      const match = META.exec(contents)
      if (!match || typeof match[1] !== 'string')
        throw new Error(`${name} needs to export const meta = {}`)

      const meta = eval('(' + match[1] + ')')

      return {
        ...meta,
        path: '/thoughts/' + file.replace(/\.mdx?$/, '')
      }
    })
    .filter(meta => meta.published)
}
