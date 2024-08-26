import { autocomplete } from '@/servers/home/clitest';
import { Argument } from './lib/argument';
import { Command } from './lib/command';
import { Option } from './lib/option';

export const program = (ns?: NS) => new Command(ns);

export const createCommand = (ns?: NS, name?: string) => new Command(ns, name);
export const createOption = (flags: string, description: string) => new Option(flags, description);
export const createArgument = (name: string, description: string) => new Argument(name, description);

/**
 * Expose classes
 */

export { Command } from './lib/command';
export { Option } from './lib/option';
export { Argument } from './lib/argument';
export { Help } from './lib/help';
export { InvalidArgumentError, CommanderError } from './lib/error';
