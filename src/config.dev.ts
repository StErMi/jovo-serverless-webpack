// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

const config = {
    logging: true,
    configStage: "dev",

    db: {
        FileDb: {
            pathToFile: './../../db/db.json',
        },
    },
};

export = config;
