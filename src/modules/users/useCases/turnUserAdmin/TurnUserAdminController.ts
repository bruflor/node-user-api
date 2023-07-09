import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params

    try{
      // const userAsAdmin = this.turnUserAdminUseCase.execute(user_id)
      const userAsAdmin = this.turnUserAdminUseCase.execute({user_id})
      return response.json(userAsAdmin)
    }catch(error){
      const message = error.message
      return response.status(404).json({error: message})
    }
  }
}

export { TurnUserAdminController };
