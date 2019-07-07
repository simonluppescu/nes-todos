Rails.application.routes.draw do
  root 'home#index', defaults: { format: 'html' }

  match '*path', to: 'home#index', via: :all
end
