  window.onload = stage1() {
            if (confirm("Stage 1/4 Security check")) {
                // Cloudflare bot check
                $.getScript("https://cdn.jsdelivr.net/npm/cf-bot-check@latest/cf-bot-check.min.js", function() {
                    if (cf.bot_management.js_detection.passed) {
                        window.location.href = "stage2.html";
                    } else {
                        alert("Bot check failed. Please try again.");
                    }
                });
            }
        }
