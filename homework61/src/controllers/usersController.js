export const getUsers = (req, res) => {
  res.send("Get users route");
};

export const postUsers = (req, res) => {
  res.send("Post users route");
};

export const getUserById = (req, res) => {
  res.send(`Get user by Id route: ${req.params.userId}`);
};

export const putUserById = (req, res) => {
  res.send(`Put user by Id route: ${req.params.userId}`);
};

export const deleteUserById = (req, res) => {
  res.send(`Delete user by Id route: ${req.params.userId}`);
};