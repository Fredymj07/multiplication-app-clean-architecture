import fs from 'fs';

interface Options {
  fileContent     : string;
  fileName   ?    : string;
  fileDestination?: string;
}

interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor(
    /**
     * DI - Dependency Injection
     */
  ) {}

  execute({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table'
  }: Options): boolean {

    try {
      fs.mkdirSync(fileDestination, {recursive: true});
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error('Error saving file:', error);
      return false;
    }
  }
}
