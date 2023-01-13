class UsersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: { error: 'Record not found'}
    end

end
