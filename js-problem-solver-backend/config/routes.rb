Rails.application.routes.draw do
  # todo: clean up routes
  resources :solutions
  resources :problems
  resources :users

  # get 'login' => 'sessions#new'
  # get 'signup' => 'users#new'
  # 'get' actions will be rendered in JS since there is no view in this rails application.

  post 'login' => 'sessions#create'
  post 'signup' => 'users#create'
  delete 'logout' => 'sessions#destroy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
