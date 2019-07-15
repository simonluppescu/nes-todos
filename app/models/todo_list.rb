class TodoList < ApplicationRecord
  has_many :todo_items

  def soft_delete
    update_attributes(deleted_at: Time.current)
  end
end
