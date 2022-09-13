const CrossStitch = {

Grid: class {
    constructor(width, height, data) {
        this.width = width
        this.height = height
        this.data = data
        if (this.data.length !== this.height * this.width) {
            throw `Data has the wrong length ${this.height * this.width} != ${this.data.length}`
        }
    }

    static from(data) {
        const flatData = []
        const height = data.length
        const width = data[0].length
        for (const row of data) {
            if (row.length !== width) {
                throw `Inconsistent row length should be length ${width} row:${row}`
            }
            for (const value of row) {
                flatData.push(value)
            }
        }
        const grid = new CrossStitch.Grid(width, height, flatData)
        return grid
    }

    get(x, y) {
        return this.data[this.pointToIndex(x, y)]
    }

    set(x, y, value) {
        if (value !== 0 && value !== 1) {
            throw `Value can only be 0 or 1, not ${value}`
        }
        this.data[this.pointToIndex(x, y)] = value
    }

    toString() {
        let outputString = ''
        
        return outputString
    }
    
    // index = width * y + x
    indexToPoint(index) {
        return [
            index % this.width,
            Math.floor(index / this.width)
        ]
    }

    pointToIndex(x, y) {
        if (x < 0 || x > this.width) {
            throw `x out of bounds x:${x} should be [0, ${this.width}]`
        }
        if (y < 0 || y > this.height) {
            throw `y out of bounds y:${y} should be [0, ${this.height}]`
        }
        return (y * this.width) + x
    }

    stitches() {
        const stitches = []
        for (let index = 0; index < this.data.length; index++) {
            if (this.data[index] !== 0) {
                stitches.push(this.indexToPoint(index))
            }
        }
        return stitches
    }
},

Letter: class {
    constructor(letter, grid) {
        this.letter = letter
        this.grid = grid
    }
}
}
CrossStitch.letters = {
    a: new CrossStitch.Letter("a", CrossStitch.Grid.from([
        [0, 1, 1, 0],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 1]
    ])),
    b: new CrossStitch.Letter("b", CrossStitch.Grid.from([
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
    ])),
    c: new CrossStitch.Letter("c", CrossStitch.Grid.from([
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [0, 1, 1],
    ])),
    d: new CrossStitch.Letter("d", CrossStitch.Grid.from([
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
    ])),
    e: new CrossStitch.Letter("e", CrossStitch.Grid.from([
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 1]
    ])),
    f: new CrossStitch.Letter("f", CrossStitch.Grid.from([
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
    ])),
    g: new CrossStitch.Letter("g", CrossStitch.Grid.from([
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 1, 1, 0],
    ])),
    h: new CrossStitch.Letter("h", CrossStitch.Grid.from([
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ])),
    i: new CrossStitch.Letter("i", CrossStitch.Grid.from([
        [1],
        [0],
        [1],
        [1],
        [1],
        [1],
        [1],
    ])),
    j: new CrossStitch.Letter("j", CrossStitch.Grid.from([
        [0, 1],
        [0, 0],
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1],
        [1, 0],
    ])),
    k: new CrossStitch.Letter("k", CrossStitch.Grid.from([
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
    ])),
    l: new CrossStitch.Letter("l", CrossStitch.Grid.from([
        [1],
        [1],
        [1],
        [1],
        [1],
        [1],
        [1],
    ])),
    m: new CrossStitch.Letter("m", CrossStitch.Grid.from([
        [1, 1, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
    ])),
    n: new CrossStitch.Letter("n", CrossStitch.Grid.from([
        [1, 1, 1, 0,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
    ])),
    o: new CrossStitch.Letter("o", CrossStitch.Grid.from([
        [0, 1, 1, 0,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [0, 1, 1, 0,],
    ])),
    p: new CrossStitch.Letter("p", CrossStitch.Grid.from([
        [1, 1, 1, 0,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 1, 1, 0,],
        [1, 0, 0, 0,],
        [1, 0, 0, 0,],
    ])),
    q: new CrossStitch.Letter("q", CrossStitch.Grid.from([
        [0, 1, 1, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [0, 1, 1, 1,],
        [0, 0, 0, 1,],
        [0, 0, 0, 1,],
    ])),
    r: new CrossStitch.Letter("r", CrossStitch.Grid.from([
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
    ])),
    s: new CrossStitch.Letter("s", CrossStitch.Grid.from([
        [1, 1, 1],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
    ])),
    t: new CrossStitch.Letter("t", CrossStitch.Grid.from([
        [1, 0],
        [1, 0],
        [1, 1],
        [1, 0],
        [1, 0],
        [1, 0],
        [0, 1],
    ])),
    u: new CrossStitch.Letter("u", CrossStitch.Grid.from([
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [0, 1, 1, 1,],
    ])),
    v: new CrossStitch.Letter("v", CrossStitch.Grid.from([
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
    ])),
    w: new CrossStitch.Letter("w", CrossStitch.Grid.from([
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0],
    ])),
    x: new CrossStitch.Letter("x", CrossStitch.Grid.from([
        [1, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 1],
    ])),
    y: new CrossStitch.Letter("y", CrossStitch.Grid.from([
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
    ])),
    z: new CrossStitch.Letter("z", CrossStitch.Grid.from([
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
    ])),
    A: new CrossStitch.Letter("A", CrossStitch.Grid.from([
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
    ])),
    B: new CrossStitch.Letter("B", CrossStitch.Grid.from([
        [1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
    ])),
    C: new CrossStitch.Letter("C", CrossStitch.Grid.from([
        [0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 0],
    ])),
    D: new CrossStitch.Letter("D", CrossStitch.Grid.from([
        [1, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 0, 0]
    ])),
    E: new CrossStitch.Letter("E", CrossStitch.Grid.from([
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ])),
    F: new CrossStitch.Letter("F", CrossStitch.Grid.from([
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
    ])),
    G: new CrossStitch.Letter("G", CrossStitch.Grid.from([
        [0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1],
    ])),
    H: new CrossStitch.Letter("H", CrossStitch.Grid.from([
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
    ])),
    I: new CrossStitch.Letter("I", CrossStitch.Grid.from([
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
    ])),
    J: new CrossStitch.Letter("J", CrossStitch.Grid.from([
        [0, 0, 1, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [1, 1, 0, 0],
    ])),
    K: new CrossStitch.Letter("K", CrossStitch.Grid.from([
        [1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1],
    ])),
    L: new CrossStitch.Letter("L", CrossStitch.Grid.from([
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ])),
    M: new CrossStitch.Letter("M", CrossStitch.Grid.from([
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
    ])),
    N: new CrossStitch.Letter("N", CrossStitch.Grid.from([
        [1, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
    ])),
    O: new CrossStitch.Letter("O", CrossStitch.Grid.from([
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
    ])),
    P: new CrossStitch.Letter("P", CrossStitch.Grid.from([
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
    ])),
    Q: new CrossStitch.Letter("Q", CrossStitch.Grid.from([
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1],
    ])),
    R: new CrossStitch.Letter("R", CrossStitch.Grid.from([
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 0, 0, 1],
    ])),
    S: new CrossStitch.Letter("S", CrossStitch.Grid.from([
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
    ])),
    T: new CrossStitch.Letter("T", CrossStitch.Grid.from([
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ])),
    U: new CrossStitch.Letter("U", CrossStitch.Grid.from([
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 0],
    ])),
    V: new CrossStitch.Letter("V", CrossStitch.Grid.from([
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
    ])),
    W: new CrossStitch.Letter("W", CrossStitch.Grid.from([
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0],
    ])),
    X: new CrossStitch.Letter("X", CrossStitch.Grid.from([
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ])),
    Y: new CrossStitch.Letter("Y", CrossStitch.Grid.from([
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ])),
    Z: new CrossStitch.Letter("Z", CrossStitch.Grid.from([
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ])),
    " ": new CrossStitch.Letter(" ", CrossStitch.Grid.from([
        [0],
        [0],
        [0],
        [0],
        [0]
    ])),
    ".": new CrossStitch.Letter(".", CrossStitch.Grid.from([
        [1],
        [1],
    ])),
    ",": new CrossStitch.Letter(",", CrossStitch.Grid.from([
        [0, 1],
        [0, 1],
        [1, 0],
    ])),
    "-": new CrossStitch.Letter("-", CrossStitch.Grid.from([
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0],
    ])),
    "!": new CrossStitch.Letter("!", CrossStitch.Grid.from([
        [1],
        [1],
        [1],
        [1],
        [1],
        [0],
        [1],
    ])),
    "?": new CrossStitch.Letter("?", CrossStitch.Grid.from([
        [1, 1, 1, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 0],
    ])),
    "'": new CrossStitch.Letter("'", CrossStitch.Grid.from([
        [1],
        [1],
        [0],
        [0],
        [0],
        [0],
        [0],
    ])),
}
  
