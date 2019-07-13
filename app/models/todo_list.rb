class TodoList < ApplicationRecord
  def soft_delete
    update_attributes(deleted_at: Time.current)
  end
end
