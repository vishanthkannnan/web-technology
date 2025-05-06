const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
    const { email, password } = req.query;
    
    if (email === "vishanth.23it@kongu.edu" && 
       (password === "23ITR173" || password.toLowerCase() === "23itr173")) {
        res.sendFile(path.join(__dirname, 'home.html'));
    } else {
        res.send(`
            <script>
                alert("Login Failed! Use:\\nEmail: vishanth.23it@kongu.edu\\nPassword: 23ITR173");
                window.location.href = "/";
            </script>
        `);
    }
});

app.listen(4040, () => console.log('Server running on http://localhost:4040'));