CrossStitch.gridArrayToGrid = function(gridArray) {
    if (gridArray.length === 0) {
        return new CrossStitch.Grid(0, 0, [])
    }
    // one column between each letter
    let width = gridArray.length - 1
    let height = 0
    for (const grid of gridArray) {
        width += grid.width
        height = Math.max(height, grid.height)
    }
    // 2 blank lines, top and bottom
    height += 2
    const data = new Array(width * height).fill(0)
    const grid = new CrossStitch.Grid(width, height, data)
    let startX = 0
    for (const subGrid of gridArray) {
        const startY = (height - subGrid.height) - 1
        const stiches = subGrid.stitches()
        for (const stitch of stiches) {
            grid.set(startX + stitch[0], startY + stitch[1], 1)
        }
        startX += subGrid.width + 1
    }
    return grid
}

CrossStitch.calculateGrid = function(text) {
    const textArray = Array.from(text)
    const gridArray = []
    for (const letter of textArray) {
        if (letter in CrossStitch.letters) {
            gridArray.push(CrossStitch.letters[letter].grid)
        }
    }
    const grid = CrossStitch.gridArrayToGrid(gridArray)
    return grid
}

CrossStitch.canvasSize = function(grid) {
    // We want a width of around 1200, but a minimum pixel size of 5
    const pixelSize = Math.max(5, 1200 / grid.width)
    const totalWidth = (pixelSize) * grid.width
    const totalHeight =  (pixelSize) * grid.height
    return {pixelSize, totalWidth, totalHeight}
}

