Rails.application.routes.draw do
  root to: "home#index"

  namespace :api do
    namespace :v1 do
<<<<<<< HEAD
      resources :ideas, only: [:index, :create, :destroy]
      post "/thumbs", to: "thumbs#create"
      delete "/thumbs", to: "thumbs#destroy"
=======
      resources :ideas, only: [:index, :create]
>>>>>>> master
    end
  end
end
