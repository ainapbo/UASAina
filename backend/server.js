app.get('/', (req, res) => {
    db.query('SELECT * FROM berita', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});