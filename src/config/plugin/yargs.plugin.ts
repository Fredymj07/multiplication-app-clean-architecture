import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base number for multiplication table',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table in the console',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'Name of the file to save',
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'Destination folder to save the file',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw 'Error: The base must be a number';

    if (argv.b < 1) throw 'Error: The number must be greater than 1';

    return true;
  })
  .parseSync();
