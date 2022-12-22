export default class TabBar {
    /* static async openLogin() {
        await $("~Login").click();
    } */

    static async waitForTabBarShown(): Promise<void> {
        await $("~Home").waitForDisplayed();
    }
}
