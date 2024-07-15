const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// Dummy data for bar chart
const chartData = {
    xValues: ["Hemp Seed", "Hemp Protein", "Hemp Plastics", "Hemp Fiber", "Hemp Protein", "Hemp Oil"],
    yValues: [55, 49, 44, 24, 15, 23, 18]
};

// Define a route to get chart data
app.get('/api/data', (req, res) => {
    res.json(chartData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
