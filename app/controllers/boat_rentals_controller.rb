class BoatRentalsController < ApplicationController

    def index
        boat_rentals= BoatRental.all
        render json: boat_rentals
    end

end
