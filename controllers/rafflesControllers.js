const { Router } = require('express');
const raffleRouter = Router();

const { 
    getAllRaffles} 
    = require('../queries/rafflesQueries');
// const { route } = require('../app');


    raffleRouter.get('/', async (req, res) => {
        const raffles = await getAllRaffles();
        res.status(200).json({data: raffles});
    }
    );

    module.exports = raffleRouter;
