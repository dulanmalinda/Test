module.exports = (mongoose) => {
    var schema = mongoose.Schema({

        invId: { type: mongoose.Schema.Types.Mixed, ref: 'invoice' },
        name: { type: mongoose.Schema.Types.Mixed, ref: 'invoice' },
        qty: Number,
        disc: Number,
        discPrice: Number,
        unitPrice: Number,
        itemId: String,
        dateTime: Date,
        _active: Boolean,
        brandName: String,
        branchCode: String,
        payMethod: ["CASH", "VISA", "MASTER_CARD", "AMEX", "ONLINE"]

    });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.purchaseId = _id;
        return object;
    });

    const Purchase = mongoose.model("purchase", schema);
    return Purchase;
};