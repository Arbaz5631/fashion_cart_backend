import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    productBrand:{
        type:String,
        required:true
    },
    productDetail: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required: true,
    },
    url:{
        type:String,
        
    }
})
productSchema.method({
    saveObj: async function () {
        return this.save();
    },
});
productSchema.static({
    getDocuments: function (requestData, selectionKeys, offset, limit, sortingKey) {
        return this.find(requestData, selectionKeys).sort(sortingKey).skip(parseInt(offset)).limit(parseInt(limit)).exec();
    },
    findObj: function (findObj) {
        return this.find(findObj);
    },
    findOneObj: function (findObj) {
        return this.findOne(findObj);
    },
    countObj: function (findObj) {
        return this.count(findObj);
    },
    findOneAndUpdateObj: function (findObj, updateObj) {
        return this.findOneAndUpdate(findObj, updateObj, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true,
        });
    },
    findObjWithAggregate: function (findObj) {
        return this.aggregate(findObj);
    },
});
export default mongoose.model("my-products", productSchema);