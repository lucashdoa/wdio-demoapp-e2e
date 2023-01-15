import { join } from "path";
import config from "./wdio.shared.local.appium.conf";

config.specs = ["./tests/specs/**/app*.spec.ts"];
config.capabilities = [
    {
        platformName: "iOS",
        maxInstances: 1,
        "appium:deviceName": "iPhone 12",
        "appium:platformVersion": "15.5",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "XCUITest",
        "appium:app": join(process.cwd(), "./apps/ios-demoapp.app.zip"),
        "appium:newCommandTimeout": 240,
        "appium:autoAcceptAlerts": true
    },
];

exports.config = config;
