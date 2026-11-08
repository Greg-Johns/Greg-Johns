import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  const dirRelativeToPublicFolder = 'stuff/sites';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const filenames = await fs.readdir(dir);
  const images = filenames.map((name) => path.join('/', dirRelativeToPublicFolder, name));

  return NextResponse.json(images);
}
