import { openDeepLinkUrl } from "../helpers/Utils";
import TabBar from "../screenobjects/components/TabBar";
import DragScreen from "../screenobjects/DragScreen";
import FormsScreen from "../screenobjects/FormsScreen";
import HomeScreen from "../screenobjects/HomeScreen";
import LoginScreen from "../screenobjects/LoginScreen";
import SwipeScreen from "../screenobjects/SwipeScreen";
import WebViewScreen from "../screenobjects/WebViewScreen";

describe("When using Deep links", async () => {
    beforeEach("navigate to deep links screen", async () => {
        await TabBar.waitForTabBarShown();
    });

    it("should be able to open the webview", async () => {
        await openDeepLinkUrl("webview"); 
        await WebViewScreen.waitForWebsiteLoaded();
    });

    it("should be able to open the login form screen", async () => {
        await openDeepLinkUrl("login");
        await LoginScreen.waitForIsShown();
    })

    it("should be able to open the forms screen", async () => {
        await openDeepLinkUrl("forms");
        await FormsScreen.waitForIsShown();
    })

    it("should be able to open the swipe screen", async () => {
        await openDeepLinkUrl("swipe");
        await SwipeScreen.waitForIsShown();
    })

    it("should be able to open the drag and drop screen", async () => {
        await openDeepLinkUrl("drag");
        await DragScreen.waitForIsShown();
    })

    it("should be able to open the home screen", async () => {
        await openDeepLinkUrl("home");
        await HomeScreen.waitForIsShown();
    })
});
