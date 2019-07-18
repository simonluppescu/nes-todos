class Api::V1::TodoItemsController < Api::V1::BaseController
  def create
    todo_list = TodoList.find(params[:todo_list_id])
    todo_item = todo_list.todo_items.create(value: 'New task')

    respond_with :api, :v1, todo_list, todo_item
  end
end
