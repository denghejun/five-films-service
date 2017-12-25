export interface ExecuteResult<TResponse> {
  handled: boolean;
  response: TResponse;
  context?: any;
}

export interface ICommand<TRequest, TResponse> {
  canExecute(request: TRequest): boolean;
  execute(request: TRequest, previousExecuteResult?: ExecuteResult<TResponse>): Promise<ExecuteResult<TResponse>>;
}
