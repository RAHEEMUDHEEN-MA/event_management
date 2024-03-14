const Event = require("../models/EventSchema");

const NewEvent = async (req, res) => {
  try {
    const { title, date, time, createdBy, place } = req.body;
    const NewEvent = await Event.create({
      title,
      date,
      time,
      createdBy,
      place,
    });

    res.status(200).json({ message: "event added successfully" });

  } catch (error) {
    res.status(500).send("Internal Server Error",error);
    console.log(`failed to add event ,error:${error}`);
  }
};
module.exports = NewEvent;
 