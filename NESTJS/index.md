## How does NestJS implement Dependency Injection under the hood?

- NestJS uses dependency injection (DI) container to manage and resolve dependencies at runtime

## How does NestJS handle Circular Dependencies?

- NestJS handles Circular Dependencies through <<forward references>>. When two classes depends on each other, you can use forwardRef() function to break the circular dependency.
  `
@Injectable()
export class ServiceA{
  constructor(@Inject(forwardRef() => ServiceB) private serviceB: ServiceB){}
}`
