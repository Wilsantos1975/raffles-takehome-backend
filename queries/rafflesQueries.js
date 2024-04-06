const { get } = require("../app");
const db = require("../db/index");

const getAllRaffles = async (req, res) => {
  try {
    const raffles = await db.any("SELECT * FROM raffles");
    return raffles;
  } catch (error) {
    return error;
  }
};

const getRaffleById = async (id) => {
    try {
        const raffle = await db.one("SELECT * FROM raffles WHERE id = $1", id);
        return raffle;
    } catch (error) {
        return error;
    }
    };

   const  getParticipantsByRaffleId = async (id) => {
        try {
            const participants = await db.any("SELECT * FROM participants WHERE raffle_id = $1", id);
            return participants;
        } catch (error) {
            return error;
        }
    }

    const createRaffle = async (name, secret_token) => {
        try {
            const newRaffle = await db.one("INSERT INTO raffles (name, secret_token) VALUES ($1, $2) RETURNING *", [name, secret_token]);
            return newRaffle;
        } catch (error) {
            return error;
        }
    }

module.exports = { getAllRaffles, getRaffleById, getParticipantsByRaffleId, createRaffle };
