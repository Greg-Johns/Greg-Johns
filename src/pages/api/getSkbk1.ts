import fs from 'fs'
import path from 'path'

export default (req: any, res: any) => {
  const dirRelativeToPublicFolder = 'stuff/sketchbook1'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

  res.statusCode = 200
  res.json(images);
}
