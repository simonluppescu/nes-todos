class Api::V1::TodoListsController < Api::V1::BaseController
  def index
    respond_with TodoList.active.to_json(include: :todo_items)
  end

  def show
    respond_with TodoList.find(params[:id])
  end

  def create
    respond_with :api, :v1, TodoList.create(title: 'New Todo List')
  end

  def update
    todo_list = TodoList.find(params[:id])
    todo_list.update_attributes(todo_list_params)
    respond_with todo_list, json: todo_list
  end

  def destroy
    todo_list = TodoList.find(params[:id])
    todo_list.soft_delete
    respond_with todo_list
  end

  private

  def todo_list_params
    params.require(:todo_list).permit(:title)
  end
end
