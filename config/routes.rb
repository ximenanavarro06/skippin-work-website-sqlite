Rails.application.routes.draw do
  resources :contact_pages
  resources :home_pages
  resources :about_pages
  resources :boat_rentals
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
