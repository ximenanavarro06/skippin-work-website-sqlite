# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "💥 Destroying data..."
BoatRental.destroy_all
AboutPage.destroy_all
HomePage.destroy_all
ContactPage.destroy_all

puts "🛥️ Seeding boats..."
BoatRental.create!(
    name: "Pretty Boat",
    hourly_price: "$100",
    boat_type: "boat",
    picture: "https://cdn.britannica.com/27/145027-050-8117BE8D/Motorboat.jpg"
)

puts "✍🏻 Seeding about..."
AboutPage.create!(
    about: "I like boats I want to rent my boats.  I like money.",
    who_we_are: "People duh",
    purpose: "To make some money"
)

puts "🏠 Seeding home..."
HomePage.create!(
    address: "1234 Boat Avenue",
    hours: "Monday: 4-8",
    holiday_hours: "Closed"
)

puts "📲 Seeding contact..."
ContactPage.create!(
    email: "1234@gmail.com",
    phone_number: "123-456-7890"
)