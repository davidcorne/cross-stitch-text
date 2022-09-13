const CrossStitch = {}

class Grid {
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
        const grid = new Grid(width, height, flatData)
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
}

class Letter {
    constructor(letter, grid) {
        this.letter = letter
        this.grid = grid
    }
}
CrossStitch.letters = {
    a: new Letter("a", Grid.from([
        [0, 1, 1, 0],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 1]
    ])),
    b: new Letter("b", Grid.from([
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
    ])),
    c: new Letter("c", Grid.from([
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [0, 1, 1],
    ])),
    d: new Letter("d", Grid.from([
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
    ])),
    e: new Letter("e", Grid.from([
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 1]
    ])),
    f: new Letter("f", Grid.from([
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
    ])),
    g: new Letter("g", Grid.from([
        [0, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 1, 1, 0],
    ])),
    h: new Letter("h", Grid.from([
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ])),
    i: new Letter("i", Grid.from([
        [1],
        [0],
        [1],
        [1],
        [1],
        [1],
        [1],
    ])),
    j: new Letter("j", Grid.from([
        [0, 1],
        [0, 0],
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1],
        [0, 1],
        [1, 0],
    ])),
    k: new Letter("k", Grid.from([
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
    ])),
    l: new Letter("l", Grid.from([
        [1],
        [1],
        [1],
        [1],
        [1],
        [1],
        [1],
    ])),
    m: new Letter("m", Grid.from([
        [1, 1, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
    ])),
    n: new Letter("n", Grid.from([
        [1, 1, 1, 0,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
    ])),
    o: new Letter("o", Grid.from([
        [0, 1, 1, 0,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [0, 1, 1, 0,],
    ])),
    p: new Letter("p", Grid.from([
        [1, 1, 1, 0,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 1, 1, 0,],
        [1, 0, 0, 0,],
        [1, 0, 0, 0,],
    ])),
    q: new Letter("q", Grid.from([
        [0, 1, 1, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [0, 1, 1, 1,],
        [0, 0, 0, 1,],
        [0, 0, 0, 1,],
    ])),
    r: new Letter("r", Grid.from([
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
    ])),
    s: new Letter("s", Grid.from([
        [1, 1, 1],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
    ])),
    t: new Letter("t", Grid.from([
        [1, 0],
        [1, 0],
        [1, 1],
        [1, 0],
        [1, 0],
        [1, 0],
        [0, 1],
    ])),
    u: new Letter("u", Grid.from([
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [1, 0, 0, 1,],
        [0, 1, 1, 1,],
    ])),
    v: new Letter("v", Grid.from([
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
    ])),
    w: new Letter("w", Grid.from([
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0],
    ])),
    x: new Letter("x", Grid.from([
        [1, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 1],
    ])),
    y: new Letter("y", Grid.from([
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 0, 0],
    ])),
    z: new Letter("z", Grid.from([
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
    ])),
    D: new Letter("D", Grid.from([
        [1, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 0, 0]
    ])),
    " ": new Letter(" ", Grid.from([
        [0],
        [0],
        [0],
        [0],
        [0]
    ]))
}
  
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

CrossStitch.gridArrayToGrid = function(gridArray) {
    if (gridArray.length === 0) {
        return new Grid(0, 0, [])
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
    const grid = new Grid(width, height, data)
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
    // return new Grid(25, 9, [
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    //     [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    //     [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    //     [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    //     [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    //     [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    //     [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // ])
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
}

CrossStitch.onTextInput = function() {
    const textInput = document.getElementById("text-input")
    const text = textInput.value
    // const text = "aDDaDaafrs "
    //const text = "aD"
    const canvas1 = document.getElementById("text-output-1")
    const grid = CrossStitch.calculateGrid(text)
    CrossStitch.drawGrid(canvas1, grid)
    // const canvas2 = document.getElementById("text-output-2")
    // const grid2 = new Grid(6, 9, [
    //         [0, 0, 0, 0, 0, 0],
    //         [1, 1, 1, 1, 0, 0],
    //         [1, 0, 0, 0, 1, 0],
    //         [1, 0, 0, 0, 0, 1],
    //         [1, 0, 0, 0, 0, 1],
    //         [1, 0, 0, 0, 0, 1],
    //         [1, 0, 0, 0, 1, 0],
    //         [1, 1, 1, 1, 0, 0],
    //         [0, 0, 0, 0, 0, 0]
    // ])
    // CrossStitch.drawGrid(canvas2, grid2)
  }
