import "dotenv/config";

const { BACKEND_URL } = process.env;

export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RestApi",
      version: "1.0.0",
      description: "api bibliovirtual para Mims tech corp",
    },
    servers: [
      {
        url: BACKEND_URL,
      },
    ],
  },
  apis: ["./src/routes/**/*.ts"],
};
