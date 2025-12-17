from playwright.sync_api import sync_playwright

def verify_layout():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000")

        # Wait for the page to load
        page.wait_for_selector("text=EcoFindr")

        # Take a screenshot of the entire page
        page.screenshot(path="verification/layout_verification.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_layout()
