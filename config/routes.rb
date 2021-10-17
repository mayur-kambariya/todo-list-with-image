Rails.application.routes.draw do
  resources :projects do
    resources :tasks do
      member do
        get :mark_as_status
      end
    end
  end
  # namespace :project do
  #   resources :tasks do
  #     member do
  #       get :mark_as_status
  #     end
  #   end
  # end
  get 'welcome/index'
  devise_for :users
  root to: 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
