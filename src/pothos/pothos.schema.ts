import { Injectable } from '@nestjs/common';
import { MetadataScanner } from '@nestjs/core';
import { PothosService } from './pothos.service';

export const POTHOS_META = 'pothos-meta';

@Injectable()
export class PothosSchema {
  constructor(
    private readonly pothosService: PothosService,
    private readonly metadataScanner: MetadataScanner,
  ) {}

  //   onModuleInit() {
  //     const instancePrototype = Object.getPrototypeOf(this);
  //     const metadata = this.metadataScanner
  //       .getAllMethodNames(instancePrototype)
  //       .map((method) => {
  //         const descriptor = Reflect.getOwnPropertyDescriptor(
  //           instancePrototype,
  //           method,
  //         );

  //         if (descriptor?.value) {
  //           const isPothosMethod = Reflect.getMetadata(
  //             POTHOS_META,
  //             descriptor.value,
  //           );

  //           if (isPothosMethod) {
  //             descriptor.value();
  //           }
  //         }
  //       });

  //     console.log('metadata: ', metadata);
  //   }
}

// public reflectKeyMetadata(
//     component: Type<Injectable>,
//     key: string,
//     methodKey: string,
//   ): { methodKey: string; metadata: any } | undefined {
//     let prototype = component.prototype;
//     do {
//       const descriptor = Reflect.getOwnPropertyDescriptor(prototype, methodKey);
//       if (!descriptor) {
//         continue;
//       }
//       const metadata = Reflect.getMetadata(key, descriptor.value);
//       if (!metadata) {
//         return;
//       }
//       return { methodKey, metadata };
//     } while (
//       (prototype = Reflect.getPrototypeOf(prototype)) &&
//       prototype !== Object.prototype &&
//       prototype
//     );
//     return undefined;
//   }
