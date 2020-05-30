import {App} from 'jovo-framework';
import {Alexa} from 'jovo-platform-alexa';
import {GoogleAssistant} from 'jovo-platform-googleassistant';

import config from './config';
import devConfig from './config.dev';
import prodConfig from './config.prod';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

let appConfig = null;
if( process.env.stage === "dev" ) {
    appConfig = devConfig;
} else if ( process.env.stage === "prod" ) {
    appConfig = prodConfig;
} else {
    appConfig = config;
}

const app = new App(appConfig);

app.use(
    new Alexa(),
    new GoogleAssistant()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('HelloWorldIntent');
    },

    HelloWorldIntent() {
        this.ask('Hello World! What\'s your name? ' + this.$config.configStage, 'Please tell me your name.');
    },

    MyNameIsIntent() {
        this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
    },
});

export {app};
