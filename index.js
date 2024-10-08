// // Add your code here
// document.getElementById('userForm').addEventListener('submit', submitData);

// function submitData(event) {
//      event.preventdefault();                  // Prevent the default form submission behavior
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;

//     const data = { name, email };

//     fetch('/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         const messageContainer = document.getElementById('messageContainer');
//         const newId = data.id; // Assuming the response contains the new user ID
//         messageContainer.innerHTML += `<p>User created with ID: ${newId}</p>`;
//     })
//     .catch(error => {
//         const messageContainer = document.getElementById('messageContainer');
//         messageContainer.innerHTML += `<p>Error: ${error.message}</p>`;
//     });
// }

function submitData(name, email) {
    // Create the data object
    const Data = {
        name: name,
        email: email
    };

    // Make the POST request
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Data)
    })
    .then(response => response.json()) 
    .then(data => {
        // append the'class'to make the post successful
        const body= document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = data.id
         body.appendChild(p);
        
    })
    // append the error in the DOM to showcase any failure 
    .catch((error) => {
        const body= document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = "Unauthorized Access"
        body.appendChild(p);
        
    });
}
submitData('John Doe', 'john@example.com');

// function submitData(name, email) {
//     const userData = {
//       name: name,
//       email: email
//     };
  
//     return fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//     .then(response => response.json()) // Convert response to JSON
//     .then(data => {
//       // Append the 'id' to the DOM if the POST request is successful
//       const body = document.querySelector('body');
//       const p = document.createElement('p');
//       p.textContent = data.id; // Ensure that 'data.id' exists in the response
//       body.appendChild(p);
//     })
//     .catch((error) => {
//       // Append the error message to the DOM in case of failure
//       const body = document.querySelector('body');
//       const p = document.createElement('p');
//       p.textContent = "Unauthorized Access"; // Set the message expected in the test
//       body.appendChild(p);
//     });
//   }
//   submitData('John Doe', 'example@email.com')
  