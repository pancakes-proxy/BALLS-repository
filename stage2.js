   window.onload = function() {
            var password = prompt("Please enter the auth code to continue");
            if (password === "PMSproxys") {
                alert("Passed");
                window.location.href = "stage3.html";
            } else {
                alert("flagged by Torch");
              window.location.href = "index.html
            }
        }
