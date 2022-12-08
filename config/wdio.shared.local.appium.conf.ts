import { config } from "./wdio.shared.conf";

config.services = (config.services ? config.services : []).concat([
    [
        "appium",
        {
            command: "appium",
            args: {
                relaxedSecurity: true,
                address: "localhost",
                log: "./appium.log",
            },
        },
    ],
]);
config.port = 4723;

export default config;
