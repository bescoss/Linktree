    function showForm(linkId) {
        var link = document.getElementById(linkId);
        var url = link.getAttribute("href");

        // Create a modal or form element using JavaScript
        var form = document.createElement("form");
        var input = document.createElement("input");
        var submit = document.createElement("button");

        // Set the attributes and content of the form elements
        form.setAttribute("onsubmit", "updateLink(event, '"+linkId+"')");
        input.setAttribute("type", "text");
        input.setAttribute("value", url);
        submit.textContent = "Update Link";

        // Append the form elements to the modal or form
        form.appendChild(input);
        form.appendChild(submit);

        // Display the modal or form on the page
        // (you will need to create HTML and CSS for this)
    }

    // Add click event listeners to each social link

    document.getElementById("instagram-link").onclick = function() { showForm("instagram-link"); };
  
    // Add event listeners to the other links as well

    // Function to update the link
    function updateLink(event, linkId) {
            event.preventDefault(); // Prevent the form from submitting
    
            var link = document.getElementById(linkId);
            var input = event.target.querySelector("input");
            var url = input.value;
    
            link.setAttribute("href", url); // Update the href attribute of the <a> tag
    
            // Hide the modal or form
            // (you will need to implement this with HTML and CSS)
    }
