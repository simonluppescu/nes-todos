class Api::V1::TodoItemsController < Api::V1::BaseController
  def create
    todo_list = TodoList.find(params[:todo_list_id])
    todo_item = todo_list.todo_items.create(value: 'New task')

    respond_with :api, :v1, todo_list, todo_item
  end

  def update
    todo_list = TodoList.find(params[:todo_list_id])
    todo_item = todo_list.todo_items.find(params[:id])
    todo_item.update_attributes(todo_item_params)
    respond_with todo_item, json: todo_item
  end

  def destroy
    todo_list = TodoList.find(params[:todo_list_id])
    todo_item = todo_list.todo_items.find(params[:id])
    respond_with todo_item.destroy
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:is_checked, :value)
  end
end
