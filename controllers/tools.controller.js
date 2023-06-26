const tools = [
    { id: 1, tool: "Hammer" },
    { id: 2, tool: "Hammer2" },
    { id: 3, tool: "Hammer3" },
]

module.exports.getAllTools = (req, res) => {
    res.send(tools);
}

module.exports.postATool = (req, res) => {
    const newTool = req.body;
    tools.push(newTool);
    res.send(tools);
}

module.exports.getATool = (req, res) => {
    const id = req.params.id;
    const selected = tools.find(tool => tool.id == id)
    res.send(selected)
}