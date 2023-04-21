class HomePagesController < ApplicationController

    def index
        home_pages = HomePage.all
        render json: home_pages
    end

    def show
        home_page = set_home_page
        render json: home_page
    end

    private

    def set_home_page
        home_page.find(params[:id])
    end
end
