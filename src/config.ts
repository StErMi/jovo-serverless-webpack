// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

const config = {
    logging: true,
    configStage: "default",

    intentMap: {
        'AMAZON.StopIntent': 'END',
    },

    db: {
        FileDb: {
            pathToFile: './../../db/db.json',
        },
    },
};

export = config;
