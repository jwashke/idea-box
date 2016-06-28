Rails.application.routes.draw do
  root to: "home#index"

  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:index, :create, :destroy]
      post "/thumbs", to: "thumbs#create"
      delete "/thumbs", to: "thumbs#destroy"
    end
  end
end
