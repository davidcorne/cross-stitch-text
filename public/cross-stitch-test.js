CrossStitchTest = {}

CrossStitchTest.output = function(text) {
    const output = document.createElement("p")
    output.innerText = text
    document.body.appendChild(output)
}

CrossStitchTest.error = function(text) {
    const stack = new Error().stack
    const stackArray = stack.split("\n")

    CrossStitchTest.output(`${stackArray.join("\n")}
    ${text}`)
}

CrossStitchTest.assertTrue = function(result) {
    if (!result) {
        CrossStitchTest.error(`FAIL: expected ${result} to be truthy`)
    }
}

CrossStitchTest.assertEqual = function(result, expected) {
    if (result !== expected) {
        CrossStitchTest.error(`FAIL: result: ${result} expected: ${expected}`)
    }
}

CrossStitchTest.testFrom = function() {
    const grid = Grid.from([
        [1, 1, 1],
        [0, 0, 0]
    ])
    this.assertEqual(grid.width, 3)
    this.assertEqual(grid.height, 2)
    this.assertEqual(grid.data[0], 1)
    this.assertEqual(grid.data[1], 1)
    this.assertEqual(grid.data[2], 1)
    this.assertEqual(grid.data[3], 0)
    this.assertEqual(grid.data[4], 0)
    this.assertEqual(grid.data[5], 0)
}

CrossStitchTest.testGet = function() {
    const grid = Grid.from([
        [1, 0, 1],
        [1, 1, 0],
        [0, 1, 1],
    ])
    this.assertEqual(grid.get(0, 0), 1)
    this.assertEqual(grid.get(0, 1), 0)
    this.assertEqual(grid.get(0, 2), 1)

    this.assertEqual(grid.get(1, 0), 1)
    this.assertEqual(grid.get(1, 1), 1)
    this.assertEqual(grid.get(1, 2), 0)

    this.assertEqual(grid.get(2, 0), 0)
    this.assertEqual(grid.get(2, 1), 1)
    this.assertEqual(grid.get(2, 2), 1)
}

CrossStitchTest.testSet = function() {
    // [0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0],
    const grid = new Grid(5, 2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    
    grid.set(1, 0, 1)
    this.assertEqual(grid.data[1], 1)
    
    grid.set(1, 0, 1)
    this.assertEqual(grid.data[1], 1)
    
    grid.set(2, 1, 1)
    this.assertEqual(grid.data[1], 1)
    
    grid.set(2, 4, 1)
    this.assertEqual(grid.data[9], 1)
}

CrossStitchTest.testSpace = function() {
    const grid = Grid.from([
        [0],
        [0],
        [0],
        [0],
        [0]
    ])
    console.log("Width ", grid.width, " Height ", grid.height)
    this.assertEqual(grid.width, 1)
    this.assertEqual(grid.height, 5)
}

CrossStitchTest.testToString = function() {
    const grid = Grid.from(
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 1, 1, 1],
    )
    const output = grid.toString()
    this.assertTrue(output.includes("1 0 0 1"))
    this.assertTrue(output.includes("0 1 1 0"))
    this.assertTrue(output.includes("1 1 1 1"))
}

CrossStitchTest.testStitches = function() {
    const grid = Grid.from([
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 1, 1, 1],
    ])
    const stitches = grid.stitches()
    this.assertEqual(stitches.length, 8)
    this.assertEqual(stitches[0], [0, 0])
    this.assertEqual(stitches[1], [3, 0])
    this.assertEqual(stitches[2], [1, 1])
    this.assertEqual(stitches[3], [2, 1])
    this.assertEqual(stitches[4], [0, 2])
    this.assertEqual(stitches[5], [1, 2])
    this.assertEqual(stitches[6], [2, 2])
    this.assertEqual(stitches[7], [3, 2])
}

CrossStitchTest.runTests = function() {
    try {
        CrossStitchTest.testSpace()
        CrossStitchTest.testFrom()
        CrossStitchTest.testGet()
        CrossStitchTest.testSet()
        // CrossStitchTest.testToString()
        CrossStitchTest.testStitches()
    } catch (error) {
        CrossStitchTest.error(`FAIL: error caught: ${error}`)
        throw error
    }
}