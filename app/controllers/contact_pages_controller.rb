class ContactPagesController < ApplicationController

    def index
        contact_pages = ContactPage.all
        render json: contact_pages
    end

end
