class AboutPagesController < ApplicationController

    def index
        about_pages= AboutPage.all
        render json: about_pages
    end

end
