class CreateBoatRentals < ActiveRecord::Migration[7.0]
  def change
    create_table :boat_rentals do |t|
      t.string :name
      t.string :hourly_price
      t.string :boat_type
      t.string :picture

      t.timestamps
    end
  end
end
