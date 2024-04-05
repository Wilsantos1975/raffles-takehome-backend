const db = require("../db/index");

const getAllRaffles = async (req, res) => {
    try {
        const raffles = await db.any("SELECT * FROM raffles");
        return raffles
    } catch (error) {
        return error;
    }
}


module.exports = {getAllRaffles};