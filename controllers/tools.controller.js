let tools = [
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

module.exports.updateATool = (req, res) => {
    const { id } = req.params;
    const updatedOne = tools.find(tool => tool.id == id);
    updatedOne.id = Number(id);
    updatedOne.tool = req.body?.tool;
    res.send(tools);
}

module.exports.deleteATool = (req, res) => {
    const { id } = req.params;
    tools = tools.filter(tool => tool.id != id);
    res.send(tools);
}