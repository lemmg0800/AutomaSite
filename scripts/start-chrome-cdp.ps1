$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$profile = "$env:LOCALAPPDATA\Antigravity-CDP-Profile"

Start-Process $chrome -ArgumentList `
    "--remote-debugging-address=127.0.0.1", `
    "--remote-debugging-port=9222", `
    "--user-data-dir=$profile", `
    "--no-first-run", `
    "--no-default-browser-check", `
    "about:blank"

Start-Sleep -Seconds 3

Invoke-RestMethod "http://127.0.0.1:9222/json/version" -TimeoutSec 5
