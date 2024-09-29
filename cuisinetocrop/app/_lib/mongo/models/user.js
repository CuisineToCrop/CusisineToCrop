const mongoose = require( 'mongoose')

const userSchema = new mongoose.Schema ({
    userID: {type:String, required:true, unique:true},
    restaurantName:{type:String, required:true}, 
    zipCode: {type:Int64, required:true}

});
export const User = mongoose.models.User || mongoose.model("User", userSchema);
