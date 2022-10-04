const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PrescriptionSchema=mongoose.Schema({
    appointment:{
        type:Schema.Types.ObjectId
    },
    medicines:{
        type:Schema.Types.ObjectId
    },
    pharmacist:{
        type:Schema.Types.ObjectId
    },
    paid:{
        type:Boolean
    }
})

module.exports=Precription=mongoose.model('prescription',PrescriptionSchema);