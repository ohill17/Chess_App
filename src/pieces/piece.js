export default class Piece {
    constructor(type, color) {
        this.type = type;   // "pawn", "knight", "bishop", "rook", "queen", "king"
        this.color = color; // "white" or "black"
        this.hasMoved = false; // Useful for castling or pawn first move
    }
}