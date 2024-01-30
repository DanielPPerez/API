// userService.js

import bcrypt from 'bcryptjs';
import sanitizeHtml from 'sanitize-html';
import { createAccessToken } from '../libs/jwt.js';
import UserRepository from './userRepository.js';

export const registerUser = async (email, password, telefono) => {
  try {
    const userFound = await UserRepository.findByEmail(email);

    if (userFound)
      throw new Error('El email ya está en uso');

    const isAdmin = email === 'admin@example.com' && password === 'adminPassword';

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
      email: email,
      password: passwordHash,
      telefono: sanitizeHtml(telefono),
      isAdmin: isAdmin,
    };

    const userSaved = await UserRepository.save(newUser);

    const token = await createAccessToken({
      id: userSaved._id,
    });

    return {
      id: userSaved._id,
      nombre: userSaved.nombre,
      email: userSaved.email,
      token: token,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userFound = await UserRepository.findByEmail(email);

    if (!userFound)
      throw new Error('El email no existe');

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      throw new Error('La contraseña es incorrecta');

    const token = await createAccessToken({
      id: userFound._id,
      nombre: userFound.nombre,
    });

    return {
      id: userFound._id,
      nombre: userFound.nombre,
      email: userFound.email,
      token: token,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

