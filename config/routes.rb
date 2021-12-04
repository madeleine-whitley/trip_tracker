Rails.application.routes.draw do
  root 'users#index'

  resources :users do
    resources :trips
  end  

  resources :trips do
    resources :location
  end  

end
