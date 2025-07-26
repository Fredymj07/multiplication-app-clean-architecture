interface CreateTableOptions {
  base: number;
  limit?: number;
}

interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase {
  constructor(
    /**
     * DI - Dependency Injection
     */
  ) {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = '';
    let headerMessage = `
    ==================================
              Tabla del ${base}
    ==================================\n`;

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    };

    outputMessage = headerMessage + outputMessage;

    return outputMessage;
  }
}