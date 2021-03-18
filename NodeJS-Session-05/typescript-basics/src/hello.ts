import { writeFile } from 'fs'
import { join } from 'path'
import { fun1 } from './lib'

writeFile(
  join(__dirname, 'file.txt'),
  'Hello World!',
  (err) => {
    if (err) console.error(err)
  }
)

fun1();