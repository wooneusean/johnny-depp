import "reflect-metadata";

type Constructor<T> = new (...args: any[]) => T;

export default class JohnnyDepp {
  private static serviceMap: Map<Constructor<any>, any> = new Map<
    Constructor<any>,
    any
  >();

  static register<T>(constructor: Constructor<T>, params?: Constructor<any>[]) {
    if (this.serviceMap.has(constructor)) {
      return this.serviceMap.get(constructor);
    }

    const instance = new constructor(...this.resolveDependentServices(params));

    this.serviceMap.set(constructor, instance);

    return instance;
  }

  private static resolveDependentServices(
    requiredServices?: Constructor<any>[],
  ) {
    if (requiredServices == null || requiredServices.length === 0) {
      return [];
    }

    const resolvedParams: unknown[] = requiredServices.map(
      (p: Constructor<unknown>) => {
        const params = Reflect.getMetadata("design:paramtypes", p);

        return this.register(p, params);
      },
    );

    return resolvedParams;
  }

  static get<T>(constructor: Constructor<T>): T {
    return this.serviceMap.get(constructor);
  }
}

export function Service<T>(target: Constructor<T>) {
  const params = Reflect.getMetadata("design:paramtypes", target);

  JohnnyDepp.register(target, params);
}
