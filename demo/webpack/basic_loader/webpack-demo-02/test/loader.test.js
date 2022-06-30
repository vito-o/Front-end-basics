const compiler = require("./compiler");

test('Inserts name and outputs JavaScript', async () => {
    const stats = await compiler('example.txt');
    console.log(stats.toJson())
    const output = stats.toJson().modules[0].source();

    expect(output).toBe(`export default "Hey Alice!\\n"`)
})