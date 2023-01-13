class SessionsController < ApplicationController

  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: 'Invalid Username or Password'}
    end

  end

  def destroy
      session.delete :user_id
      head :no_content
  end

  private



end
