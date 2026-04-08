import pino from "pino"

const logger = pino({
    browser: {
        serialize: true, // Serializes errors, etc.
        asObject: true,
        transmit: {
            send: (level, logEvent) => {
                // Send logs to a remote server
                fetch("/api/logs", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(logEvent),
                });
            },
        },
    },
});

logger.info("Frontend application initialized");
logger.error({ err: new Error("Test error") }, "Something went wrong");