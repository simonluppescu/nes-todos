class AddColumnDeletedAtToTodoLists < ActiveRecord::Migration[5.2]
  def up
    add_column :todo_lists, :deleted_at, :datetime
  end

  def down
    remove_column :todo_lists, :deleted_at
  end
end
