// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

const config = {
    logging: false,
    configStage: "prod",

    db: {
        FileDb: {
            pathToFile: './../../db/db.json',
        },
    },
};

export = config;
