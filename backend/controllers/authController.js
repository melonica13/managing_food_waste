const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = await User.create(name, email, hashedPassword);
      res.status(201).json({ message: 'User created successfully', userId });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  };
  

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, userId: user.id, name: user.name });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

exports.getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching profile', error: error.message });
    }
};
  
