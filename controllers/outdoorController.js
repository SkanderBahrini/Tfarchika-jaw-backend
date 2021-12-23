import * as outdoorService from '../services/outodoorService'

// create event 
const createActicity = async(req,res)=> {

    try {

        const response = await outdoorService.createNewactivity(req.body)

        res.status(201).send({message: "Outdoor activity created", response })
        
        
    } catch (error) {
        
        res.send(error)
    }
}

// get event

const getActivity =  async(req,res) => {

    try {

        const response = await outdoorService.getActivitylist()
                res.status(201).send({message: "Outdoor activity here ", response })
        
    } catch (error) {
        
        res.send(error)
    }
}

// get event filter

const getAcivityfilter =  async(req,res) => {

    try {

        const response = await  outdoorService.getAcitivitylistfilter(req.body)
        res.status(201).send({message: "Outdoor activity here according to your research ", response })
        
    } catch (error) {

        res.send(error)
        
    }
}






export {createActicity, getActivity, getAcivityfilter}