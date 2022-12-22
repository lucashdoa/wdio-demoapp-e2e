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
}
