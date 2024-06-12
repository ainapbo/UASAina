const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const news = [
    { title: 'Berita 1', category: 'Politik', summary: 'Ringkasan Berita 1', keywords: ['politik', 'nasional'] },
    { title: 'Berita 2', category: 'Teknologi', summary: 'Ringkasan Berita 2', keywords: ['teknologi', 'startup'] },
    { title: 'Berita 3', category: 'Olahraga', summary: 'Ringkasan Berita 3', keywords: ['olahraga', 'sepakbola'] },
];

app.get('/news', (req, res) => {
    res.json(news);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
