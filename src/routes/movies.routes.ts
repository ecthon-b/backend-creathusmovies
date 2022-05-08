import { Request, Response, Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'

export const routes = Router();
const prisma = new PrismaClient();

routes.get("/movies", async (request: Request, response: Response) => {
    const movies = await prisma.movies.findMany();

    return response.send({ movies })
})

routes.post("/movies", async (request: Request, response: Response) => {
    const { ator, title, description, banner } = request.body;

    const movie = {
        ator,
        title,
        description,
        banner
    }

    try {
        const createMovie = await prisma.movies.create({ data: movie });

    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002') {
                return response.status(400).send({ msg: "Esse título já está cadastrado" });
            }
        }
    }


    return response.status(201).send();

})

routes.get("/movies/:id", async (request: Request, response: Response) => {
    const { id } = request.params;

    const movie = await prisma.movies.findUnique({
        where: {
            id: +id
        }
    });

    return response.send(movie);
})