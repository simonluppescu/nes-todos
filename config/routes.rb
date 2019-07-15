Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :todo_lists, only: %i[index show create update destroy] do
        resources :todo_items, only: %i[create update destroy]
      end
    end
  end

  root 'home#index', defaults: { format: 'html' }

  match '*path', to: 'home#index', via: :all
end
