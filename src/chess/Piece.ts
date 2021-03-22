import { Position } from './Position'

import { 
    Color,
    File, 
    Rank } from './TypesChess'


export class Piece{
    
    movement:Movimiento;
    protected position: Position
    constructor(
        private readonly color: Color,
        file: File,
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }

    move(){
        this.movement.move();
    }

    }