import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base           : number;
  limit          : number;
  showTable      : boolean;
  fileName       : string;
  fileDestination: string;
}

export class ServerApp {

  static run({base, limit, showTable, fileName, fileDestination}: RunOptions) {
    console.log('Server is running...');
    const table = new CreateTable().execute({base, limit});
    const saveFile = new SaveFile().execute({
      fileContent    : table,
      fileName       : fileName,
      fileDestination:  fileDestination
    });

    if (showTable) console.log(table);

    (saveFile)
      ? console.log('File saved successfully!')
      : console.error('Failed to save file.');
  }
}