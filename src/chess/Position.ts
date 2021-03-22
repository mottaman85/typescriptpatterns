import { 
    File, 
    Rank } from './TypesChess'
    
export class Position {
    constructor(
        private file:File,
        private rank: Rank
    ){
        
    }
}