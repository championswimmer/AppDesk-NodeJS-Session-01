import { writeFile } from 'fs'
import { join } from 'path'

writeFile(
  join(__dirname, 'file.txt'),
  'Hello World!',
  (err) => {
    if (err) console.error(err)
  }
)