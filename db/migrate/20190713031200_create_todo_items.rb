class CreateTodoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_items do |t|
      t.boolean :is_checked, null: false, default: false
      t.string :value
      t.references :todo_list, foreign_key: true

      t.timestamps
    end
  end
end
