const { Router } = require("express");
const raffleRouter = Router();

const { getAllRaffles, getRaffleById, getParticipantsByRaffleId } = require("../queries/rafflesQueries");
// const { route } = require('../app');


//get all raffles
raffleRouter.get("/", async (req, res) => {
  const raffles = await getAllRaffles();
  res.status(200).json({ data: raffles });
});

//get raffle by id
raffleRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const raffle = await getRaffleById(id);
  res.status(200).json({ data: raffle });
});

//get all participants for a raffle
raffleRouter.get("/:id/participants", async (req, res) => {
  const { id } = req.params;
  const participants = await getParticipantsByRaffleId(id);
  res.status(200).json({ data: participants });
}); 




module.exports = raffleRouter;
