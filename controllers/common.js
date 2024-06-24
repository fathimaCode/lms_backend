const createLMS = async (Model, req,res)=>{
    try{
        const document = new Model(req.body)
        await document.save()
        res.status(200).send(document)
    }catch(error){
        res.status(500).send(error)
    }
}
const getAllLMS = async (Model, req,res)=>{
    try{
        const documents = await Model.find()
        res.send(documents)
    }catch(error){
        res.status(500).send(error)
    }
}
const getById = async (Model, req,res)=>{
    try{
        const document = await Model.findById(req.params.id)
        console.log("getid:",document)
        if(!document){
            return res.status(400).send()
        }
        res.send(document)
    }catch(error){
        res.status(500).send(error)
    }
}
const updateById = async (Model, req,res)=>{
    try{
        const document = await Model.findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators:true})
        if(!document){
            return res.status(400).send()
        }
        res.send(document)
    }catch(error){
        res.status(500).send(error)
    }
}
const deleteById = async (Model, req,res)=>{
    try{
        console.log("delete hitted")
        console.log(`${req.params.id}`)
        const document = Model.findByIdAndDelete(req.params.id)
        console.log(document)
        if(!document){
            return res.status(400).send() 
        }
        res.send(document)
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports={
    createLMS,
    getAllLMS,
    getById, 
    updateById,
    deleteById
}