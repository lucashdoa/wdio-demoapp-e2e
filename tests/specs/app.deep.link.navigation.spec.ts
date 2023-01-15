import { openDeepLinkUrl } from "../helpers/Utils";
import TabBar from "../screenobjects/components/TabBar";
import WebViewScreen from "../screenobjects/WebViewScreen";

describe("When using Deep links", async () => {
    beforeEach("navigate to deep links screen", async () => {
        await TabBar.waitForTabBarShown();
    });

    it("should be able to open the webview", async () => {
        await openDeepLinkUrl("webview"); 
        await WebViewScreen.waitForWebsiteLoaded();
    });
});
