module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        branchCode: String,
        branchName: String,
        branchAddress: String,
        branchPhone: String,
        _active: Boolean
    });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.Bid = _id;
        return object;
    });
    const Branch = mongoose.model("Branch", schema, "Branch");
    return Branch;
};