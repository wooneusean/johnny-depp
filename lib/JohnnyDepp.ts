import "reflect-metadata";

type Constructor<T> = new (...args: any[]) => T;

export default class JohnnyDepp {
  private static serviceMap: Map<Constructor<any>, any> = new Map<
    Constructor<any>,
    any
  >();

  static register<T>(constructor: Constructor<T>) {
    if (this.serviceMap.has(constructor)) {
      return this.serviceMap.get(constructor);
    }

    const params = Reflect.getMetadata("design:paramtypes", constructor);

    const instance = new constructor(...this.resolveDependentServices(params));

    return this.serviceMap.set(constructor, instance).get(constructor);
  }

  private static resolveDependentServices(
    requiredServices?: Constructor<any>[],
  ) {
    if (requiredServices == null || requiredServices.length === 0) {
      return [];
    }

    const resolvedParams: unknown[] = requiredServices.map(
      (p: Constructor<unknown>) => {
        return this.register(p);
      },
    );

    return resolvedParams;
  }

  static get<T>(constructor: Constructor<T>): T {
    return this.serviceMap.get(constructor);
  }
}

export function Service<T>(target: Constructor<T>) {
  JohnnyDepp.register(target);
}
