const ToDoModel = require("../models/BlogModal");

module.exports.getBlog = async (req, res) => {
    const blog = await ToDoModel.find();
    res.send(blog);
}

module.exports.saveBlog = (req, res) => {
    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then(() => res.set(201).send("Added Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.deleteBlog = (req, res) => {
    const { _id } = req.body;

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateBlog = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}