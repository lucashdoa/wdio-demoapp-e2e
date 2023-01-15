// Create a cross-platform solution to open deep links

export async function openDeepLinkUrl(url: string) {
    const prefix = "wdio://";

    if (driver.isAndroid) {
        // easier scenario
        await driver.execute("mobile:deepLink", {
            url: `${prefix}${url}`,
            package: "com.wdiodemoapp",
        });
    }
    const simulatorRegex = new RegExp('(.*-.*){2,}');

    // Check if we are a simulator
    if ('udid' in driver.capabilities && simulatorRegex.test( driver.capabilities.udid as string )){
        await driver.url(`${ prefix }${ url }`);
    } 
}
