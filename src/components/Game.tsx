let knightPosition = [1, 0];
let rookPosition = [0, 0];
let observer: any = null;

function emitChange(): void {
    observer(knightPosition, rookPosition);
}

export function observe(o: any): void {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }

    observer = o;
    emitChange();
}

export function moveKnight(toX: number, toY: number): void {
    knightPosition = [toX, toY];
    emitChange();
}

export function moveRook(toX: number, toY: number): void {
    rookPosition = [toX, toY];
    emitChange();
}

export function canMoveKnight(toX: number, toY: number): boolean {
    const [x, y]: number[] = knightPosition;
    const dx: number = Math.abs(toX - x);
    const dy: number = Math.abs(toY - y);
    return ((dx === 2 && dy === 1) || (dx === 1 && dy === 2));
}


export function canMoveRook(toX: number, toY: number): boolean {
    const [x, y]: number[] = rookPosition;
    const dx: number = Math.abs(toX - x);
    const dy: number = Math.abs(toY - y);
    debugger

    return ((dx === 0 ) || (dy === 0));
}
