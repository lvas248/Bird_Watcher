class UsersController < ApplicationController

    #new user 
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #page refresh/ keep user signed in
    def show
        user = User.find(session[:user_id])
        render json: user, status: :created
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
