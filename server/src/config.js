export const sess = {
  secret: "Volter123",
  cookie: {
    maxAge: 1000 * 60 * 60, //1 hora
  },
  resave: false,
  saveUninitialized: false,
  rolling: true,
};
export const jwtConfig = {
  SECRET: "jwtVolter123",
  params: {
    expiresIn: 60 * 60 * 24 * 365, //1 año
  },
};
