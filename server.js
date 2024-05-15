global.O = 'some-id';  // Order ID
global.T = 0;      // Total
global.P = [];  // Parts

// Server code
const express = require('express');
const app = express();
app.use(express.json());

const componentData = new Map([
    ['A', [10.28, 'LED Screen']],
    ['B', [24.07, 'OLED Screen']],
    ['C', [33.30, 'AMOLED Screen']],
    ['D', [25.94, 'Wide-Angle Camera']],
    ['E', [32.39, 'Ultra-Wide-Angle Camera']],
    ['F', [18.77, 'USB-C Port']],
    ['G', [15.13, 'Micro-USB Port']],
    ['H', [20.00, 'Lightning Port']],
    ['I', [42.31, 'Android OS']],
    ['J', [45.00, 'iOS OS']],
    ['K', [45.00, 'Metallic Body']],
    ['L', [30.00, 'Plastic Body']]
]);

function calculateTotal(components) {
    let total = 0.0;
    let validOrder = true;
    const parts = [];

    for (const component of components) {
        if (componentData.has(component)) {
            total += componentData.get(component)[0];
            parts.push(componentData.get(component)[1]);
        } else {
            validOrder = false;
            break;
        }
    }
    P=parts;
    T=total;

    return { validOrder, total, parts };
}

app.post('/', (req, res) => {
    try {
        const components = req.body.components;
        console.log('Received components from client:', components);

        if (!Array.isArray(components)) {
            throw new Error('Components should be an array');
        }


        const { validOrder, total, parts } = calculateTotal(components);
        if (validOrder) {
            console.log('Sending response to client:', { order_id: O, total: T, parts: P });

           
        } else {
            res.status(400).json({ error: 'Invalid order components' });
        }
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(400).json({ error: error.message });
    }
    
});

// Route handler for the root path "/"
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Vedanshi's Server</title>
        </head>
        <body>
            <h1>Welcome to Vedanshi's Server</h1>
            <button onclick="window.location.href='/orders'">Order Details</button>
        </body>
        </html>
    `);
});

app.get('/orders', (req, res) => {
    
    res.send(`
                <h1>Order Details</h1>
                <p>Order ID: ${O}</p>
                <p>Total: ${T}</p>
                <p>Parts: ${P.join(', ')}</p>
            `);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
