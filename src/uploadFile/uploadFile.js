import Joi from 'joi';
import multer from 'multer'


const fileUpload=()=>{
  const storage = multer.diskStorage({})
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//             cb(null, 'uploads/')
// },
//     filename: function (req, file, cb) {

//         cb(null, uuidv4() + "-" + file.originalname)
//     }
// })
function fileFilter (req, file, cb) {
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  //   const applyJobSchema=Joi.object({
  //     jobId:Joi.string().hex().length(24),
  //     technicalSkills:Joi.array().items(Joi.string()).required(),
  //     softSkills:Joi.array().items(Joi.string()).required(),    
  // })
    // To reject this file pass `false`, like so:
    if(file.mimetype.endsWith('pdf')){
      // applyJobSchema.validate(req.body,{abortEarly: false})
        cb(null, true)
    }else{
    cb(new Error('I don\'t have a clue!'))
    }
  
    // To accept the file pass `true`, like so:
    // cb(null, true)
  
    // // You can always pass an error if something goes wrong:
  
  }

const upload = multer({ storage,fileFilter })
return upload
}
const singelFileUpload=(fileName)=>fileUpload().single(fileName)

export{
    singelFileUpload
}

