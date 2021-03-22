import { Abstraction } from './Abstraction'
/**
 * You can extend the Abstraction without changing the Implementation classes.
 */
export class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with:\n${result}`;
    }
}