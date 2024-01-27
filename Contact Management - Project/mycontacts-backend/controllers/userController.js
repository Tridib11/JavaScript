//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req,res)=>{
    res.json({message:"Register the user"})
});

//@desc Login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"Login user"})
});

//@desc Current user
//@route POST /api/users/current
//@access public

const currentUser = asyncHandler(async (req,res)=>{
    res.json({message:"Current user information"})
});

module.exports={
    registerUser,
    loginUser,
    currentUser,
}