CrossStitch.drawGrid = function(canvas, grid) {
    const {pixelSize, totalWidth, totalHeight} = CrossStitch.canvasSize(grid)
    // Our grid to pixel size
    canvas.width = totalWidth
    canvas.height = totalHeight
    const context = canvas.getContext("2d")
    // Draw the stitches
    context.fillStyle = "grey"
    const stiches = grid.stitches()
    for (const stitch of stiches) {
        context.rect(
            stitch[0] * pixelSize,
            stitch[1] * pixelSize,
            pixelSize - 1,
            pixelSize - 1
        )
        context.fill()
    }
    // draw the vertical lines
    for (let i = 1; i < grid.width; ++i) {
        context.moveTo(i * pixelSize, 0)
        context.lineTo(i * pixelSize, totalHeight)
        context.stroke()
    }
    // draw the horizontal lines
    for (let i = 1; i < grid.height; ++i) {
        context.moveTo(0, i * pixelSize)
        context.lineTo(totalWidth, i * pixelSize)
        context.stroke()
    }
}

CrossStitch.onTextInput = function() {
    const textInput = document.getElementById("text-input")
    const text = textInput.value
    const canvas1 = document.getElementById("text-output-1")
    const grid = CrossStitch.calculateGrid(text)
    CrossStitch.drawGrid(canvas1, grid)
  }
