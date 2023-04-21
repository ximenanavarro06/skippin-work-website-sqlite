class BoatRentalSerializer < ActiveModel::Serializer
  attributes :id, :name, :hourly_price, :baot_type, :picture
end
