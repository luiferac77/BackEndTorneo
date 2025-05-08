import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.status(401).json({ mensaje: 'Token no proporcionado' });

  const token = authHeader.split(' ')[1]; // "Bearer TOKEN"

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ mensaje: 'Token inválido o expirado' });

    req.usuario = decoded; // { id, nombre, email, rol }
    next();
  });
};
