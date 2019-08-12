class TodoList < ApplicationRecord
  has_many :todo_items

  scope :active, -> { where(deleted_at: nil) }

  def soft_delete
    update_attributes(deleted_at: Time.current)
  end
end
