
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const dirRelativeToPublicFolder = 'stuff/sites';
    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    const filenames = fs.readdirSync(dir);
    const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name));

    return NextResponse.json(images);
}
