Rails.application.routes.draw do
  root 'home#index', defaults: { format: 'html' }

  namespace :api do
    namespace :v1 do
      resources :todo_lists
    end
  end

  match '*path', to: 'home#index', via: :all
end
