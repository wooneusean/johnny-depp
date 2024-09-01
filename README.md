# johnny-depp

dependencies -> deps -> Johnny Depp

get it?

## Features

Dependency Injection

```typescript
@Service
class ServiceOne {
    public log(msg: string) {
        console.log(msg);
    }
}

@Service
class ServiceTwo {
    constructor(private serviceOne: ServiceOne) { }

    public hello() {
        this.serviceOne.log("hello");
    }
}
```

## Important Notes

Since I am using vite, which uses ESBuild by default, `experimentalDecorators` and `emitDecoratorMetadata` is not working by default.

To use this, I had to use `rollup-swc-plugin3` and disable `esbuild` in `vite.config.ts` for it to work.
