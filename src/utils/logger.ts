import pino from "pino";

const createLogger = (loggerName: string) => {
  return pino({
    name: loggerName,
    transport: {
      target: "pino-pretty",
    },
  });
};

export default createLogger;
