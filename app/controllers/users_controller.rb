class UsersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
