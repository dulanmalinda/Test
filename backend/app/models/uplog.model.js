module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        data: String
    }, { timestamps: true })
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id
        return object
    })
    const Uplog = mongoose.model("Uplog", schema, "Uplog")
    return Uplog
}