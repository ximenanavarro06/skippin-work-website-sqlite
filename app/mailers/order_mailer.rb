class OrderMailer < ApplicationMailer

    def new_order_email
        @order = params[:order]

        mail(to: <xnavarro999@gmail.com>, subject: "You got an email!")
    end
end
