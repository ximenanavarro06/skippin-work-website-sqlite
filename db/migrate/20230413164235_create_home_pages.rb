class CreateHomePages < ActiveRecord::Migration[7.0]
  def change
    create_table :home_pages do |t|
      t.string :address
      t.string :hours
      t.string :holiday_hours

      t.timestamps
    end
  end
end
