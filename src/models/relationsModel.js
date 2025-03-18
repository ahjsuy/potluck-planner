import Event from "./eventsModel.js";
import EventGuest from "./eventGuestsModel.js";
import Allergies from "./allergiesModel.js";
import Dish from "./dishesModel.js";

EventGuest.belongsTo(Event, { foreignKey: "eventid" });
Event.hasMany(EventGuest, { foreignKey: "eventid" });

Allergies.belongsTo(Event, { foreignKey: "eventid" });
Event.hasMany(Allergies, { foreignKey: "eventid" });

Dish.belongsTo(Event, { foreignKey: "eventid" });
Event.hasMany(Dish, { foreignKey: "eventid" });

export { Event, EventGuest, Dish, Allergies };
