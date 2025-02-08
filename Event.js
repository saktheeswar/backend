const EventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    attendees: [String],
});
const Event = mongoose.model('Event', EventSchema);
