import {ConcreteStateA, ConcreteStateB} from './ConcreteState'
import { Context } from './Context'
/**
 * The client code.
 */
const context = new Context(new ConcreteStateA());
context.request1();
context.request2();