import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params

    try{
      const userProfile = this.showUserProfileUseCase.execute({user_id})
      return response.json(userProfile)
    }catch(error){
      const message = error.message
      return response.status(404).json({error: message})
    }
  }
}

export { ShowUserProfileController };
