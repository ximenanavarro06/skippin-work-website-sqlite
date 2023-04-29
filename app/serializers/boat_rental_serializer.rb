class BoatRentalSerializer < ActiveModel::Serializer
  attributes :id, :name, :hourly_price, :boat_type, :picture
end
