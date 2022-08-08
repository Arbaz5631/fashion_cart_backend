import mongoose from "mongoose"
import {isEmail} from "validator"
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        validate:{
            validator:isEmail,
            isAsync:false,
            message:"Please enter email in correct format"
        }
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    }
})
userSchema.method({
    saveObj: async function () {
        return this.save();
    },
});
userSchema.static({
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
export default mongoose.model("user-schema", userSchema);