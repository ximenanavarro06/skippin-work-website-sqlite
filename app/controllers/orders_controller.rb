class OrdersController < ApplicationController

    def new
        @order = Order.new
    end

    def create
        @order = Order.new(order_params)

        if @order.save
            OrderMailer.with(order: @order).new_order_email.deliver_later

            flash[:success] = "Thank you for your email! We will be in contact soon!"
            redirect_to root_path
        else
            flash.now[:error] ="Your email had some errors sending.  Please try again later."
            render :new
        end
    end

    private

    def order_params
        params.require(:order).permit(:name, :email, :phone_number, :reason)
    end
end
