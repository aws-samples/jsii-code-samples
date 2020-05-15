// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

export class HelloWorld {
    public sayHello(name: string) {
        return `Hello, ${name}`;
    }

    public fibonacci(num: number) {
        let array = [0, 1];
        for (let i = 2; i < num + 1; i++) {
            array.push(array[i - 2] + array[i - 1]);
        }
        return array[num];
    }
}