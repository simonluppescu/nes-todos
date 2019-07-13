Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :todo_lists
    end
  end

  root 'home#index', defaults: { format: 'html' }

  match '*path', to: 'home#index', via: :all
end
