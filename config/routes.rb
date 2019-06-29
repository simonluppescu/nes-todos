Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'todos', to: 'todos#index'
  end

  root 'home#index', defaults: { format: 'html' }

  match '*path', to: 'home#index', via: :all
end
