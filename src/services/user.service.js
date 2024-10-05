import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const sign = async (body) => {

  const exist = await User.findOne({ email: body.email });

  if (exist) {
    throw new Error("User Already Exist");
  } else {
    // using bycrypt
    const saltRound = 10;
    const hash_password = await bcrypt.hash(body.password, saltRound);
    body.password = hash_password;
    const data = await User.create(body);
    return data;
  }

};


export const login = async (body) => {
  const data = await User.findOne({ email: body.email });

  if (data == null) {
    throw new Error("Invalid Emial");
  } else {
    const isPasswordValid = await bcrypt.compare(body.password, data.password);
    if (isPasswordValid) {
      const token = jwt.sign({ Username: data.name, email: data.email, userId: data._id }, process.env.hidden_key);
      return token;
    } else {
      throw new Error("Invalid Password");
    }
  }
}




//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
