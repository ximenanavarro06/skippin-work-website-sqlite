class CreateAboutPages < ActiveRecord::Migration[7.0]
  def change
    create_table :about_pages do |t|
      t.string :about
      t.string :who_we_are
      t.string :purpose

      t.timestamps
    end
  end
end
