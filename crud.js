app.post('/events', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    io.emit('eventCreated', event);
    res.status(201).json(event);
});

app.get('/events', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

server.listen(5000, () => console.log('Server running on port 5000'));