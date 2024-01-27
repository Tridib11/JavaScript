//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({
    message: "Get all contacts",
  });
};

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({
    message: `Get contact of ${req.params.id}`,
  });
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  console.log(req.body)
  const {name,email,phone} =req.body
  if(!name || !email || !phone){
    res.status(404)
    throw new Error("All fields are mandetory")
  }
  res.status(200).json({
    message: "Create contacts",
  });
  
};

//@desc Update contact by id
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(201).json({
    message: `Update contact for ${req.params.id}`,
  });
};

//@desc Delete contact by id
//@route delete /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({
    message: `Delete contacts for ${req.params.id}`,
  });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
