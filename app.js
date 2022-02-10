// Get the GitHub username input form
const ekthatiger = document.getElementById('ekthatiger');

// Listen for submissions on GitHub username input form
ekthatiger.addEventListener('submit', (e) => {
    
    // Prevent default form submission action
    e.preventDefault();

    // Get the GitHub username input field on the DOM
    let simran = document.getElementById('simran');

    // Get the value of the GitHub username input field
    let romeo = simran.value;          

    // Run GitHub API function, passing in the GitHub username
    requestUserRepos(romeo);

})


function requestUserRepos(username){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // GitHub endpoint, dynamically passing in specified username
    
    const url = `https://api.github.com/search/repositories?q=${username}&sort=forks&type=Repositories&order=desc&page=1&per_page=5 `;
    //const url=`https://api.github.com/repos/${username}/googletest/forks?sort=oldest&page=1&per_page=5`;
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received
    // Process it here
    xhr.onload = function () {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        
        // Loop over each object in data array
        for (let i in data) {

            // Get the ul with id of of userRepos
            let ul = document.getElementById('userRepos');
    
            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');
            
            // Add Bootstrap list item class to each li
            li.classList.add('list-group-item')
        
            // Create the html markup for each li
            //<p><strong>Repo:</strong> ${data[i].owner.login}</p>
            //<p><strong>forks:</strong> ${data[i].created_at}</p>
            li.innerHTML = (`
                <p><strong>forks:</strong> ${data[i].forks}</p>
            `);
            
            // Append each li to the ul
            ul.appendChild(li);
        
        }

    }
    
    // Send the request to the server
    xhr.send();
    
}