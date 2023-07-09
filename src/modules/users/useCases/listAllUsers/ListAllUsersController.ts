import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.headers
    const idToString = String(user_id)
    try{
      const all = this.listAllUsersUseCase.execute({user_id: idToString})
      return response.json(all)
    }catch(error){
      const message = error.message
      return response.status(400).json({error: message})
    }

  }
}

export { ListAllUsersController };
