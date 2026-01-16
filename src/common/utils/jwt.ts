import jwt, { Secret, SignOptions } from 'jsonwebtoken';

const SECRET: Secret = process.env.JWT_SECRET ?? 'changeme';
const DEFAULT_EXPIRES: SignOptions['expiresIn'] = '1h';

export const signToken = (
  payload: Record<string, any>,
  expiresIn: SignOptions['expiresIn'] = DEFAULT_EXPIRES,
): string => {
  return jwt.sign(payload, SECRET, { expiresIn });
};

export const verifyToken = (token: string): Record<string, any> => {
  return jwt.verify(token, SECRET) as Record<string, any>;
};
