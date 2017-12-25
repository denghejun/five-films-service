import { ICommand, ExecuteResult } from './ICommand'

export abstract class CommandProxy<TRequest, TResponse> {
  constructor() {
    this.commands = this.registerCommands();
  }

  protected request: TRequest;
  protected readonly commands: ICommand<TRequest, TResponse>[] = [];
  protected abstract registerCommands(): ICommand<TRequest, TResponse>[];
  public async execute(request: TRequest): Promise<ExecuteResult<TResponse>> {
    let previousExecuteResult = { handled: false, response: null };
    for (let command of this.commands) {
      if (command.canExecute(request)) {
        const result = await command.execute(request, previousExecuteResult);
        previousExecuteResult = result;
        if (result.handled) {
          return result;
        }
      }
    }

    return previousExecuteResult;
  }
}
