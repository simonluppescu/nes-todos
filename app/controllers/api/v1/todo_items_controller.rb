class Api::V1::TodoItemsController < Api::V1::BaseController
  def create
    todo_list = TodoList.find(params[:todo_list_id])
    todo_item = todo_list.todo_items.create(todo_item_params)

    respond_with :api, :v1, todo_list, todo_item
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:value, :is_checked)
  end
end
