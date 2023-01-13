class SessionsController < ApplicationController

    #Login user
    def create
      user = User.find_by_username(params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: 'Invalid Username or Password'}, status: :unprocessable_entity
      end
    end

    #Logout user
    def destroy
        session.delete :user_id
        head :no_content
    end

end
